# Orquestador implementado
Elaborado por: Jorge Valencia.

No tiene un prompt único ni invoca un LLM para decidir permisos. Se distribuye entre nodos de n8n:

1. Acceso: preparar/evaluar/verificar canje/resolver y Normalizar y autorizar: autenticar, vincular identidad y enrutar comando.
2. Abrir caso y consultas: caso_id y recuperación de datos; Calcular propuesta determinista: días, saldo, cobertura, prima y derivaciones.
3. Cargar skills versionados: verifica integridad de snapshots, proyecta reglas por rol y registra carga. No descarga SKILL.md de GitHub en cada llamada.
4. Orquestador: Recepción/Consulta/Propuesta/Revisión: instrucción, entrada, schema, control previo de llamadas y tiempo; subworkflow GPT-5: conteo, presupuesto, reserva, generación y consumo persistido.
5. Validar cada etapa y decidir corrección: aceptar, pedir aclaración, devolver una vez o cerrar con error controlado.
6. Cerrar caso: prepara resultado provisional, traza y costos. La rama Decisión adquiere control, verifica folio/versión/vigencia/acceso, revalida datos y registra aprobación/rechazo/expiración. Verifica una única reserva y conserva el control si hay escritura parcial.
7. Panel y voz leen el mismo registro con proyecciones y autorizaciones de su canal. No pagan primas ni deciden vacaciones.

Entrada observable: evento, config, solicitud y datos recuperados. Salida: caso persistido/estado, versión, propuesta, mensaje al chat, trazas y referencias de consumo. El estado final depende de reglas, especialistas y decisión humana, no solo del texto de una respuesta.
