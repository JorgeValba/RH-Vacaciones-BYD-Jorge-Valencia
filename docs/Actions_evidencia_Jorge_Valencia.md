# Validación y publicación: evidencia de GitHub Actions
Elaborado por: Jorge Valencia. Recuperación documental: 4 de noviembre de 2026.

Se consultaron los registros de GitHub y los pasos de tres ejecuciones existentes. No se lanzó un workflow nuevo ni se modificó el repositorio. Los horarios de esta tabla se conservan en UTC para coincidir con la API.

| Ejecución y fecha UTC | Validación | Publicación | Commit |
|---|---|---|---|
| [Bloqueo, 2 nov 2026 05:47:26](https://github.com/JorgeValba/RH-Vacaciones-BYD-Jorge-Valencia/actions/runs/41396056569) | Falló el paso deliberado | Omitida | 5b4878b22289fe3461791e83a967130fced93da6 |
| [Recuperación, 2 nov 2026 05:49:34](https://github.com/JorgeValba/RH-Vacaciones-BYD-Jorge-Valencia/actions/runs/41396256574) | Correcta | Correcta | 5b4878b22289fe3461791e83a967130fced93da6 |
| [Identidad visual, 2 nov 2026 09:42:24](https://github.com/JorgeValba/RH-Vacaciones-BYD-Jorge-Valencia/actions/runs/41422841647) | Correcta | Correcta | 79697893d19d9d2142dc28af2e2b5987411018ee |

## Qué falló y por qué bloqueó la publicación

En la primera ejecución pasaron los pasos de skills, consultas de voz y validación ordinaria de datos/cálculos/privacidad. El paso Falla deliberada de la puerta de publicación ejecutó `node tests/validar_panel.mjs --forzar-fallo`. El log conserva `Error: Resumen inválido.` y salida 1. No fue una respuesta prefijada de éxito/fallo: el validador rechazó el resumen de prueba y terminó con error.

El código de la prueba permite precisar la alteración: `--forzar-fallo` cambia `d.modo` a `REAL` en la copia del resumen en memoria antes de validarlo. No escribe ese cambio en la base empresarial ni realiza una operación real. El validador exige SIMULADO para ese conjunto público.

GitHub dejó omitidos tanto la subida del artefacto Pages como el trabajo publicar. Esto prueba que fallar la validación impide que esa ejecución despliegue un artefacto nuevo; no se afirma que borre o apague una versión anterior del sitio.

En la segunda ejecución el paso de falla deliberada quedó omitido, pasaron las validaciones, se subió el artefacto y el trabajo publicar terminó correctamente. Ambas ejecuciones usan el mismo commit: la recuperación consistió en ejecutar sin introducir el dato inválido de prueba. No se presenta como una modificación de código entre ambas ejecuciones.

## Relación con la versión preparada

La ejecución de identidad visual publicó el commit 79697893d19d9d2142dc28af2e2b5987411018ee, utilizado como base de la carpeta local. Las adiciones documentales posteriores todavía no están en ese commit: falta publicarlas y verificar su propia ejecución cuando se cierre la integración.

P12 queda documentada históricamente por enlaces, estados de trabajos y extracto de log. Las pruebas de consultas de voz dentro de Actions son locales; que pasen no acredita una conversación nueva con ElevenLabs ni la disponibilidad de n8n. Las evidencias remotas de conversación se mantienen separadas.

Los metadatos sanitizados están en ../evidencias/Actions_verificados_Jorge_Valencia.json. No se publican logs completos, datos del ejecutor ni credenciales. La fecha UTC 2 de noviembre a las 05:47 corresponde al 1 de noviembre por la noche en Ciudad de México; no confundir esa conversión con otra ejecución.
