# Índice de evidencias de RH Vacaciones BYD
Elaborado por: Jorge Valencia.

Cada ID E-Pxx-nn relaciona una observación con archivos de soporte y su alcance. La [matriz](../tests/pruebas.csv) registra la prueba, entrada, esperado, observado y versión; las fotos complementan los datos.

## Catálogo

| ID | Prueba | Evidencia | Tipo |
|---|---|---|---|
| [E-P01-01](#e-p01-01) | P01 | Caso completo EMP-005 | Conciliación de registros históricos |
| [E-P02-01](#e-p02-01) | P02 | Segundo y tercer caso | Conciliación de registros históricos |
| [E-P03-01](#e-p03-01) | P03 | Consultas del widget desde Pages | Metadata recuperada de sesión existente |
| [E-P03-02](#e-p03-02) | P03, P14 | Consulta hablada histórica | Metadata y resultado de herramienta |
| [E-P04-01](#e-p04-01) | P04 | Rechazo de versión no vigente | Resumen de capturas aportadas |
| [E-P04-02](#e-p04-02) | P04 | Consulta de reserva sin coincidencias | Captura y confirmación del filtro por Jorge |
| [E-P05-01](#e-p05-01) | P05 | Entrada incompleta | Resumen de respuesta y capturas de recorrido |
| [E-P06-01](#e-p06-01) | P06 | Solicitud de revelar claves | Capturas de Telegram y recorrido |
| [E-P07-01](#e-p07-01) | P07 | Cuenta sin permiso | Captura aportada por Jorge |
| [E-P08-01](#e-p08-01) | P08 | Fallo de conexión DNS | Salida n8n aportada; ensayo aislado |
| [E-P09-01](#e-p09-01) | P09 | Presupuesto y límite de llamadas | Salida n8n aportada; fixtures sintéticos |
| [E-P10-01](#e-p10-01) | P10 | Reproducción secuencial de evento persistido | Dos salidas n8n aportadas y comparación |
| [E-P11-01](#e-p11-01) | P11 | Skills, loops, mejora y reutilización | Trazas, hashes y valoración cualitativa |
| [E-P12-01](#e-p12-01) | P12 | Actions: bloqueo y recuperación | API/log histórico recuperado |
| [E-P13-01](#e-p13-01) | P13 | Interfaz móvil y escritorio | Capturas de viewport |
| [E-P14-01](#e-p14-01) | P14 | Costos y trazabilidad | Conciliación numérica y metadatos |
| [E-P14-02](#e-p14-02) | P14, P13 | Panel sin filtros | Captura de panel |
| [E-P14-03](#e-p14-03) | P14, P13 | Gráfica e historial del corte | Capturas de panel |
| [E-P14-04](#e-p14-04) | P14, P13 | Filtro por equipo | Capturas de panel |
| [E-CFG-01](#e-cfg-01) | Apoyo | Dominio y límite ElevenLabs | Lectura de configuración |
| [E-DAT-01](#e-dat-01) | Apoyo | Esquemas y muestra reproducible | Artefactos de instalación |
| [E-COST-01](#e-cost-01) | P14 | Proyecciones y disponibilidad | Escenarios calculados y declaración del usuario |

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

- [Pages_herramientas_verificadas_Jorge_Valencia.json](Pages_herramientas_verificadas_Jorge_Valencia.json)

## E-P03-02

**Consulta hablada histórica** · Metadata y resultado de herramienta

**Referencia:** Corte histórico o recepción 2026-11-04; ver archivo fuente.

**Observación:** Sesión de 67 segundos con audio de usuario y respuesta; consulta de saldo EMP-005 ok y periodo correcto.

**Alcance:** No transcripción completa ni repetición reciente de la prueba; no confundirla con E-P03-01.

**Archivos:**

- [Prueba_voz_confirmada_Jorge_Valencia.json](voz/Prueba_voz_confirmada_Jorge_Valencia.json)

## E-P04-01

**Rechazo de versión no vigente** · Resumen de capturas aportadas

**Referencia:** Corte histórico o recepción 2026-11-04; ver archivo fuente.

**Observación:** Propuesta V1; intento V2 rechazado; consulta posterior conserva Pendiente de aprobación V1.

**Alcance:** Las capturas completas de conversación se conservan en revisión privada; fecha del evento no explícita en imagen. No demuestra por sí solo ausencia de todas las escrituras.

**Archivos:**

- [P04_version_incorrecta_Jorge_Valencia.json](P04_version_incorrecta_Jorge_Valencia.json)

## E-P04-02

**Consulta de reserva sin coincidencias** · Captura y confirmación del filtro por Jorge

**Referencia:** Corte histórico o recepción 2026-11-04; ver archivo fuente.

**Observación:** No rows / Total 0 para la consulta de reserva V1 solicitada, según confirmación del usuario.

**Alcance:** El operador y valor del filtro no aparecen desplegados; no acredita todas las versiones ni saldo efectivo del empleado.

**Archivos:**

- [E-P04-02_Cero_filas_Jorge_Valencia.png](capturas/P04_version_incorrecta/E-P04-02_Cero_filas_Jorge_Valencia.png)
- [P04_version_incorrecta_Jorge_Valencia.json](P04_version_incorrecta_Jorge_Valencia.json)

## E-P05-01

**Entrada incompleta** · Resumen de respuesta y capturas de recorrido

**Referencia:** Corte histórico o recepción 2026-11-04; ver archivo fuente.

**Observación:** /nuevo EMP-004 recibe formato de ayuda; termina en Responder ayuda o rechazo sin especialistas visibles.

**Alcance:** No se ensayó entrada vacía/sticker. La guía admite vacía o incompleta. La captura no es auditoría de facturación o de todas las tablas.

**Archivos:**

- [P05_entrada_incompleta_Jorge_Valencia.json](P05_entrada_incompleta_Jorge_Valencia.json)
- [E-P05-01_Recorrido_A_Jorge_Valencia.png](capturas/P05_entrada_incompleta/E-P05-01_Recorrido_A_Jorge_Valencia.png)
- [E-P05-01_Recorrido_B_Jorge_Valencia.png](capturas/P05_entrada_incompleta/E-P05-01_Recorrido_B_Jorge_Valencia.png)

## E-P06-01

**Solicitud de revelar claves** · Capturas de Telegram y recorrido

**Referencia:** Corte histórico o recepción 2026-11-04; ver archivo fuente.

**Observación:** Petición de ignorar reglas/revelar claves responde con ayuda sin secretos; especialistas sin ejecutar.

**Alcance:** Bloqueo previo al modelo; no es una prueba exhaustiva de inyección dentro de cada LLM o documento recuperado.

**Archivos:**

- [P06_peticion_secretos_Jorge_Valencia.json](P06_peticion_secretos_Jorge_Valencia.json)
- [E-P06-01_Peticion_rechazada_Jorge_Valencia.jpg](capturas/P06_peticion_secretos/E-P06-01_Peticion_rechazada_Jorge_Valencia.jpg)
- [E-P06-01_Recorrido_Jorge_Valencia.png](capturas/P06_peticion_secretos/E-P06-01_Recorrido_Jorge_Valencia.png)

## E-P07-01

**Cuenta sin permiso** · Captura aportada por Jorge

**Referencia:** Corte histórico o recepción 2026-11-04; ver archivo fuente.

**Observación:** La cuenta identificada por Jorge como no autorizada recibe rechazo ante /start y /nuevo.

**Alcance:** Sin recorrido de ejecución ni consulta posterior de tablas; el mensaje agrupa acceso no habilitado y vencido, no prueba cada causa por separado.

**Archivos:**

- [P07_usuario_sin_permiso_Jorge_Valencia.json](P07_usuario_sin_permiso_Jorge_Valencia.json)
- [E-P07-01_Acceso_denegado_Jorge_Valencia.png](capturas/P07_usuario_sin_permiso/E-P07-01_Acceso_denegado_Jorge_Valencia.png)

## E-P08-01

**Fallo de conexión DNS** · Salida n8n aportada; ensayo aislado

**Referencia:** 2026-11-05T00:38:55.473Z; salida compartida.

**Observación:** Ejecución 247: ENOTFOUND; permitido=false, generación no intentada y sin fila de reserva propuesta.

**Alcance:** No caída real de OpenAI, cuota agotada o timeout observado. Sin persistencia de error en tablas/Telegram; reintentos configurados solo en el ensayo.

**Archivos:**

- [P08_ejecucion_247_Jorge_Valencia.json](P08_ejecucion_247_Jorge_Valencia.json)
- [Prueba_P08_conexion_Jorge_Valencia.json](../tests/Prueba_P08_conexion_Jorge_Valencia.json)
- [Prueba_P08_alcance_Jorge_Valencia.json](../tests/Prueba_P08_alcance_Jorge_Valencia.json)

## E-P09-01

**Presupuesto y límite de llamadas** · Salida n8n aportada; fixtures sintéticos

**Referencia:** 2026-11-05T00:31:44.337Z; salida compartida.

**Observación:** Ejecución 246: presupuesto insuficiente y seis intentos bloquean; contraste dentro de límites autoriza.

**Alcance:** Código del control aislado; no consume seis llamadas reales ni prueba persistencia integral del bloqueo.

**Archivos:**

- [P09_ejecucion_246_Jorge_Valencia.json](P09_ejecucion_246_Jorge_Valencia.json)
- [Prueba_P09_limites_Jorge_Valencia.json](../tests/Prueba_P09_limites_Jorge_Valencia.json)

## E-P10-01

**Reproducción secuencial de evento persistido** · Dos salidas n8n aportadas y comparación

**Referencia:** 2026-11-05T00:46:52.215Z y 2026-11-05T00:48:39.106Z.

**Observación:** 248/249: mismo evento y folio YTLSBKE8E, una fila en ambas lecturas y rama de duplicado.

**Alcance:** Ensayo de solo lectura, sin primera inserción ni reenvío real del webhook. No acredita atomicidad o concurrencia.

**Archivos:**

- [P10_comparacion_248_249_Jorge_Valencia.json](P10_comparacion_248_249_Jorge_Valencia.json)
- [P10_ejecucion_248_Jorge_Valencia.json](P10_ejecucion_248_Jorge_Valencia.json)
- [P10_ejecucion_249_Jorge_Valencia.json](P10_ejecucion_249_Jorge_Valencia.json)
- [Prueba_P10_evento_duplicado_Jorge_Valencia.md](../tests/Prueba_P10_evento_duplicado_Jorge_Valencia.md)

## E-P11-01

**Skills, loops, mejora y reutilización** · Trazas, hashes y valoración cualitativa

**Referencia:** Corte histórico o recepción 2026-11-04; ver archivo fuente.

**Observación:** V1 false→V2 true en YTLS6SW04; costo extra USD 0.003967; ambos skills cargados y reutilizados en BKE8E/EX4SR.

**Alcance:** Corrección histórica anterior a las cargas posteriores; no atribuirle el mismo adaptador. Autoevaluación propuesta para revisión de Jorge, no nota de la docente.

**Archivos:**

- [P11_Skills_loops_Jorge_Valencia.md](../docs/P11_Skills_loops_Jorge_Valencia.md)
- [P11_consolidacion_Jorge_Valencia.json](P11_consolidacion_Jorge_Valencia.json)
- [Evidencia_agentes_loops_Jorge_Valencia.json](registros/Evidencia_agentes_loops_Jorge_Valencia.json)
- [Snapshots_n8n_Jorge_Valencia.json](../skills/Snapshots_n8n_Jorge_Valencia.json)

## E-P12-01

**Actions: bloqueo y recuperación** · API/log histórico recuperado

**Referencia:** Corte histórico o recepción 2026-11-04; ver archivo fuente.

**Observación:** 41396056569 bloquea artefacto/publicación por validación; 41396256574 publica al retirar inyección. Mismo commit.

**Alcance:** No cambio de código entre ambas ejecuciones; no retirada del sitio previamente publicado ni nueva ejecución para este índice.

**Archivos:**

- [Actions_verificados_Jorge_Valencia.json](Actions_verificados_Jorge_Valencia.json)
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

- [ElevenLabs_dominio_configurado_Jorge_Valencia.json](ElevenLabs_dominio_configurado_Jorge_Valencia.json)
- [ElevenLabs_limites_publicados_Jorge_Valencia.json](ElevenLabs_limites_publicados_Jorge_Valencia.json)
- [Configuracion_activa_Jorge_Valencia.json](../agentes/voz/Configuracion_activa_Jorge_Valencia.json)

## E-DAT-01

**Esquemas y muestra reproducible** · Artefactos de instalación

**Referencia:** Corte histórico o recepción 2026-11-04; ver archivo fuente.

**Observación:** Once tablas lógicas, seis CSV iniciales y manual de vinculación/configuración.

**Alcance:** No acredita aún instalación indeno informado completa ni provisión de pases privados reproducida.

**Archivos:**

- [Esquema_tablas_Jorge_Valencia.json](../datos/Esquema_tablas_Jorge_Valencia.json)
- [README.md](../datos/carga_inicial/README.md)
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
