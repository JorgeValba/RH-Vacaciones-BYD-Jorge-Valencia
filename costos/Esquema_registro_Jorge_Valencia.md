# Registro de costos y tokenización
Elaborado por: Jorge Valencia. Revisión estructural: 21 de noviembre de 2026. Tarifas y consumo conservan las fechas de sus fuentes históricas.

La guía (pp. 9–10) exige registro por llamada, fuente/fecha de tarifa, resumen por etapa/caso y escenarios. [costos.csv](costos.csv) reúne 135 filas del CSV n8n y nueve sesiones ElevenLabs, sin duplicar componentes. [Resumen por etapa](resumen_por_etapa.csv), [por caso](resumen_por_caso.csv), [escenarios](escenarios.csv) y [explicación económica](README.md).

| Campos | Interpretación |
|---|---|
| fecha_hora, caso_id, llamada_id, etapa, agente | Fecha/identidad trazable; llamada_id conserva registro_id. Una consulta de saldo sin caso VAC mantiene caso_id vacío. |
| proveedor, modelo | Modelo informado por la fuente; no asignar a todas las conversaciones el modelo configurado después. |
| tokens_entrada, tokens_cache, tokens_salida | Usage medido de GPT-5: caché incluida en entrada; no sumarla otra vez. Conteo no disponible queda vacío. |
| duracion_sesion_seg, text_only | Duración de conversación, no equivalente automático a segundos hablados. Sesión escrita no se cobra como voz por inferencia. |
| tarifa_entrada_millon_usd, tarifa_cache_millon_usd, tarifa_salida_millon_usd | Precios por millón del corte. Unidad de sesión y sus componentes se explican aparte. |
| unidad_cobro, tarifa_unitaria, fecha_tarifa, fuente_tarifa | Modalidad, precio unitario y procedencia. Un campo no informado queda vacío. |
| importe_usd, moneda, incluido_subtotal | importe_usd es el importe identificado, no necesariamente cargo pagado. Sumar únicamente incluido_subtotal=si. |
| llm_componente_usd, plataforma_componente_usd | Partes del total de ElevenLabs, no importes adicionales. |
| importe_incluido_usd, cargo_adicional_usd | Solo si el proveedor lo informa; plan gratuito no autoriza inferir estos valores. |
| estado, reintento, origen_dato, motivo_estimacion | Resultado y fuente medida/calculada/estimada. No reemplazar reintento desconocido por cero. |
| skill_id, loop_id, llamadas_ref | Relacionan el método con generaciones ya contadas; no crean otro gasto. |
| costo_reservado_usd | Cota presupuestaria previa, no cargo. |
| uso_clasificado, grupo_original | Uso real observado de pruebas/desarrollo separado de la etiqueta original operacion. |

Fórmula GPT-5: ((entrada−caché)×1.25+caché×0.125+salida×10)/1,000,000 USD, con tarifas del corte. Las 48 generaciones suman USD 0.13586950. Cada resumen se reconcilia con ese importe; no se agrega como gasto nuevo al ledger.

Fuentes de tokens: usage de la API; no conteo de palabras ni tokenización del mensaje visible. Se mantienen 53,918 entrada, 2,176 caché y 7,092 salida. La versión interna del tokenizer no está informada. El detalle de gpt-5-mini de una sesión está en [metadata](../evidencias/Pages_herramientas_verificadas_Jorge_Valencia.json); no convertir las categorías del proveedor en otra generación.

Límites de la medición: construcción con IA no recuperada; otros consumos fuera del corte; cargo efectivamente pagado e incluidos por plan no conciliados; cotización n8n superior a 10,000 ejecuciones y tipo de cambio no fijados; el contrafactual de optimización no constituye una comparación A/B de calidad. No presentar el subtotal de USD 0.27757026 como gasto total o factura.
