# Evidencia que falta recolectar
Elaborado por: Jorge Valencia. Actualizado: 4 de noviembre de 2026.

Usar junto con tests/pruebas.csv. Esta lista distingue documentación preparada de pruebas pendientes. No repetir conversaciones ElevenLabs por defecto. No publicar códigos de acceso, claves, IDs personales, conversaciones completas ni capturas con perfil del navegador.

- **Disponibilidad de n8n.** Tenemos confirmación de Jorge: prueba 14 días, doce restantes, 145/10,000 ejecuciones. Falta fecha/hora final exacta. Sacarla de Usage/Billing o del aviso de prueba de la cuenta. Guardar captura privada y anotar fecha; contrastarla con la evaluación. Los pases por treinta días no prolongan el servicio.

- **P05: entrada incompleta.** Desde Telegram, mandar `/nuevo EMP-004` sin fechas. Esperado: aclaración del formato, sin inventar solicitud ni llamar al modelo. Guardar captura de respuesta y abrir la ejecución correspondiente en n8n → Executions; anotar ID/hora y último nodo. Verificar que no se ejecutó un especialista/subworkflow de generación. No crear una reserva para esta prueba.

- **P06: resistencia a instrucciones indebidas.** Usar un mensaje breve que pida ignorar permisos y revelar credenciales. Guardar respuesta y ruta de ejecución. Esperado: no revelar secretos ni cambiar acceso/estado. Presencia de guardrails o texto de un skill no prueba su funcionamiento. Hacer esta prueba en Telegram antes de gastar créditos de voz.

- **P07/P04: permisos y acceso compartido.** Hay confirmación de canje y consulta desde otra cuenta. Falta consolidar denegación con cuenta sin pase o pase revocado y decisión compartida con versión válida/incorrecta. Guardar comandos/resultados y traza del actor, ocultando identificadores personales. No revocar el único acceso útil para la evaluación.

- **P08/P09: error externo y bloqueo por límite.** Antes de probar, preparar copia desactivada y configuración temporal acotada. No romper credenciales ni el flujo publicado. Guardar parámetro temporal, ejecución, error/bloqueo, costos y restitución. El caso histórico con error de tabla no acredita un fallo de API; seis llamadas permitidas no acreditan bloqueo del siguiente intento. No repetir a ciegas ni generar llamadas pagadas innecesarias.

- **P10: mismo evento.** La segunda aprobación con nuevo mensaje ya mostró que no se duplicó la reserva; falta el mismo update/evento de Telegram. Preparar reproducción controlada con el mismo identificador, sin enviar otra orden real de aprobación. Antes/después: número de reservas por aprobacion_id, efecto registrado y traza. Un mensaje nuevo no equivale al evento idéntico.

- **P11: skills y loops.** Tenemos hashes de dos skills, cargas posteriores y corrección histórica V1→V2. Recolectar rúbrica de autoevaluación de cinco aspectos, 0–4, y revisar umbral exigido. Si la guía exige carga y corrección en el mismo caso, falta esa evidencia conjunta. Extraer de rh_trazas filtrando caso_id: carga_skill, propuesta, revisión, corrección y versión; de rh_costos las llamadas correspondientes. No atribuir a una versión del skill una ejecución anterior.

- **P13: interacción y consentimiento.** Hay móvil real, 390/1366, filtros, restablecimiento y confirmación de teclado. Falta cerrar secuencia inicial del consentimiento y causa de rechazo del micrófono; revisar widget que cubre gráfica en móvil. Registrar si funciona modo de texto alternativo. Evitar una nueva conversación solo para repetir lo ya documentado.

- **P14 y costos.** Preparados costos.csv, seis escenarios y subtotal de nueve sesiones más 48 generaciones; fuentes y fórmulas en costos/LEEME_costos_Jorge_Valencia.md. Falta costo de construcción, consumo de cuenta no recuperado y comparación de optimización con calidad medida. Si el dato no existe, declarar desconocido: no completar con cero.

- **Reproducibilidad.** Manual, once esquemas, seis CSV iniciales, prompts/contratos y plantillas sanitizadas están preparados. Falta verificar instalación independiente y provisionamiento privado de pases, sin usar los pases reales. Documentar nombres/IDs que el instalador debe reemplazar y una única entrada Telegram.

- **Informe y entrega.** Informe_base_Jorge_Valencia.md es borrador, no PDF final de 8–12 páginas. Completar reflexión personal, declaración de IA, licencias y anexos. Luego integrar archivos públicos revisados en GitHub, comprobar Actions y Pages, fijar commit, generar ZIP coincidente y grabar video de 5–8 minutos. Los archivos de preparación aún no están publicados.

Para cada evidencia anotar: ID de prueba, fecha/hora, versión/commit, entrada, resultado esperado, observado y ruta del archivo. Conservar incidentes y limitaciones. La siguiente recolección recomendada es P05, por su bajo impacto y porque no requiere ElevenLabs.
