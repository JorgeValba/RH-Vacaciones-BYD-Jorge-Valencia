# Roles e instrucciones
Elaborado por: Jorge Valencia.

## Propósito y relación con la guía

Guía p.3 y p.13: cinco roles distinguibles, contratos, instrucciones y traza común.

## Qué contiene y en qué formato

| Archivo o carpeta | Formato | Qué contiene y qué hacer con él |
|---|---|---|
| [Contratos_Jorge_Valencia.json](Contratos_Jorge_Valencia.json) | JSON (.json) | Relaciona instrucciones, esquema de salida y plantilla de entrada de cada especialista. |
| [Orquestador_Jorge_Valencia.md](Orquestador_Jorge_Valencia.md) | Markdown (.md) | Orden de etapas, control determinista, estados, límites y cierre. |
| [voz_core.js](voz_core.js) | JavaScript (.js) | Funciones deterministas de estado/saldo; base de las comprobaciones de consultas. |
| [especialistas/](especialistas/README.md) | Carpeta | Abrir su README para formatos, uso y validación de ese componente. |
| [voz/](voz/README.md) | Carpeta | Abrir su README para formatos, uso y validación de ese componente. |

## Cómo utilizarlo

Leer Orquestador_Jorge_Valencia.md y Contratos_Jorge_Valencia.json. En especialistas/ cada rol tiene instrucciones TXT, esquema JSON y expresión de entrada JS. La carpeta voz/ documenta la interfaz adicional.

## Entorno y configuración

Los cuatro especialistas se ejecutan por el workflow LLM; el orquestador es lógica n8n. voz_core.js ofrece consultas deterministas reutilizadas y probadas localmente.

## Validación y resultado esperado

La salida de cada agente se valida con su esquema y cálculos deterministas. Caso_id viaja en el sobre/traza, sin añadir campos no permitidos al JSON del especialista.

## Relaciones con el proyecto

- [Guía general](../README.md): requisitos, instalación, inicio, credenciales, parada y solución de problemas.
- [Índice de evidencias](../evidencias/indice.md): resultados y archivos relacionados.
- [Matriz de pruebas](../tests/pruebas.csv): entradas, esperados y resultados observados.


## Responsabilidad de cada rol

| Rol | Recibe | Entrega | Permiso principal |
|---|---|---|---|
| Orquestador | Evento autorizado, datos, límites y resultados | Estado del caso, invocaciones, validaciones y cierre | Coordina y aplica lógica determinista; no delega permisos al modelo |
| Recepción | Texto original y solicitud estructurada | Campos consistentes, faltantes y observaciones | Valida captura; no evalúa salarios o cobertura |
| Consulta | Registros y fuentes de su contrato | Suficiencia y referencias permitidas | Selecciona entre datos recuperados por n8n; no inventa consultas externas |
| Propuesta | Cálculos deterministas, alertas, fuentes y correcciones | Explicación breve con cifras verificadas | Propone; no aprueba ni escribe reservas |
| Revisión | Solicitud, cálculos y propuesta | validado y correcciones concretas | Puede devolver o impedir liberación; no sustituye decisión humana |

El sobre común conserva caso_id, etapa, resultado y referencia de consumo. El JSON estricto del especialista solo contiene los campos de su esquema; no añadir caso_id si ese esquema lo excluye. Las expresiones JS son referencia de entrada de n8n, no scripts que el evaluador deba ejecutar directamente.

El prompt efectivo combina instrucciones_base con reglas pertinentes de los skills que el nodo de carga proyecta por rol. Las trazas distinguen la versión realmente usada de revisiones documentales posteriores. El asistente ElevenLabs consulta por herramientas y es una interfaz adicional, no un quinto especialista que reemplace la orquestación.
