# Automatizaciones importables
Elaborado por: Jorge Valencia.

## Propósito y relación con la guía

Guía p.4 y p.13: exports JSON sin secretos y manual de importación.

## Qué contiene y en qué formato

| Archivo o carpeta | Formato | Qué contiene y qué hacer con él |
|---|---|---|
| [01_principal_Jorge_Valencia.json](01_principal_Jorge_Valencia.json) | JSON (.json) | Workflow de 121 nodos: Telegram, autorización, datos, orquestación y decisión humana. |
| [02_llm_Jorge_Valencia.json](02_llm_Jorge_Valencia.json) | JSON (.json) | Subworkflow de 17 nodos: conteo, control previo, reserva y generación GPT-5. |
| [03_voz_Jorge_Valencia.json](03_voz_Jorge_Valencia.json) | JSON (.json) | Workflow de 20 nodos: POST autenticado, consulta de folio/saldo y auditoría. |
| [04_panel_Jorge_Valencia.json](04_panel_Jorge_Valencia.json) | JSON (.json) | Workflow de cinco nodos: GET y proyección pública sanitizada. |
| [Mapa_configuracion_Jorge_Valencia.json](Mapa_configuracion_Jorge_Valencia.json) | JSON (.json) | Lista de vinculaciones de tablas y subworkflow, por nodo y archivo. |

## Cómo utilizarlo

Importar cada JSON 01–04 en un workflow vacío del mismo proyecto. Crear antes sus tablas con datos/; configurar el mapa por nodo; publicar 02_llm antes del principal.

## Entorno y configuración

Ejecuta en n8n Cloud con HTTPS. Los JSON son plantillas sanitizadas con marcadores CONFIGURAR: seleccionar IDs y credenciales propios.

## Validación y resultado esperado

Esperar 121/17/20/5 nodos en principal/LLM/voz/panel. Mantener un solo Telegram Trigger. Comprobar /ayuda y /probar_control antes de decisiones.

## Relaciones con el proyecto

- [Guía general](../README.md): requisitos, instalación, inicio, credenciales, parada y solución de problemas.
- [Índice de evidencias](../evidencias/indice.md): resultados y archivos relacionados.
- [Matriz de pruebas](../tests/pruebas.csv): entradas, esperados y resultados observados.


## Configuración por workflow

### 01 principal

En el nodo **Configuración** configurar los arrays privados USER_IDS_AUTORIZADOS/CHAT_IDS_AUTORIZADOS, MODELO=gpt-5, MAX_OUTPUT_TOKENS=1500, MAX_LLAMADAS=6, TIMEOUT_MS=120000 y TOPE_USD_CASO=0.10. Mantener MODO=SIMULADO, MONEDA y la procedencia de tarifas. ID_TABLA_CONTROL e ID_TABLA_ACCESOS deben usar las tablas del nuevo proyecto. VIGENCIA_APROBACION_MIN=30 regula la propuesta, no la duración del pase.

Para LFT: REASONING_EFFORT_LFT, MAX_TOOL_CALLS_LFT, CARGO_BUSQUEDA_USD y SUPUESTO_TOKENS_CONTENIDO_BUSQUEDA intervienen en el costo reservado de esa ruta. Las tarifas 1.25/0.125/10 USD por millón pertenecen al corte histórico, no una cotización nueva. Conservar fecha y fuente de los valores que se configuren.

En los nodos Agente 1/2/3/4 y Consulta legal LFT elegir el subworkflow 02_llm importado. Las salidas se validan después de cada llamada. La lógica de acceso y decisión está en el servidor, no en las instrucciones de texto del usuario.

### 02 LLM

Recibe un estado del principal. Vincular **OPENAI_RH**, o el nombre equivalente de la cuenta, en Contar tokens de entrada y Generar respuesta. Sus Data Table apuntan a rh_costos y rh_trazas. El control usa conteo y límite de salida para calcular una reserva antes de autorizar la generación; luego conserva uso, costos y trazas.

No tiene Telegram Trigger. Publicarlo antes del principal permite resolver las llamadas de subworkflow. No añadir otro receptor del bot para hacer funcionar este archivo.

### 03 voz

**Webhook voz autenticado**: POST, Header Auth, respuesta por nodo Respond to Webhook. Seleccionar **RH_VOZ_HEADER_AUTH** con cabecera X-RH-Voz-Key. En **Configuración voz**, CONSULTAS_FICTICIAS_HABILITADAS controla el alcance de consultas. Elegir las tablas del proyecto en Voz: leer caso/empleado/reservas/reglas y los nodos de auditoría/costo.

La herramienta de ElevenLabs envía JSON con operación consultar_estado y folio, o consultar_saldo y empleado_id, más conversacion_id de la sesión. Usar Production URL para el sistema activo. Un GET en la barra del navegador no comprueba este POST autenticado.

### 04 panel

**Panel: recibir consulta → Options → Allowed Origins** contiene el origen Pages permitido. **Panel: leer solicitudes** apunta a rh_solicitudes. El código de **Panel: preparar resumen permitido** proyecta solo los campos autorizados. **Panel: responder al HTML** devuelve el JSON al navegador.

Guardar la Production URL GET propia en web/config.json.panel_url. Este endpoint no requiere la clave privada de voz porque únicamente expone datos ficticios sanitizados; no añadir campos privados para depurar el HTML.

## Importación, comprobación y parada

Para importar: crear workflow vacío → ⋯ → Import from File → seleccionar JSON → vincular tablas/credenciales → guardar y publicar en orden. Los grupos visuales incompatibles no equivalen a pérdida de nodos; comparar cantidades y conexiones. Si aparecen varios Telegram Trigger, no activar todos: revisar si se importó sobre un lienzo ocupado.

Comprobar /ayuda y /probar_control. Una solicitud válida devuelve folio o explicación de detención; una decisión debe usar el folio y la versión exactos. Consultar Executions para identificar entrada, último nodo y salida. Los ensayos aislados de tests/ se ejecutan manualmente, sin publicar.

Para detener el servicio, desactivar el workflow correspondiente, sin borrar sus tablas. Ante reserva parcial, revisar caso y reserva antes de reintentar o liberar control. Para solucionar errores, consultar el manual y el mapa por nodo: un ID de tabla de otra cuenta no se vuelve válido por tener el mismo nombre visible.
