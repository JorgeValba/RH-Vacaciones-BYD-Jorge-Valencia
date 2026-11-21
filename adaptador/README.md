# Adaptador local de skills
Elaborado por: Jorge Valencia.

## Propósito y relación con la guía

Guía p.7: aplicar instrucciones del SKILL.md y registrar su carga cuando no hay carga nativa.

## Qué contiene y en qué formato

| Archivo o carpeta | Formato | Qué contiene y qué hacer con él |
|---|---|---|
| [cargar_skills.mjs](cargar_skills.mjs) | Módulo Node (.mjs) | Función Node que lee ambos SKILL.md y devuelve instrucciones/versiones/SHA-256. |

## Cómo utilizarlo

Importar cargarSkills desde cargar_skills.mjs en Node; pasar caso_id válido y la carpeta base si se cambia la ubicación. La función devuelve instrucciones combinadas y registros de versión/hash.

## Entorno y configuración

Node.js; sin credenciales, red, generación ni escritura en tablas. n8n utiliza su propio nodo compilado, documentado en skills/.

## Validación y resultado esperado

node tests/skills.test.mjs comprueba dos casos, hashes y rechazo de identificador inválido. No confundir cargado_localmente con una ejecución remota del workflow.

## Relaciones con el proyecto

- [Guía general](../README.md): requisitos, instalación, inicio, credenciales, parada y solución de problemas.
- [Índice de evidencias](../evidencias/indice.md): resultados y archivos relacionados.
- [Matriz de pruebas](../tests/pruebas.csv): entradas, esperados y resultados observados.
