# HR assistant BYD en ElevenLabs
Elaborado por: Jorge Valencia.

## Referencia a la Guía del estudiante

De acuerdo con la **Guía del estudiante, páginas 5 y 13**, se pide documentar propósito, idioma, conocimiento, herramientas, conexión y pruebas del agente de voz.

Se conservan instrucciones y configuración sanitizada para recrear el agente; las pruebas enlazadas distinguen texto, voz y lectura de configuración. La referencia identifica el requisito; su cumplimiento se contrasta con los archivos y resultados enlazados, no solamente con la existencia de la carpeta.

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
- [Índice de evidencias](../../evidencias/README.md): resultados y archivos relacionados.
- [Matriz de pruebas](../../tests/pruebas.csv): entradas, esperados y resultados observados.

## Herramientas de servidor

Ambas usan POST a la Production URL del workflow 03_voz, cabecera X-RH-Voz-Key como Secret y timeout de herramienta de 20 s. El valor no se pega al prompt ni al HTML.

consultar_estado_rh envía operación consultar_estado, folio proporcionado y conversacion_id del sistema; consultar_saldo_rh envía operación consultar_saldo, empleado_id ficticio y la misma referencia de sesión. El receptor valida esquema, permisos de herramienta y auditoría.

La base de conocimiento documentada es 1044_Ley_Federal_del_Trabajo.pdf con RAG. Para otra cuenta, cargar una fuente autorizada y asociarla; el ID de conocimiento de la cuenta de Jorge no es el archivo PDF importable. El agente informa y consulta; no aprueba vacaciones.
