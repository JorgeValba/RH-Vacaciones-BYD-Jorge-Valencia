// Elaborado por: Jorge Valencia. No contiene credenciales ni llama directamente a n8n.
'use strict';
const $=id=>document.getElementById(id);
let snapshot=null,config=null;
const date=t=>new Intl.DateTimeFormat('es-MX',{dateStyle:'medium',timeStyle:'short',timeZone:'America/Mexico_City'}).format(new Date(t));
function set(id,text){$(id).textContent=text;}
async function get(url){const response=await fetch(url,{cache:'no-store'});if(!response.ok)throw Error('Recurso no disponible');return response.json();}
function draw(){
 if(!snapshot)return;
 const all=snapshot.casos,rows=RHMetrics.filter(all,{estado:$('estado').value,equipo:$('equipo').value,folio:$('folio').value});
 const k=RHMetrics.calculate(rows),published=snapshot.exportado_en!==null;
 set('kpi-total',published?k.total:'—');set('kpi-pendientes',published?k.pendientes:'—');set('kpi-dias',published?k.dias_aprobados:'—');
 set('row-count',`${rows.length} de ${all.length} registros`);$('empty-filter').hidden=!(all.length&&!rows.length);
 const counts=RHMetrics.states.map(label=>({label,n:rows.filter(r=>r.estado===label).length})).filter(x=>x.n).sort((a,b)=>b.n-a.n);
 const chart=$('chart');chart.replaceChildren();const max=Math.max(1,...counts.map(c=>c.n));
 for(const c of counts){const row=document.createElement('div');row.className='bar-row';const label=document.createElement('span');label.textContent=c.label;const track=document.createElement('div');track.className='bar-track';const fill=document.createElement('span');fill.style.width=`${c.n/max*100}%`;track.append(fill);const value=document.createElement('strong');value.textContent=c.n;row.append(label,track,value);chart.append(row);}
 if(!counts.length){const p=document.createElement('p');p.textContent=published?'No hay casos en esta selección.':'El historial aparecerá después de la primera exportación.';chart.append(p);}
 const summary=counts.map(c=>`${c.label}: ${c.n}`).join('; ');chart.setAttribute('aria-label',summary||'Sin datos');set('chart-summary',summary||'Sin registros para representar.');
 const tbody=$('cases');tbody.replaceChildren();
 rows.slice().sort((a,b)=>Date.parse(b.actualizado_en)-Date.parse(a.actualizado_en)).forEach(r=>{const tr=document.createElement('tr');const cells=[r.caso_id,r.equipo_id||'Sin equipo',r.estado,r.dias_solicitados===null?'—':r.dias_solicitados,date(r.actualizado_en)];cells.forEach((text,i)=>{const td=document.createElement('td');td.textContent=text;td.dataset.label=['Folio','Equipo','Estado','Días','Actualización'][i];if(i===0)td.className='folio-cell';if(i===3)td.className='numeric';if(i===2)td.className='state-cell';tr.append(td);});tbody.append(tr);});
 set('action-title',!published?'Publicar el primer resumen':k.pendientes?'Revisar las solicitudes pendientes':'Revisar el historial');
 set('action-text',!published?'El panel mostrará los datos cuando se exporten desde n8n. No se rellenan indicadores con resultados inventados.':k.pendientes?`Hay ${k.pendientes} solicitud(es) pendiente(s) en esta selección. Consulta su versión y vigencia en Telegram antes de decidir.`:'No hay solicitudes pendientes en esta selección. Consulta el registro actualizado antes de cualquier decisión.');
}
async function load(){
 set('data-notice','Cargando el resumen…');$('retry').hidden=true;
 try{
  snapshot=RHMetrics.validate(await get('data/panel.json'));
  set('source',`Fuente: ${snapshot.fuente}. ${snapshot.exportado_en?'Exportado: '+date(snapshot.exportado_en)+' (hora de Ciudad de México).':'Aún no hay una exportación de los registros.'}`);
  const dates=snapshot.casos.map(r=>Date.parse(r.creado_en));set('period',dates.length?`Periodo de creación: ${date(Math.min(...dates))} a ${date(Math.max(...dates))}.`:'Periodo: pendiente de primera exportación.');
  const stale=snapshot.exportado_en&&Date.now()-Date.parse(snapshot.exportado_en)>(config?.stale_hours||24)*3600000;
  set('data-notice',!snapshot.exportado_en?'Sin datos publicados. Falta exportar el resumen sanitizado desde n8n.':stale?'Datos desactualizados: han pasado más de 24 horas desde la exportación. Consulta el estado vigente por voz conectada o Telegram.':snapshot.casos.length?'Resumen cargado. La fecha de exportación indica hasta cuándo están actualizados los datos.':'Exportación válida sin solicitudes.');
  $('data-notice').classList.toggle('warning',!!stale);
  const selected=$('estado').value;$('estado').replaceChildren(new Option('Todos los estados',''));for(const st of RHMetrics.states)if(snapshot.casos.some(r=>r.estado===st))$('estado').append(new Option(st,st));$('estado').value=selected;draw();
 }catch(e){snapshot=null;set('data-notice','No se pudo cargar un resumen válido. Intenta de nuevo o consulta Telegram.');$('retry').hidden=false;for(const id of ['kpi-total','kpi-pendientes','kpi-dias'])set(id,'—');$('cases').replaceChildren();$('chart').replaceChildren();}
}
$('filters').addEventListener('submit',e=>e.preventDefault());$('filters').addEventListener('input',draw);$('filters').addEventListener('reset',()=>setTimeout(draw,0));$('retry').addEventListener('click',load);
$('consent').addEventListener('change',()=>{$('start-voice').disabled=!$('consent').checked||!config;});
$('start-voice').addEventListener('click',async()=>{
 if(!$('consent').checked||!config)return;
 const button=$('start-voice');button.disabled=true;set('voice-status','Comprobando el micrófono y cargando el asistente…');
 let denied=false;
 try{const stream=await navigator.mediaDevices.getUserMedia({audio:true});stream.getTracks().forEach(t=>t.stop());}catch(e){denied=true;set('voice-status','No se pudo activar el micrófono. Puedes intentar el modo de texto del widget o usar Telegram.');}
 try{
  let script=document.querySelector('script[data-voice]');
  if(!script){script=document.createElement('script');script.dataset.voice='true';script.src='https://unpkg.com/@elevenlabs/convai-widget-embed';script.async=true;document.body.append(script);}
  await Promise.race([customElements.whenDefined('elevenlabs-convai'),new Promise((_,reject)=>setTimeout(()=>reject(Error('Tiempo agotado')),20000))]);
  if(!$('voice-mount').children.length){const widget=document.createElement('elevenlabs-convai');widget.setAttribute('agent-id',config.agent_id);widget.setAttribute('dynamic-variables',JSON.stringify({company_name:'BYD México — escenario ficticio'}));widget.setAttribute('action-text','Hablar con F.R.I.D.A.Y');widget.setAttribute('start-call-text','Iniciar conversación');widget.setAttribute('end-call-text','Finalizar');widget.setAttribute('language','es');$('voice-mount').append(widget);}
  if(!denied)set('voice-status','Asistente habilitado. Pulsa su botón de conversación para comenzar.');button.textContent='Asistente habilitado';
 }catch(e){set('voice-status','No fue posible cargar ElevenLabs. Intenta de nuevo o utiliza Telegram.');button.disabled=false;button.textContent='Reintentar asistente';}
});
(async()=>{try{config=await get('config.json');if(!/^agent_[a-z0-9]+$/.test(config.agent_id))throw Error('Agente inválido');set('voice-connection',config.conexion_registros_verificada?'Consultas de estado y saldo habilitadas mediante n8n.':'LFT disponible. Conexión de estado y saldo con n8n pendiente de habilitación y prueba.');$('start-voice').disabled=!$('consent').checked;}catch{set('voice-connection','No se pudo cargar la configuración del asistente. Usa Telegram.');}await load();})();
