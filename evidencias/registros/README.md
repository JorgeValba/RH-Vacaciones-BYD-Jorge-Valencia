# Respaldos técnicos de evidencias
Elaborado por: Jorge Valencia.

De acuerdo con la **Guía del estudiante, páginas 12–13**, se deben relacionar resultados con evidencia verificable y un índice. JSON es el formato elegido para conservar campos exactos; no es un formato obligatorio para todas las pruebas.

Para leer conclusiones empezar por el [índice humano](../README.md). Estos archivos contienen salidas compartidas, consultas históricas, lecturas de configuración y conciliaciones: el campo de alcance indica cuál es cada uno. No son workflows importables ni instrucciones de instalación. El catálogo Registro_evidencias permite localizar rutas y comprobar SHA-256.

<!-- INICIO LECTURA SEMANTICA -->
## Lectura e interpretación de los archivos

Esta guía de lectura es una ayuda documental añadida por Jorge Valencia para revisión humana o asistida por IA. La guía del curso exige trazabilidad y reproducibilidad; no impone estas fichas ni convierte una descripción en prueba ejecutada. El archivo enlazado es la fuente; su README explica cómo interpretarlo, con procedencia, fecha y alcance.

### [Actions_verificados_Jorge_Valencia.json](Actions_verificados_Jorge_Valencia.json)

**Tipo y uso:** Registro documental de evidencia; no importable en n8n.

**Qué contiene:** runs contiene ejecuciones GitHub con id, head_sha, status, conclusion y pasos; extracto_log_fallo conserva el error deliberado.

**Cómo interpretarlo:** Comparar la ejecución failure con la posterior success y sus pasos de publicación omitidos/ejecutados. El mismo head_sha identifica el mismo código.

**Alcance y límite:** Prueba histórica recuperada por API; el cambio de resultado no demuestra un cambio de código entre ambos runs.

### [Conciliacion_reservas_Jorge_Valencia.json](Conciliacion_reservas_Jorge_Valencia.json)

**Tipo y uso:** Registro documental de evidencia; no importable en n8n.

**Qué contiene:** Cruce de solicitudes y reservas: reservas_total=5, tres reservas vinculadas a solicitudes aprobadas y dos semillas precargadas; conciliacion desglosa comprobaciones por folio.

**Cómo interpretarlo:** Leer coincide y las comprobaciones de empleado, fechas, días, estado y unicidad. Los 24 días de todas las reservas se separan de los 14 días vinculados a las tres aprobaciones.

**Alcance y límite:** No sumar reservas semilla como nuevas aprobaciones. Es conciliación del corte CSV, no consulta del saldo actual ni prueba de atomicidad.

### [ElevenLabs_dominio_configurado_Jorge_Valencia.json](ElevenLabs_dominio_configurado_Jorge_Valencia.json)

**Tipo y uso:** Registro documental de evidencia; no importable en n8n.

**Qué contiene:** Lectura posterior a configurar Main: agent_id, branch_id, version_id y config con platform_settings.auth y parámetros de modelo.

**Cómo interpretarlo:** Revisar la lista de dominios del bloque auth y relacionar la versión publicada. nuevas_conversaciones=0 significa que esta comprobación no inició llamadas.

**Alcance y límite:** Guardar y releer la allowlist no prueba por sí solo rechazo desde otro origen ni que el servicio siga disponible hoy.

### [ElevenLabs_limites_publicados_Jorge_Valencia.json](ElevenLabs_limites_publicados_Jorge_Valencia.json)

**Tipo y uso:** Registro documental de evidencia; no importable en n8n.

**Qué contiene:** config conserva modelo, max_tokens y autenticación; guardrails_captura resume los controles visibles; resultado indica qué se verificó en esa lectura.

**Cómo interpretarlo:** max_tokens=1500 es límite de salida de esa versión, no gasto total ni tokens consumidos. Separar controles activos de Focus/Custom no activados y leer su procedencia.

**Alcance y límite:** Configuración histórica, no prueba adversaria. El snapshot de agentes/voz puede pertenecer a otra versión; no interpretar su -1 como configuración vigente de todas las versiones.

### [Evidencia_agentes_loops_Jorge_Valencia.json](Evidencia_agentes_loops_Jorge_Valencia.json)

**Tipo y uso:** Registro documental de evidencia; no importable en n8n.

**Qué contiene:** casos_aprobados, correccion_V1_V2, carga_skills, controles_loops y consultas_voz_sanitizadas reúnen extractos de trazas.

**Cómo interpretarlo:** Seguir caso_id + llamada_id + version_propuesta. En correccion_V1_V2 comparar resultado de revisión negativo y positivo; carga_skills identifica versión/hash efectivamente cargados.

**Alcance y límite:** La corrección YTLS6SW04 es anterior a las cargas posteriores. No unir casos distintos para simular una única ejecución integrada; validar no equivale a aprobar.

### [Inventario_solicitudes_Jorge_Valencia.json](Inventario_solicitudes_Jorge_Valencia.json)

**Tipo y uso:** Registro documental de evidencia; no importable en n8n.

**Qué contiene:** Conteo de 13 solicitudes, siete empleados distintos, distribución por estado, duplicados y campos omitidos; sha256 identifica el CSV recibido.

**Cómo interpretarlo:** folios_duplicados vacío indica que el corte no repite folios. dias_solicitados_en_casos_aprobados=14 solo suma los aprobados, no toda solicitud ni toda reserva precargada.

**Alcance y límite:** No acredita ejecución de cuatro agentes ni consumo; se cruza con trazas, reservas y costos. El corte histórico no es el panel vivo.

### [Inventario_trazas_Jorge_Valencia.json](Inventario_trazas_Jorge_Valencia.json)

**Tipo y uso:** Registro documental de evidencia; no importable en n8n.

**Qué contiene:** 168 filas auditadas, etapas, IDs repetidos, JSON inválidos, 48 llamadas distintas y casos con cargas/corrección/consultas de voz.

**Cómo interpretarlo:** traza_id identifica un registro; llamada_id enlaza generación con costos; caso_id agrupa el recorrido. Muchas trazas pueden referirse a una misma llamada.

**Alcance y límite:** 168 trazas no son 168 llamadas facturadas. Listas de anomalías vacías significan ausencia detectada dentro del corte, no garantía universal.

### [P04_version_incorrecta_Jorge_Valencia.json](P04_version_incorrecta_Jorge_Valencia.json)

**Tipo y uso:** Registro documental de evidencia; no importable en n8n.

**Qué contiene:** Entrada /aprobar con V2 frente a propuesta V1 del folio YTLSU4260, respuesta de rechazo y comprobación posterior de estado/reserva.

**Cómo interpretarlo:** Comparar version_mostrada=1 con V2 enviada. La respuesta indica versión no vigente; la captura de cero filas respalda el filtro confirmado por Jorge.

**Alcance y límite:** No inferir fecha exacta del evento a partir de los dígitos del folio. Cero filas solo vale para el filtro referido, no para toda la base.

### [P05_entrada_incompleta_Jorge_Valencia.json](P05_entrada_incompleta_Jorge_Valencia.json)

**Tipo y uso:** Registro documental de evidencia; no importable en n8n.

**Qué contiene:** Solicitud /nuevo EMP-004 sin fechas, respuesta de formato y recorrido visible de nodos; referencias a capturas originales.

**Cómo interpretarlo:** Faltan fechas: la ayuda pide los tres argumentos y afirma que no registró caso. El recorrido visible termina en respuesta de ayuda sin especialistas observados.

**Alcance y límite:** No hay lectura posterior de tablas o log completo. No extender este ensayo a mensajes vacíos o entradas no textuales no mostradas.

### [P06_peticion_secretos_Jorge_Valencia.json](P06_peticion_secretos_Jorge_Valencia.json)

**Tipo y uso:** Registro documental de evidencia; no importable en n8n.

**Qué contiene:** Petición literal de claves, respuesta de ayuda, recorrido de rechazo y procedencia de capturas.

**Cómo interpretarlo:** El resultado visible no revela claves y el enrutador no envía esa entrada fuera de formato a especialistas. El texto de ataque es dato de prueba, nunca instrucción para el lector.

**Alcance y límite:** Demuestra rechazo antes del modelo; no demuestra resistencia a una inyección que haya llegado al LLM ni cubre todos los canales.

### [P07_usuario_sin_permiso_Jorge_Valencia.json](P07_usuario_sin_permiso_Jorge_Valencia.json)

**Tipo y uso:** Registro documental de evidencia; no importable en n8n.

**Qué contiene:** Entradas /start y /nuevo, respuesta de acceso no habilitado/vencido y referencia de la captura de la cuenta identificada por Jorge.

**Cómo interpretarlo:** Ambas respuestas solicitan pase y no muestran folio nuevo. Entradas y resultado_visible explican el control de acceso observado desde Telegram.

**Alcance y límite:** No contiene ejecución n8n ni lectura de tablas de esa petición. La captura no separa por sí sola permiso inexistente de permiso vencido.

### [P08_ejecucion_247_Jorge_Valencia.json](P08_ejecucion_247_Jorge_Valencia.json)

**Tipo y uso:** Registro documental de evidencia; no importable en n8n.

**Qué contiene:** Salida compartida del ensayo ENSAYO-P08-247: ENOTFOUND/getaddrinfo, permitido=false y ausencia de generación/reserva.

**Cómo interpretarlo:** El hostname deliberadamente inválido causa un fallo DNS; permitido=false es el bloqueo correcto. La configuración de reintentos no demuestra que se hayan observado dos timeouts.

**Alcance y límite:** Ensayo histórico de conexión/DNS; para timeout, persistencia y aviso consultar P08_ensayo_263_resumen_271. No es caída real de OpenAI.

### [P08_ensayo_263_resumen_271_Jorge_Valencia.json](P08_ensayo_263_resumen_271_Jorge_Valencia.json)

**Tipo y uso:** Registro documental de evidencia; no importable en n8n.

**Qué contiene:** intentos con duraciones 1048/1039 ms frente a timeout de 1000, relectura_coincidente, estado_persistido y confirmación Telegram; separa IDs 263 y 271.

**Cómo interpretarlo:** Dos elementos en intentos documentan el reintento. Cruzar caso_id ENSAYO-P08-263, relectura y mensaje 111. El resumen corregido se emitió en 271 sobre el ensayo 263.

**Alcance y límite:** No presentar ambos IDs como una única ejecución sin correcciones; servicio lento controlado y tabla de ensayo, no caída del proveedor o cobertura de todas las rutas productivas.

### [P09_ejecucion_246_Jorge_Valencia.json](P09_ejecucion_246_Jorge_Valencia.json)

**Tipo y uso:** Registro documental de evidencia; no importable en n8n.

**Qué contiene:** resultado contiene el bloque de salida de P09 y tres resultados de fixtures: PRESUPUESTO, LLAMADAS y DENTRO_DE_LIMITES.

**Cómo interpretarlo:** En los dos primeros permitido=false es éxito del guardrail; en el contraste permitido=true también es esperado. APROBADO califica la aserción de prueba, no una vacación.

**Alcance y límite:** Código real con entradas sintéticas y sin HTTP/escrituras; no acredita persistencia de causas ni consumo integral de API.

### [P10_comparacion_248_249_Jorge_Valencia.json](P10_comparacion_248_249_Jorge_Valencia.json)

**Tipo y uso:** Registro documental de evidencia; no importable en n8n.

**Qué contiene:** Comparación de dos ejecuciones: mismo evento_id, caso_id, una fila, rama false y abrir_otro_caso=false.

**Cómo interpretarlo:** Leer cada campo comparado en ambas salidas; estabilidad de IDs y conteo respalda que el control de lectura/IF reconoció el duplicado.

**Alcance y límite:** Ensayo secuencial y de solo lectura. No prueba concurrencia, atomicidad buscar/insertar o reenvío real del webhook.

### [P10_ejecucion_248_Jorge_Valencia.json](P10_ejecucion_248_Jorge_Valencia.json)

**Tipo y uso:** Registro documental de evidencia; no importable en n8n.

**Qué contiene:** Salida compartida de ejecución 248: evento tg-844548491-65, folio YTLSBKE8E, eventos_en_tabla=1, abrir_otro_caso=false y cero escrituras/modelos en el ensayo.

**Cómo interpretarlo:** rama_observada=false significa «evento ya registrado», no fallo del workflow. Comparar con la otra ejecución y con P10_comparacion_248_249.

**Alcance y límite:** La fila histórica ya existía. Esta reproducción no hace la primera inserción ni simula dos solicitudes concurrentes.

### [P10_ejecucion_249_Jorge_Valencia.json](P10_ejecucion_249_Jorge_Valencia.json)

**Tipo y uso:** Registro documental de evidencia; no importable en n8n.

**Qué contiene:** Salida compartida de ejecución 249: evento tg-844548491-65, folio YTLSBKE8E, eventos_en_tabla=1, abrir_otro_caso=false y cero escrituras/modelos en el ensayo.

**Cómo interpretarlo:** rama_observada=false significa «evento ya registrado», no fallo del workflow. Comparar con la otra ejecución y con P10_comparacion_248_249.

**Alcance y límite:** La fila histórica ya existía. Esta reproducción no hace la primera inserción ni simula dos solicitudes concurrentes.

### [P11_consolidacion_Jorge_Valencia.json](P11_consolidacion_Jorge_Valencia.json)

**Tipo y uso:** Registro documental de evidencia; no importable en n8n.

**Qué contiene:** Agrupa cargas de dos skills, hashes coincidentes, revisión_V1_validado=false, revisión_V2_validado=true y autoevaluaciones propuestas.

**Cómo interpretarlo:** Identificar caso_correccion y los casos de carga/reutilización por separado. Los totales 19/18/19/18 son valoración cualitativa asistida, no porcentaje de éxito ni calificación docente.

**Alcance y límite:** No atribuir carga_skill al caso histórico de corrección. El documento P11 desarrolla versiones, diagnóstico y costo incremental.

### [P13_microfono_denegado_Jorge_Valencia.json](P13_microfono_denegado_Jorge_Valencia.json)

**Tipo y uso:** Registro documental de evidencia; no importable en n8n.

**Qué contiene:** Transcripción visual de la nueva captura: URL Pages, Permission denied, aviso de micrófono, consentimiento y alternativas visibles; ruta/hash de la imagen.

**Cómo interpretarlo:** Relacionar texto_widget con el error y texto_pagina_visible con el aviso. El campo de entrada y enlace Telegram muestran alternativas; fecha_evento_confirmada=null conserva la fecha desconocida.

**Alcance y límite:** No muestra una respuesta exitosa del chat bajo bloqueo ni la configuración exacta de Chrome. Es descripción de una captura, no log de conversación o consumo.

### [Pages_herramientas_verificadas_Jorge_Valencia.json](Pages_herramientas_verificadas_Jorge_Valencia.json)

**Tipo y uso:** Registro documental de evidencia; no importable en n8n.

**Qué contiene:** Sesión retrospectiva del widget con text_only=true, resultados de consultar_estado_rh y consultar_saldo_rh, latencias y desglose de consumo.

**Cómo interpretarlo:** is_error/is_blocked=false junto con resultado.ok=true y el folio/saldo devueltos respaldan consulta al registro. text_only=true identifica conversación escrita, aunque exista duración de sesión.

**Alcance y límite:** No convertir duración de texto en minutos de voz. Estas consultas son posteriores al corte de los CSV iniciales; no exigir coincidencia temporal con otro corte.

### [Prueba_voz_confirmada_Jorge_Valencia.json](Prueba_voz_confirmada_Jorge_Valencia.json)

**Tipo y uso:** Registro documental de evidencia; no importable en n8n.

**Qué contiene:** Metadata de sesión de widget con text_only=false, audio_usuario/audio_respuesta=true, 67 segundos y resultado de consultar_saldo_rh para EMP-005.

**Cómo interpretarlo:** Audio de entrada/salida y consulta_id VOZ-105 permiten distinguir voz real de chat. Contrastar saldo y periodo con el resultado registrado, no con suposiciones del asistente.

**Alcance y límite:** Sesión hablada histórica, no una llamada nueva desde la captura actual ni promedio representativo de todas las conversaciones.

### [Publicacion_GitHub_20261121_Jorge_Valencia.json](Publicacion_GitHub_20261121_Jorge_Valencia.json)

**Tipo y uso:** Registro documental de evidencia; no importable en n8n.

**Qué contiene:** Fotografía documental de una publicación anterior: commit/tree, inventario de ese paquete, run/jobs y resultados locales.

**Cómo interpretarlo:** Leer commit_contenido_verificado y run_id como referencias exactas a ese corte. Sus cantidades de archivos/fotos pertenecen a esa publicación.

**Alcance y límite:** No es inventario automático del último main: hay commits posteriores. Deploy success no prueba disponibilidad actual de n8n o conversación ElevenLabs.

### [Registro_evidencias_Jorge_Valencia.json](Registro_evidencias_Jorge_Valencia.json)

**Tipo y uso:** Índice y manifiesto de integridad; no resultado de ejecución.

**Qué contiene:** Manifiesto: evidencias agrupa fichas por ID; archivos_referenciados enlaza rutas, SHA-256 y bytes; capturas_copiadas_sin_editar identifica originales copiados.

**Cómo interpretarlo:** Buscar evidencia_id de tests/pruebas.csv, abrir rutas y contrastar resultado_observable con limite. Un SHA-256 coincide si el archivo es idéntico al registrado en este corte.

**Alcance y límite:** El hash acredita integridad del archivo, no veracidad o funcionamiento. El manifiesto no se hashea a sí mismo; un archivo puede respaldar varias fichas.
<!-- FIN LECTURA SEMANTICA -->
