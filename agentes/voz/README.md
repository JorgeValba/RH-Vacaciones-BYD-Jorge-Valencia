# HR assistant BYD — configuración activa documentada
Elaborado por: Jorge Valencia. Lectura del agente: 4 de noviembre de 2026.

Se recuperó por consulta de la plataforma la configuración de la rama principal: nombre HR assistant BYD, idioma español, modelo principal gpt-5-mini y TTS eleven_v3_conversational. El agent_id/branch_id/version_id del corte están en Configuracion_activa_Jorge_Valencia.json. El prompt activo está en prompt_activo.txt; el encabezado documental del archivo no debe pegarse como parte del prompt.

## Función y herramientas

Explica información recuperada de la base LFT y consulta folios/saldos ficticios; no aprueba, rechaza, reserva ni paga. Dos herramientas webhook POST usan el receptor autenticado de n8n: consultar_estado_rh y consultar_saldo_rh. Operación es constante por herramienta; folio/empleado se recogen del usuario; conversacion_id usa system__conversation_id. Timeout de cada herramienta: 20 s. El secreto de cabecera se configura del lado servidor; su referencia se sustituyó por un marcador en la copia de entrega.

La base de conocimiento observada es 1044_Ley_Federal_del_Trabajo.pdf con RAG habilitado. Esta lectura acredita su asociación, no su vigencia jurídica ni precisión de todas las respuestas posibles. Para recreación, subir la fuente autorizada y comprobar su versión/documentación; el ID de documento de esta cuenta no se importa como contenido.

## Evidencia de consulta desde Pages

La sesión conv_0401m6jmbw18f9g9hvbekqwqecsk proviene de widget, text_only=true. Su consulta consultar_estado_rh obtuvo Aprobada, versión 1 y cuatro días para VAC-20261102-YTLSBKE8E. consultar_saldo_rh obtuvo seis días para EMP-005, periodo 2026-10-01 a 2027-09-30. Ambas devolvieron ok=true, sin error ni bloqueo, con consulta_id VOZ-188 y VOZ-191 y fecha 4 de noviembre de 2026. Los resultados concuerdan con las capturas y registros anteriores.

La sesión se recuperó retrospectivamente, sin generar conversación. El anexo evidencias/Pages_herramientas_verificadas_Jorge_Valencia.json conserva resultados/consumo seleccionados, no transcripción completa, cabeceras ni datos personales. Sus nuevos consulta_id son posteriores al CSV de trazas recibido: no se afirma que figuren en ese corte.

Se conserva por separado una prueba hablada histórica ya recuperada. La sesión reciente de Pages es de texto: no presentar sus 601 s de duración abierta como voz hablada; TTS/ASR reportan cero segundos. Reporta 88 créditos y cost_fiat 0.00881365, con llm_price 0.00281365 y platform_price 0.006. Moneda no explícita en esta respuesta: no confundir el importe de referencia con factura adicional ni sumarlo dos veces.

## Controles observados y pendientes

- El prompt pide respuestas breves, fuentes y uso de herramienta; prohíbe acciones y divulgación de secretos. Son instrucciones, no una prueba adversaria por sí solas.
- La lectura devuelve max_tokens=-1. No hay un límite numérico positivo de salida declarado en ese campo; el límite 1500 del workflow GPT-5 no aplica automáticamente al agente ElevenLabs.
- Hay modelos de respaldo configurados. Documentarlos: no prometer que toda respuesta de voz usa siempre el modelo principal. En esta sesión el consumo reportó gpt-5-mini.
- platform_settings.auth devuelve enable_auth=false, allowlist vacía y require_origin_header=false. Es un agente público ficticio; no afirmar que existe una restricción de dominio configurada en el agente. Falta configurar/revisar los dominios admitidos de Pages para la ruta de widget prevista por la guía.
- El widget observado es variant=full, placement=bottom-right, supports_text_only=true, mobile_fullscreen=true. La superposición móvil de capturas sigue por revisar, al igual que la secuencia de consentimiento en sesión nueva.

No se cambió ninguno de esos valores con esta recuperación. Estos pendientes deben resolverse antes de declarar completos los controles de voz. No requieren por sí mismos iniciar nuevas conversaciones pagadas; primero revisar configuración y documentación.

## Actualización tras publicación informada por Jorge

La lectura posterior de la rama Main verificó max_tokens=1500 y modelo gpt-5-mini en la nueva versión. La allowlist sigue vacía: falta añadir jorgevalba.github.io. La captura de Guardrails muestra Manipulation activo y cinco filtros de Content activos; es evidencia de configuración, no una prueba de bloqueo. El snapshot previo con max_tokens=-1 se conserva como corte histórico; la verificación nueva está en ../../evidencias/ElevenLabs_limites_publicados_Jorge_Valencia.json. No se inició conversación.

## Dominio configurado posteriormente

Se añadió jorgevalba.github.io a la allowlist de Main y se verificó por lectura posterior. max_tokens conserva 1500, enable_auth=false y modelo gpt-5-mini. Nueva versión de esa lectura: agtvrsn_8601m6me8xxrekrt4txf7f0zq6h9. Los dos pendientes de configuración quedan resueltos; no se inició conversación ni se afirma probada una denegación desde otro origen. Evidencia: ../../evidencias/ElevenLabs_dominio_configurado_Jorge_Valencia.json. Los párrafos anteriores preservan los valores del corte previo.
