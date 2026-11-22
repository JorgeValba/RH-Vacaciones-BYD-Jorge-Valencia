# Optimización del panel: costo y calidad

Elaborado por: Jorge Valencia. Comparación realizada el 21 de noviembre de 2026.

## Requisito y cambio

La Guía del estudiante, página 10, pide una optimización concreta y comparar costo y calidad antes/después sin reducir seguridad. Se cambia solo el sondeo automático del panel de 60 a 300 segundos y sus textos visibles. Se conservan consulta inicial, consulta al volver a pestaña, actualización manual, validación del esquema público, destino permitido y aviso/copia ante fallo. Los workflows, skills y decisiones de aprobación no se modifican.

## Método reproducible y límites

Desde raíz: `node tests/optimizacion_panel.test.mjs`, Node >=22, biblioteca estándar, sin instalar dependencias ni aportar credenciales. El test usa app.js y metrics.js reales. Reconstruye los dos reemplazos de la versión anterior y comprueba su SHA-256 de texto con saltos LF: a9c97d71d34391a1707456c2550291810c6c38a79f08a990fbf19733b9b5e9fb. Así el contraste no reemplaza el comportamiento por una implementación alternativa.

Reloj, DOM mínimo y HTTP están simulados; se usa el corte público de trece casos y una mutación sintética para actualización manual. No es ejecución en navegador, caída real de proveedor, medición del contador n8n, prueba de carga, micrófono o autenticación. Se realizan **cero llamadas reales** a n8n, OpenAI o ElevenLabs. Los timeouts HTTP no se evalúan con este reloj; tienen su evidencia P08 separada.

## Calidad comparada

| Criterio | Antes · 60 s | Después · 300 s |
|---|---|---|
| KPI del corte | Aprobado | Aprobado |
| Filtro de equipo | Aprobado | Aprobado |
| Sin resultados | Aprobado | Aprobado |
| Restablecer selección | Aprobado | Aprobado |
| Actualización manual inmediata | Aprobado | Aprobado |
| Rechazo de campos fuera de esquema | Aprobado | Aprobado |
| Fallo conserva copia y advertencia | Aprobado | Aprobado |
| Recuperación conserva resultado | Aprobado | Aprobado |
| Pestaña oculta no consulta | Aprobado | Aprobado |
| Volver a pestaña consulta inmediatamente | Aprobado | Aprobado |

Resultado: **10/10 antes y 10/10 después** para estos criterios explícitos. KPI inicial 13/2/14; filtro EQ-B 1/0/0; consulta manual tras cambio sintético 13/1/19. No son tasas generales de exactitud del ecosistema. La calidad de frescura **sí cambia**: en una pestaña visible un cambio puede tardar hasta cinco minutos en aparecer automáticamente, frente a un minuto; la actualización manual sigue disponible inmediatamente. Aprobar siempre requiere revalidación en Telegram.

## Consultas y costo

Una hora visible sin interacción: 61 consultas antes y 13 después, contando la inicial y la marca del minuto 60. Reducción de sondeos periódicos 80%; reducción de consultas totales con inicial **78.69%**. Para 22 días y una hora/día: 1342 → 286; cuatro horas/día: 5302 → 1078. Retornos de pestaña, actualizaciones manuales o varias pantallas agregan consultas y no están presupuestados como ahorro garantizado.

Se conservan mezcla, tarifas mensuales y demás hipótesis del modelo. Solo cambian demanda del panel, selección de cuota n8n y extras. Fuente detallada: [comparación CSV](../costos/optimizacion_panel.csv) y [modelo económico](../costos/README.md).

| Escenario | Casos/mes | Antes USD | Después USD | Diferencia USD |
|---|---:|---:|---:|---:|
| base | 100 | 31.51 | 31.51 | 0.00 |
| base | 1,000 | 97.08 | 97.08 | 0.00 |
| base | 10,000 | 593.84 | 593.84 | 0.00 |
| mayor_consumo | 100 | 84.68 | 48.68 | 36.00 |
| mayor_consumo | 1,000 | 269.78 | 185.78 | 84.00 |
| mayor_consumo | 10,000 | 1,455.84 | 1,447.84 | 8.00 |

**Menos consultas no significa 80% menos factura.** En base, la cuota elegida permanece igual y el total no baja; en mayor consumo de 100 y 1000 se puede presupuestar un nivel inferior, y en 10000 disminuyen bloques extra. Son ahorros proyectados con precios públicos, no descuentos medidos de la suscripción real de Jorge. Se mantiene el precio pagado reportado por separado. El ahorro por caché continúa como contrafactual; esta prueba no lo convierte en una optimización LLM ejecutada.
