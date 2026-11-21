# Manual de recreación y uso
Elaborado por: Jorge Valencia. Versión documental 1.0, 4 de noviembre de 2026.

## 1. Elegir la ruta

**Evaluar el sistema existente:** abrir Pages y el bot indicados en README; solicitar pase a Jorge por el canal privado. No importar, reemplazar tablas ni inicializar códigos en la instancia funcionando.

**Recrear en otra cuenta:** usar esta guía y las cuatro plantillas de n8n. Crear un bot propio y un proyecto separado, con credenciales propias. Las plantillas tienen marcadores CONFIGURAR, se importan sin activar y no traen claves, cuentas autorizadas ni pases. La recreación completa todavía requiere provisionar pases en privado y verificar los controles de la cuenta ElevenLabs recreada; esos límites quedan explícitos.

## 2. Entorno registrado

n8n Cloud: error exportado durante las pruebas informó 3.0.1; no se verificó de nuevo la versión instalada hoy. Nodos/versions exactos están en los JSON. GPT-5 mediante HTTP Responses; especialista con reasoning minimal, ruta LFT low; máximo 1,500 tokens de salida, seis generaciones, 120,000 ms y USD 0.10 por caso. Propuesta válida 30 minutos. Los límites reflejan el export, no una promesa de disponibilidad futura del modelo. No sustituir el modelo automáticamente.

Pages aloja web/ y no ejecuta n8n. Actions usa Node 22 y las pruebas locales no requieren instalar paquetes externos. ElevenLabs corre su agente fuera de Pages. Revisar cuotas y vigencias antes de evaluación; no asumir que pruebas gratuitas sean permanentes.

## 3. Datos y tablas

En el mismo proyecto de n8n, crear/importar los seis CSV de datos/carga_inicial/. Los nombres visibles pueden tener espacios; la vinculación se hace con la tabla seleccionada, no suponiendo que el nombre genera el ID. Usar datos/Esquema_tablas_Jorge_Valencia.json y n8n/Mapa_configuracion_Jorge_Valencia.json para mapear.

| Tabla lógica | Inicio limpio | Función |
|---|---|---|
| rh empleados | 15 filas del CSV | Fichas ficticias, periodo y base de cálculo |
| rh aprobadas | Dos reservas de prueba | Ausencias de cobertura precargadas |
| rh calendario | CSV de fechas | Días laborables/descansos |
| rh reglas | CSV de regla SIMULADO | Cobertura y reglas versionadas |
| rh fuentes lft | Cuatro referencias | Fuentes permitidas de /nuevo |
| rh primas pagadas | Pago ficticio del CSV | Evitar prima repetida/derivar coincidencias parciales |
| rh_solicitudes | Vacía | Casos y propuestas |
| rh_trazas | Vacía | Entradas/salidas observables y controles |
| rh_costos | Vacía | Conteo, reserva y conciliación |
| rh_control_aprobaciones | Una fila GLOBAL | Control de decisión |
| rh_accesos_jv_30d | Vacía hasta provisión privada | Huellas y concesiones de acceso |

Mantener fechas de negocio AAAA-MM-DD como texto y números como Number; no convertir a medianoche UTC sin probar interpretación local. Los valores id/createdAt/updatedAt que administra n8n no se cargan como columnas de usuario. Los JSON serializados se guardan como String, no como objetos pegados a una celda. No insertar filas ficticias en tablas de salida solo para crear estructura. Los datos desconocidos no se reemplazan por cero.

En control, crear exactamente una fila: clave=GLOBAL, estado=Libre, propietario vacío, revision=0, verificado=0, autor=Jorge Valencia. Las columnas de revisión/verificado son Number. No poner verificado=1 a mano para saltarse /probar_control. Si una decisión queda interrumpida, conciliar antes de liberar; no forzar Libre sin revisar reserva y caso.

Para el propietario de la recreación, configurar listas privadas de IDs de usuario/chat en Configuración. Si se requieren invitados, provisionar códigos aleatorios de un uso por un mecanismo privado; guardar solo SHA-256 y estado Disponible en la tabla. Registrar fechas de creación/canje máximo de acuerdo con la regla 30 días para canjear y 30 desde canje. No copiar ni ejecutar otra vez el inicializador privado de Jorge en producción. El generador reproducible de nuevos pases no está incluido todavía en este paquete público: no declarar esa parte automatizada.

## 4. Importar cuatro workflows

Desde el menú del workflow, Import from File en un lienzo vacío. Importar cada archivo en un workflow propio: 02_llm, 01_principal, 03_voz y 04_panel. Si se importa sobre un lienzo existente, puede añadirse otra copia; comprobar un solo Telegram Trigger en el principal. Quitar grupos visuales incompatibles no equivale a eliminar nodos.

En todos los Data Table, sustituir marcadores CONFIGURAR por tablas de este proyecto. El mapa enumera cada nodo. En el principal, Configuración.ID_TABLA_CONTROL e ID_TABLA_ACCESOS usan los nuevos IDs; los nodos que los leen conservan sus expresiones. En Agente 1/2/3/4 y Consulta legal LFT seleccionar el mismo subworkflow 02_llm importado. Los IDs originales no son transferibles a otra cuenta.

Las plantillas retiraron referencias de credenciales: volver a seleccionarlas en cada nodo correspondiente. Revisión de importación: 121 nodos principal, 17 LLM, 20 voz y cinco panel. Estas cantidades ayudan a detectar una copia doble, no sustituyen validación de conexiones.

## 5. Credenciales y Configuración

| Tipo de credencial | Nodos | Dónde se introduce el secreto |
|---|---|---|
| Telegram API | Telegram Trigger y todos los envíos Telegram del principal | Credentials de n8n, token del bot propio |
| OpenAI API | Contar tokens de entrada y Generar respuesta, en 02_llm | Credentials de n8n, API key propia |
| HTTP Header Auth | Webhook voz autenticado, en 03_voz | Credentials de n8n; nombre y valor de cabecera |

Usar la misma cabecera/valor como secreto de las herramientas de ElevenLabs, nunca en web/config.json. El nombre no tiene que coincidir con una credencial anterior: el tipo, selección y valor deben ser correctos. Los nombres de .env.example son orientativos y no se inyectan automáticamente en n8n.

Configurar MODO=SIMULADO; MODELO=gpt-5 y los límites indicados en sección 2. Mantener los campos de tarifa, moneda, fecha y URL exigidos: copiar tarifas actuales verificadas al recrear y conservar la procedencia de los costos históricos. Falta una tarifa/configuración requerida: el control debe detener nuevas generaciones. No declarar tarifa cero por falta de datos. Mantener Parse Mode=HTML en los envíos que usan texto escapado, para evitar que comandos con guiones bajos fallen como Markdown.

Revisar ajustes efectivos de guardado de ejecuciones; los cuatro exports no especifican desactivación de historial. No documentar ausencia de registro de códigos sin verificar esa opción. La tabla de accesos y sus huellas no se publican.

## 6. Publicar y mantener disponible

Publicar primero 02_llm y después el principal con sus referencias resueltas. Publicar voz y panel cuando tablas/credenciales estén listas. Dejar un único receptor del bot: no otro workflow publicado ni un receptor polling simultáneo. Para nuevas pruebas aisladas usar otro bot.

Voz usa POST /webhook/rh-voz-consultas-jv-v1, Header Auth y Respond to Webhook. Las herramientas deben usar Production URL de la nueva instancia. Abrirla desde la barra del navegador hace GET y no prueba una solicitud POST autenticada.

Panel usa GET /webhook/rh-panel-publico-jv-v1. Su origen permitido debe corresponder al dominio Pages del propietario; actualizar allowedOrigins si cambia. Es público solo por contener campos sanitizados. Guardar el endpoint nuevo en web/config.json.panel_url; el del proyecto de Jorge no debe reutilizarse para una recreación independiente.

## 7. ElevenLabs y HTML

Crear/configurar agente en español, nombre HR assistant BYD, identificación de IA, alcance ficticio/LFT informativo y sin aprobación. La configuración activa recuperada por lectura está en agentes/voz/Configuracion_activa_Jorge_Valencia.json y su prompt en agentes/voz/prompt_activo.txt. El archivo histórico con FRIDAY en el nombre no es la configuración vigente. La lectura inicial registró max_tokens=-1 y allowlist vacía; una lectura posterior verificó max_tokens=1500 y jorgevalba.github.io en Main. Configurar el dominio propio y el límite en una recreación; ver evidencias/ElevenLabs_dominio_configurado_Jorge_Valencia.json.

Dos herramientas de servidor para el endpoint voz:

```json
{"operacion":"consultar_estado","folio":"VAC-FOLIO-DEVUELTO","conversacion_id":"REFERENCIA_DE_SESION"}
```

```json
{"operacion":"consultar_saldo","empleado_id":"EMP-005","conversacion_id":"REFERENCIA_DE_SESION"}
```

Solo esos campos por operación; conversacion_id debe ser referencia válida de sesión y no se pide al usuario como clave. Configurar secreto de cabecera en servidor. Las consultas leen registro/saldo y no reservan ni pagan. Configuración voz.CONSULTAS_FICTICIAS_HABILITADAS debe estar true cuando la integración esté lista. Si no se confirma auditoría, el flujo devuelve error controlado; revisar las tablas del mismo proyecto.

Insertar el widget con el agent_id público en web/config.json y dominio permitido del sitio según la configuración admitida por la cuenta. API keys quedan fuera del HTML. La interfaz identifica IA y tiene consentimiento y alternativas; falta cerrar la comprobación de orden de consentimiento en una sesión nueva. No afirmar que una captura de chat prueba conversación hablada.

Para publicar en la recreación: repositorio con web/, tests/, skills/ y .github/workflows/pages.yml; habilitar Pages mediante Actions. El workflow actual valida y publica únicamente web/. No subir secretos ni poner datos de recreación internos bajo web/. Probar primero las cuatro instrucciones locales del README.

## 8. Primera comprobación sin LLM

Con el bot publicado, /ayuda debe responder. Usuario sin autorización no debe acceder a casos protegidos. /probar_control debe verificar revisión obsoleta y liberar control sin tocar vacaciones ni llamar a OpenAI. Si falla, detener decisiones y revisar la fila GLOBAL.

Invitado: recibir pase privado, enviar /acceso CODIGO y después /ayuda. Un canje válido concede acceso por 30 días; no renovar plazo por repetir el código. Comprobar que cada mensaje revalida el acceso y que el alcance compartido corresponde solo a casos ficticios. No exhibir el código ni IDs en la evidencia pública.

## 9. Caso de negocio reproducible

En una base inicial limpia, ejemplo /nuevo EMP-001 2026-11-23 2026-11-27: se esperan cinco días, saldo 10→5 y prima estimada 750 MXN si la ficha, calendario/reglas y pagos coinciden con la carga. Primero comprobar que esas fechas sigan admitidas por reglas/periodo y fecha de evaluación. Si el contexto temporal cambia, elegir fechas hábiles admitidas y registrar el resultado calculado; no cambiar el reloj para forzar una prueba.

El folio se genera dinámicamente. Guardar el devuelto y su versión; en los 30 minutos siguientes, /aprobar FOLIO VERSION o /rechazar FOLIO VERSION motivo. Si aparece V2, usar V2. La revisión de calidad no equivale a aprobación. Repetir aprobación debe informar estado terminal y conservar una sola reserva. /estado FOLIO consulta el registro. Con rechazo o expiración no se añade reserva ni pago.

En el sistema de Jorge las reservas ya existen: no prometer el resultado inicial para EMP-001/002/005. Para verificar lectura histórica usar VAC-20261102-YTLSBKE8E; el corte documentado muestra Aprobada, V1, cuatro días. Consultar ese folio y saldo de EMP-005 desde Pages y vincular llamadas/registro. Reutilizar evidencias actuales para ahorrar créditos: no iniciar conversaciones adicionales por defecto.

## 10. Confirmación, parada y recuperación

Confirmar: cuatro etapas generativas con mismo caso_id, revisión válida o corrección acotada, decisión persistida, única reserva, costo por llamada y panel/voz coherentes. Distinguir fecha de consulta del panel y actualización de la fila: la proyección puede derivar expiración sin escribir en tabla.

Para parar una recreación, finalizar conversaciones, despublicar el principal/voz/panel que reciben eventos y conservar tablas para auditoría. Unpublish no borra datos. No detener el sistema de Jorge durante la evaluación. No liberar manualmente un control retenido tras una escritura parcial sin conciliar.

| Síntoma | Revisar |
|---|---|
| Conflicting Trigger Path | Telegram Trigger duplicado en el lienzo o receptor de ese bot en otra publicación; mantener solo uno |
| Subworkflow no publicado | Publicar primero LLM y seleccionar la referencia importada en las cinco invocaciones |
| Table not found | Proyecto correcto y tabla elegida; sustituir todos los IDs, incluidos voz:guardar traza/panel |
| Can't parse entities | Parse Mode y texto escapado; no interpretar comandos como Markdown |
| AUDITORIA_NO_CONFIRMADA | Escritura traza/costo y tablas correctas; no afirmar consulta exitosa si no se confirma |
| Micrófono/servicio no disponible | Aviso y alternativa texto/Telegram; no inventar resultado de consulta |
| Crédito/cuota/modelo/límite | Revisar proveedor y registro de control; no cambiar modelo ni poner consumo desconocido a cero |
| Caso heredado sin vigencia | Nueva propuesta; no aprobar expediente antiguo ni falsificar metadata |

## 11. Fuentes y límites del manual

Procedimiento contrastado con exportaciones entregadas y documentación oficial n8n consultada el 4 de noviembre de 2026:

- [Importar/exportar JSON y precauciones con referencias de credenciales](https://docs.n8n.io/build/manage-workflows/export-and-import.md).
- [Tablas de datos, proyecto e importación CSV](https://docs.n8n.io/build/work-with-data/data-tables.md).
- [Webhook: test/producción y autenticación](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.webhook/).

La redacción no equivale a una nueva instalación en otra cuenta. CSV iniciales y esquemas están preparados; todavía falta verificar esa recreación y completar provisión privada de pases, límites/dominios del agente de voz y cierre de pruebas. Se conserva el alcance de las verificaciones existentes sin afirmar reproducibilidad total antes de probarla.
