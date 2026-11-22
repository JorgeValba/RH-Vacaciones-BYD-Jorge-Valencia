# Roles e instrucciones
Elaborado por: Jorge Valencia.


## Nombres documentales de los agentes

Elaborado por: Jorge Valencia. Para las descripciones del repositorio y el informe se utilizan estos nombres de psicólogos reconocidos, siempre acompañados del rol técnico para conservar la trazabilidad:

| Nombre documental | Rol técnico que conserva | Función en el proyecto |
|---|---|---|
| **Kurt Lewin** | Orquestador | Coordina etapas, permisos, límites y decisión humana mediante lógica n8n |
| **Carl Rogers** | Agente 1 — Recepción | Revisa empleado, fechas y campos faltantes |
| **Jean Piaget** | Agente 2 — Consulta | Examina suficiencia de datos y fuentes permitidas |
| **Abraham Maslow** | Agente 3 — Propuesta | Explica cálculos y prepara la propuesta de vacaciones |
| **Daniel Kahneman** | Agente 4 — Revisión | Contrasta la propuesta y devuelve correcciones o validación |
| **HR assistant BYD** | Canal de voz/texto | Consulta estado y saldo mediante las herramientas del mismo sistema |

Son alias de documentación. Los identificadores de nodos, contratos, prompts, trazas y configuraciones conservan sus nombres técnicos. Kurt Lewin identifica al orquestador determinista; el canal adicional conserva exclusivamente el nombre HR assistant BYD. En el informe usar la forma «Carl Rogers — Agente 1, Recepción», y el mismo criterio para los demás roles.

## Referencia a la Guía del estudiante

De acuerdo con la **Guía del estudiante, página 3**, se pide distinguir orquestador y cuatro especialistas, documentar instrucciones y contratos y conservar trazas de sus aportaciones.

Las subcarpetas separan los cinco roles; voz/ documenta el agente de ElevenLabs como canal de consulta. La referencia identifica el requisito; su cumplimiento se contrasta con los archivos y resultados enlazados, no solamente con la existencia de la carpeta.

## Qué contiene y en qué formato

| Archivo o carpeta | Formato | Qué contiene y qué hacer con él |
|---|---|---|
| [Contratos_Jorge_Valencia.json](Contratos_Jorge_Valencia.json) | JSON (.json) | Relaciona instrucciones, esquema de salida y plantilla de entrada de cada especialista. |
| [Orquestador_Jorge_Valencia.md](Orquestador_Jorge_Valencia.md) | Markdown (.md) | Orden de etapas, control determinista, estados, límites y cierre. |
| [voz_core.js](voz_core.js) | JavaScript (.js) | Funciones deterministas de estado/saldo; base de las comprobaciones de consultas. |
| [especialistas/](especialistas/) | Carpeta | Archivos explicados en esta guía; abrir la carpeta para consultar sus fuentes. |
| [voz/](voz/README.md) | Carpeta | Abrir su README para formatos, uso y validación de ese componente. |

## Cómo utilizarlo

Leer Orquestador_Jorge_Valencia.md y Contratos_Jorge_Valencia.json. En especialistas/ cada rol tiene instrucciones TXT, esquema JSON y expresión de entrada JS. La carpeta voz/ documenta la interfaz adicional.

## Entorno y configuración

Los cuatro especialistas se ejecutan por el workflow LLM; el orquestador es lógica n8n. voz_core.js ofrece consultas deterministas reutilizadas y probadas localmente.

## Validación y resultado esperado

La salida de cada agente se valida con su esquema y cálculos deterministas. Caso_id viaja en el sobre/traza, sin añadir campos no permitidos al JSON del especialista.

## Relaciones con el proyecto

- [Guía general](../README.md): requisitos, instalación, inicio, credenciales, parada y solución de problemas.
- [Índice de evidencias](../evidencias/README.md): resultados y archivos relacionados.
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

## Archivos de los cuatro especialistas

Cada rol utiliza tres piezas: instrucciones, contrato de salida y entrada de referencia. Se consultan desde esta tabla para evitar repetir un README en cada nivel.

| Archivo | Para qué sirve |
|---|---|
| [especialistas/consulta/entrada_template.js](especialistas/consulta/entrada_template.js) | Expresión de entrada de referencia para n8n; indica los datos que recibe el especialista. |
| [especialistas/consulta/instrucciones_base.txt](especialistas/consulta/instrucciones_base.txt) | Instrucciones del rol; se incorporan al prompt del nodo correspondiente. |
| [especialistas/consulta/salida.schema.json](especialistas/consulta/salida.schema.json) | Contrato de salida JSON; define campos y tipos admitidos para validar la respuesta. |
| [especialistas/propuesta/entrada_template.js](especialistas/propuesta/entrada_template.js) | Expresión de entrada de referencia para n8n; indica los datos que recibe el especialista. |
| [especialistas/propuesta/instrucciones_base.txt](especialistas/propuesta/instrucciones_base.txt) | Instrucciones del rol; se incorporan al prompt del nodo correspondiente. |
| [especialistas/propuesta/salida.schema.json](especialistas/propuesta/salida.schema.json) | Contrato de salida JSON; define campos y tipos admitidos para validar la respuesta. |
| [especialistas/recepcion/entrada_template.js](especialistas/recepcion/entrada_template.js) | Expresión de entrada de referencia para n8n; indica los datos que recibe el especialista. |
| [especialistas/recepcion/instrucciones_base.txt](especialistas/recepcion/instrucciones_base.txt) | Instrucciones del rol; se incorporan al prompt del nodo correspondiente. |
| [especialistas/recepcion/salida.schema.json](especialistas/recepcion/salida.schema.json) | Contrato de salida JSON; define campos y tipos admitidos para validar la respuesta. |
| [especialistas/revision/entrada_template.js](especialistas/revision/entrada_template.js) | Expresión de entrada de referencia para n8n; indica los datos que recibe el especialista. |
| [especialistas/revision/instrucciones_base.txt](especialistas/revision/instrucciones_base.txt) | Instrucciones del rol; se incorporan al prompt del nodo correspondiente. |
| [especialistas/revision/salida.schema.json](especialistas/revision/salida.schema.json) | Contrato de salida JSON; define campos y tipos admitidos para validar la respuesta. |

<!-- INICIO LECTURA SEMANTICA -->
## Lectura e interpretación de los archivos

Esta guía de lectura es una ayuda documental añadida por Jorge Valencia para revisión humana o asistida por IA. La guía del curso exige trazabilidad y reproducibilidad; no impone estas fichas ni convierte una descripción en prueba ejecutada. El archivo enlazado es la fuente; su README explica cómo interpretarlo, con procedencia, fecha y alcance.

### [Contratos_Jorge_Valencia.json](Contratos_Jorge_Valencia.json)

**Tipo y uso:** Contrato de interfaces de los cuatro especialistas.

**Qué contiene:** especialistas relaciona rol, nodos de preparación/llamada/validación, instrucciones_base, salida_schema y plantilla de entrada.

**Cómo interpretarlo:** Seguir cada rol desde su entrada hasta el schema; caso_id viaja en el sobre de llamada/traza y no se agrega arbitrariamente a la salida estricta.

**Alcance y límite:** Describe qué debe recibir/entregar el agente; no prueba que una ejecución haya cumplido el contrato. Ver trazas por llamada.

### [consulta/salida.schema.json](especialistas/consulta/salida.schema.json)

**Tipo y uso:** JSON Schema: contrato, no salida de una ejecución.

**Qué contiene:** type, required y properties definen campos/tipos. Obligatorios: datos_suficientes, datos_disponibles, faltantes, fuentes_seleccionadas, observaciones. additionalProperties=false excluye claves no previstas.

**Cómo interpretarlo:** Leer primero required, después properties y restricciones. datos_suficientes expresa suficiencia para continuar y fuentes_seleccionadas identifica referencias recuperadas, no citas inventadas.

**Alcance y límite:** Un schema puede definir validado sin contener el resultado true/false de un caso. El cumplimiento se demuestra con respuesta validada y traza, no con la existencia de este archivo.

### [propuesta/salida.schema.json](especialistas/propuesta/salida.schema.json)

**Tipo y uso:** JSON Schema: contrato, no salida de una ejecución.

**Qué contiene:** type, required y properties definen campos/tipos. Obligatorios: resumen, dias_solicitados, saldo_actual, saldo_proyectado, prima_bruta_mxn, prima_adicional_mxn, cobertura_ok, alertas, fuentes_citadas. additionalProperties=false excluye claves no previstas.

**Cómo interpretarlo:** Leer primero required, después properties y restricciones. saldo_proyectado es posterior hipotético; prima_bruta/adicional son estimaciones; cobertura_ok no equivale a aprobación.

**Alcance y límite:** Un schema puede definir validado sin contener el resultado true/false de un caso. El cumplimiento se demuestra con respuesta validada y traza, no con la existencia de este archivo.

### [recepcion/salida.schema.json](especialistas/recepcion/salida.schema.json)

**Tipo y uso:** JSON Schema: contrato, no salida de una ejecución.

**Qué contiene:** type, required y properties definen campos/tipos. Obligatorios: empleado_id, fecha_inicio, fecha_fin, campos_faltantes, observaciones. additionalProperties=false excluye claves no previstas.

**Cómo interpretarlo:** Leer primero required, después properties y restricciones. campos_faltantes enumera información que debe aclararse; empleado/fechas son datos capturados, no autorización.

**Alcance y límite:** Un schema puede definir validado sin contener el resultado true/false de un caso. El cumplimiento se demuestra con respuesta validada y traza, no con la existencia de este archivo.

### [revision/salida.schema.json](especialistas/revision/salida.schema.json)

**Tipo y uso:** JSON Schema: contrato, no salida de una ejecución.

**Qué contiene:** type, required y properties definen campos/tipos. Obligatorios: validado, correcciones, observaciones. additionalProperties=false excluye claves no previstas.

**Cómo interpretarlo:** Leer primero required, después properties y restricciones. validado=false exige corregir o detener; validado=true supera esa revisión, pero no concede vacaciones.

**Alcance y límite:** Un schema puede definir validado sin contener el resultado true/false de un caso. El cumplimiento se demuestra con respuesta validada y traza, no con la existencia de este archivo.
<!-- FIN LECTURA SEMANTICA -->
