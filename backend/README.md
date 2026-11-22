# Proyección pública del panel
Elaborado por: Jorge Valencia.

## Referencia a la Guía del estudiante

De acuerdo con la **Guía del estudiante, páginas 5–6**, se pide publicar información sanitizada y conectar el panel con registros del proceso.

Aquí se conserva la función de proyección pública reutilizada en n8n; la carpeta es una decisión de implementación y no un servicio adicional desplegado. La referencia identifica el requisito; su cumplimiento se contrasta con los archivos y resultados enlazados, no solamente con la existencia de la carpeta.

## Qué contiene y en qué formato

| Archivo o carpeta | Formato | Qué contiene y qué hacer con él |
|---|---|---|
| [panel_publico.js](panel_publico.js) | JavaScript (.js) | Función de proyección sanitizada de solicitudes, usada y validada en el panel. |

## Cómo utilizarlo

panel_publico.js contiene lógica reutilizable de proyección del registro privado. El export 04_panel emplea esa lógica detrás de un webhook GET; el navegador consume la respuesta.

## Entorno y configuración

El módulo puede comprobarse con Node; el servicio público real corre en n8n. Esta carpeta no es un servidor iniciado automáticamente por Pages.

## Validación y resultado esperado

node tests/panel_actualizado.test.mjs comprueba privacidad, filtros, vigencia, concurrencia de lectura y errores de consulta con sus alcances locales.

## Relaciones con el proyecto

- [Guía general](../README.md): requisitos, instalación, inicio, credenciales, parada y solución de problemas.
- [Índice de evidencias](../evidencias/README.md): resultados y archivos relacionados.
- [Matriz de pruebas](../tests/pruebas.csv): entradas, esperados y resultados observados.

<!-- INICIO LECTURA SEMANTICA -->
## Lectura e interpretación de los archivos

Esta guía de lectura es una ayuda documental añadida por Jorge Valencia para revisión humana o asistida por IA. La guía del curso exige trazabilidad y reproducibilidad; no impone estas fichas ni convierte una descripción en prueba ejecutada. El archivo enlazado es la fuente; su README explica cómo interpretarlo, con procedencia, fecha y alcance.

panel_publico.js es lógica determinista que prepara el resumen público. Las pruebas invocan esa lógica con fixtures; su salida JSON no autoriza acceso a campos privados ni constituye una lectura viva por sí sola.
<!-- FIN LECTURA SEMANTICA -->
