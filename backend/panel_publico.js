// Elaborado por: Jorge Valencia. Proyección pública de registros exclusivamente ficticios.
(function(root){
 const estados=['Aprobada','Rechazada','Pendiente de aprobación','Expirada','Requiere aclaración','Requiere ajuste por cobertura','Saldo insuficiente','Requiere ajuste por saldo','Error controlado','Procesando aprobación','En proceso'];
 function preparar(rows,now=Date.now()){
  if(!Array.isArray(rows)||!Number.isFinite(now))throw Error('LECTURA_INVALIDA');
  const casos=[],ids=new Set();
  for(const r of rows){
   if(!r||typeof r!=='object'||r.error)throw Error('LECTURA_INVALIDA');
   if(Object.keys(r).length===0)continue; // Always Output Data de una tabla vacía.
   if(typeof r.caso_id!=='string')throw Error('REGISTRO_INVALIDO');
   if(!r.caso_id.startsWith('VAC-'))continue;
   const p=JSON.parse(r.propuesta_json);
   const emp=typeof r.empleado_id==='string'&&/^EMP-\d{3}$/.test(r.empleado_id)&&+r.empleado_id.slice(4)>=1&&+r.empleado_id.slice(4)<=15;
   if(p?.modo!=='SIMULADO'||!emp)throw Error('REGISTRO_NO_FICTICIO');
   if(!/^VAC-[A-Z0-9-]{4,80}$/.test(r.caso_id)||ids.has(r.caso_id))throw Error('FOLIO_INVALIDO');
   ids.add(r.caso_id);
   if(!estados.includes(r.estado)||!['EQ-A','EQ-B','EQ-C',null,'',undefined].includes(r.equipo_id))throw Error('ESQUEMA_INVALIDO');
   const raw=r.dias_solicitados;
   const dias=raw===null||raw===undefined||raw===''?null:typeof raw==='boolean'?NaN:Number(raw);
   if(dias!==null&&(!Number.isInteger(dias)||dias<0))throw Error('DIAS_INVALIDOS');
   if(r.estado==='Aprobada'&&!(dias>0))throw Error('APROBACION_INVALIDA');
   for(const key of ['creado_en','actualizado_en'])if(typeof r[key]!=='string'||!Number.isFinite(Date.parse(r[key])))throw Error('FECHA_INVALIDA');
   if(Date.parse(r.actualizado_en)<Date.parse(r.creado_en))throw Error('FECHA_INVALIDA');
   let estado=r.estado;
   const vence=Date.parse(p.control_decision?.vence_en);
   if(estado==='Pendiente de aprobación'&&Number.isFinite(vence)&&now>=vence)estado='Expirada';
   casos.push({caso_id:r.caso_id,equipo_id:r.equipo_id||null,estado,dias_solicitados:dias,creado_en:r.creado_en,actualizado_en:r.actualizado_en});
  }
  return {schema_version:1,autor:'Jorge Valencia',modo:'SIMULADO',tipo_datos:'ficticios_sanitizados',exportado_en:new Date(now).toISOString(),fuente:'Consulta actualizada de rh_solicitudes, n8n',casos};
 }
 root.RHPublicPanel={preparar};
})(typeof globalThis==='undefined'?this:globalThis);
