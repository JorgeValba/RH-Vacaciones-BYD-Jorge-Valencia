# Roles, contratos y ejecución
Elaborado por: Jorge Valencia. Extraído de la versión V2.4 recibida.

| Rol | Recibe | Aporta | No puede hacer |
|---|---|---|---|
| Orquestador | Evento autorizado, solicitud, reglas, datos y límites | Ordena etapas, calcula con código, valida salidas, controla presupuesto/corrección y cierre | Delegar permisos o decisión de RH al modelo |
| Recepción | Texto y solicitud estructurada | Contrasta empleado/fechas, faltantes y observaciones | Evaluar salarios/saldo/cobertura |
| Consulta | Recepción, registros recuperados y fuentes | Decide suficiencia y selecciona referencias permitidas | Afirmar que consultó directamente las tablas o buscar en la web en /nuevo |
| Propuesta | Cálculos deterministas, alertas, fuentes y correcciones | Explicación breve; copia cifras, distingue prima bruta/adicional | Recalcular cifras o aprobar |
| Revisión | Solicitud, cálculos, propuesta, alertas y fuentes | validado y correcciones concretas | Convertir calidad válida en aprobación humana |

Los cuatro especialistas usan GPT-5; son roles diferentes por instrucciones, entradas y salidas. El orquestador es lógica de n8n y funciones, no una quinta llamada LLM. Las búsquedas legales generales corresponden a la ruta separada /lft.

## Archivos extraídos

`Contratos_Jorge_Valencia.json` enlaza instrucciones base, esquema de salida y expresión de construcción de entrada de cada rol. Los esquemas se extrajeron literalmente, sin añadir caso_id al JSON estricto. El identificador viaja en el sobre de la llamada y su traza.

El prompt efectivo incluye la base más las reglas de skills seleccionadas por rol en `Cargar skills versionados`. Las fuentes de esos archivos se sincronizaron en esta copia con el snapshot del workflow: negocio 1.0.1, seguridad 1.0.0. No se cambió el runtime remoto ni se eliminó texto del original para aparentar otra configuración. Documentación nueva utiliza la descripción vigente del caso.

## Corrección y validación

Recepción valida campos; Consulta verifica referencias presentes; Propuesta contrasta cifras y frases de simulación, 70 palabras/700 caracteres; Revisión verifica coherencia entre validado y correcciones. La salida inválida se detiene. Una revisión negativa puede volver a Propuesta una sola vez, dentro del máximo global de seis generaciones, 120 s y USD 0.10 por caso. Son límites exportados, no una nueva prueba de agotamiento.

La salida de Propuesta se compara con el cálculo usando la tolerancia implementada para valores numéricos; no se describe como igualdad binaria absoluta. La aprobación humana revalida el negocio y conserva control de escritura antes de reservar. Las reglas del servidor siguen aplicándose aunque un usuario solicite ignorarlas.

## Evidencia disponible

Tres casos aprobados con cuatro etapas en las trazas; YTLS6SW04 contiene seis generaciones y V1/V2, antes de la carga de skills posterior. Skills cargados en tres casos posteriores. No atribuir la carga posterior al caso histórico de corrección. Ver evidencias/registros/ y docs/Estado_entrega_Jorge_Valencia.md.

La configuración de voz del archivo histórico FRIDAY_prompt_Jorge_Valencia.txt no se usa como fuente suficiente del prompt activo de ElevenLabs. El nombre visible actual es HR assistant BYD; la configuración activa recuperada está en voz/Configuracion_activa_Jorge_Valencia.json y voz/prompt_activo.txt, con sus límites observados. El widget de voz es una interfaz adicional y no reemplaza a los cuatro especialistas.
