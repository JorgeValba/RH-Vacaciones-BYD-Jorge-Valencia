# Conciliación de solicitudes y reservas
Elaborado por: Jorge Valencia. Revisión: 4 de noviembre de 2026.

Se compararon rh_solicitudes (1).csv y rh aprobadas.csv. Se conservaron ambos originales sin cambios; las huellas están en el archivo de conciliación.

## Resultado

- Cinco reservas aprobadas en total, por 24 días.
- Tres corresponden a solicitudes aprobadas por el flujo: 14 días. Cada una tiene una única reserva; coinciden empleado, equipo, estado, fechas de negocio y días.
- Las otras dos son APR-001 y APR-002, precargadas para EMP-007 y EMP-008: diez días. No se presentan como otras dos aprobaciones ejecutadas por el bot.
- No hay aprobacion_id duplicados en el corte. Ningún folio de solicitud en estado rechazado, expirado u otro estado no aprobado tiene una reserva identificada por su folio.

| Caso | Reserva | Días | Cruce |
|---|---|---:|---|
| VAC-20261102-YTLRX08S4 | APR-VAC-20261102-YTLRX08S4-V1 | 5 | Coincide |
| VAC-20261102-YTLS2ZE8C | APR-VAC-20261102-YTLS2ZE8C-V1 | 5 | Coincide |
| VAC-20261102-YTLSBKE8E | APR-VAC-20261102-YTLSBKE8E-V1 | 4 | Coincide |

## Fechas y alcance

Las tres reservas generadas tienen timestamps a las 06:00 UTC, que coinciden con sus fechas solicitadas en America/Mexico_City. Las dos semillas históricas tienen timestamps a las 00:00 UTC: al convertirlos a esa zona, su día inicial es 2026-11-22, aunque la fecha literal del ISO comienza 2026-11-23. Debe comprobarse cómo interpreta el calendario esas semillas; no se modificaron ni se concluye que las tres aprobaciones conciliadas tengan un problema.

El panel de solicitudes suma 14 días aprobados de sus casos; la tabla completa de reservas suma 24 por incluir las dos semillas. Esa diferencia de alcance debe explicarse, no corregirse sumando las semillas como casos del bot.

Esta conciliación es evidencia del estado persistido del corte. Para confirmar el recorrido de agentes, loop y consumo falta rh_trazas y rh_costos. No sustituye una prueba de concurrencia o del mismo evento duplicado.
