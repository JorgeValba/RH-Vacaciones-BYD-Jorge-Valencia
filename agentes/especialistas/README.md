# Los cuatro especialistas
Elaborado por: Jorge Valencia.

## Propósito y relación con la guía

Guía p.3: instrucciones, herramientas y resultados diferentes para cuatro agentes.

## Qué contiene y en qué formato

| Archivo o carpeta | Formato | Qué contiene y qué hacer con él |
|---|---|---|
| [consulta/](consulta/README.md) | Carpeta | Abrir su README para formatos, uso y validación de ese componente. |
| [propuesta/](propuesta/README.md) | Carpeta | Abrir su README para formatos, uso y validación de ese componente. |
| [recepcion/](recepcion/README.md) | Carpeta | Abrir su README para formatos, uso y validación de ese componente. |
| [revision/](revision/README.md) | Carpeta | Abrir su README para formatos, uso y validación de ese componente. |

## Cómo utilizarlo

Entrar en recepcion, consulta, propuesta o revision. Cada carpeta contiene el mismo conjunto de tres formatos, con contenido específico del rol.

## Entorno y configuración

n8n arma el prompt con instrucciones base, contrato y skills proyectados por rol; llama al subworkflow GPT-5.

## Validación y resultado esperado

Contrastar con contratos y trazas comunes; cambiar el nombre de un agente no demuestra un rol diferente.

## Relaciones con el proyecto

- [Guía general](../../README.md): requisitos, instalación, inicio, credenciales, parada y solución de problemas.
- [Índice de evidencias](../../evidencias/indice.md): resultados y archivos relacionados.
- [Matriz de pruebas](../../tests/pruebas.csv): entradas, esperados y resultados observados.
