# Validación y despliegue de Pages
Elaborado por: Jorge Valencia.

## Referencia a la Guía del estudiante

De acuerdo con la **Guía del estudiante, páginas 6 y 13**, se pide validar antes de publicar y mostrar bloqueo por fallo y recuperación.

El YAML define la validación y el despliegue de web/; los enlaces de evidencia permiten revisar los resultados históricos. La referencia identifica el requisito; su cumplimiento se contrasta con los archivos y resultados enlazados, no solamente con la existencia de la carpeta.

## Qué contiene y en qué formato

| Archivo o carpeta | Formato | Qué contiene y qué hacer con él |
|---|---|---|
| [pages.yml](pages.yml) | YAML (.yml) | Workflow de validación y despliegue de web/ mediante GitHub Actions. |

## Cómo utilizarlo

pages.yml se activa con push a main y workflow_dispatch. Validar ejecuta checks de skills, voz y panel; la opción prueba_bloqueo provoca una validación inválida. Publicar depende de validar.

## Entorno y configuración

Runner Ubuntu, Node 22. Checkout y setup-node preparan los archivos; upload-pages-artifact empaqueta web/; deploy-pages publica. No se suben datos privados al artefacto.

## Validación y resultado esperado

En Actions, validar/publicar deben terminar en success para un despliegue válido. Si se activa prueba_bloqueo, la falla debe omitir publicación; el sitio ya publicado no desaparece por esa falla.

## Relaciones con el proyecto

- [Guía general](../../README.md): requisitos, instalación, inicio, credenciales, parada y solución de problemas.
- [Índice de evidencias](../../evidencias/README.md): resultados y archivos relacionados.
- [Matriz de pruebas](../../tests/pruebas.csv): entradas, esperados y resultados observados.

<!-- INICIO LECTURA SEMANTICA -->
## Lectura e interpretación de los archivos

Esta guía de lectura es una ayuda documental añadida por Jorge Valencia para revisión humana o asistida por IA. La guía del curso exige trazabilidad y reproducibilidad; no impone estas fichas ni convierte una descripción en prueba ejecutada. El archivo enlazado es la fuente; su README explica cómo interpretarlo, con procedencia, fecha y alcance.

pages.yml es una receta YAML de Actions: on dispara el flujo; jobs.validar ejecuta comprobaciones; needs impide publicar si validar falla; jobs.publicar despliega web. Un YAML correcto no prueba un run exitoso: consultar ID, commit, conclusion y pasos en Actions.
<!-- FIN LECTURA SEMANTICA -->
