// Elaborado por: Jorge Valencia. Compartido entre el panel y las pruebas de Actions.
(function(root){
 const allowed=['schema_version','autor','modo','tipo_datos','exportado_en','fuente','casos'];
 const rowKeys=['caso_id','equipo_id','estado','dias_solicitados','creado_en','actualizado_en'];
 const states=['Aprobada','Rechazada','Pendiente de aprobación','Expirada','Requiere aclaración','Requiere ajuste por cobertura','Saldo insuficiente','Requiere ajuste por saldo','Error controlado','Procesando aprobación','En proceso'];
 function validate(d){
  if(!d||typeof d!=='object'||Object.keys(d).some(k=>!allowed.includes(k)))throw Error('Campos públicos fuera del esquema.');
  if(d.schema_version!==1||d.autor!=='Jorge Valencia'||d.modo!=='SIMULADO'||d.tipo_datos!=='ficticios_sanitizados'||typeof d.fuente!=='string'||!Array.isArray(d.casos))throw Error('Resumen inválido.');
  if(d.exportado_en!==null&&!Number.isFinite(Date.parse(d.exportado_en)))throw Error('Fecha de exportación inválida.');
  if(d.casos.length&&d.exportado_en===null)throw Error('Hay datos sin fecha de corte.');
  const ids=new Set();
  for(const r of d.casos){
   if(!r||Object.keys(r).length!==rowKeys.length||Object.keys(r).some(k=>!rowKeys.includes(k)))throw Error('Una fila incluye campos no permitidos.');
   if(typeof r.caso_id!=='string'||!/^VAC-[A-Z0-9-]{4,80}$/.test(r.caso_id)||ids.has(r.caso_id))throw Error('Folio inválido o duplicado.');ids.add(r.caso_id);
   if(![null,'EQ-A','EQ-B','EQ-C'].includes(r.equipo_id)||!states.includes(r.estado))throw Error('Estado o equipo inválido.');
   if(r.dias_solicitados!==null&&(!Number.isInteger(r.dias_solicitados)||r.dias_solicitados<0))throw Error('Días inválidos.');
   if(r.estado==='Aprobada'&&!(r.dias_solicitados>0))throw Error('Aprobación sin días válidos.');
   if(!Number.isFinite(Date.parse(r.creado_en))||!Number.isFinite(Date.parse(r.actualizado_en))||Date.parse(r.actualizado_en)<Date.parse(r.creado_en))throw Error('Fechas inconsistentes.');
  }return d;
 }
 function filter(rows,f={}){return rows.filter(r=>(!f.estado||r.estado===f.estado)&&(!f.equipo||r.equipo_id===f.equipo)&&(!f.folio||r.caso_id.includes(String(f.folio).trim().toUpperCase())));}
 function calculate(rows){return {total:rows.length,pendientes:rows.filter(r=>r.estado==='Pendiente de aprobación').length,dias_aprobados:rows.filter(r=>r.estado==='Aprobada').reduce((n,r)=>n+r.dias_solicitados,0)};}
 root.RHMetrics={validate,filter,calculate,states};
})(typeof globalThis==='undefined'?window:globalThis);
