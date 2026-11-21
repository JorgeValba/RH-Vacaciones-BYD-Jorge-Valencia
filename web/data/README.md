# Respaldo público del panel
Elaborado por: Jorge Valencia.

## Propósito y relación con la guía

Guía p.6: exportación sanitizada con fecha y mecanismo de actualización.

## Qué contiene y en qué formato

| Archivo o carpeta | Formato | Qué contiene y qué hacer con él |
|---|---|---|
| [panel.json](panel.json) | JSON (.json) | Respaldo público fechado del panel; distinguirlo de una consulta actual a n8n. |

## Cómo utilizarlo

panel.json proporciona un respaldo del corte publicado. El navegador consulta primero n8n según config.json y debe distinguir la fecha/fuente del respaldo.

## Entorno y configuración

JSON estático servido por Pages; no escritura automática de aprobaciones sobre este archivo.

## Validación y resultado esperado

node tests/validar_panel.mjs. No sustituir un archivo fechado por una exportación sin fecha ni presentar el respaldo como información actual.

## Relaciones con el proyecto

- [Guía general](../../README.md): requisitos, instalación, inicio, credenciales, parada y solución de problemas.
- [Índice de evidencias](../../evidencias/indice.md): resultados y archivos relacionados.
- [Matriz de pruebas](../../tests/pruebas.csv): entradas, esperados y resultados observados.
