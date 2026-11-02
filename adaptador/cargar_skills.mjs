// Elaborado por: Jorge Valencia. Adaptador local; integración n8n pendiente.
import {readFile} from 'node:fs/promises';
import {createHash} from 'node:crypto';
export async function cargarSkills(casoId,base=new URL('../',import.meta.url)) {
 if(typeof casoId!=='string'||!/^VAC-[A-Z0-9-]{1,80}$/.test(casoId))throw Error('caso_id inválido');
 const paths=['skills/evaluar_vacaciones/SKILL.md','skills/seguridad_y_costo/SKILL.md'];
 const registros=[];const bloques=[];
 for(const path of paths){
  const contenido=await readFile(new URL(path,base),'utf8');
  const nombre=contenido.match(/^name: (.+)$/m)?.[1];
  const version=contenido.match(/^version: (.+)$/m)?.[1];
  if(!nombre||!version||!contenido.includes('Jorge Valencia'))throw Error('Skill incompleto');
  registros.push({caso_id:casoId,skill:nombre,version,sha256:createHash('sha256').update(contenido).digest('hex'),origen:path,estado:'cargado_localmente'});
  bloques.push(contenido);
 }
 return {instrucciones:bloques.join('\n\n'),registros};
}
