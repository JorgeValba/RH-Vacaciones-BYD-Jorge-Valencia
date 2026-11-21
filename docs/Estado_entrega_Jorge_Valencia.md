# Estado e inventario de preparación
Elaborado por: Jorge Valencia. Corte: 4 de noviembre de 2026.

Base de código comprobada contra el repositorio: commit `79697893d19d9d2142dc28af2e2b5987411018ee`. Se cotejaron los 25 archivos originales con sus hashes Git antes de organizarlos. El contenido de `web/` permanece igual a esa base. Esta carpeta tiene adiciones locales: aún no corresponde a un commit final ni se ha publicado.

## Reunido

- Cuatro workflows exportados; copias sanitizadas con marcadores de configuración.
- Cortes de solicitudes, reservas, trazas y costos analizados; solo derivados seleccionados se incorporan aquí.
- Tres aprobaciones conciliadas con sus reservas; rechazo, expiración y corrección V1/V2.
- Capturas de panel, filtros, historial, gráfica y anchos 390/1366; confirmaciones de teclado y sin resultados.
- Consultas de folio y saldo por texto desde Pages; conversación hablada histórica documentada por separado.
- Dos skills y dos loops en el código existente. Carga de ambos skills en tres casos registrada; corrección histórica en otro caso sin registro de carga del adaptador posterior.

## Falta para una entrega final reproducible

1. Informe 8–12 páginas y manual de importación completo con versiones, tablas, control, credenciales por nombre, inicio/parada y solución de problemas.
2. Extraer prompts y contratos finales de los cinco roles y documentar configuración activa de ElevenLabs, sin confundir referencias antiguas con estado vigente.
3. Esquema y muestra importable de las tablas; diccionario; provisionamiento privado de pases/control para recrear, sin publicar códigos reales.
4. Matriz P01–P14 con fechas, entradas, esperados/obtenidos y rutas. Inyección, usuario sin permiso actual, presupuesto, fallo externo y evento idéntico necesitan evidencia suficiente. No repetir conversaciones ElevenLabs por defecto para esto.
5. Recuperar llamadas de herramientas de la sesión reciente de Pages; conservar evidencia de Actions fallido/exitoso y recuperación ya existente.
6. Consolidar costo de desarrollo/pruebas, voz y plataformas; escenarios de 100/1,000/10,000 casos base/mayor consumo y comparación costo/calidad.
7. Revisar autoevaluaciones de skills/loops; su V1/V2 corregida no debe atribuirse a la carga del adaptador si ese mismo caso no la registró.
8. Revisar obstrucción del widget en móvil, secuencia inicial de consentimiento y ajustes efectivos de guardado de ejecuciones. Las exportaciones actuales no especifican desactivación de logs.
9. Revisar capturas antes de publicar; completar declaración de IA, fuentes/licencias, video 5–8 min y defensa hasta 12 min.
10. Tras integrar y verificar: fijar rama/commit final y ZIP coincidente. Mantener accesos/cuotas disponibles para evaluación.

## Criterio de evidencia

Configuración, prueba local, captura, confirmación de Jorge y ejecución remota no son equivalentes. Los anexos deben identificar cuál respalda cada afirmación. No hay llamadas nuevas a ElevenLabs ni cambios de n8n en esta preparación.



## Avance documental posterior

Preparados manual de instalación, mapa de configuración por nodo, cuatro instrucciones base/esquemas/plantillas de entrada, descripción del orquestador, snapshots de skills verificados y seis CSV iniciales de recreación. Los campos de tablas de escritura se extraen de los exports. Pendientes de verificar: instalación independiente con esos esquemas, provisión privada de pases, prompt activo de ElevenLabs y matriz consolidada. No se publicó nada ni se modificó n8n.

Matriz P01–P14 consolidada en tests/pruebas.csv. Aún contiene pendientes explícitos y fechas no recuperadas; no se presenta como 14 pruebas aprobadas.

## Recuperación de evidencia y borrador de informe

P12 verificada con API/steps/log: bloqueo de validación y publicación omitida, recuperación posterior exitosa, mismo commit. Configuración activa ElevenLabs y dos resultados de herramientas de la sesión reciente Pages recuperados sin iniciar conversación. P03 actualizada; costos de esa sesión separados del corte CSV anterior. Los consulta_id VOZ-188/191 no se insertan artificialmente en el CSV antiguo.

Se preparó Informe_base_Jorge_Valencia.md como borrador técnico, aún sin paginar ni declarar 8–12 páginas. Pendientes principales: límites/domino de voz, pruebas adversarias/límites/fallo/evento, provisión de pases reproducible, cierre de costos/escenarios, revisión de evidencias públicas, versión paginada y video/defensa. La configuración leída de ElevenLabs tiene max_tokens=-1 y allowlist vacía; no declarar esos dos controles completos. No se modificó el servicio.

Actualización posterior: max_tokens=1500 verificado en Main después de publicar. Dominio Pages aún ausente (allowlist vacía). Guardrails Manipulation y cinco categorías Content activos según captura; bloqueo adversario pendiente de prueba.

Cierre de configuración de voz: dominio jorgevalba.github.io añadido a Main y releído; max_tokens=1500 se mantiene. No hubo nuevas conversaciones. Continúan pendientes las pruebas no realizadas, la revisión del consentimiento/widget y el cierre del paquete; no confundir configuración verificada con ensayo adversario.

## Costos y disponibilidad consolidados — 4 de noviembre

Elaborado por: Jorge Valencia. Preparados costos/costos.csv (144 registros: 135 del CSV y nueve sesiones), escenarios.csv (seis proyecciones), fuentes/supuestos y lectura explicativa. Suma local validada: USD 0.27757026 de consumo documentado; no factura ni gasto completo. cost_fiat confirmado en USD por documentación oficial. Se mantienen desconocidos construcción, consumo no recuperado y cotización n8n superior a 10,000 ejecuciones; no hay A/B de calidad ejecutado.

Jorge reporta 145/10,000 ejecuciones n8n y doce días restantes de una prueba de catorce días; falta fecha final exacta. No equiparar vigencia del pase con disponibilidad del servicio. Ninguna conversación ElevenLabs nueva para esta consolidación. Matriz P14 actualizada sin declararla completa. Consultar docs/Recolectar_pendientes_Jorge_Valencia.md para la lista vigente y el siguiente paso P05. El sitio y n8n no se modificaron y el paquete local todavía no se publicó.


## Evidencia posterior de P07

Jorge aportó captura de una cuenta identificada como sin permiso: /start y /nuevo reciben Acceso no habilitado o vencido. Se conserva en revisión privada y se documenta sin IDs personales en evidencias/P07_usuario_sin_permiso_Jorge_Valencia.json. P07 ya cuenta con respuesta observable de denegación; no se inspeccionaron recorrido n8n, tablas ni consumo de esa petición. La matriz refleja ese alcance. Los anteriores avisos de P07 pendiente quedan actualizados por esta evidencia.

## Índice trazable preparado

Elaborado por: Jorge Valencia. evidencias/indice.md reúne 22 fichas con identificador estable, archivos, procedencia, resultado observable y límite. Se incorporaron trece capturas seleccionadas como copias literales, dejando los originales completos en revisión privada. Registro JSON/CSV y hashes disponibles; las catorce filas de pruebas.csv tienen evidencias_id y el borrador del informe enlaza las fichas.

Validación local: 104 enlaces/anchors y 56 referencias de archivo con hash comprobados; ver evidencias/Validacion_indice_Jorge_Valencia.json. Esto no prueba disponibilidad remota. No se publicó el paquete, no se cambió web/ ni n8n y no se generaron llamadas a proveedores. El informe sigue siendo borrador Markdown sin paginar. Antes de la entrega: revisión del autor, paginación 8–12 páginas, declaración de IA y recursos, accesibilidad/consentimiento pendientes, disponibilidad para evaluación, integración revisada al repositorio, commit/ZIP coincidentes y video/defensa.
