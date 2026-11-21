# Proyección pública del panel
Elaborado por: Jorge Valencia.

## Propósito y relación con la guía

Guía pp.5–6: campos públicos sanitizados, actualización y coherencia de indicadores.

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
- [Índice de evidencias](../evidencias/indice.md): resultados y archivos relacionados.
- [Matriz de pruebas](../tests/pruebas.csv): entradas, esperados y resultados observados.
