# Conciliación de costos y trazas
Elaborado por: Jorge Valencia. Revisión: 4 de noviembre de 2026.

## Resultado del corte

Fuente: rh_costos (2).csv, cruzada con rh_trazas (1).csv y rh_solicitudes (1).csv. Se utilizan las tarifas históricas registradas, no se afirma que sean una cotización vigente.

- 135 filas: 48 generaciones, 48 conteos auxiliares, 38 eventos sin modelo y una referencia de loop.
- Las 48 generaciones tienen su llamada_id en las trazas y no hay llamada_id duplicados en costos.
- Las 48 fórmulas recalculadas coinciden con los importes del CSV.
- Entrada: 53,918 tokens; salida: 7,092; caché: 2,176, incluida en entrada.
- Total calculado GPT-5: **USD 0.13586950**, aproximadamente USD 0.14. No es una factura ni el gasto completo del proyecto.

Fórmula aplicada por fila: ((entrada − caché) × tarifa_entrada + caché × tarifa_caché + salida × tarifa_salida) / 1,000,000. Tarifas del corte: 1.25 / 0.125 / 10 USD por millón; gpt-5, standard, fecha registrada 2026-11-01. Conteos procedentes de usage del proveedor; no se volvió a tokenizar el mensaje visible. Versión interna del tokenizer no informada.

## Casos de muestra

| Caso | Estado persistido | Generaciones | Costo GPT-5 USD |
|---|---|---:|---:|
| VAC-20261102-YTLRX08S4 | Aprobada | 4 | 0.01100750 |
| VAC-20261102-YTLS2ZE8C | Aprobada | 4 | 0.01113875 |
| VAC-20261102-YTLS6SW04 | Rechazada | 6 | 0.01680325 |
| VAC-20261102-YTLSBKE8E | Aprobada | 4 | 0.01313250 |

## Corrección y cambio frente al CSV anterior

El caso YTLS6SW04 consumió USD 0.01283625 en sus cuatro primeras generaciones y USD 0.00396700 adicionales en L5/L6; total USD 0.01680325. El subtotal de loop no se suma otra vez.

Respecto a rh_costos (1).csv, las 133 filas anteriores permanecen iguales. Se añaden VOZ-105-EV y VOZ-114-EV, eventos sin modelo. Por eso las generaciones y su total monetario no aumentan.

## Qué no está incluido

Las reservas previas de presupuesto no son cargos y se excluyen. Los conteos auxiliares no se contabilizan como otras generaciones; si su costo no está informado, se conserva desconocido. Este CSV no incluye filas del proveedor ElevenLabs ni duración de conversación: sus eventos voz_herramienta corresponden a la herramienta n8n. Debe cruzarse con los metadatos de ElevenLabs ya obtenidos, sin duplicar el LLM incluido en su cargo total.

Las filas están etiquetadas operacion, pero proceden de demostraciones/pruebas: documentar el uso observado sin presentar esa etiqueta como producción. Las pruebas sin importe informado, incluido el error temprano YTLRG1G9I sin generación en este corte, no se declaran de costo total cero.

## Avance de recopilación

Quedan reunidos los cuatro workflows y los cuatro registros: solicitudes, reservas aprobadas, trazas y costos. Falta consolidar voz/plataformas/desarrollo, proyecciones y evidencias de interfaz, Actions y controles todavía no probados. Estos archivos no completan por sí solos toda la rúbrica.

Siguiente evidencia sencilla: captura general del panel publicado, con los tres KPI, fuente y fecha de actualización visibles, sin filtros. Servirá para contrastar el estado visible con este corte. No se cambió el sitio ni n8n.
