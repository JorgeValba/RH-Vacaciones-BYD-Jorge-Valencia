# P08: timeout, reintento, registro y aviso
Elaborado por: Jorge Valencia.

## Requisito y resultado

De acuerdo con la **Guía del estudiante, página 12, P08**, ante API caída o cuota agotada debe haber timeout, reintento acotado, estado de error y mensaje comprensible. Este ensayo usa un servicio lento controlado para comprobar esos cuatro comportamientos; no provoca una caída del proveedor ni consume generación de IA. La página 13 pide exports sanitizados e instrucciones para repetir la ejecución.

Resultado recibido: caso **ENSAYO-P08-263**, dos timeouts de **1048 y 1039 ms**, límite de **1000 ms**; separación observada de **1013 ms** entre el fin del primer intento y el inicio del segundo. Error controlado guardado y releído; Telegram confirmó el mensaje 111. El resumen definitivo se ejecutó por separado en **271**, después de corregir su lectura de datos. Véase [E-P08-02](../../evidencias/README.md#e-p08-02).

## Archivos y dónde corren

| Archivo | Formato y función | Dónde se usa |
|---|---|---|
| [01_servicio_lento_Jorge_Valencia.json](01_servicio_lento_Jorge_Valencia.json) | Export n8n: GET → esperar cuatro segundos → responder | Workflow auxiliar publicado temporalmente en n8n |
| [02_timeout_registro_aviso_Jorge_Valencia.json](02_timeout_registro_aviso_Jorge_Valencia.json) | Export n8n: dos peticiones, bloqueo, escritura/relectura y aviso | Workflow nuevo con inicio manual, sin publicar |

Los exports proceden de los archivos finales recibidos. Se retiraron referencias de credenciales, IDs de tabla/chat y metadata de instancia. Se sustituyó el host por TU_INSTANCIA. Insert se hace explícito en el nodo de guardado y se quitaron los valores manuales obsoletos que no se usan con Map Automatically; la lógica del ensayo se conserva. El JSON de resultados es evidencia, no un workflow importable.

## Requisitos y configuración exacta

- Cuenta n8n con permisos para workflows, tablas y webhook HTTPS; acceso de Telegram al chat propio del ejecutor. No se necesita API key de OpenAI ni ElevenLabs para este ensayo.
- Crear la tabla **rh_pruebas_p08** en el mismo proyecto que el ensayo. Siete columnas **String**: autor, caso_id, prueba, estado, intentos_json, mensaje, registrado_en. No crear id/createdAt/updatedAt manualmente.
- Importar cada JSON en un workflow vacío mediante **⋯ → Import from File**. No importarlos sobre el principal. No agregar Telegram Trigger: el único receptor del bot sigue siendo el principal.
- En **Webhook P08 lento** verificar la ruta y copiar su **Production URL**. Publicar solo este auxiliar; Test URL no sirve como destino permanente del ensayo.
- En **Configuracion P08**, sustituir url_prueba por esa Production URL y chat_id por el ID de la conversación propia. Obtenerlo de una ejecución propia de Telegram Trigger → message.chat.id. Mantenerlo privado y conservar las comillas del código.
- En **Guardar error P08** seleccionar rh_pruebas_p08, operación **Insert**, modo **Map Automatically**. Sus siete entradas deben coincidir con las columnas; no pegar expresiones con tabulaciones.
- En **Releer error P08** seleccionar la misma tabla, operación **Get**, condición caso_id Equals y expresión `{{ $('Preparar registro P08').first().json.caso_id }}`. No dejar Insert en este nodo.
- En **Avisar por Telegram P08**, seleccionar la credencial Telegram existente (nombre recomendado **TELEGRAM_HR_BYD**). El token permanece en Credentials. El export no lo incluye.

## Inicio, caso y resultado esperado

Ejecutar **una vez desde Inicio manual**, sin datos fijados. Esto genera un caso ENSAYO-P08-<ejecución>, hace dos solicitudes reales al auxiliar y envía un mensaje al chat propio configurado. Usa ejecuciones de n8n; no crea una solicitud empresarial, no cambia saldo ni reserva vacaciones.

Los dos HTTP tienen timeout 1000 ms y Retry on Fail desactivado. El reintento es explícito y único: intento 1 → verificar timeout → esperar un segundo → intento 2 → verificar timeout. No hay un tercer HTTP ni nodo de generación. Un 404, DNS fallido o respuesta rápida no pasan la aserción de timeout.

Después: Control de presupuesto → Devolver bloqueo → Preparar registro → Insert → Get → verificar igualdad de los siete campos → Telegram → Resumen final. Las salidas esperadas son estado Error controlado, relectura_coincidente true, envio_telegram_confirmado true y TIMEOUT_REINTENTO_REGISTRO_Y_AVISO_VERIFICADOS. El control permite una fila por folio de ensayo en la relectura; una duplicación falla.

## Validación y evidencia

Conservar salida del resumen, registro releído y mensaje recibido; relacionarlos por caso_id. El resumen verifica los dos timeouts, la relectura y el texto/chat devueltos por Telegram. Se leen del nodo de envío directamente; se acepta su envoltura result. Las capturas no sustituyen las verificaciones.

Los códigos Preparar conteo, Control de presupuesto y Devolver bloqueo coinciden con el ensayo original exportado. Las llamadas y el historial previo de costos son sintéticos; el HTTP, la escritura/relectura y el envío fueron reales. No se interpreta esto como prueba de todas las rutas del principal.

## Parada y solución de problemas

Al recoger evidencia, **despublicar solo el servicio lento auxiliar**. El ensayo manual no necesita publicación. Conservar las filas de prueba y los resultados para revisión.

| Síntoma | Comprobar y corregir |
|---|---|
| 404 o sin timeout | Production URL, publicación del auxiliar y espera de cuatro segundos; no usar Test URL |
| Tabla no encontrada | Ambas tablas deben seleccionarse en el proyecto del workflow; no reutilizar IDs ajenos |
| Campos null o con tabulaciones | Guardar con Map Automatically; verificar entrada de siete campos |
| Relectura devuelve otra fila o una nueva | Operación Get y filtro exacto por caso_id; no Insert |
| Telegram recibió pero resumen falla | Leer Avisar por Telegram P08 directamente y respuesta.result; no quitar las comprobaciones |
| Resumen ejecutado por separado | Conservar IDs del ensayo y del resumen; no atribuirlo a una única ejecución sin fallas |

El ensayo histórico [DNS 247](../../evidencias/registros/P08_ejecucion_247_Jorge_Valencia.json) se conserva como antecedente de alcance menor. Los intentos fallidos de configuración y su corrección constan en el [registro del ensayo ampliado](../../evidencias/registros/P08_ensayo_263_resumen_271_Jorge_Valencia.json).
