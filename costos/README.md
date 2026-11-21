# Costos, tokens y escenarios
Elaborado por: Jorge Valencia.

## Propósito y relación con la guía

Guía pp.9–10: uso por llamada/etapa/caso, tarifas fechadas, voz y escenarios base/mayor consumo.

## Qué contiene y en qué formato

| Archivo o carpeta | Formato | Qué contiene y qué hacer con él |
|---|---|---|
| [Conciliacion_costos_Jorge_Valencia.json](Conciliacion_costos_Jorge_Valencia.json) | JSON (.json) | Recalculo de 48 generaciones, cruce con trazas y costo incremental del loop. |
| [costos.csv](costos.csv) | CSV UTF-8 (.csv) | Ledger de 144 registros: 135 de n8n y nueve sesiones de ElevenLabs, sin duplicar componentes. |
| [escenarios.csv](escenarios.csv) | CSV UTF-8 (.csv) | Seis proyecciones: base/mayor consumo a 100, 1,000 y 10,000 casos mensuales. |
| [Esquema_registro_Jorge_Valencia.md](Esquema_registro_Jorge_Valencia.md) | Markdown (.md) | Interpretación de cada campo de costos y reglas contra dobles conteos. |
| [resumen_por_caso.csv](resumen_por_caso.csv) | CSV UTF-8 (.csv) | Generaciones y subtotal GPT-5 por caso del corte; desconocidos separados de cero. |
| [resumen_por_etapa.csv](resumen_por_etapa.csv) | CSV UTF-8 (.csv) | Tokens/caché/salida y subtotal GPT-5 por cada especialista. |
| [Resumen_y_supuestos_Jorge_Valencia.json](Resumen_y_supuestos_Jorge_Valencia.json) | JSON (.json) | Supuestos, alcance de la suma, disponibilidad reportada y límites de medición. |
| [Sesiones_consolidadas_Jorge_Valencia.json](Sesiones_consolidadas_Jorge_Valencia.json) | JSON (.json) | Nueve sesiones únicas de ElevenLabs, duración, créditos y desglose reportado. |

## Cómo utilizarlo

Abrir costos.csv y el esquema del registro. Filtrar tipo_registro=generacion para auditar GPT-5; sumar solo incluido_subtotal=si para el subtotal identificado. Consultar resúmenes y escenarios por separado.

## Entorno y configuración

CSV y JSON son registros de medición/cálculo, no automatizaciones. Pueden abrirse en Excel; importarlos como UTF-8 y conservar identificadores como texto.

## Validación y resultado esperado

Conciliar 48 generaciones con trazas; no sumar de nuevo componentes ElevenLabs, reservas o filas resumen. Campos vacíos representan dato no informado, no cero.

## Relaciones con el proyecto

- [Guía general](../README.md): requisitos, instalación, inicio, credenciales, parada y solución de problemas.
- [Índice de evidencias](../evidencias/indice.md): resultados y archivos relacionados.
- [Matriz de pruebas](../tests/pruebas.csv): entradas, esperados y resultados observados.


## Lectura del registro y fórmula

En costos.csv, registro_id/llamada_id vinculan cada fila con su caso y etapa; tipo_registro distingue generación, conteo auxiliar, evento, referencia de loop y conversación. origen_dato indica la fuente, estado/reintento describen el resultado cuando están informados, y las tarifas se acompañan de fecha/fuente. La descripción campo por campo está en Esquema_registro_Jorge_Valencia.md.

Para GPT-5, el corte utiliza entrada USD 1.25, caché USD 0.125 y salida USD 10 por millón. Caché está incluida en tokens_entrada y razonamiento está incluido en tokens_salida. La fórmula aplicada es:

```text
((entrada - cache) * tarifa_entrada
 + cache * tarifa_cache
 + salida * tarifa_salida) / 1,000,000
```

Las 48 generaciones suman USD 0.13586950. Las nueve sesiones ElevenLabs identificadas suman USD 0.14170076: total documentado USD 0.27757026. Ese subtotal no es una factura ni el gasto completo de construcción/cuenta. Los registros pueden representar consumo de plan gratuito o importes de metadata sin demostrar dinero efectivamente pagado.

## Evitar doble conteo

Sumar importe_usd solo cuando incluido_subtotal=si. Los componentes llm_componente_usd y plataforma_componente_usd ya forman parte del total de sesión. costo_reservado_usd es presupuesto, no cargo. Una referencia de loop apunta a llamadas existentes; no se agrega como otro costo. Un evento sin modelo tiene tokenización no aplicable; un importe desconocido no se vuelve cero.

Los resúmenes por etapa y caso incluyen únicamente generaciones GPT-5 y deben sumar el mismo USD 0.13586950; no se suman de nuevo al ledger. El caso YTLS6SW04 contiene cuatro llamadas iniciales por USD 0.01283625 y dos de corrección por USD 0.003967, total USD 0.01680325. Tres aprobaciones y el rechazo conservan sus estados en resumen_por_caso.csv.

## Escenarios y fuentes

escenarios.csv contiene base y mayor consumo para 100/1,000/10,000 casos mensuales. Declara mezcla de voz/texto, duración, hosting incluido, LLM y ejecuciones de panel. Son proyecciones, no pruebas de carga. Los importes EUR y USD se mantienen separados. Resumen_y_supuestos conserva las hipótesis y el alcance del corte.

Las tarifas históricas se contrastaron con [GPT-5](https://developers.openai.com/api/docs/models/gpt-5), [ElevenAgents](https://elevenlabs.io/pricing/agents) y [n8n](https://n8n.io/pricing/) en la fecha que acompaña al análisis; no se presentan como una cotización actual. [ElevenLabs define cost_fiat en USD](https://elevenlabs.io/docs/changelog/2026/7/6). Una sesión escrita abierta no equivale a minutos de voz.

El análisis de caché compara el mismo uso con y sin descuento: USD 0.13831750 frente a USD 0.13586950. Es un contrafactual contable, no una medición A/B de calidad. Los costos no recuperados, una tarifa no informada o un tipo de cambio no fijado permanecen desconocidos en vez de completarse con supuestos ocultos.
