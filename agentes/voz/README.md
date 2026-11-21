# HR assistant BYD en ElevenLabs
Elaborado por: Jorge Valencia.

## Propósito y relación con la guía

Guía p.5 y p.13: propósito, conocimiento, herramientas, conexión y configuración documentada.

## Qué contiene y en qué formato

| Archivo o carpeta | Formato | Qué contiene y qué hacer con él |
|---|---|---|
| [Configuracion_activa_Jorge_Valencia.json](Configuracion_activa_Jorge_Valencia.json) | JSON (.json) | Lecturas fechadas del agente, configuración y actualización posterior verificada. |
| [prompt_activo.txt](prompt_activo.txt) | Texto (.txt) | Instrucciones del asistente de voz; no contiene el valor de secretos. |

## Cómo utilizarlo

Usar prompt_activo.txt como instrucciones de agente, omitiendo su encabezado documental. Configuracion_activa es una lectura documentada, no un importador universal de cuenta. Configurar idioma español, base LFT y dos herramientas de lectura como se indica abajo.

## Entorno y configuración

ElevenLabs presta conversación/voz; herramientas POST consultan n8n con X-RH-Voz-Key en secreto de servidor. El navegador usa solo agent_id público.

## Validación y resultado esperado

La lectura posterior verificada mostró max_tokens=1500 y dominio jorgevalba.github.io. E-P03-01 es texto del widget; E-P03-02 es voz hablada histórica. Son evidencias distintas.

## Relaciones con el proyecto

- [Guía general](../../README.md): requisitos, instalación, inicio, credenciales, parada y solución de problemas.
- [Índice de evidencias](../../evidencias/indice.md): resultados y archivos relacionados.
- [Matriz de pruebas](../../tests/pruebas.csv): entradas, esperados y resultados observados.

## Herramientas de servidor

Ambas usan POST a la Production URL del workflow 03_voz, cabecera X-RH-Voz-Key como Secret y timeout de herramienta de 20 s. El valor no se pega al prompt ni al HTML.

consultar_estado_rh envía operación consultar_estado, folio proporcionado y conversacion_id del sistema; consultar_saldo_rh envía operación consultar_saldo, empleado_id ficticio y la misma referencia de sesión. El receptor valida esquema, permisos de herramienta y auditoría.

La base de conocimiento documentada es 1044_Ley_Federal_del_Trabajo.pdf con RAG. Para otra cuenta, cargar una fuente autorizada y asociarla; el ID de conocimiento de la cuenta de Jorge no es el archivo PDF importable. El agente informa y consulta; no aprueba vacaciones.
