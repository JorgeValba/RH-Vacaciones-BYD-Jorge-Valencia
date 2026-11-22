# Pruebas y matriz de evidencia
Elaborado por: Jorge Valencia.

## Referencia a la Guía del estudiante

De acuerdo con la **Guía del estudiante, página 12**, se pide registrar P01–P14 con fecha, versión, caso, entrada, esperado, observado, estado y ruta de evidencia.

pruebas.csv es la matriz de resultados; los scripts locales comprueban el código y no sustituyen las pruebas de servicios. La referencia identifica el requisito; su cumplimiento se contrasta con los archivos y resultados enlazados, no solamente con la existencia de la carpeta.

## Qué contiene y en qué formato

| Archivo o carpeta | Formato | Qué contiene y qué hacer con él |
|---|---|---|
| [panel_actualizado.test.mjs](panel_actualizado.test.mjs) | Módulo Node (.mjs) | Prueba de proyección, lectura, filtros, vigencia y recuperación del panel. |
| [P08/](P08/README.md) | Dos exports JSON y README | Ensayo ampliado: servicio lento, dos timeouts, registro/relectura y mensaje Telegram; configuración y reproducción paso a paso. |
| [Prueba_P08_alcance_Jorge_Valencia.json](Prueba_P08_alcance_Jorge_Valencia.json) | JSON (.json) | Diferencias de la copia P08 y hashes del código de control empleado. |
| [Prueba_P08_conexion_Jorge_Valencia.json](Prueba_P08_conexion_Jorge_Valencia.json) | JSON (.json) | Ensayo n8n manual con fallo real DNS a un destino deliberadamente inválido; no llama a OpenAI. |
| [Prueba_P09_limites_Jorge_Valencia.json](Prueba_P09_limites_Jorge_Valencia.json) | JSON (.json) | Ensayo n8n manual con fixtures de presupuesto/contador y un contraste autorizado. |
| [Prueba_P09_limites_Jorge_Valencia.md](Prueba_P09_limites_Jorge_Valencia.md) | Markdown (.md) | Cómo importar, ejecutar y leer los tres escenarios aislados de P09. |
| [Prueba_P10_evento_duplicado_Jorge_Valencia.json](Prueba_P10_evento_duplicado_Jorge_Valencia.json) | JSON (.json) | Ensayo n8n de lectura/IF sobre un evento persistido; seleccionar tabla propia al importar. |
| [Prueba_P10_evento_duplicado_Jorge_Valencia.md](Prueba_P10_evento_duplicado_Jorge_Valencia.md) | Markdown (.md) | Instrucciones y alcance de la reproducción secuencial sin escrituras. |
| [pruebas.csv](pruebas.csv) | CSV UTF-8 (.csv) | Matriz P01–P14: entrada, esperado, observado, fecha, versión, alcance y evidencia. |
| [skills.test.mjs](skills.test.mjs) | Módulo Node (.mjs) | Prueba local de carga de dos skills y reutilización con identificadores distintos. |
| [validar_panel.mjs](validar_panel.mjs) | Módulo Node (.mjs) | Validador de datos públicos/cálculos; --forzar-fallo prueba la puerta de publicación. |
| [voz.test.mjs](voz.test.mjs) | Módulo Node (.mjs) | Prueba local de validación, saldo/fechas, privacidad y consultas de voz sin escrituras. |

## Cómo utilizarlo

Desde la raíz ejecutar los cuatro comandos del README general. Abrir pruebas.csv en Excel como UTF-8 delimitado por comas. Los ensayos JSON se importan en workflows nuevos. Solo el auxiliar P08 de servicio lento se publica temporalmente; los ensayos manuales no requieren publicación.

## Entorno y configuración

Los MJS ejecutan con Node 22 sin API; las pruebas P08/P09/P10 se ejecutaron manualmente en n8n y conservan sus salidas en evidencias/.

## Validación y resultado esperado

Código de salida 0 indica que las aserciones locales pasaron. Revisar el resultado real de cada fila antes de interpretarla como integración completa; no repetir una operación de aprobación para demostrar un evento idéntico.

## Relaciones con el proyecto

- [Guía general](../README.md): requisitos, instalación, inicio, credenciales, parada y solución de problemas.
- [Índice de evidencias](../evidencias/README.md): resultados y archivos relacionados.
- [Matriz de pruebas](../tests/pruebas.csv): entradas, esperados y resultados observados.


## Comandos locales

Ejecutar desde la raíz con Node 22:

```text
node tests/skills.test.mjs
node tests/voz.test.mjs
node tests/validar_panel.mjs
node tests/panel_actualizado.test.mjs
```

Esperado: código de salida 0 y mensajes de comprobación. Para la puerta de publicación, node tests/validar_panel.mjs --forzar-fallo debe salir con error de validación; ese error es intencional y no debe desplegar. No añadir --forzar-fallo a la ejecución normal.

## Ensayos n8n y matriz

Los ensayos manuales P08/P09/P10 se importan en workflows nuevos, sin publicar ni añadir otro Telegram Trigger. El P08 histórico prueba fallo DNS; el [P08 ampliado](P08/README.md) publica temporalmente su auxiliar lento y añade timeout real, reintento, persistencia y aviso. P09 ejecuta el control con entradas sintéticas; P10 lee el evento histórico y toma la rama de duplicado. La plantilla pública P10 exige seleccionar la tabla de solicitudes propia. Abrir el último nodo para leer el resumen y conservar su ID/fecha de ejecución.

Resultados recibidos: P08 histórico 247, fallo DNS y generación bloqueada; ampliación 263 y resumen 271, dos timeouts, relectura y Telegram confirmados; P09 ejecución 246, dos bloqueos y un contraste autorizado; P10 ejecuciones 248/249, mismo evento/folio y una fila. Son ensayos aislados con los alcances indicados, no pruebas de caída real de OpenAI o de concurrencia de escritura.

pruebas.csv conserva ID, fecha, versión, caso_id, entrada, esperado, observado, estado, ruta y evidencias_id. Algunas fechas son recepción de captura, no fecha de evento: leer la procedencia. Un estado descriptivo de alcance parcial no equivale a aprobar todos los escenarios de esa categoría.
