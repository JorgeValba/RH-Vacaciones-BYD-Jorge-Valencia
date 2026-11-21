# Especialista consulta
Elaborado por: Jorge Valencia.

## Propósito y relación con la guía

Guía p.3: contrato de entrada/salida y aportación verificable.

## Qué contiene y en qué formato

| Archivo o carpeta | Formato | Qué contiene y qué hacer con él |
|---|---|---|
| [entrada_template.js](entrada_template.js) | JavaScript (.js) | Expresión de construcción de datos de entrada usada por el workflow. |
| [instrucciones_base.txt](instrucciones_base.txt) | Texto (.txt) | Instrucciones del rol antes de adjuntar las reglas de skills por rol. |
| [salida.schema.json](salida.schema.json) | JSON (.json) | JSON Schema estricto del resultado del especialista. |

## Cómo utilizarlo

Comprobar registros/fuentes disponibles de su contrato y seleccionar referencias permitidas. Leer primero instrucciones_base.txt, después entrada_template.js y salida.schema.json.

## Entorno y configuración

Estos archivos son fuente de referencia de los nodos del principal; no se importan como workflows ni se ejecutan solos.

## Validación y resultado esperado

La respuesta debe cumplir el esquema estricto. caso_id se conserva en el sobre y traza; no añadirlo al JSON del agente si el esquema no lo permite.

## Relaciones con el proyecto

- [Guía general](../../../README.md): requisitos, instalación, inicio, credenciales, parada y solución de problemas.
- [Índice de evidencias](../../../evidencias/indice.md): resultados y archivos relacionados.
- [Matriz de pruebas](../../../tests/pruebas.csv): entradas, esperados y resultados observados.
