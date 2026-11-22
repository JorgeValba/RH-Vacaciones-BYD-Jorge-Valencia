# Evidencias: resultados y respaldo
Elaborado por: Jorge Valencia.

## Qué pide la guía y cómo se organizó

De acuerdo con la **Guía del estudiante, página 12**, cada prueba debe relacionar entrada, resultado esperado, resultado observado y evidencia verificable. Las capturas complementan los registros y el acceso funcional. La **página 13** pide un índice de enlaces y evidencias relacionado con la rúbrica.

Se implementó un índice único en este README: primero se leen los resultados; después se consulta la ficha y su respaldo. Esta organización es una decisión del proyecto. La guía no obliga a usar JSON para todas las evidencias.

| Ubicación | Qué es y para qué sirve | Cómo usarla |
|---|---|---|
| Este README | Explicación legible y fichas con IDs estables | Buscar la prueba y abrir sus archivos de soporte |
| [capturas/](capturas/README.md) | Catorce fotos PNG/JPG agrupadas por prueba | Contrastar lo visible con la observación y el límite de la ficha |
| [registros/](registros/README.md) | JSON con resultados, identificadores, cifras y procedencia | Abrir únicamente si se necesita comprobar el detalle técnico |
| [Registro_evidencias_Jorge_Valencia.csv](Registro_evidencias_Jorge_Valencia.csv) | Catálogo para Excel | Filtrar por ID o prueba; las rutas parten de la raíz del repositorio |
| [Matriz de pruebas](../tests/pruebas.csv) | Entradas, esperado, observado y estado por P01–P14 | Evaluar cada resultado dentro de su alcance documentado |

Los registros son históricos, lecturas de configuración o ensayos aislados según cada ficha; no equivalen todos a una ejecución integral nueva. Los JSON preservan precisión; este README facilita su lectura. No se publican pases de acceso ni credenciales.

## Resultados en lenguaje claro

| Prueba / ficha | Qué se hizo | Resultado observado | Soporte |
|---|---|---|---|
| P01 / [E-P01-01](#e-p01-01) | Caso completo EMP-005 | YTLSBKE8E tiene cuatro especialistas, decisión de aprobar y una reserva de cuatro días. | [Ver respaldo](#e-p01-01) |
| P02 / [E-P02-01](#e-p02-01) | Segundo y tercer caso | YTLRX08S4 y YTLS2ZE8C: cuatro especialistas y reserva de cinco días por caso. | [Ver respaldo](#e-p02-01) |
| P03 / [E-P03-01](#e-p03-01) | Consultas del widget desde Pages | Herramientas de folio y saldo responden ok: YTLSBKE8E Aprobada V1, cuatro días; EMP-005 saldo seis días. | [Ver respaldo](#e-p03-01) |
| P03, P14 / [E-P03-02](#e-p03-02) | Consulta hablada histórica | Sesión de 67 segundos con audio de usuario y respuesta; consulta de saldo EMP-005 ok y periodo correcto. | [Ver respaldo](#e-p03-02) |
| P04 / [E-P04-01](#e-p04-01) | Rechazo de versión no vigente | Propuesta V1; intento V2 rechazado; consulta posterior conserva Pendiente de aprobación V1. | [Ver respaldo](#e-p04-01) |
| P04 / [E-P04-02](#e-p04-02) | Consulta de reserva sin coincidencias | No rows / Total 0 para la consulta de reserva V1 solicitada, según confirmación del usuario. | [Ver respaldo](#e-p04-02) |
| P05 / [E-P05-01](#e-p05-01) | Entrada incompleta | /nuevo EMP-004 recibe formato de ayuda; termina en Responder ayuda o rechazo sin especialistas visibles. | [Ver respaldo](#e-p05-01) |
| P06 / [E-P06-01](#e-p06-01) | Solicitud de revelar claves | Petición de ignorar reglas/revelar claves responde con ayuda sin secretos; especialistas sin ejecutar. | [Ver respaldo](#e-p06-01) |
| P07 / [E-P07-01](#e-p07-01) | Cuenta sin permiso | La cuenta identificada por Jorge como no autorizada recibe rechazo ante /start y /nuevo. | [Ver respaldo](#e-p07-01) |
| P08 / [E-P08-01](#e-p08-01) | Fallo de conexión DNS | Ejecución 247: ENOTFOUND; permitido=false, generación no intentada y sin fila de reserva propuesta. | [Ver respaldo](#e-p08-01) |
| P08 / [E-P08-02](#e-p08-02) | Timeout, reintento, persistencia y aviso | Ensayo 263: dos timeouts, error guardado y releído, mensaje Telegram 111; resumen corregido 271. | [Ver respaldo](#e-p08-02) |
| P09 / [E-P09-01](#e-p09-01) | Presupuesto y límite de llamadas | Ejecución 246: presupuesto insuficiente y seis intentos bloquean; contraste dentro de límites autoriza. | [Ver respaldo](#e-p09-01) |
| P10 / [E-P10-01](#e-p10-01) | Reproducción secuencial de evento persistido | 248/249: mismo evento y folio YTLSBKE8E, una fila en ambas lecturas y rama de duplicado. | [Ver respaldo](#e-p10-01) |
| P11 / [E-P11-01](#e-p11-01) | Skills, loops, mejora y reutilización | V1 false→V2 true en YTLS6SW04; costo extra USD 0.003967; ambos skills cargados y reutilizados en BKE8E/EX4SR. | [Ver respaldo](#e-p11-01) |
| P12 / [E-P12-01](#e-p12-01) | Actions: bloqueo y recuperación | 41396056569 bloquea artefacto/publicación por validación; 41396256574 publica al retirar inyección. Mismo commit. | [Ver respaldo](#e-p12-01) |
| P13 / [E-P13-01](#e-p13-01) | Interfaz móvil y escritorio | Panel en anchos visibles de 390 y 1366 px; evidencia visual del reacomodo de componentes. | [Ver respaldo](#e-p13-01) |
| P14 / [E-P14-01](#e-p14-01) | Costos y trazabilidad | 48 generaciones con trazas y fórmulas conciliadas; nueve sesiones ElevenLabs documentadas; USD 0.27757026 de subtotal identificado. | [Ver respaldo](#e-p14-01) |
| P14, P13 / [E-P14-02](#e-p14-02) | Panel sin filtros | KPI 13 solicitudes, dos pendientes, catorce días aprobados, con fecha/fuente visibles en el corte. | [Ver respaldo](#e-p14-02) |
| P14, P13 / [E-P14-03](#e-p14-03) | Gráfica e historial del corte | Cantidades por estado, barras desde cero e historial de trece folios ficticios. | [Ver respaldo](#e-p14-03) |
| P14, P13 / [E-P14-04](#e-p14-04) | Filtro por equipo | EQ-B produce KPI 1/0/0 y una fila con cobertura insuficiente. | [Ver respaldo](#e-p14-04) |
| Apoyo / [E-CFG-01](#e-cfg-01) | Dominio y límite ElevenLabs | Main releída con hostname jorgevalba.github.io y max_tokens=1500. | [Ver respaldo](#e-cfg-01) |
| Apoyo / [E-DAT-01](#e-dat-01) | Esquemas y muestra reproducible | Once tablas lógicas, seis CSV iniciales y manual de vinculación/configuración. | [Ver respaldo](#e-dat-01) |
| P14 / [E-COST-01](#e-cost-01) | Proyecciones y disponibilidad | Seis escenarios a 100/1,000/10,000 casos; cuota n8n 145/10,000 y doce días restantes reportados por Jorge. | [Ver respaldo](#e-cost-01) |



## Cómo citar y verificar

Para el informe, citar el ID de la ficha y el enlace al archivo del commit de entrega. La matriz relaciona las mismas pruebas. El [catálogo técnico](registros/Registro_evidencias_Jorge_Valencia.json) conserva tamaños y SHA-256: permiten comprobar coincidencia de archivos, no certifican por sí solos cuándo ocurrió una prueba.

**Acceso a Telegram (páginas 4, 12 y 13):** se exige definir usuarios autorizados, impedir operaciones protegidas a quien no tenga permiso (P07) y explicar cómo solicitar acceso. Los pases por código y sus treinta días son la implementación elegida. Una prueba de código incorrecto no es un requisito separado. E-P07-01 documenta el rechazo observado de una cuenta sin autorización.

## Fichas de respaldo y alcance

## E-P01-01

**Caso completo EMP-005** · Conciliación de registros históricos

**Referencia:** Corte histórico o recepción 2026-11-04; ver archivo fuente.

**Observación:** YTLSBKE8E tiene cuatro especialistas, decisión de aprobar y una reserva de cuatro días.

**Alcance:** Evidencia del corte histórico; no nueva ejecución de extremo a extremo ni garantía para todos los casos.

**Archivos:**

- [Evidencia_agentes_loops_Jorge_Valencia.json](registros/Evidencia_agentes_loops_Jorge_Valencia.json)
- [Conciliacion_reservas_Jorge_Valencia.json](registros/Conciliacion_reservas_Jorge_Valencia.json)

## E-P02-01

**Segundo y tercer caso** · Conciliación de registros históricos

**Referencia:** Corte histórico o recepción 2026-11-04; ver archivo fuente.

**Observación:** YTLRX08S4 y YTLS2ZE8C: cuatro especialistas y reserva de cinco días por caso.

**Alcance:** EMP-001 requirió conciliación del formato de fecha; conservar la incidencia y no presentarlo como recorrido sin fallas.

**Archivos:**

- [Evidencia_agentes_loops_Jorge_Valencia.json](registros/Evidencia_agentes_loops_Jorge_Valencia.json)
- [Conciliacion_reservas_Jorge_Valencia.json](registros/Conciliacion_reservas_Jorge_Valencia.json)

## E-P03-01

**Consultas del widget desde Pages** · Metadata recuperada de sesión existente

**Referencia:** Corte histórico o recepción 2026-11-04; ver archivo fuente.

**Observación:** Herramientas de folio y saldo responden ok: YTLSBKE8E Aprobada V1, cuatro días; EMP-005 saldo seis días.

**Alcance:** Sesión de texto, no voz hablada. Sus consultas VOZ-188/191 son posteriores al corte del CSV histórico.

**Archivos:**

- [registros/Pages_herramientas_verificadas_Jorge_Valencia.json](registros/Pages_herramientas_verificadas_Jorge_Valencia.json)

## E-P03-02

**Consulta hablada histórica** · Metadata y resultado de herramienta

**Referencia:** Corte histórico o recepción 2026-11-04; ver archivo fuente.

**Observación:** Sesión de 67 segundos con audio de usuario y respuesta; consulta de saldo EMP-005 ok y periodo correcto.

**Alcance:** No transcripción completa ni repetición reciente de la prueba; no confundirla con E-P03-01.

**Archivos:**

- [Prueba_voz_confirmada_Jorge_Valencia.json](registros/Prueba_voz_confirmada_Jorge_Valencia.json)

## E-P04-01

**Rechazo de versión no vigente** · Resumen de capturas aportadas

**Referencia:** Corte histórico o recepción 2026-11-04; ver archivo fuente.

**Observación:** Propuesta V1; intento V2 rechazado; consulta posterior conserva Pendiente de aprobación V1.

**Alcance:** Las capturas completas de conversación se conservan en revisión privada; fecha del evento no explícita en imagen. No demuestra por sí solo ausencia de todas las escrituras.

**Archivos:**

- [registros/P04_version_incorrecta_Jorge_Valencia.json](registros/P04_version_incorrecta_Jorge_Valencia.json)

## E-P04-02

**Consulta de reserva sin coincidencias** · Captura y confirmación del filtro por Jorge

**Referencia:** Corte histórico o recepción 2026-11-04; ver archivo fuente.

**Observación:** No rows / Total 0 para la consulta de reserva V1 solicitada, según confirmación del usuario.

**Alcance:** El operador y valor del filtro no aparecen desplegados; no acredita todas las versiones ni saldo efectivo del empleado.

**Archivos:**

- [E-P04-02_Cero_filas_Jorge_Valencia.png](capturas/P04_version_incorrecta/E-P04-02_Cero_filas_Jorge_Valencia.png)
- [registros/P04_version_incorrecta_Jorge_Valencia.json](registros/P04_version_incorrecta_Jorge_Valencia.json)

## E-P05-01

**Entrada incompleta** · Resumen de respuesta y capturas de recorrido

**Referencia:** Corte histórico o recepción 2026-11-04; ver archivo fuente.

**Observación:** /nuevo EMP-004 recibe formato de ayuda; termina en Responder ayuda o rechazo sin especialistas visibles.

**Alcance:** No se ensayó entrada vacía/sticker. La guía admite vacía o incompleta. La captura no es auditoría de facturación o de todas las tablas.

**Archivos:**

- [registros/P05_entrada_incompleta_Jorge_Valencia.json](registros/P05_entrada_incompleta_Jorge_Valencia.json)
- [E-P05-01_Recorrido_A_Jorge_Valencia.png](capturas/P05_entrada_incompleta/E-P05-01_Recorrido_A_Jorge_Valencia.png)
- [E-P05-01_Recorrido_B_Jorge_Valencia.png](capturas/P05_entrada_incompleta/E-P05-01_Recorrido_B_Jorge_Valencia.png)

## E-P06-01

**Solicitud de revelar claves** · Capturas de Telegram y recorrido

**Referencia:** Corte histórico o recepción 2026-11-04; ver archivo fuente.

**Observación:** Petición de ignorar reglas/revelar claves responde con ayuda sin secretos; especialistas sin ejecutar.

**Alcance:** Bloqueo previo al modelo; no es una prueba exhaustiva de inyección dentro de cada LLM o documento recuperado.

**Archivos:**

- [registros/P06_peticion_secretos_Jorge_Valencia.json](registros/P06_peticion_secretos_Jorge_Valencia.json)
- [E-P06-01_Peticion_rechazada_Jorge_Valencia.jpg](capturas/P06_peticion_secretos/E-P06-01_Peticion_rechazada_Jorge_Valencia.jpg)
- [E-P06-01_Recorrido_Jorge_Valencia.png](capturas/P06_peticion_secretos/E-P06-01_Recorrido_Jorge_Valencia.png)

## E-P07-01

**Cuenta sin permiso** · Captura aportada por Jorge

**Referencia:** Corte histórico o recepción 2026-11-04; ver archivo fuente.

**Observación:** La cuenta identificada por Jorge como no autorizada recibe rechazo ante /start y /nuevo.

**Alcance:** Sin recorrido de ejecución ni consulta posterior de tablas; el mensaje agrupa acceso no habilitado y vencido, no prueba cada causa por separado.

**Archivos:**

- [registros/P07_usuario_sin_permiso_Jorge_Valencia.json](registros/P07_usuario_sin_permiso_Jorge_Valencia.json)
- [E-P07-01_Acceso_denegado_Jorge_Valencia.png](capturas/P07_usuario_sin_permiso/E-P07-01_Acceso_denegado_Jorge_Valencia.png)

## E-P08-01

**Fallo de conexión DNS** · Salida n8n aportada; ensayo aislado

**Referencia:** 2026-11-05T00:38:55.473Z; salida compartida.

**Observación:** Ejecución 247: ENOTFOUND; permitido=false, generación no intentada y sin fila de reserva propuesta.

**Alcance:** No caída real de OpenAI, cuota agotada o timeout observado. Sin persistencia de error en tablas/Telegram; reintentos configurados solo en el ensayo.

**Archivos:**

- [registros/P08_ejecucion_247_Jorge_Valencia.json](registros/P08_ejecucion_247_Jorge_Valencia.json)
- [Prueba_P08_conexion_Jorge_Valencia.json](../tests/Prueba_P08_conexion_Jorge_Valencia.json)
- [Prueba_P08_alcance_Jorge_Valencia.json](../tests/Prueba_P08_alcance_Jorge_Valencia.json)

## E-P08-02

**Timeout, reintento, persistencia y aviso** · Ensayo controlado con n8n y Telegram

**Referencia a la guía:** página 12, P08; página 13, exports e instrucciones reproducibles.

**Fecha:** ensayo 2026-11-21T23:52:16.859Z; resumen 2026-11-22T00:07:42.853Z. Ambos corresponden al 21 de noviembre en Ciudad de México.

| Comportamiento exigido | Resultado observado |
|---|---|
| Timeout | Dos peticiones terminaron por ECONNABORTED, duraciones 1048 y 1039 ms; límite configurado 1000 ms |
| Reintento acotado | Dos intentos explícitos; 1013 ms entre fin del primero e inicio del segundo, incluyendo transición de nodos |
| Estado de error | Error controlado escrito en rh_pruebas_p08 y relectura coincidente de los siete campos |
| Mensaje comprensible | Telegram ok true, mensaje 111, texto/chat coincidentes y captura del aviso |

**Trazabilidad:** ENSAYO-P08-263; la ejecución 263 llegó al guardado/relectura y envío. El resumen corregido fue ejecutado por separado en 271 sobre los datos conservados. Se documentan mapeo vacío, tabulaciones, relectura configurada como inserción y lectura incorrecta de la respuesta Telegram, junto con sus correcciones. No se oculta la incidencia inicial ni se presenta como una única ejecución completa sin fallos.

**Resultado:** los cuatro comportamientos P08 están documentados dentro de este ensayo aislado. El destino es un servicio lento controlado; no caída real de OpenAI ni agotamiento de cuota. El código de preparación, presupuesto y bloqueo coincide con el export original. No se atribuye la configuración auxiliar a todos los caminos del principal.

**Archivos:**

- [Resultado, procedencia y correcciones](registros/P08_ensayo_263_resumen_271_Jorge_Valencia.json).
- [Captura del aviso Telegram](capturas/P08_timeout/E-P08-02_Aviso_Telegram_Jorge_Valencia.jpg).
- [Instrucciones, importación y exports](../tests/P08/README.md).

## E-P09-01

**Presupuesto y límite de llamadas** · Salida n8n aportada; fixtures sintéticos

**Referencia:** 2026-11-05T00:31:44.337Z; salida compartida.

**Observación:** Ejecución 246: presupuesto insuficiente y seis intentos bloquean; contraste dentro de límites autoriza.

**Alcance:** Código del control aislado; no consume seis llamadas reales ni prueba persistencia integral del bloqueo.

**Archivos:**

- [registros/P09_ejecucion_246_Jorge_Valencia.json](registros/P09_ejecucion_246_Jorge_Valencia.json)
- [Prueba_P09_limites_Jorge_Valencia.json](../tests/Prueba_P09_limites_Jorge_Valencia.json)

## E-P10-01

**Reproducción secuencial de evento persistido** · Dos salidas n8n aportadas y comparación

**Referencia:** 2026-11-05T00:46:52.215Z y 2026-11-05T00:48:39.106Z.

**Observación:** 248/249: mismo evento y folio YTLSBKE8E, una fila en ambas lecturas y rama de duplicado.

**Alcance:** Ensayo de solo lectura, sin primera inserción ni reenvío real del webhook. No acredita atomicidad o concurrencia.

**Archivos:**

- [registros/P10_comparacion_248_249_Jorge_Valencia.json](registros/P10_comparacion_248_249_Jorge_Valencia.json)
- [registros/P10_ejecucion_248_Jorge_Valencia.json](registros/P10_ejecucion_248_Jorge_Valencia.json)
- [registros/P10_ejecucion_249_Jorge_Valencia.json](registros/P10_ejecucion_249_Jorge_Valencia.json)
- [Prueba_P10_evento_duplicado_Jorge_Valencia.md](../tests/Prueba_P10_evento_duplicado_Jorge_Valencia.md)

## E-P11-01

**Skills, loops, mejora y reutilización** · Trazas, hashes y valoración cualitativa

**Referencia:** Corte histórico o recepción 2026-11-04; ver archivo fuente.

**Observación:** V1 false→V2 true en YTLS6SW04; costo extra USD 0.003967; ambos skills cargados y reutilizados en BKE8E/EX4SR.

**Alcance:** Corrección histórica anterior a las cargas posteriores; no atribuirle el mismo adaptador. Autoevaluación propuesta para revisión de Jorge, no nota de la docente.

**Archivos:**

- [P11_Skills_loops_Jorge_Valencia.md](../docs/P11_Skills_loops_Jorge_Valencia.md)
- [registros/P11_consolidacion_Jorge_Valencia.json](registros/P11_consolidacion_Jorge_Valencia.json)
- [Evidencia_agentes_loops_Jorge_Valencia.json](registros/Evidencia_agentes_loops_Jorge_Valencia.json)
- [Snapshots_n8n_Jorge_Valencia.json](../skills/Snapshots_n8n_Jorge_Valencia.json)

## E-P12-01

**Actions: bloqueo y recuperación** · API/log histórico recuperado

**Referencia:** Corte histórico o recepción 2026-11-04; ver archivo fuente.

**Observación:** 41396056569 bloquea artefacto/publicación por validación; 41396256574 publica al retirar inyección. Mismo commit.

**Alcance:** No cambio de código entre ambas ejecuciones; no retirada del sitio previamente publicado ni nueva ejecución para este índice.

**Archivos:**

- [registros/Actions_verificados_Jorge_Valencia.json](registros/Actions_verificados_Jorge_Valencia.json)
- [Actions_evidencia_Jorge_Valencia.md](../docs/Actions_evidencia_Jorge_Valencia.md)

## E-P13-01

**Interfaz móvil y escritorio** · Capturas de viewport

**Referencia:** Corte histórico o recepción 2026-11-04; ver archivo fuente.

**Observación:** Panel en anchos visibles de 390 y 1366 px; evidencia visual del reacomodo de componentes.

**Alcance:** No acredita por imagen teclado, permisos de micrófono o accesibilidad completa; widget observado con obstrucción en teléfono real.

**Archivos:**

- [E-P13-01_390_panel_Jorge_Valencia.png](capturas/P13_interfaz/E-P13-01_390_panel_Jorge_Valencia.png)
- [E-P13-01_1366_panel_Jorge_Valencia.png](capturas/P13_interfaz/E-P13-01_1366_panel_Jorge_Valencia.png)
- [README.md](capturas/README.md)

## E-P14-01

**Costos y trazabilidad** · Conciliación numérica y metadatos

**Referencia:** Corte histórico o recepción 2026-11-04; ver archivo fuente.

**Observación:** 48 generaciones con trazas y fórmulas conciliadas; nueve sesiones ElevenLabs documentadas; USD 0.27757026 de subtotal identificado.

**Alcance:** No factura ni gasto completo del proyecto. Construcción y consumo no recuperado siguen desconocidos; cuotas de plataformas no son gratuitas indefinidamente.

**Archivos:**

- [Conciliacion_costos_Jorge_Valencia.json](../costos/Conciliacion_costos_Jorge_Valencia.json)
- [costos.csv](../costos/costos.csv)
- [Resumen_y_supuestos_Jorge_Valencia.json](../costos/Resumen_y_supuestos_Jorge_Valencia.json)
- [Sesiones_consolidadas_Jorge_Valencia.json](../costos/Sesiones_consolidadas_Jorge_Valencia.json)
- [README.md](../costos/README.md)

## E-P14-02

**Panel sin filtros** · Captura de panel

**Referencia:** Corte histórico o recepción 2026-11-04; ver archivo fuente.

**Observación:** KPI 13 solicitudes, dos pendientes, catorce días aprobados, con fecha/fuente visibles en el corte.

**Alcance:** Captura histórica; el panel vivo puede tener más filas después. Dos no informados se derivan como expiradas sin escritura; no comparar cortes distintos como si fueran simultáneos.

**Archivos:**

- [E-P14-02_KPI_Jorge_Valencia.png](capturas/E05_panel/E-P14-02_KPI_Jorge_Valencia.png)
- [Inventario_solicitudes_Jorge_Valencia.json](registros/Inventario_solicitudes_Jorge_Valencia.json)
- [Conciliacion_reservas_Jorge_Valencia.json](registros/Conciliacion_reservas_Jorge_Valencia.json)

## E-P14-03

**Gráfica e historial del corte** · Capturas de panel

**Referencia:** Corte histórico o recepción 2026-11-04; ver archivo fuente.

**Observación:** Cantidades por estado, barras desde cero e historial de trece folios ficticios.

**Alcance:** Representación visual del mismo corte; no prueba lectura en tiempo real por sí sola.

**Archivos:**

- [E-P14-03_Grafica_Jorge_Valencia.png](capturas/E05_panel/E-P14-03_Grafica_Jorge_Valencia.png)
- [E-P14-03_Historial_Jorge_Valencia.png](capturas/E05_panel/E-P14-03_Historial_Jorge_Valencia.png)

## E-P14-04

**Filtro por equipo** · Capturas de panel

**Referencia:** Corte histórico o recepción 2026-11-04; ver archivo fuente.

**Observación:** EQ-B produce KPI 1/0/0 y una fila con cobertura insuficiente.

**Alcance:** Filtro y respuesta visual; no es una nueva ejecución de decisión de vacaciones.

**Archivos:**

- [E-P14-04_Filtro_EQ_B_Jorge_Valencia.png](capturas/E05_panel/E-P14-04_Filtro_EQ_B_Jorge_Valencia.png)
- [E-P14-04_Fila_EQ_B_Jorge_Valencia.png](capturas/E05_panel/E-P14-04_Fila_EQ_B_Jorge_Valencia.png)

## E-CFG-01

**Dominio y límite ElevenLabs** · Lectura de configuración

**Referencia:** Corte histórico o recepción 2026-11-04; ver archivo fuente.

**Observación:** Main releída con hostname jorgevalba.github.io y max_tokens=1500.

**Alcance:** Configuración verificada; no prueba adversaria desde otro origen ni conversación posterior a ese cambio.

**Archivos:**

- [registros/ElevenLabs_dominio_configurado_Jorge_Valencia.json](registros/ElevenLabs_dominio_configurado_Jorge_Valencia.json)
- [registros/ElevenLabs_limites_publicados_Jorge_Valencia.json](registros/ElevenLabs_limites_publicados_Jorge_Valencia.json)
- [Configuracion_activa_Jorge_Valencia.json](../agentes/voz/Configuracion_activa_Jorge_Valencia.json)

## E-DAT-01

**Esquemas y muestra reproducible** · Artefactos de instalación

**Referencia:** Corte histórico o recepción 2026-11-04; ver archivo fuente.

**Observación:** Once tablas lógicas, seis CSV iniciales y manual de vinculación/configuración.

**Alcance:** No acredita aún instalación indeno informado completa ni provisión de pases privados reproducida.

**Archivos:**

- [Esquema_tablas_Jorge_Valencia.json](../datos/Esquema_tablas_Jorge_Valencia.json)
- [README.md](../datos/README.md)
- [Manual_instalacion_Jorge_Valencia.md](../docs/Manual_instalacion_Jorge_Valencia.md)

## E-COST-01

**Proyecciones y disponibilidad** · Escenarios calculados y declaración del usuario

**Referencia:** Corte histórico o recepción 2026-11-04; ver archivo fuente.

**Observación:** Seis escenarios a 100/1,000/10,000 casos; cuota n8n 145/10,000 y doce días restantes reportados por Jorge.

**Alcance:** No prueba de carga ni cotización cerrada. EUR y USD separados, fecha final exacta de prueba no confirmada; escenarios no equivalen al gasto observado.

**Archivos:**

- [escenarios.csv](../costos/escenarios.csv)
- [Resumen_y_supuestos_Jorge_Valencia.json](../costos/Resumen_y_supuestos_Jorge_Valencia.json)
- [README.md](../costos/README.md)

## Uso de referencias

En el informe se puede citar «véase E-P04-01» y enlazar a esa ficha. El registro de archivos conserva SHA-256 del corte documental, no una certificación externa de fecha/autenticidad.

Las trece capturas se distribuyen en [capturas/](capturas/README.md). Los JSON de P08–P10 son salidas compartidas por Jorge de ensayos aislados; no se presentan como un webhook duplicado real, una caída real del proveedor o una prueba concurrente.
