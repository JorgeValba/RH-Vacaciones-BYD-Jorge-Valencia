# Registros sanitizados y conciliaciones
Elaborado por: Jorge Valencia.

## Propósito y relación con la guía

Guía pp.3, 9–10 y 12–13: trazas comunes y costos/estados conciliables.

## Qué contiene y en qué formato

| Archivo o carpeta | Formato | Qué contiene y qué hacer con él |
|---|---|---|
| [Conciliacion_reservas_Jorge_Valencia.json](Conciliacion_reservas_Jorge_Valencia.json) | JSON (.json) | Registro estructurado de Conciliacion reservas; leer procedencia, resultado y alcance. |
| [Evidencia_agentes_loops_Jorge_Valencia.json](Evidencia_agentes_loops_Jorge_Valencia.json) | JSON (.json) | Registro estructurado de Evidencia agentes loops; leer procedencia, resultado y alcance. |
| [Inventario_solicitudes_Jorge_Valencia.json](Inventario_solicitudes_Jorge_Valencia.json) | JSON (.json) | Registro estructurado de Inventario solicitudes; leer procedencia, resultado y alcance. |
| [Inventario_trazas_Jorge_Valencia.json](Inventario_trazas_Jorge_Valencia.json) | JSON (.json) | Registro estructurado de Inventario trazas; leer procedencia, resultado y alcance. |

## Cómo utilizarlo

Abrir el JSON por caso o agregado. Usar caso_id y llamada_id para enlazarlo con costos y las fichas del índice; los CSV privados completos no se publican.

## Entorno y configuración

Datos de cortes recibidos, no una conexión viva a la base n8n.

## Validación y resultado esperado

Conservar la fecha/procedencia del corte. Resumen de trazas no equivale a otra llamada; dos reservas semilla se distinguen de tres aprobaciones del bot.

## Relaciones con el proyecto

- [Guía general](../../README.md): requisitos, instalación, inicio, credenciales, parada y solución de problemas.
- [Índice de evidencias](../../evidencias/indice.md): resultados y archivos relacionados.
- [Matriz de pruebas](../../tests/pruebas.csv): entradas, esperados y resultados observados.
