# P10: reproducción de evento persistido
Elaborado por: Jorge Valencia.

Importar en workflow nuevo y vacío, dentro del mismo proyecto que rh_solicitudes. No publicar. La plantilla pública requiere elegir rh_solicitudes en Buscar evento duplicado y Contar filas del mismo evento. La copia privada de ejecución conserva el ID de tabla del export recibido.

1. Execute workflow y abrir Resumen de evidencia → Output → JSON. Esperado EVENTO_DUPLICADO_BLOQUEADO, eventos_en_tabla=1, caso YTLSBKE8E y rama false del IF.
2. Ejecutar de nuevo. Conservar ambas salidas, con sus ID/fechas; evento y folio deben coincidir, y el conteo seguir en uno.
3. El ensayo no inserta ni actualiza filas, no aprueba vacaciones, no contacta al modelo ni envía Telegram.

Se usan literalmente la consulta Buscar evento duplicado y la condición ¿Evento nuevo? del export. El evento histórico ya produjo un caso y se conserva en rh_solicitudes; este ensayo repite su identificador en el punto de deduplicación. La consulta de conteo añadida comprueba unicidad por evento, con límite 100 y aserción de exactamente una coincidencia. Si hay error de tabla, ninguna coincidencia o más de una, falla: no se rellena con resultados supuestos.

Alcance: evidencia de lectura persistente y decisión del control ante una reproducción secuencial del mismo identificador. No demuestra entrega duplicada real por el webhook, atomicidad frente a eventos simultáneos, ni ejecución inicial de la operación dentro de este ensayo. La carrera entre buscar e insertar continúa como limitación conocida; no afirmar idempotencia concurrente universal.
