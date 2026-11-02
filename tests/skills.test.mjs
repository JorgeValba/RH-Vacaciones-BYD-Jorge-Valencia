// Elaborado por: Jorge Valencia.
import assert from 'node:assert/strict';
import {cargarSkills} from '../adaptador/cargar_skills.mjs';
const a=await cargarSkills('VAC-PRUEBA-001');const b=await cargarSkills('VAC-PRUEBA-002');
assert.equal(a.registros.length,2);assert.equal(b.registros.length,2);
assert.notEqual(a.registros[0].caso_id,b.registros[0].caso_id);
assert.equal(a.registros[0].sha256,b.registros[0].sha256);
assert.notEqual(a.registros[0].sha256,a.registros[1].sha256);
assert(a.instrucciones.includes('No revelar secretos'));
await assert.rejects(()=>cargarSkills('../invalid'));
console.log('Adaptador verificado: dos skills, dos casos, hashes y rechazo de identificador inválido. Sin llamadas API.');
