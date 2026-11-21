// Elaborado por: Jorge Valencia. Expresión extraída del nodo Orquestador: Propuesta.
// Usa el estado s y funciones del workflow; no es un programa independiente.
{ caso_id: s.caso_id, empleado: { empleado_id: s.calc.empleado_id, alias_ficticio: s.calc.alias_ficticio }, fechas: { inicio: s.calc.fecha_inicio, fin: s.calc.fecha_fin }, calculos: calcPublico(s.calc), alertas: s.alertas, derivar_rh: s.derivar_rh, fuentes_seleccionadas: fuentesSel, correcciones_previas: s.correcciones };
