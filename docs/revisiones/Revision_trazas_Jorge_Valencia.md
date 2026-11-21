# Revisión de trazas y evidencia de agentes
Elaborado por: Jorge Valencia. Revisión: 4 de noviembre de 2026.

## Qué acredita el corte

- 168 filas, sin traza_id duplicados. Los cuatro campos JSON de cada fila se pudieron interpretar.
- 48 llamada_id distintos. Hay filas por llamada y resúmenes de etapa: no se suman como generaciones adicionales.
- Cada uno de los tres casos aprobados identificados en solicitudes tiene las cuatro etapas generativas: recepción, consulta, propuesta y revisión, con cuatro llamadas distintas por caso.
- El primer aprobado, YTLRX08S4, registra revisión manual y recuperación del formato de fecha. Se documenta la conciliación; no se describe como ejecución sin incidencias.
- YTLS2ZE8C incluye una aprobación y un intento posterior sin acción. Con una única reserva en el CSV de aprobadas, respalda que ese reintento no duplicó la reserva. No equivale a prueba del mismo update_id.
- YTLSBKE8E incluye cuatro especialistas, dos cargas de skill, controles de seguridad/calidad, aprobación y una consulta de estado por voz.

## Corrección V1 → V2

Caso: VAC-20261102-YTLS6SW04.

| Paso | Referencia | Resultado |
|---|---|---|
| Propuesta V1 | L3 | Bruta/adicional 875 MXN; revisión pendiente. |
| Revisión V1 | L4 | validado=false; pide explicar base salarial/tasa, mejorar trazabilidad y redacción informativa. |
| Propuesta V2 | L5 | Conserva 875 MXN; incorpora tasa 25% y carácter informativo con verificación interna. |
| Revisión V2 | L6 | validado=true; correcciones vacías. |
| Decisión humana | traza posterior | Rechazar; el caso termina Rechazada. |

La validación de calidad de V2 no es una aprobación de vacaciones. Fue una corrección de explicación/redacción; no cambió el importe. Estas trazas permiten recuperar la evidencia observable sin entregar razonamiento interno privado. El costo adicional debe conciliarse con L5/L6 del CSV actualizado; la auditoría histórica calculó USD 0.003967.

## Skills, reutilización y límite de la evidencia

Hay seis registros de carga: dos skills en cada uno de YTLSAI66N, YTLSBKE8E y YTLSEX4SR. Las filas incluyen ruta, versión, skill_id, huella de fuente, modo de carga y proyección. Hay 20 filas de loop_seguridad y cuatro de loop_calidad; una de seguridad termina detenida en YTLSAI66N.

El caso con corrección V1/V2 (YTLS6SW04) no tiene registros carga_skill en este CSV: pertenece a una ejecución anterior. No afirmar que esa corrección demuestra por sí sola el adaptador de skills posterior. Para evidencia conjunta en la versión final puede ser necesario un caso con carga de skills y devolución de calidad en el mismo recorrido. No se altera una traza histórica para fabricar esa evidencia.

## Voz y próximas comprobaciones

Hay seis trazas voz_consulta: una consulta de folio y cinco de saldo. Demuestran respuestas del receptor n8n; por sí solas no permiten asegurar que todas provengan de Pages, de conversación hablada o de Preview. Se cruzarán con la evidencia de ElevenLabs/HTML.

Próximo archivo: rh_costos actualizado, para reconciliar las 48 llamadas distintas, los cuatro agentes, los reintentos/corrección y los casos sin modelo. Los originales permanecen privados. La selección sanitizada omite entradas completas, IDs personales y conversaciones. No se han cambiado la base ni los servicios.
