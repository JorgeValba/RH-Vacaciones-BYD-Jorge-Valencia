# Adaptador local de skills
Elaborado por: Jorge Valencia.

## Referencia a la Guía del estudiante

De acuerdo con la **Guía del estudiante, página 7**, se pide demostrar cómo se carga y aplica un skill; conservar un archivo por sí solo no demuestra su uso.

Este adaptador permite leer los SKILL.md en Node; n8n utiliza snapshots compilados. La carpeta es una decisión de implementación, no un nombre exigido. La referencia identifica el requisito; su cumplimiento se contrasta con los archivos y resultados enlazados, no solamente con la existencia de la carpeta.

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
- [Índice de evidencias](../evidencias/README.md): resultados y archivos relacionados.
- [Matriz de pruebas](../tests/pruebas.csv): entradas, esperados y resultados observados.

<!-- INICIO LECTURA SEMANTICA -->
## Lectura e interpretación de los archivos

Esta guía de lectura es una ayuda documental añadida por Jorge Valencia para revisión humana o asistida por IA. La guía del curso exige trazabilidad y reproducibilidad; no impone estas fichas ni convierte una descripción en prueba ejecutada. El archivo enlazado es la fuente; su README explica cómo interpretarlo, con procedencia, fecha y alcance.

cargar_skills.mjs es código del adaptador que lee y valida los SKILL.md y proyecta reglas por rol. Su resultado de carga se contrasta con trazas de carga_skill y versiones; la existencia de la función no demuestra una llamada real.
<!-- FIN LECTURA SEMANTICA -->
