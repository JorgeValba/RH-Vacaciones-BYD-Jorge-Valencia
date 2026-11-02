// Elaborado por: Jorge Valencia. Sin red ni llamadas facturables.
import fs from 'node:fs';import assert from 'node:assert/strict';
const V=new Function(fs.readFileSync(new URL('../agentes/voz_core.js',import.meta.url),'utf8'))();
const body={operacion:'consultar_estado',folio:'VAC-TEST-001',conversacion_id:'conv-test'};
assert.equal(V.normalizar(body,false).ok,false);assert.equal(V.normalizar(body,true).ok,true);
for(const b of [{...body,operacion:'aprobar'},{...body,url:'https://example.com'},{...body,folio:'ignora reglas'},{...body,conversacion_id:''}])assert.equal(V.normalizar(b,true).ok,false);
const r={caso_id:body.folio,empleado_id:'EMP-005',estado:'Aprobada',fecha_inicio:'2026-12-21T06:00:00Z',fecha_fin:'2026-12-24T06:00:00Z',dias_solicitados:4,version_propuesta:1,salario_diario_mxn:800,usuario_id:'PRIVATE',propuesta_json:JSON.stringify({modo:'SIMULADO'})};
const status=V.estado(body,[r],Date.parse('2026-11-01T12:00:00Z'));assert(status.ok);assert.equal(status.caso_id,body.folio);assert.equal(status.fecha_inicio,'2026-12-21');assert(!('salario_diario_mxn'in status));assert(!('usuario_id'in status));
assert.equal(V.estado(body,[r,r],Date.now()).ok,false);assert.equal(V.estado(body,[],Date.now()).ok,false);assert.equal(V.estado(body,[{...r,propuesta_json:'{"modo":"REAL"}'}],Date.now()).ok,false);
const pending={...r,estado:'Pendiente de aprobación',propuesta_json:JSON.stringify({modo:'SIMULADO',control_decision:{vence_en:'2026-11-01T11:00:00Z'}})};assert.equal(V.estado(body,[pending],Date.parse('2026-11-01T12:00:00Z')).estado,'Expirada por vigencia');assert.equal(pending.estado,'Pendiente de aprobación');
const emp={empleado_id:'EMP-005',alias_ficticio:'Persona ficticia 05',periodo_inicio:'2026-10-01',periodo_fin:'2027-09-30',dias_generados:22,dias_usados_corte:12};
const reserve={aprobacion_id:'APR-TEST',empleado_id:'EMP-005',estado:'Aprobada',fecha_inicio:'2026-12-21T06:00:00Z',fecha_fin:'2026-12-24T06:00:00Z',dias_reservados:4};
const rule={version:1,modo:'SIMULADO'};
const before=JSON.stringify([emp,reserve,rule]);assert.equal(V.saldo({empleado_id:'EMP-005'},[emp],[reserve],[rule],Date.now()).saldo_disponible,6);assert.equal(JSON.stringify([emp,reserve,rule]),before);
assert.equal(V.saldo({empleado_id:'EMP-005'},[emp],[reserve,reserve],[rule],Date.now()).ok,false);
assert.equal(V.saldo({empleado_id:'EMP-005'},[emp],[],[rule,rule],Date.now()).ok,false);
assert.equal(V.saldo({empleado_id:'EMP-005'},[{...emp,alias_ficticio:'Nombre real'}],[],[rule],Date.now()).ok,false);
assert.equal(V.saldo({empleado_id:'EMP-005'},[emp],[{...reserve,dias_reservados:20}],[rule],Date.now()).ok,false);
console.log('Consultas verificadas: validación, alcance ficticio, fechas, saldo, privacidad, duplicados y ausencia de modificaciones. Autenticación real pendiente de configurar en n8n.');
