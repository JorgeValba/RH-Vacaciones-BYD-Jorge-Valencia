// Elaborado por: Jorge Valencia. Comparación offline de código real con DOM/HTTP simulados.
import fs from 'node:fs';
import vm from 'node:vm';
import assert from 'node:assert/strict';
import crypto from 'node:crypto';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const current=fs.readFileSync(path.join(root,'web/app.js'),'utf8').replaceAll('\r\n','\n');
const baseline=current.replace('},300000);','},60000);').replaceAll('cada 5 minutos','cada 60 segundos');
assert.equal(crypto.createHash('sha256').update(baseline).digest('hex'),'a9c97d71d34391a1707456c2550291810c6c38a79f08a990fbf19733b9b5e9fb','La reconstrucción debe coincidir exactamente con el código anterior auditado');
const metrics=fs.readFileSync(path.join(root,'web/metrics.js'),'utf8');
const fixture=JSON.parse(fs.readFileSync(path.join(root,'web/data/panel.json'),'utf8'));
const endpoint='https://hrbydbo7.app.n8n.cloud/webhook/rh-panel-publico-jv-v1';
class Element {
 constructor(){this.value='';this.children=[];this.listeners={};this.style={};this.dataset={};this.hidden=false;this.classes=new Set();this.classList={add:x=>this.classes.add(x),remove:x=>this.classes.delete(x)};}
 set textContent(x){this.text=String(x);}get textContent(){return this.text??'';}
 replaceChildren(...nodes){this.children=nodes;}append(...nodes){this.children.push(...nodes);}
 setAttribute(k,v){this[k]=v;}addEventListener(k,v){this.listeners[k]=v;}
}
async function boot(code){
 const env={now:Date.parse('2026-11-21T12:00:00Z'),calls:0,fail:false,invalid:false,data:structuredClone(fixture)};
 const nodes=new Map(),events={},intervals=[];
 const document={hidden:false,body:new Element(),getElementById:id=>{if(!nodes.has(id))nodes.set(id,new Element());return nodes.get(id);},createElement:()=>new Element(),addEventListener:(k,v)=>events[k]=v};
 const DateClock=class extends Date{constructor(...args){super(...(args.length?args:[env.now]));}static now(){return env.now;}};
 const context=vm.createContext({document,Date:DateClock,Intl,URL,AbortController,Option:class extends Element{constructor(label,value){super();this.textContent=label;this.value=value;}},setTimeout:()=>1,clearTimeout:()=>{},setInterval:(fn,ms)=>{intervals.push({fn,ms});},fetch:async url=>{
  if(url==='config.json')return {ok:true,json:async()=>({agent_id:'agent_test1',panel_url:endpoint,conexion_registros_verificada:true})};
  if(url===endpoint){env.calls++;if(env.fail)throw Error('Fallo simulado');const d=structuredClone(env.data);d.exportado_en=new Date(env.now).toISOString();if(env.invalid)d.secreto='NO_PUBLICAR';return {ok:true,json:async()=>d};}
  if(url==='data/panel.json')return {ok:true,json:async()=>structuredClone(fixture)};
  throw Error('Destino inesperado: '+url);
 }});
 vm.runInContext(metrics,context);vm.runInContext(code,context);
 const flush=async()=>{for(let i=0;i<12;i++)await Promise.resolve();};await flush();assert.equal(env.calls,1);assert.equal(intervals.length,1);
 const run=async source=>{await vm.runInContext(source,context);await flush();};
 const view=()=>['kpi-total','kpi-pendientes','kpi-dias','row-count','chart-summary','action-title','action-text'].map(id=>document.getElementById(id).textContent);
 return {env,context,nodes,document,events,interval:intervals[0],flush,run,view};
}
async function quality(code){
 const a=await boot(code);const results=[];
 const check=(name,fn)=>{fn();results.push(name);};
 check('KPI del corte',()=>assert.deepEqual(a.view().slice(0,3),['13','2','14']));
 a.nodes.get('equipo').value='EQ-B';await a.run('draw()');check('Filtro de equipo',()=>assert.deepEqual(a.view().slice(0,3),['1','0','0']));
 a.nodes.get('equipo').value='';a.nodes.get('folio').value='VAC-NOEXISTE';await a.run('draw()');check('Sin resultados',()=>assert.deepEqual(a.view().slice(0,3),['0','0','0']));
 a.nodes.get('folio').value='';await a.run('draw()');check('Restablecer selección',()=>assert.deepEqual(a.view().slice(0,3),['13','2','14']));
 const row=a.env.data.casos.find(r=>r.estado==='Pendiente de aprobación');row.estado='Aprobada';row.actualizado_en=new Date(a.env.now).toISOString();
 await a.nodes.get('refresh-data').listeners.click();await a.flush();check('Actualización manual inmediata',()=>assert.deepEqual(a.view().slice(0,3),['13','1',String(14+row.dias_solicitados)]));
 const good=a.view();a.env.invalid=true;await a.run('load()');check('Rechazo de campos fuera de esquema',()=>{assert.deepEqual(a.view(),good);assert(a.nodes.get('data-notice').classes.has('warning'));assert(!a.nodes.get('data-notice').textContent.includes('NO_PUBLICAR'));});
 a.env.invalid=false;a.env.fail=true;await a.run('load()');check('Fallo conserva copia y advertencia',()=>{assert.deepEqual(a.view(),good);assert.equal(a.nodes.get('retry').hidden,false);});
 a.env.fail=false;await a.run('load()');check('Recuperación conserva resultado',()=>{assert.deepEqual(a.view(),good);assert(!a.nodes.get('data-notice').classes.has('warning'));});
 a.document.hidden=true;const n=a.env.calls;a.interval.fn();await a.flush();check('Pestaña oculta no consulta',()=>assert.equal(a.env.calls,n));
 a.document.hidden=false;a.events.visibilitychange();await a.flush();check('Volver a pestaña consulta inmediatamente',()=>assert.equal(a.env.calls,n+1));
 return {criterios:results,aprobados:results.length,vista_final:good};
}
async function hour(code){const a=await boot(code);for(let t=60;t<=3600;t+=60){a.env.now+=60000;if(t*1000%a.interval.ms===0){a.interval.fn();await a.flush();}}return {consultas:a.env.calls,intervalo_ms:a.interval.ms};}
const before=await quality(baseline),after=await quality(current);assert.deepEqual(after,before);
const h1=await hour(baseline),h2=await hour(current);assert.equal(h1.consultas,61);assert.equal(h2.consultas,13);
console.log(JSON.stringify({autor:'Jorge Valencia',prueba:'OPT-PANEL-01',resultado:'COMPARACION_OFFLINE_APROBADA',antes:{...h1,calidad:before},despues:{...h2,calidad:after},reduccion_sondeos_pct:80,reduccion_consultas_con_inicial_pct:(61-13)/61*100,llamadas_reales_a_n8n:0,llamadas_modelos:0,alcance:'Código app.js y metrics.js reales, reloj, DOM y respuestas simulados. No navegador real ni prueba de carga; frescura automática pasa de 60 a 300 s. No ensaya micrófono, autenticación o decisiones de n8n.'},null,2));
