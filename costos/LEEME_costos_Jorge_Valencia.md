# Costos, escenarios y disponibilidad
Elaborado por: Jorge Valencia. Corte documental: 4 de noviembre de 2026.

## Consumo documentado de desarrollo y pruebas

| Componente | Evidencia | Importe USD |
|---|---|---:|
| GPT-5 | 48 generaciones de rh_costos (2).csv, recalculadas y cruzadas con trazas | 0.13586950 |
| ElevenLabs | Nueve sesiones únicas recuperadas en archivos de metadata | 0.14170076 |
| Subtotal documentado | Dos componentes anteriores | 0.27757026 |
| Gasto completo del proyecto | Construcción y consumo faltante | Desconocido |

No es una factura ni todo lo gastado en la cuenta. Los registros corresponden a pruebas/desarrollo, aunque el CSV original diga operacion. No se interpreta el importe de metadata de un plan gratuito como dinero efectivamente pagado. Las suscripciones gratuitas/prueba reportadas no convierten consumo en cero.

La documentación de ElevenLabs define cost_fiat en USD; esto resuelve la moneda antes marcada como pendiente en la evidencia histórica. LLM y plataforma son componentes del mismo total. No se duplican como cargos ni se cuenta una sesión escrita de 601 segundos como 601 segundos de voz. [Definición oficial](https://elevenlabs.io/docs/changelog/2026/7/6).

Para GPT-5 se aplican 1.25/0.125/10 USD por millón de entrada/caché/salida, concordantes con el registro y la [ficha oficial consultada](https://developers.openai.com/api/docs/models/gpt-5). Los 2,176 tokens de caché ya están dentro de los 53,918 de entrada. Salida: 7,092. Fórmula: ((entrada−caché)×1.25+caché×0.125+salida×10)/1,000,000. El usage del proveedor es la fuente del conteo; versión interna del tokenizer no informada.

costos.csv conserva 135 registros de n8n más nueve sesiones. Vacío significa importe desconocido/no sumable, no cero. Solo filas incluido_subtotal=si entran en el subtotal; los componentes informativos no se suman otra vez. Reservas de presupuesto, referencias de loop y conteos auxiliares no se convierten en otras generaciones.

## Casos completos y corrección

Tres aprobaciones trazables: YTLRX08S4 USD 0.01100750; YTLS2ZE8C USD 0.01113875; YTLSBKE8E USD 0.01313250. El caso YTLS6SW04 completó especialistas, corrigió V1→V2 y terminó rechazado por RH: USD 0.01283625 iniciales + 0.00396700 adicionales = 0.01680325. El error temprano sin generación no prueba costo total cero. Una consulta hablada de 67 segundos registró USD 0.07805611, con USD 0.00327175 de LLM incluido; su archivo es una evidencia de voz, no una media representativa.

## Escenarios de operación mensual

Son proyecciones de sensibilidad a 100/1,000/10,000 casos, no pruebas de capacidad de la muestra de quince empleados. Base usa el promedio de once recorridos que completaron los cuatro especialistas (0.011785636364 USD/caso), incluido uno con corrección. Mayor consumo usa el caso de seis llamadas (0.01680325 USD/caso) en todos los casos. Se excluye el recorrido incompleto de dos llamadas del promedio. No se presupuestan búsquedas /lft adicionales ni reintentos fuera de esos recorridos.

Supuestos base: 20% de casos con una sesión hablada de 67 s; 30% con dos mensajes escritos; tres mensajes Telegram por caso; un panel abierto una hora/día, 22 días/mes. Mayor consumo: 50% con voz de 120 s; 40% con cuatro mensajes escritos; cinco mensajes Telegram; cuatro horas de panel/día. Los grupos voz/texto se consideran separados. Cada consulta de voz usa una herramienta; cada mensaje de texto, una herramienta, como supuesto de dimensionamiento.

El LLM de voz se escala desde USD 0.00327175/67 s y el de texto desde USD 0.00281365/dos mensajes. Esta linealidad es una estimación, no medición de más conversaciones. Se usa una suscripción ilustrativa cuyo cupo de minutos cubre toda la voz: no se añade de nuevo un cargo por esos minutos. Mensajes escritos: USD 0.003 cada uno; LLM aparte. No se aplican promociones, burst, impuestos ni telefonía. [Tarifas ElevenAgents](https://elevenlabs.io/pricing/agents).

| Escenario | Casos/mes | USD estimados¹ | Ejecuciones n8n² | Referencia n8n EUR/mes³ |
|---|---:|---:|---:|---:|
| base | 100 | 7.51 | 1,722 | 20 |
| base | 1,000 | 37.08 | 5,142 | 50 |
| base | 10,000 | 449.84 | 39,342 | Cotizar |
| mayor_consumo | 100 | 24.68 | 6,012 | 50 |
| mayor_consumo | 1,000 | 125.78 | 12,402 | Cotizar |
| mayor_consumo | 10,000 | 1257.84 | 76,302 | Cotizar |

¹ Incluye GPT-5, LLM de ElevenLabs, hosting de texto y la suscripción ilustrativa de ElevenLabs. No incluye n8n, construcción, conceptos no recuperados ni impuestos. Desglose y planes en escenarios.csv. No es un total cerrado del ecosistema.

² Cuenta mensajes raíz de Telegram, webhooks de consultas y refrescos del panel. No multiplica por todos los nodos ni cuenta otra vez las invocaciones del subworkflow. Es una estimación que debe contrastarse con el contador del plan y sus exclusiones. Panel: 1,342 ejecuciones base o 5,302 de mayor consumo, incluidas 22 aperturas mensuales. No incluye pestañas adicionales ni llamadas fallidas/reintentos extra.

³ Starter: EUR 20/mes equivalentes facturados anualmente con 2,500 ejecuciones; Pro: EUR 50 con 10,000. Son referencias, no contratos activados. Se deja cotización pendiente por encima del cupo, y EUR/USD sin sumar por falta de tipo de cambio. [Precios n8n](https://n8n.io/pricing/). La cuota y las exclusiones del contador se consultan en el [centro de ayuda](https://support.n8n.io/article/can-you-reset-my-executions); prevalece el cupo particular reportado por Jorge para esta prueba.

## Optimización y calidad

Contrafactual contable: sin descuento de caché las mismas generaciones sumarían USD 0.13831750; el importe registrado es USD 0.13586950: diferencia USD 0.00244800. No se ejecutó un A/B ni se afirma mejora semántica; las salidas observadas son las mismas bajo ambos cálculos.

Propuesta aún no aplicada: pasar el refresco automático del panel de 60 a 300 segundos reduciría 80% de las llamadas de polling, manteniendo consulta inicial y botón manual. El indicador pierde frescura automática de uno a cinco minutos. No se propone quitar revalidación de saldo/cobertura/versiones al aprobar. Medir antes/después: ejecuciones por hora visible, antigüedad de datos, errores y coherencia tras actualizar. La comparación económica no sustituye la prueba de calidad exigida.

## Disponibilidad durante evaluación

Jorge reportó el 4 de noviembre: prueba gratuita n8n de 14 días, 145 de 10,000 ejecuciones utilizadas (1.45%); restan aritméticamente 9,855 y reporta 12 días de prueba. No se leyó facturación directamente ni se dispone de fecha/hora final exacta. No se presupone renovación gratuita o suscripción pagada.

Un pase de acceso por 30 días no mantiene n8n activo durante 30 días. La página puede continuar publicada en GitHub, mientras sus consultas y el bot dependan de la vigencia de n8n y de las cuotas de los proveedores. Antes de entregar: anotar fecha final exacta, compararla con la evaluación y acordar disponibilidad. Durante preparación, cerrar el panel cuando no se use evita refrescos innecesarios, sin cambiar su código.

## Archivos y pendientes

- costos.csv: 144 registros de consumo/referencias, sin conversaciones ni secretos.
- escenarios.csv: seis escenarios con desglose, moneda y supuestos.
- Sesiones_consolidadas_Jorge_Valencia.json: nueve sesiones, importes y fuentes con hashes.
- Resumen_y_supuestos_Jorge_Valencia.json: aritmética, limitaciones y disponibilidad reportada.
- Pendiente: costo de construcción, consumo no recuperado de cuenta, cotización superior n8n, fecha final exacta, instalación reproducible y comparación A/B con calidad. No presentar este subtotal como gasto completo.
