# Costos, tokens y escenarios
Elaborado por: Jorge Valencia.

## Referencia a la Guía del estudiante

De acuerdo con la **Guía del estudiante, páginas 9–10 y 13**, se pide registrar consumo, tarifas, costos por llamada y etapa y proyecciones, diferenciando medición de estimación.

Los CSV permiten filtrar y recalcular; los JSON conservan conciliaciones y supuestos. Un dato desconocido no se trata como costo cero. La referencia identifica el requisito; su cumplimiento se contrasta con los archivos y resultados enlazados, no solamente con la existencia de la carpeta.

## Qué contiene y en qué formato

| Archivo o carpeta | Formato | Qué contiene y qué hacer con él |
|---|---|---|
| [Conciliacion_costos_Jorge_Valencia.json](Conciliacion_costos_Jorge_Valencia.json) | JSON (.json) | Recalculo de 48 generaciones, cruce con trazas y costo incremental del loop. |
| [costos.csv](costos.csv) | CSV UTF-8 (.csv) | Ledger de 144 registros: 135 de n8n y nueve sesiones de ElevenLabs, sin duplicar componentes. |
| [pagos_reportados.csv](pagos_reportados.csv) | CSV UTF-8 (.csv) | Recarga OpenAI y mensualidad n8n declaradas por el autor; separadas del consumo por llamada. |
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
- [Índice de evidencias](../evidencias/README.md): resultados y archivos relacionados.
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

## HR-Agent- BYD: pagos reportados y consumo

De acuerdo con la **Guía del estudiante, páginas 9–10**, el registro debe distinguir consumo, cargos de plataforma, importes incluidos y adicionales. Se agregó [pagos_reportados.csv](pagos_reportados.csv) para que una recarga de saldo no se confunda con consumo de tokens. El nombre **HR-Agent- BYD** es la denominación proporcionada por Jorge Valencia; no se presenta como nombre comercial verificado de un plan de n8n.

| Concepto | Importe USD | Periodicidad y significado |
|---|---:|---|
| OpenAI API | 5.00 | Una recarga de saldo. Jorge confirma que no ha realizado otras; el uso se descuenta de ese saldo |
| n8n | 20.00 | Suscripción mensual pagada, según declaración del autor |
| Desembolso identificado reportado | 25.00 | Suma de esa recarga y un mes de n8n; no es un costo mensual de USD 25 |

Fuente: declaraciones de Jorge Valencia recibidas el 21 de noviembre de 2026. La fecha exacta de pago, los impuestos y el saldo actual de OpenAI no constan en estas declaraciones. Los USD 20 son el importe mensual reportado, no una cotización consultada en el catálogo de n8n.

**Cómo conciliar:** costos.csv conserva 144 registros de uso y sus subtotales identificados; pagos_reportados.csv conserva dos movimientos reportados de dinero. Las llamadas OpenAI consumen la recarga ya pagada: no calcular USD 25 + USD 0.13586950 como desembolso. El importe de metadata de ElevenLabs no demuestra por sí solo un pago adicional. El subtotal de uso USD 0.27757026 y el desembolso USD 25 tienen alcances distintos y se leen por separado.

Los registros de uso corresponden a un corte histórico y no permiten deducir el saldo actual como 5 menos el subtotal GPT-5. Las pruebas posteriores y el uso fuera del corte no se reconstruyen con esa resta. El costo fijo mensual confirmado por el autor es USD 20 de n8n; el consumo futuro de API se estima por separado.

**Proyecciones históricas:** escenarios.csv conserva las hipótesis y tarifas fechadas del 4 de noviembre, incluyendo referencias de planes en EUR. No se sustituyen silenciosamente por la suscripción USD 20: no se han verificado las cuotas del nuevo plan para garantizar que soporte todos los volúmenes proyectados. El reporte antiguo de prueba gratuita queda identificado como histórico en Resumen_y_supuestos.

Para Excel, abrir ambos CSV como UTF-8 delimitado por comas. Mantener IDs y fechas como texto al importar. No unir los dos registros para sumar indistintamente pagos y consumo.
