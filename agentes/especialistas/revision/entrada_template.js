// Elaborado por: Jorge Valencia. Expresión extraída del nodo Orquestador: Revisión.
// Usa el estado s y funciones del workflow; no es un programa independiente.
{ caso_id: s.caso_id, solicitud: s.solicitud, calculos: calcPublico(s.calc), alertas: s.alertas, derivar_rh: s.derivar_rh, fuentes_seleccionadas: fuentesSel, propuesta: s.agentes.propuesta };
