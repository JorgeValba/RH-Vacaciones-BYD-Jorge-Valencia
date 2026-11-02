// Elaborado por: Jorge Valencia. Puerta previa a publicar en Pages.
import fs from 'node:fs';
import assert from 'node:assert/strict';
import '../web/metrics.js';
const d=JSON.parse(fs.readFileSync(new URL('../web/data/panel.json',import.meta.url),'utf8'));
if(process.argv.includes('--forzar-fallo'))d.modo='REAL';
RHMetrics.validate(d);
const row=(id,estado,dias)=>({caso_id:'VAC-TEST-'+id,equipo_id:'EQ-A',estado,dias_solicitados:dias,creado_en:'2026-11-01T12:00:00Z',actualizado_en:'2026-11-01T13:00:00Z'});
const fixture={...d,exportado_en:'2026-11-01T14:00:00Z',casos:[row('01','Aprobada',4),row('02','Pendiente de aprobación',5),row('03','Rechazada',3)]};
assert.doesNotThrow(()=>RHMetrics.validate(fixture));assert.deepEqual(RHMetrics.calculate(fixture.casos),{total:3,pendientes:1,dias_aprobados:4});
assert.deepEqual(RHMetrics.calculate(RHMetrics.filter(fixture.casos,{estado:'Rechazada'})),{total:1,pendientes:0,dias_aprobados:0});
for(const bad of [{...fixture,casos:[...fixture.casos,fixture.casos[0]]},{...fixture,casos:[{...fixture.casos[0],salario_diario_mxn:800}]},{...fixture,casos:[{...fixture.casos[0],dias_solicitados:-1}]},{...fixture,exportado_en:null}])assert.throws(()=>RHMetrics.validate(bad));
assert.deepEqual(RHMetrics.calculate([]),{total:0,pendientes:0,dias_aprobados:0});
const html=fs.readFileSync(new URL('../web/index.html',import.meta.url),'utf8');
for(const token of ['lang="es"','Jorge Valencia','id="consent"','id="panel"','id="asistente"','id="metodo"'])assert(html.includes(token));
const app=fs.readFileSync(new URL('../web/app.js',import.meta.url),'utf8');new Function(app);
assert(app.includes('getUserMedia'));assert(app.includes('if(!$('));assert(!app.includes('innerHTML'));
const config=JSON.parse(fs.readFileSync(new URL('../web/config.json',import.meta.url),'utf8'));
assert.match(config.agent_id,/^agent_[a-z0-9]+$/);assert.equal(typeof config.conexion_registros_verificada,'boolean');
for(const file of ['index.html','app.js','config.json','data/panel.json']){
 const text=fs.readFileSync(new URL('../web/'+file,import.meta.url),'utf8');
 assert(!/sk-(?:proj-)?[A-Za-z0-9_-]{20,}|\b\d{7,12}:[A-Za-z0-9_-]{25,}|xi-api-key\s*[:=]|"(?:chat_id|usuario_id|USER_IDS_AUTORIZADOS)"\s*:/.test(text),'Se detectó un posible acceso privado en '+file);
}
console.log('Panel validado: esquema, privacidad, fórmulas, filtros y archivos requeridos. Sin prueba visual ni conversación real.');
