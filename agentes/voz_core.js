// Elaborado por: Jorge Valencia. Funciones sin red para consultas de datos ficticios.
function dia(v){
 if(typeof v!=='string')return null;
 if(/^\d{4}-\d{2}-\d{2}$/.test(v)){const d=new Date(v+'T00:00:00Z');return Number.isFinite(+d)&&d.toISOString().slice(0,10)===v?v:null;}
 if(!/T.*(?:Z|[+-]\d{2}:\d{2})$/i.test(v))return null;
 const d=new Date(v);if(!Number.isFinite(+d))return null;
 const p=Object.fromEntries(new Intl.DateTimeFormat('en-CA',{timeZone:'America/Mexico_City',year:'numeric',month:'2-digit',day:'2-digit'}).formatToParts(d).map(x=>[x.type,x.value]));return `${p.year}-${p.month}-${p.day}`;
}
// Los periodos son fechas de calendario. n8n los serializa a medianoche UTC.
// No convertir ese formato de almacenamiento a la fecha local del día anterior.
// Las reservas mantienen su conversión de instante a America/Mexico_City.
function fechaPeriodo(v){
 if(typeof v!=='string')return null;
 if(/^\d{4}-\d{2}-\d{2}T00:00:00(?:\.0{1,9})?(?:Z|\+00:00)$/i.test(v))return dia(v.slice(0,10));
 return dia(v);
}
function empleadoPrueba(id){return typeof id==='string'&&/^EMP-\d{3}$/.test(id)&&Number(id.slice(4))>=1&&Number(id.slice(4))<=15;}
function numero(v){return typeof v!=='boolean'&&v!==null&&v!==undefined&&v!==''&&Number.isFinite(Number(v))?Number(v):null;}
function normalizar(body,habilitado){
 const fail=mensaje=>({ok:false,codigo:'ENTRADA_INVALIDA',mensaje});
 if(habilitado!==true)return {ok:false,codigo:'SERVICIO_NO_HABILITADO',mensaje:'La conexión de consultas todavía no está habilitada.'};
 if(!body||typeof body!=='object'||Array.isArray(body)||JSON.stringify(body).length>1500)return fail('Envía una consulta breve y estructurada.');
 if(!['consultar_estado','consultar_saldo'].includes(body.operacion))return fail('Solo se permite consultar estado o saldo.');
 const keys=body.operacion==='consultar_estado'?['operacion','folio','conversacion_id']:['operacion','empleado_id','conversacion_id'];
 if(Object.keys(body).some(k=>!keys.includes(k)))return fail('La consulta contiene campos no permitidos.');
 if(typeof body.conversacion_id!=='string'||!/^[-A-Za-z0-9_]{1,100}$/.test(body.conversacion_id))return fail('Falta una referencia válida de conversación.');
 if(body.operacion==='consultar_estado'&&(typeof body.folio!=='string'||!/^VAC-[A-Z0-9-]{4,80}$/.test(body.folio)))return fail('Indica el folio completo de la solicitud, sin instrucciones adicionales.');
 if(body.operacion==='consultar_saldo'&&!empleadoPrueba(body.empleado_id))return fail('Indica un empleado ficticio de EMP-001 a EMP-015.');
 return {ok:true,...body};
}
function estado(req,rows,now){
 const found=rows.filter(r=>r&&r.caso_id===req.folio&&!r.error);
 if(rows.some(r=>r&&r.error))return {ok:false,codigo:'SERVICIO_NO_DISPONIBLE',mensaje:'No fue posible consultar el registro. Intenta desde Telegram.'};
 if(found.length!==1)return {ok:false,codigo:'NO_DISPONIBLE',mensaje:'No encontré un registro único disponible para esa consulta.'};
 const r=found[0];let p;try{p=JSON.parse(r.propuesta_json);}catch{return {ok:false,codigo:'REGISTRO_NO_VALIDO',mensaje:'El registro requiere revisión de RH.'};}
 if(p?.modo!=='SIMULADO'||!empleadoPrueba(r.empleado_id))return {ok:false,codigo:'FUERA_DE_ALCANCE',mensaje:'Este canal solo consulta registros ficticios de prueba.'};
 let st=r.estado;
 const permitidos=['Aprobada','Rechazada','Pendiente de aprobación','Expirada','Requiere aclaración','Requiere ajuste por cobertura','Saldo insuficiente','Requiere ajuste por saldo','Error controlado','Procesando aprobación','En proceso'];
 if(!permitidos.includes(st))return {ok:false,codigo:'REVISION_RH',mensaje:'El estado requiere consulta directa con RH.'};
 if(st==='Pendiente de aprobación'){
  const limite=Date.parse(p.control_decision?.vence_en);
  if(!Number.isFinite(limite))return {ok:false,codigo:'REGISTRO_NO_VALIDO',mensaje:'La vigencia requiere revisión de RH.'};
  if(now>=limite)st='Expirada por vigencia';
 }
 return {ok:true,modo:'SIMULADO',caso_id:r.caso_id,empleado_id:r.empleado_id,estado:st,version:Number.isInteger(Number(r.version_propuesta))?Number(r.version_propuesta):null,fecha_inicio:dia(r.fecha_inicio),fecha_fin:dia(r.fecha_fin),dias_solicitados:numero(r.dias_solicitados),consultado_en:new Date(now).toISOString(),fuente:'registro privado rh_solicitudes',mensaje:'Resultado simulado. La consulta de voz no modifica reservas ni autoriza vacaciones.'};
}
function saldo(req,empleados,reservas,reglas,now){
 const fail=mensaje=>({ok:false,codigo:'REVISION_RH',mensaje});
 if([...empleados,...reservas,...reglas].some(r=>r?.error))return fail('No fue posible consultar el saldo. Intenta desde Telegram.');
 const es=empleados.filter(e=>e.empleado_id===req.empleado_id);if(es.length!==1)return fail('No encontré una ficha única para el empleado ficticio.');
 const e=es[0];if(!empleadoPrueba(e.empleado_id)||!/^Persona ficticia \d{2}$/.test(e.alias_ficticio||''))return fail('La ficha no está habilitada para el canal de prueba.');
 const rr=reglas.filter(r=>numero(r.version)!==null).sort((a,b)=>Number(b.version)-Number(a.version));
 if(!rr.length||rr.filter(r=>Number(r.version)===Number(rr[0].version)).length!==1||rr[0].modo!=='SIMULADO')return fail('No existe una regla de prueba única y válida.');
 const pi=fechaPeriodo(e.periodo_inicio),pf=fechaPeriodo(e.periodo_fin),gen=numero(e.dias_generados),usados=numero(e.dias_usados_corte);
 if(!pi||!pf||pi>pf||gen===null||usados===null||!Number.isInteger(gen)||!Number.isInteger(usados)||usados<0||gen<usados)return fail('La ficha contiene un periodo o saldo incoherente.');
 const rows=reservas.filter(r=>r.empleado_id===req.empleado_id&&/aprob/i.test(String(r.estado||'')));
 const ids=new Set();let total=0;
 for(const r of rows){
  const fi=dia(r.fecha_inicio),ff=dia(r.fecha_fin),dias=numero(r.dias_reservados);
  if(!r.aprobacion_id||ids.has(r.aprobacion_id)||!fi||!ff||fi>ff||dias===null||!Number.isInteger(dias)||dias<=0)return fail('Las reservas requieren conciliación; no se estima un saldo.');
  ids.add(r.aprobacion_id);
  if(fi>=pi&&fi<=pf){if(ff>pf)return fail('Existe una reserva que cruza periodos; RH debe revisar el saldo.');total+=dias;}
 }
 const disponible=gen-usados-total;
 if(disponible<0)return fail('El saldo calculado es negativo; RH debe conciliar las reservas.');
 return {ok:true,modo:'SIMULADO',empleado_id:e.empleado_id,periodo_inicio:pi,periodo_fin:pf,dias_generados:gen,dias_usados_corte:usados,dias_reservados:total,saldo_disponible:disponible,unidad:'días laborables',consultado_en:new Date(now).toISOString(),fuente:'rh_empleados y rh_aprobadas',regla:'Saldo = días generados − usados al corte − reservas aprobadas del periodo, conforme al modelo de datos actual.',mensaje:'Resultado simulado. Las reservas están separadas de los días usados al corte; no se modifica el saldo.'};
}
return {dia,fechaPeriodo,numero,empleadoPrueba,normalizar,estado,saldo};
