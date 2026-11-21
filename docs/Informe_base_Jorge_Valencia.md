# RH Vacaciones BYD: solución integrada de consulta y decisión de RH
Elaborado por: Jorge Valencia. Borrador técnico y empresarial, corte documental: 4 de noviembre de 2026.

**Estado:** contenido base del informe. Aún no es la versión final diagramada de 8–12 páginas ni declara satisfechos todos los requisitos. Los anexos y la matriz distinguen lo ejecutado, lo confirmado por Jorge, lo configurado y lo pendiente.

## 1. Problema, usuario y alcance

El proyecto utiliza BYD México como escenario del sector automotriz para apoyar a una persona de Recursos Humanos que revisa solicitudes de vacaciones. El problema consiste en reunir fechas, saldo, cobertura y prima estimada en una propuesta trazable, evitando que una respuesta generada por IA sustituya la decisión humana.

El alcance comprende quince empleados ficticios, EMP-001 a EMP-015, en tres equipos de cinco. Se usan datos, salarios y reglas operativas sintéticos; el sistema no representa políticas verificadas de BYD México ni es un sitio oficial de la empresa. Las integraciones con Telegram, n8n, OpenAI, GitHub y ElevenLabs son reales, pero las operaciones empresariales permanecen en modo SIMULADO. No se realizan pagos ni se procesan datos reales de personal.

Una solicitud comienza con empleado y fechas en Telegram. Termina como propuesta revisada pendiente de decisión, decisión de prueba registrada o detención con motivo observable. Se excluyen nómina, finiquitos, turnos industriales complejos, salarios variables y decisiones laborales reales. La consulta legal tiene alcance informativo y se deriva a RH cuando falta evidencia o se necesita interpretación profesional.

## 2. Arquitectura y transferencia de información

**Evidencias de apoyo:** [E-DAT-01](../evidencias/indice.md#e-dat-01).

Telegram tiene un único receptor en n8n. El flujo verifica acceso, valida comando, asigna caso_id, recupera información, calcula con reglas y coordina cuatro especialistas. Los resultados se guardan antes de solicitar una decisión. Aprobar/rechazar exige usuario autorizado, folio y versión; el proceso revalida la propuesta y conserva control de escritura para evitar reservas duplicadas.

GitHub Pages aloja HTML, estilos, JavaScript y el widget HR assistant BYD. El sitio consulta una proyección pública de campos permitidos de rh_solicitudes. Esa actualización ocurre al abrir y cada 60 segundos mientras la página está visible, con control manual y respaldo fechado. GitHub Actions valida y publica el sitio; no atiende conversaciones ni es un paso intermedio de cada refresco de datos.

ElevenLabs consulta el mismo registro mediante dos herramientas de servidor autenticadas hacia n8n. El asistente puede consultar estado y saldo; las decisiones siguen en Telegram. El folio VAC-20261102-YTLSBKE8E vincula solicitud, especialistas, aprobación, reserva, costos y consulta de estado en el widget. Las consultas de saldo pueden tener un identificador de consulta VOZ separado; no se inventa un caso VAC cuando solo se leyó saldo.

## 3. Datos y persistencia

**Evidencias de apoyo:** [E-P01-01](../evidencias/indice.md#e-p01-01), [E-P02-01](../evidencias/indice.md#e-p02-01).

La implementación utiliza once tablas lógicas: empleados, aprobadas, calendario, reglas, fuentes LFT, primas pagadas, solicitudes, trazas, costos, control de aprobaciones y accesos. Los esquemas y CSV iniciales de recreación acompañan el proyecto. Las tablas de salida se crean vacías; los códigos de acceso y sus huellas permanecen privados.

El corte recibido contiene trece solicitudes correspondientes a siete empleados distintos y tres solicitudes aprobadas. Las reservas incluyen cinco filas: tres generadas por el flujo, con catorce días, y dos precargadas para cobertura, con diez días. Por tanto, las cinco reservas no equivalen a cinco casos aprobados mediante el bot. Cada aprobación del corte tiene una única reserva, con empleado, equipo, fechas de negocio y días coincidentes.

Se conserva una incidencia del primer caso aprobado: necesitó conciliación por formato de fecha, verificando la reserva existente sin insertar otra. Las dos semillas históricas de la instancia usan medianoche UTC y su interpretación local debe revisarse; no se oculta esa diferencia ni se atribuye a las tres aprobaciones que sí conciliaron.

## 4. Orquestador y especialistas

**Evidencias de apoyo:** [E-P01-01](../evidencias/indice.md#e-p01-01).

El orquestador es lógica de n8n y funciones verificables, no una quinta llamada al modelo. Controla acceso, orden, tiempo, presupuesto, estados y corrección. Recepción contrasta texto y campos; Consulta evalúa suficiencia de registros y selecciona fuentes permitidas; Propuesta explica cifras calculadas; Revisión verifica coherencia, fuentes, alertas y simulación. La revisión puede impedir liberar el resultado, pero no aprueba vacaciones.

Los cuatro especialistas usan GPT-5 mediante un subworkflow de llamada controlada. Cada uno tiene instrucciones, entrada y esquema de salida diferentes. El caso_id se conserva en el sobre de llamada/traza, sin introducir campos no admitidos en el JSON estricto del especialista. Se extrajeron los cuatro contratos de los workflows finales y se comprobaron tipos, campos y arrays de las 48 salidas históricas recibidas. Eso verifica estructura, no la corrección semántica universal de cualquier respuesta.

Los cálculos de días, saldo, cobertura y prima se realizan mediante reglas y código; el modelo no es la autoridad de cálculo. Propuesta debe reflejar los importes y limitaciones sin convertir valores desconocidos a cero ni afirmar aprobación. Las fuentes de /nuevo son registros autorizados; la búsqueda legal general pertenece a la ruta separada /lft.

## 5. Skills, loops y límites

**Evidencias de apoyo:** [E-P11-01](../evidencias/indice.md#e-p11-01), [E-P09-01](../evidencias/indice.md#e-p09-01).

Hay dos skills específicos: evaluar-vacaciones-byd, versión 1.0.1 en el export final, y proteger-operacion-rh-byd, versión 1.0.0. n8n carga snapshots compilados, verifica integridad y proyecta reglas por rol; guardar SKILL.md en GitHub no cambia automáticamente el runtime. Los archivos de entrega coinciden por SHA-256 con los snapshots extraídos.

El loop de calidad genera propuesta, revisa y permite una corrección. El de seguridad/costo autoriza el paso, reserva presupuesto, ejecuta, persiste consumo y vuelve a comprobar límites. La configuración exportada establece máximo de seis generaciones, 1,500 tokens de salida por llamada de especialistas, 120 segundos y USD 0.10 por caso. Una cifra configurada no sustituye la evidencia de bloqueo al agotarse.

El caso YTLS6SW04 muestra V1, revisión validado=false, corrección V2 y revisión validado=true. La corrección incorporó explicación de tasa/base simulada y redacción informativa; los importes se mantuvieron en 875 MXN. Las llamadas L5/L6 añaden USD 0.003967 al mismo caso. Después RH rechazó la solicitud, lo que demuestra que calidad validada y aprobación humana son decisiones distintas.

Ese caso ocurrió antes de los registros de carga del adaptador posterior. Las trazas muestran carga de los dos skills en tres casos posteriores. Se documentan mejora y reutilización sin afirmar que el caso corregido ya incluía una carga que no aparece en su traza. La consolidación docs/P11_Skills_loops_Jorge_Valencia.md relaciona mejora histórica, carga/reutilización posterior y autoevaluación técnica propuesta; sus puntuaciones requieren revisión de Jorge y no constituyen calificación docente. La guía solicita esos elementos, sin exigir explícitamente que toda la evidencia histórica corresponda al mismo recorrido del adaptador posterior.

## 6. Interfaz y agente conversacional

**Evidencias de apoyo:** [E-P03-01](../evidencias/indice.md#e-p03-01), [E-P03-02](../evidencias/indice.md#e-p03-02), [E-P13-01](../evidencias/indice.md#e-p13-01), [E-P14-02](../evidencias/indice.md#e-p14-02).

El panel muestra tres KPI calculados sobre la selección: solicitudes registradas, pendientes y días aprobados. La gráfica de barras por estado tiene cantidades y resumen textual; el color no es el único portador de información. Los filtros afectan indicadores, gráfica e historial; la captura EQ-B mostró un caso de cobertura y valores 1/0/0. Jorge confirmó restablecimiento, ausencia de coincidencias y navegación Tab/Enter. Se conservaron capturas con anchos visibles de 390 y 1366 píxeles, además de teléfono real.

El panel mostró 13 solicitudes, dos pendientes y catorce días aprobados. El CSV persistido tenía cuatro pendientes: la proyección deriva Expirada para dos cuya fecha de vigencia transcurrió, sin escribir ese cambio. Los otros dos son casos antiguos sin metadata de vigencia; no se presentan como propuestas autorizables ahora. La fecha de actualización de la fila tampoco es necesariamente el momento de esa expiración derivada.

La sesión reciente del widget desde Pages realizó consultar_estado_rh y consultar_saldo_rh con éxito: folio aprobado V1 de cuatro días y EMP-005 con seis días, periodo 2026-10-01 a 2027-09-30. La plataforma confirma origen widget y text_only=true; la evidencia hablada histórica se mantiene separada. No se afirma que un chat escrito sea audio hablado.

La configuración activa recuperada usa gpt-5-mini, base LFT con RAG y herramientas POST con Header Auth. La lectura inicial detectó allowlist vacía y max_tokens=-1. Tras la publicación informada por Jorge, una segunda lectura verificó max_tokens=1500; posteriormente se añadió jorgevalba.github.io a la allowlist y se verificó por lectura en Main. Estos cambios de configuración no sustituyen la prueba de rechazo desde otro origen. La captura muestra Manipulation y cinco filtros Content activos, sin sustituir una prueba adversaria. Los límites de GPT-5/n8n no se trasladan automáticamente a ElevenLabs. También se conserva la observación de que el widget flotante cubre contenido móvil y falta cerrar la secuencia inicial de consentimiento.

## 7. Publicación y reproducibilidad

**Evidencias de apoyo:** [E-P12-01](../evidencias/indice.md#e-p12-01), [E-DAT-01](../evidencias/indice.md#e-dat-01).

Se recuperó la ejecución Actions 41396056569: las validaciones ordinarias pasaron, pero el ensayo deliberado introdujo un modo de datos no permitido, el validador devolvió error y tanto el artefacto como la publicación quedaron omitidos. La ejecución 41396256574 validó y publicó. Ambas tienen el mismo commit; la recuperación retiró la inyección del dato inválido, sin una modificación de código entre ejecuciones.

El commit 79697893d19d9d2142dc28af2e2b5987411018ee fue publicado correctamente por la ejecución 41422841647 y sirvió como base verificada de la carpeta local. Los documentos nuevos aún no están en ese commit. La entrega final debe fijar rama/commit después de integrar y verificar, y generar un ZIP del mismo estado.

El manual distingue acceso al sistema existente y recreación independiente, con tablas, vinculación de credenciales, IDs de subworkflow, un único Telegram Trigger, URLs de producción y recuperación. Las plantillas se entregan sanitizadas y sin activar. Aún falta comprobar una instalación independiente y completar el provisionamiento privado de nuevos pases. La matriz P01–P14 mantiene explícitos sus estados parciales en vez de convertir configuración o confirmaciones en pruebas no realizadas.

## 8. Costos y alcance económico

**Evidencias de apoyo:** [E-P14-01](../evidencias/indice.md#e-p14-01), [E-COST-01](../evidencias/indice.md#e-cost-01).

El corte rh_costos (2).csv contiene 135 registros: 48 generaciones, 48 conteos auxiliares, 38 eventos sin modelo y una referencia de loop. Las 48 generaciones coinciden con las llamadas de trazas. Con las tarifas históricas registradas —entrada 1.25, caché 0.125 y salida 10 USD por millón, gpt-5 Standard— suman USD 0.13586950. No es una factura ni una cotización de tarifas futuras.

Se utilizaron 53,918 tokens de entrada, de los cuales 2,176 fueron caché, y 7,092 de salida. La fórmula por llamada es ((entrada−caché)×precio_entrada + caché×precio_caché + salida×precio_salida)/1,000,000. Se excluyen reservas de presupuesto y se evita sumar otra vez el subtotal del loop. Costo desconocido no se transforma en cero.

La sesión reciente de Pages reportó 88 créditos y USD 0.00881365, con USD 0.00281365 de LLM y USD 0.006 de plataforma incluidos. La documentación oficial confirma cost_fiat en USD; no demuestra pago en efectivo. Sus 601 segundos fueron sesión escrita con TTS/ASR cero. Nueve sesiones únicas documentadas suman USD 0.14170076; junto con GPT-5, el subtotal de pruebas identificado es USD 0.27757026, sin afirmar gasto completo de cuenta o construcción.

costos/costos.csv y escenarios.csv separan consumo observado y seis proyecciones a 100/1,000/10,000 casos mensuales. Incluyen supuestos de voz/texto, plataforma, ejecuciones del panel y planes ilustrativos. Los importes USD y EUR permanecen separados; cotización n8n superior a 10,000 ejecuciones y costos no recuperados siguen desconocidos. El contrafactual de caché y la propuesta de polling más lento no se presentan como A/B de calidad ejecutado. Véase costos/LEEME_costos_Jorge_Valencia.md para fuentes y fórmulas.

Jorge reporta prueba n8n de 14 días: 145/10,000 ejecuciones utilizadas y doce días restantes al 4 de noviembre. La fecha final exacta requiere confirmar; un pase de treinta días no prolonga la vigencia del servicio.

## 9. Riesgos, pendientes y reflexión individual

**Evidencias de apoyo:** [E-P04-01](../evidencias/indice.md#e-p04-01), [E-P05-01](../evidencias/indice.md#e-p05-01), [E-P06-01](../evidencias/indice.md#e-p06-01), [E-P07-01](../evidencias/indice.md#e-p07-01), [E-P08-01](../evidencias/indice.md#e-p08-01), [E-P10-01](../evidencias/indice.md#e-p10-01).

La evidencia confirma una integración real con datos ficticios, aprobaciones persistidas, especialistas diferenciados, panel coherente y consultas conectadas. No acredita todavía todas las pruebas adversarias y de límite: se añadió evidencia de denegación de acceso por Telegram y rechazo de petición de secretos antes de especialistas. Los ensayos 246–249 documentan controles aislados de presupuesto/llamadas, fallo DNS y reproducción secuencial de un evento persistido; no prueban por sí solos persistencia integral del bloqueo, caída real de OpenAI ni concurrencia. Repetir /aprobar con un evento nuevo no sustituye ese último ensayo.

La demostración debe mantener servicios y accesos disponibles. Los controles de códigos otorgan acceso compartido a los casos ficticios; no aíslan un expediente personal por invitado. Las exportaciones de n8n no especifican desactivación de guardado de ejecuciones, por lo que esa afirmación requiere revisión efectiva. No se publican claves, pases, IDs personales ni conversaciones completas.

La reflexión final de Jorge debe explicar qué decisión facilita el sistema, qué aportó cada agente, qué control evitó una acción incorrecta, qué cambió tras las incidencias y qué verificaría antes de usar datos reales. La declaración detallada de IA, fuentes/licencias, video y defensa acompañarán la versión final. No se inventan mejoras de productividad, satisfacción, ahorro ni beneficios causales que no se midieron.

## Referencias internas y fuentes

- Guía del estudiante, consigna del 30 de octubre de 2026, pp. 2–10 y 12–15.
- docs/Manual_instalacion_Jorge_Valencia.md: procedimiento y fuentes oficiales n8n.
- docs/Actions_evidencia_Jorge_Valencia.md: enlaces a ejecuciones verificadas.
- agentes/Contratos_Jorge_Valencia.json y agentes/voz/Configuracion_activa_Jorge_Valencia.json.
- evidencias/registros/: conciliaciones y resultados; evidencias/Pages_herramientas_verificadas_Jorge_Valencia.json.
- costos/Conciliacion_costos_Jorge_Valencia.json; tests/pruebas.csv; web/fonts/OFL-Montserrat.txt.

Antes de diagramar la versión final, cerrar o declarar explícitamente cada pendiente y actualizar los cortes. La versión paginada debe cumplir 8–12 páginas sin anexos; este borrador Markdown no demuestra esa extensión.
