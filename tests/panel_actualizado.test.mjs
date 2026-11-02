// Elaborado por: Jorge Valencia. Pruebas de consulta, privacidad y recuperación.
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import '../backend/panel_publico.js';
import '../web/metrics.js';
const now=Date.parse('2026-11-02T08:00:00Z');
const row={caso_id:'VAC-TEST-0001',empleado_id:'EMP-005',equipo_id:'EQ-A',estado:'Aprobada',dias_solicitados:4,creado_en:'2026-11-02T05:00:00Z',actualizado_en:'2026-11-02T05:01:00Z',propuesta_json:'{"modo":"SIMULADO"}',salario:800,chat_id:'PRIVADO',conversacion:'NO_PUBLICAR'};
const result=RHPublicPanel.preparar([row],now);
assert.doesNotThrow(()=>RHMetrics.validate(result));
assert.deepEqual(Object.keys(result.casos[0]).sort(),['caso_id','equipo_id','estado','dias_solicitados','creado_en','actualizado_en'].sort());
assert(!/PRIVADO|NO_PUBLICAR|salario|propuesta_json|empleado_id/.test(JSON.stringify(result)));
assert.equal(result.exportado_en,new Date(now).toISOString());
assert.equal(RHPublicPanel.preparar([{}],now).casos.length,0);
for(const bad of [[{error:'Tabla privada no disponible'}],[row,row],[{...row,propuesta_json:'{"modo":"REAL"}'}],[{...row,empleado_id:'EMP-099'}],[{...row,estado:'<script>'}],[{...row,dias_solicitados:true}],[{...row,dias_solicitados:-1}],[{...row,actualizado_en:'2000-01-01'}],[{...row,propuesta_json:'NO JSON'}]])assert.throws(()=>RHPublicPanel.preparar(bad,now));
assert.equal(RHPublicPanel.preparar([{...row,estado:'Pendiente de aprobación',propuesta_json:'{"modo":"SIMULADO","control_decision":{"vence_en":"2026-11-02T07:00:00Z"}}'}],now).casos[0].estado,'Expirada');
assert.equal(row.estado,'Aprobada'); // La proyección no cambia registros.

const source=fs.readFileSync(new URL('../web/app.js',import.meta.url),'utf8');
const config=JSON.parse(fs.readFileSync(new URL('../web/config.json',import.meta.url),'utf8'));
const saved=JSON.parse(fs.readFileSync(new URL('../web/data/panel.json',import.meta.url),'utf8'));
function element(){return {value:'',hidden:false,disabled:false,textContent:'',children:[],dataset:{},style:{},classList:{add(){},remove(){},toggle(){}},append(...n){this.children.push(...n);},replaceChildren(...n){this.children=n;},setAttribute(){},addEventListener(){}};}
const els=new Map();let failing=false,invalid=false,calls=0,slowResolve;
const document={hidden:false,getElementById(id){if(!els.has(id))els.set(id,element());return els.get(id);},createElement:element,addEventListener(){}};
const context=vm.createContext({document,URL,Intl,Date,AbortController,JSON,Promise,console,setTimeout,clearTimeout,setInterval(fn,ms){assert.equal(ms,60000);context.poll=fn;},Option:function(label,value){this.textContent=label;this.value=value;},RHMetrics,fetch:async(url,opts)=>{
 assert.equal(opts.credentials,'omit');
 if(url==='config.json')return {ok:true,json:async()=>config};
 if(url==='data/panel.json')return {ok:true,json:async()=>saved};
 assert.equal(url,config.panel_url);calls++;
 if(slowResolve)await new Promise(resolve=>{slowResolve=resolve;});
 if(failing)throw Error('NETWORK');
 const data=RHPublicPanel.preparar([{...row,estado:'Aprobada'}]);
 if(invalid)data.casos[0].salario=800;
 return {ok:true,json:async()=>data};
}});
const flush=async()=>{for(let i=0;i<15;i++)await new Promise(setImmediate);};
vm.runInContext(source,context);await flush();
assert.match(els.get('data-notice').textContent,/Datos consultados en n8n/);
assert.equal(els.get('kpi-dias').textContent,4);
els.get('estado').value='Aprobada';els.get('folio').value='VAC-TEST';
failing=true;await vm.runInContext('load()',context);
assert.match(els.get('data-notice').textContent,/No se pudo actualizar/);
assert.match(els.get('data-notice').textContent,/última consulta/);
assert.equal(els.get('kpi-dias').textContent,4);
failing=false;invalid=true;await vm.runInContext('load()',context);
assert.match(els.get('data-notice').textContent,/No se pudo actualizar/);
invalid=false;await vm.runInContext('load()',context);
assert.match(els.get('data-notice').textContent,/Datos consultados/);
assert.equal(els.get('estado').value,'Aprobada');assert.equal(els.get('folio').value,'VAC-TEST');
document.hidden=true;const before=calls;context.poll();await flush();assert.equal(calls,before);
document.hidden=false;context.poll();await flush();assert.equal(calls,before+1);
slowResolve=true;const pending=vm.runInContext('load()',context);await flush();const during=calls;await vm.runInContext('load()',context);assert.equal(calls,during);const resolve=slowResolve;slowResolve=false;resolve();await pending;
vm.runInContext('config.panel_url="https://example.org/no-permitido";snapshot=null;',context);
await vm.runInContext('load()',context);
assert.match(els.get('data-notice').textContent,/copia guardada/);assert.match(els.get('data-notice').textContent,/puede haber cambios posteriores/);
console.log('Panel actualizado: campos públicos, rechazos, vigencia, consulta, filtros, pausa, concurrencia y fallos verificados. Sin prueba real de n8n.');
