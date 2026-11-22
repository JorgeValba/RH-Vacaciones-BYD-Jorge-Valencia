# Costos, tokens y escenarios de HR-Agent- BYD

Elaborado por: Jorge Valencia. Revisión de tarifas y proyecciones: **21 de noviembre de 2026**. Moneda: USD, sin impuestos.

## Qué exige la guía y cómo se organiza

La **Guía del estudiante, páginas 9–10**, exige uso medido o estimado identificado, fórmula por llamada, tarifas fechadas, resúmenes por etapa y caso, inversión de construcción separada y escenarios de **100, 1 000 y 10 000 casos mensuales**, base y mayor consumo. La página 10 requiere aplicar cuotas y cargos incluidos, sin proyectar una prueba gratuita como permanente. La página 14 evalúa conciliación, escenarios y optimización. La existencia de un archivo no sustituye su evidencia.

| Archivo | Formato | Contenido y uso |
|---|---|---|
| [Costos_auditables_Jorge_Valencia.xlsx](Costos_auditables_Jorge_Valencia.xlsx) | Excel | Nueve hojas con fórmulas; abrir Resumen y después Escenarios presentación. No ejecuta servicios |
| [costos.csv](costos.csv) | CSV UTF-8 | 144 registros de uso histórico: 135 de n8n y nueve sesiones ElevenLabs. Fuente del Registro del Excel |
| [desarrollo_estimado.csv](desarrollo_estimado.csv) | CSV UTF-8 | Veinte unidades de construcción estimadas por texto; separadas de las llamadas reales |
| [tarifas.csv](tarifas.csv) | CSV UTF-8 | Tarifas de tokens, suscripciones, cuotas, extras y servicios gratuitos condicionados, con fuente y fecha |
| [escenarios.csv](escenarios.csv) | CSV UTF-8 | Seis presupuestos mensuales con mezcla, duración, planes, cuotas, extras y total USD; no facturas ni ensayos de carga |
| [pagos_reportados.csv](pagos_reportados.csv) | CSV UTF-8 | Recarga API USD 5 y un mes n8n USD 20 reportados por el autor |
| [resumen_por_caso.csv](resumen_por_caso.csv) / [resumen_por_etapa.csv](resumen_por_etapa.csv) | CSV UTF-8 | Trece folios y cuatro especialistas; subtotales GPT-5 reconciliados |
| [Resumen_general_costos_Jorge_Valencia.png](Resumen_general_costos_Jorge_Valencia.png) | PNG | Tabla de creación, operación, promedio integral y primer mes, derivada del Excel |
| [Escenarios_mensuales_presentacion_Jorge_Valencia.png](Escenarios_mensuales_presentacion_Jorge_Valencia.png) | PNG | Tabla de tres volúmenes × dos escenarios para insertar en una diapositiva |
| [Esquema_registro_Jorge_Valencia.md](Esquema_registro_Jorge_Valencia.md) | Markdown | Definición de campos y reglas de inclusión/doble conteo |
| [Conciliacion_costos_Jorge_Valencia.json](Conciliacion_costos_Jorge_Valencia.json) | JSON | Recalculo de 48 generaciones y relación con las trazas |
| [Sesiones_consolidadas_Jorge_Valencia.json](Sesiones_consolidadas_Jorge_Valencia.json) | JSON | Nueve sesiones únicas, duración y desglose de metadata recibido |
| [Resumen_y_supuestos_Jorge_Valencia.json](Resumen_y_supuestos_Jorge_Valencia.json) | JSON | Parámetros, fuentes, pagos, alcance y cifras completas sin redondear |
| [verificar_desarrollo.py](verificar_desarrollo.py) | Python | Verificación reproducible de caracteres, deduplicación, hashes y equivalente API; sin red ni credenciales |

Los CSV pueden abrirse en Excel mediante **Datos → Desde texto/CSV → UTF-8 → coma**. Conservar folios, IDs y fechas como texto. No requieren claves ni instalación de servicios. El libro no contiene macros. Cerrar el archivo detiene su uso; no detiene los servicios de n8n/ElevenLabs.

## Hojas del Excel y ubicación de configuraciones

| Hoja | Qué contiene y cómo se usa |
|---|---|
| Resumen | Uso histórico, pagos, tres aprobados y rechazo separado; comparación de caché y costo/calidad del loop |
| Desarrollo | B6:B13: caracteres/token, proporción de entrada, reconstrucciones, tarifas API, Plus, meses y atribución. B14 calcula Plus atribuido. Filas 18–37: veinte unidades |
| Casos y etapas | Agrupaciones calculadas desde Registro, sin volver a sumarlas al total |
| Registro | Los 43 campos del ledger y dos columnas que recalculan/contrastan 48 generaciones |
| Tarifas | Fuente de precios y cuotas normales. Columna E contiene valores editables; fuente y fecha permanecen junto a cada tarifa |
| Escenarios | Seis filas: mezcla y duración editables, fórmulas de uso, elección de planes, cuotas, extras, totales y promedio integral. Encabezados identifican cada parámetro |
| Pagos | Dos declaraciones de dinero pagado. No convertirlas en consumo por llamada |
| Presentación | Cuatro indicadores enlazados al escenario base de 100 casos y al desarrollo |
| Escenarios presentación | Tres filas con costo mensual base y mayor consumo, enlazadas a Escenarios |

Para actualizar tarifas, modificar Tarifas conservando fuente/fecha. Para explorar demanda, modificar las columnas de mezcla, duración, eventos, días/horas de panel o intervalo en Escenarios; las fórmulas eligen cuotas y recalculan cargos. Los planes de voz se seleccionan por minutos incluidos suficientes. Más de 500 000 ejecuciones n8n requiere cotización; el libro muestra «Cotizar» y no inventa un precio. El modelo no dimensiona ráfagas ni concurrencia.

## Registro y conciliación: páginas 9–10

El Registro conserva **fecha_hora, caso_id, llamada_id, etapa, agente, proveedor, modelo, tokens_entrada, tokens_salida, tokens_cache, duracion_sesion_seg, unidad_cobro, tarifas, importe_usd, moneda, estado, reintento y origen_dato**, además de fuentes e importes incluidos/adicionales. Desarrollo contiene los campos equivalentes para estimaciones. Vacío significa no informado/no aplicable según el esquema; no significa cero.

Para GPT-5, caché es subconjunto de entrada y razonamiento está incluido en salida:

```text
C_llamada = ((entrada − caché) × Pentrada + caché × Pcache + salida × Psalida) / 1 000 000
C_mes = suscripciones normales + variables no incluidos + extras por superar cuota
Promedio integral proyectado = C_mes / casos proyectados
Promedio medido de completados = variable medido de completados / completados
```

Tarifa GPT-5 del corte y contrastada: entrada 1.25, caché 0.125 y salida 10 USD/millón, [fuente oficial](https://developers.openai.com/api/docs/models/gpt-5). Las **48 generaciones suman USD 0.13586950**. Las nueve sesiones ElevenLabs informan **USD 0.14170076** en metadata: subtotal de uso identificado **USD 0.27757026**, no factura ni gasto total histórico.

Tres aprobados trazables: YTLRX08S4, YTLS2ZE8C y YTLSBKE8E: subtotal GPT-5 **USD 0.03527875**, promedio **USD 0.01175958** por aprobado. Rechazo YTLS6SW04: **USD 0.01680325**, separado. Los casos recorren los cuatro especialistas. La voz conectada se relaciona en E-P03-02; no se reparte arbitrariamente su cargo entre los tres casos. Son costos de muestra histórica de demostración/pruebas, no de producción.

Sumar únicamente importe_usd con incluido_subtotal=si. Los componentes LLM/plataforma ya están dentro del total de sesión. Reservas de presupuesto y referencias de loop no son cargos adicionales. Una consulta de tokens auxiliar no se cuenta como otra generación. Orquestador, revisión, skills y loops remiten a las llamadas identificadas; no se duplican. Telegram, validaciones deterministas, HTML y Actions no reciben tokens de LLM por sí mismos; su plataforma se trata por separado. La falta de un importe en una fila no acredita costo total cero.

## Pruebas gratuitas frente a operación sostenible

Se conservan los registros históricos y los pagos declarados. **No se inventa un cargo retroactivo por lo usado gratis.** Las proyecciones nuevas utilizan precios públicos regulares de facturación mensual, sin descuentos iniciales ni renovaciones de prueba. La mensualidad n8n USD 20 declarada por Jorge no acredita qué cupo contrató; permanece en Pagos, mientras los presupuestos utilizan tarifas públicas verificadas.

| Componente | Precio de referencia normal | Aplicación |
|---|---|---|
| n8n Starter | USD 24/mes; 2 500 ejecuciones | Escenario base de 100 |
| n8n Pro-1 | USD 60/mes; 10 000 ejecuciones | Base 1 000 y mayor 100 |
| n8n Pro-2 | USD 144/mes; 50 000 ejecuciones | Base 10 000 y mayor 1 000/10 000 |
| n8n extra Pro-2 mensual | USD 2 por bloque de 1 000 | Mayor 10 000 requiere 27 bloques = USD 54; cupo 77 000 |
| ElevenLabs Starter / Creator / Pro | USD 6 / 22 / 99; 75 / 275 / 1 238 minutos | Voz con minutos suficientes, texto y LLM aparte |
| ElevenLabs Scale / Business | USD 299 / 990; 3 738 / 12 375 minutos | Volúmenes altos con minutos suficientes |
| ElevenLabs texto / minutos extra | USD 0.003/mensaje; USD 0.08/minuto adicional | Solo extras no incluidos. Burst USD 0.16/min no supuesto |
| OpenAI API | Pago por tokens; sin crédito gratuito permanente supuesto | GPT-5 según uso; recarga no se suma otra vez |
| ChatGPT Plus | USD 20/mes de referencia para construcción | Un mes atribuido al desarrollo; no cubre la API operativa |

**Fuentes consultadas el 21 nov 2026:** [n8n catálogo](https://n8n.io/pricing/), [n8n cuotas y extras](https://support.n8n.io/article/can-i-add-more-executions), [ElevenAgents](https://elevenlabs.io/pricing/agents), [ChatGPT Plus](https://help.openai.com/en/articles/6950777-what-is-chatgpt-plus). La página n8n puede mostrar EUR y facturación anual: no se convirtió EUR a USD ni se mezcló un precio anual con extras mensuales. Los USD mensuales se verificaron directamente en la [lista pública de Paddle para los SKU oficiales 845270, 845271 y 845272](https://checkout.paddle.com/api/2.0/prices?product_ids=845270,845271,845272&customer_country=US), campo **subscription.price.net**, currency=USD, customer_country=US. El price.net inicial cero corresponde a prueba y se excluye. Impuestos/localización final dependen del checkout; no son facturas del autor.

**Servicios gratuitos condicionados, no trials:** [GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits) se mantiene en USD 0 para la demo educativa pública: sitio <=1 GB y banda suave <=100 GB/mes. Supuesto presupuestario 2 MB por caso: 20 GB a 10 000, sin tráfico adicional. No habilita uso comercial SaaS. [Actions](https://docs.github.com/en/billing/concepts/product-billing/github-actions) en runner estándar público tiene cómputo gratuito; almacenamiento separado, supuesto dentro de 500 MB de artefactos compartidos y 10 GB de caché. La guía oficial especifica cargos de almacenamiento excedente; no se consideran contratados ni medidos. [Telegram ordinario](https://core.telegram.org/bots/faq) no tiene cargo por mensaje; sin paid broadcasts y respetando límites de envío. Los volúmenes mensuales no demuestran concurrencia ni garantizan disponibilidad. Estos ceros tienen condiciones verificables y no derivan de extender una prueba.

## Escenarios mensuales y tabla para presentación

**Mezcla complementaria:** todos los casos recorren Telegram; una fracción añade consultas al mismo registro por voz o texto, no una segunda creación. Base: 20% voz de 67 segundos y 30% texto de dos mensajes; mayor: 50% voz de 120 segundos y 40% texto de cuatro mensajes. Cada sesión de voz supone una herramienta n8n; cada mensaje escrito, una consulta. Telegram: tres eventos/caso base y cinco mayor. Son hipótesis editables, no frecuencias observadas.

**Panel:** una pantalla abierta al día, 22 días/mes, una hora base o cuatro mayor, consulta inicial y sondeo cada 60 segundos mientras visible. Son 1 342 o 5 302 ejecuciones/mes. Más pantallas elevan la demanda. Subworkflows no se cuentan otra vez; el presupuesto aproxima invocaciones raíz según [reglas de n8n](https://support.n8n.io/article/can-you-reset-my-executions), no reproduce su contador de facturación.

**Uso LLM proyectado:** GPT-5 base = media de once casos con los cuatro agentes, USD 0.01178563636/caso; mayor = caso con corrección, USD 0.01680325. LLM ElevenLabs estimado desde metadata: USD 0.00327175 por sesión hablada de 67 s, escalado por duración; texto USD 0.001406825 por mensaje. No son tarifas unitarias publicadas ni una media representativa; se etiquetan estimaciones. GPT-5 mini de voz se factura aparte del GPT-5 directo. No se vuelve a sumar el total de metadata de sesión, porque duplicaría hosting/minutos incluidos.

| Casos / mes | Base USD | Mayor consumo USD |
|---:|---:|---:|
| 100 | 31.51 | 84.68 |
| 1,000 | 97.08 | 269.78 |
| 10,000 | 593.84 | 1,455.84 |

Cada total suma plan n8n suficiente, plan ElevenLabs suficiente, GPT-5, LLM de voz/texto, hosting de texto y extras n8n. No escala la suscripción de manera lineal ni usa Free para cubrir demanda. La voz selecciona el menor paquete cuyo cupo incluido cubre los minutos; **no es una optimización de precio mínimo global** combinando todos los posibles sobreconsumos. Concurrencia, seguridad, SLA y ráfagas necesitan dimensionamiento adicional. No se incluye telefonía externa porque el canal previsto es el widget web.

**Inversión y primer mes:** creación estimada USD 20 de un mes Plus asignado 100%; operación base 100 = **USD 31.51**, promedio integral **USD 0.32/caso**, primer mes creación + operación **USD 51.51**. El costo variable aproximado USD 0.01508408/caso ya está incluido. La creación se suma una vez, no cada mes de operación. Si Plus se mantiene para desarrollo continuo, atribuirlo explícitamente por separado.

## Construcción: prompts, skills y código

Veinte unidades: seis instrucciones/prompts, dos SKILL.md, estructura y código de cuatro workflows y cuatro archivos web. Después de excluir snapshots compilados de skills y doce copias de biblioteca común se cuentan **518 025 caracteres**, con fuentes y SHA-256. IDs EST-DEV son unidades sintéticas de estimación, no llamadas históricas. Fecha/hora indica momento del cálculo.

```text
Salida estimada = ceil(caracteres/4) = 129 512 tokens
Entrada estimada = ceil(salida por unidad × 0.5) = 64 762 tokens
Equivalente API = (64 762 × 1.25 + 129 512 × 10)/1 000 000 = USD 1.37607250
Sensibilidad de tres reconstrucciones = USD 4.12821750
```

Es proxy por caracteres, no tokenizer nativo ni uso real del chat. No reconstruye borradores, historial completo, razonamiento, modelo real, caché o reintentos. Campos desconocidos permanecen vacíos con explicación. ChatGPT Plus fue usado según el autor, con uso incluido; cargo incremental dentro del plan no implica consumo cero. El equivalente API **no se suma** a Plus ni se descuenta de la recarga API. Meses/proporción del Plus son supuestos, no factura ni duración real comprobada. No se valoran horas humanas.

Verificación offline desde raíz: `python costos/verificar_desarrollo.py`. Resultado esperado: veinte unidades y USD 1.37607250. Un cambio de contenido/hash impide aceptar un cálculo antiguo. Requiere Python 3 con biblioteca estándar; no necesita credenciales.

## Pagos reportados, costo y caja

OpenAI USD 5 = una recarga de saldo; n8n USD 20 = un mes reportado: desembolso identificado USD 25. No sumar nuevamente el uso de tokens a esa caja ni inferir saldo actual restando únicamente este corte. No se ha comprobado factura, impuestos o meses adicionales. El escenario de USD 25 reportados + un mes Plus de referencia = USD 45 es una atribución de caja distinta del presupuesto sostenible del primer mes USD 51.51. Todos conservan su alcance; no son tres totales intercambiables.

## Costo y calidad: resultados observados y propuesta

YTLS6SW04 proporciona una comparación observable: V1, cuatro llamadas, **USD 0.01283625**, revisión validado=false por explicación salarial/redacción; dos llamadas de corrección añaden **USD 0.00396700**; V2 validado=true, acumulado **USD 0.01680325**. Calidad validada no equivale a aprobación: RH rechazó después. El loop mejora la validación con un costo adicional acotado, no demuestra ahorro.

Optimización propuesta: reutilizar contexto cacheable y reducir sondeo del panel de 60 a 300 s. El mismo uso sin descuento caché costaría USD 0.13831750 frente a USD 0.13586950: diferencia USD 0.00244800. Es un contrafactual contable, no ensayo A/B de una modificación. El sondeo baja de 1 342 a 286 ejecuciones base y de 5 302 a 1 078 mayor para una pantalla; pierde frescura hasta cinco minutos. No se modifica la revalidación de aprobación ni se eliminan guardrails. La calidad observada del loop y el ahorro propuesto se distinguen: no se afirma una validación integral de calidad de la optimización sin ejecutarla.

## Validación, actualización y problemas frecuentes

Se verifican fórmulas guardadas, seis totales frente al CSV, sumas por caso/etapa, conservación de 144 registros y veinte estimaciones, cambios/restauración de tarifa y pagos, y revisión visual de las tablas. El libro conserva fórmulas y resultados calculados. No se afirma una prueba en la interfaz nativa de Microsoft Excel. Si un total no actualiza, habilitar cálculo automático; si IDs pierden formato al importar, volver a cargar como texto. Las cifras se redondean a dos decimales solo para presentación.

Para otro corte, actualizar ledger, fuentes, metadata, pagos y proyecciones de forma coherente; nunca editar un subtotal para forzar coincidencia. No se consumen créditos para abrir o revisar estos archivos. La [guía general](../README.md) describe servicios y credenciales por nombre; el [índice de evidencias](../evidencias/README.md) y la [matriz de pruebas](../tests/pruebas.csv) relacionan las evidencias del sistema.
