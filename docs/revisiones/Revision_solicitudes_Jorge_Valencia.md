# Solicitudes recibidas — revisión del corte
Elaborado por: Jorge Valencia. Fecha de recepción: 3 de noviembre de 2026.

Fuente privada: rh_solicitudes (1).csv. Se conservó el archivo original sin cambios. Hora de exportación: no informada. SHA-256: `5632156dde2667e4408c75931c14bf4e4653da4f2c079f51b310dca497bf9c76`.

Hay **13 solicitudes**, **7 empleados ficticios distintos** y ningún folio duplicado. Tres casos figuran aprobados y suman **14 días solicitados**; falta cruzarlos con rh aprobadas para confirmar las reservas. Todos los propuesta_json se pudieron leer, indican SIMULADO y coinciden con el estado de su fila.

| Estado persistido | Casos |
|---|---:|
| Error controlado | 1 |
| Pendiente de aprobación | 4 |
| Requiere ajuste por cobertura | 1 |
| Saldo insuficiente | 1 |
| Aprobada | 3 |
| Rechazada | 1 |
| Requiere aclaración | 1 |
| Expirada | 1 |

## Casos seleccionados para reunir evidencia

| Folio | Uso |
|---|---|
| VAC-20261102-YTLRX08S4 | Aprobado, 5 días; caso con conciliación histórica que debe explicarse. |
| VAC-20261102-YTLS2ZE8C | Aprobado, 5 días. |
| VAC-20261102-YTLSBKE8E | Aprobado, 4 días; candidato principal de integración con voz. |
| VAC-20261102-YTLS6SW04 | Rechazado, versión 2, seis llamadas declaradas; V1/V2 debe recuperarse de trazas. |
| VAC-20261102-YTLSEX4SR | Expirada; intento de aprobar no equivale a una aprobación. |
| VAC-20261102-YTLRQ48J9 | Ajuste por cobertura. |
| VAC-20261102-YTLRR4J18 | Saldo insuficiente. |
| VAC-20261102-YTLRG1G9I | Error controlado; no atribuirle consumo cero sin comprobar costos. |

## Cómo interpretar los pendientes

Las cuatro filas Pendiente de aprobación no equivalen a cuatro propuestas vigentes. Dos, YTLROJXNQ y YTLRPRHT2, no tienen control_decision y pertenecen a una versión anterior; las otras dos, YTLRU36UE y YTLS9EZY9, tienen vence_en del 2 de noviembre y ya superaron esa fecha al corte del 3 de noviembre. Se conserva el estado tal como viene en el CSV: esta revisión no convierte estados ni modifica la base. Para una nueva demostración de aprobación, generar una propuesta nueva.

El resumen manual compartido anteriormente presentaba algunas de esas filas como Expirada. Este CSV las presenta como Pendiente de aprobación. Usar el CSV identificado como fuente de este análisis y conciliar con la tabla/panel actual antes de afirmar coincidencia completa; la diferencia no permite concluir por sí sola que hubo pérdida o reinicio de datos.

## Pendiente de cruce

1. rh aprobadas: verificar una única reserva por aprobación y días registrados.
2. rh_trazas: confirmar especialistas, decisiones y corrección V1/V2.
3. rh_costos: conciliar llamadas y costos por caso.

El JSON sanitizado se entrega como anexo, con hora de exportación desconocida. No importarlo al sistema ni reemplazar el panel con él: el esquema del sitio exige una fecha de extracción válida para mostrar datos y no se debe inventar. El CSV original contiene identificadores de acceso y datos individuales y permanece privado.
