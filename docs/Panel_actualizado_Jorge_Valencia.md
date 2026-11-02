# Panel conectado a n8n
Elaborado por: Jorge Valencia.

## Comportamiento

El HTML consulta un receptor GET separado de los canales Telegram y voz: al abrirse, al pulsar Actualizar datos y cada 60 segundos mientras la pestaña está visible. No abre conexiones permanentes ni recibe notificaciones instantáneas. Una decisión guardada en rh_solicitudes aparece al completar la siguiente consulta correcta. Los filtros se conservan durante las actualizaciones.

El receptor lee la tabla del mismo proyecto y proyecta únicamente caso_id, equipo_id, estado, dias_solicitados, creado_en y actualizado_en. Aplica los controles de registros ficticios antes de responder. No llama a OpenAI ni escribe aprobaciones, reservas, saldos o pagos.

La URL pública no contiene credenciales. El receptor de voz mantiene su autenticación propia y no se modifica. CORS permite el origen https://jorgevalba.github.io; no equivale a autenticar usuarios. El resumen público es exclusivamente el conjunto ficticio que ya se publicó en GitHub Pages. No usar este diseño para expedientes reales de RH.

## Disponibilidad y fecha de corte

Cada respuesta incluye exportado_en como instante de consulta por compatibilidad con el esquema público existente. La página lo identifica como Consultado. Se rechazan respuestas con más de cinco minutos de desfase. La lectura puede coincidir con un proceso de aprobación en curso; no constituye una transacción que bloquee escrituras.

La petición vence a los 15 segundos y el navegador no solapa consultas. Si el servicio falla, conserva la última consulta válida o carga la copia sanitizada de GitHub. Siempre muestra advertencia y fecha; una copia nunca se presenta como consulta actual. La recuperación reemplaza los datos al obtener una nueva respuesta válida.

Si una propuesta pendiente tiene vencimiento válido agotado, se presenta Expirada sin modificar la tabla privada. Si una propuesta antigua no incluye vencimiento, se conserva el estado registrado; el panel indica revisar versión y vigencia en Telegram antes de decidir.

## Instalación

Jorge debe importar el archivo privado RH_Panel_actualizado_Jorge_Valencia.json como workflow nuevo en el mismo proyecto Personal de rh_solicitudes y publicarlo. El archivo usa el ID de tabla ya comprobado. No requiere credenciales nuevas, IA de n8n ni cambios en los otros workflows.

Production URL: https://hrbydbo7.app.n8n.cloud/webhook/rh-panel-publico-jv-v1

La consulta produce una ejecución de n8n. No consume tokens de OpenAI; las ejecuciones pueden contar para la cuota del plan. El sondeo se pausa cuando la pestaña está oculta. No hay caché compartida ni limitador de peticiones del servidor en esta versión.

## Verificación

Pruebas automáticas: campos permitidos; errores genéricos; registros reales, duplicados y datos incoherentes rechazados; vigencia; indicadores; conservación de filtros; pausa en segundo plano; petición única en curso; respuesta inválida; recuperación; copia anterior explícitamente identificada.

La preparación del archivo y las pruebas simuladas no certifican que el webhook esté publicado. Falta la prueba real desde Pages después de que Jorge importe y publique el nuevo receptor. La prueba debe contrastar al menos un folio aprobado con rh_solicitudes y comprobar el mensaje Datos consultados en n8n.

Fuentes: [Webhook de n8n](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.webhook/), [Respond to Webhook](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.respondtowebhook/).
