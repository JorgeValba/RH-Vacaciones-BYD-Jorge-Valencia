# Skills, loops, mejora y reutilización
Elaborado por: Jorge Valencia. Consolidación documental: 4 de noviembre de 2026. Valoración técnica asistida por IA, propuesta para revisión del autor; no calificación de la docente.

## Criterios de la guía y evidencia disponible

Referencia: guía del estudiante, página 7, y fila P11 de la página 12. Se requieren dos skills específicos operativos, dos loops ejecutables, una V1 que no supere un criterio y una V2 corregida con el mismo caso_id, diagnóstico y costo adicional, reutilización en otro caso y autoevaluación de cinco aspectos.

| Requisito | Evidencia trazable | Alcance |
|---|---|---|
| Skill de negocio | skills/evaluar_vacaciones/SKILL.md, versión 1.0.1 | Contiene activador, datos, fuentes, pasos, límites, herramientas, salida y ejemplos. |
| Skill de seguridad/costo | skills/seguridad_y_costo/SKILL.md, versión 1.0.0 | Define acceso, tratamiento de entradas, autorización, presupuesto y escritura controlada. |
| Carga operativa | evidencias/registros/Evidencia_agentes_loops_Jorge_Valencia.json, sección carga_skills | Seis filas de carga en tres casos; incluye ruta, versión y hash. |
| Adaptación a n8n | Nodo Cargar skills versionados del export; skills/Snapshots_n8n_Jorge_Valencia.json | Snapshots compilados y proyección por rol. Publicar un archivo por sí solo no actualiza n8n. |
| Loop de calidad | Propuesta → Revisión → decidir corrección → Propuesta → Revisión | Dos propuestas como máximo, dentro de seis llamadas, 120 segundos y USD 0.10 compartidos por caso. |
| Loop de seguridad/costo | Controles previos, autorización del subworkflow, reserva, consumo, validación y siguiente paso | Trazas loop_seguridad; ensayo aislado 246 aporta evidencia adicional de bloqueo. |
| Mejora V1→V2 | Caso VAC-20261102-YTLS6SW04; L3/L4 y L5/L6 | Primera revisión negativa; segunda positiva; mismo caso, seis generaciones. |
| Reutilización con mismas versiones | VAC-20261102-YTLSBKE8E y VAC-20261102-YTLSEX4SR | Ambos cargan negocio 1.0.1 y seguridad 1.0.0; hashes coincidentes. |

Los snapshots probados conservan negocio 1.0.1 y seguridad 1.0.0. Los SKILL.md actuales corrigen únicamente notas documentales de carga; sus versiones/hashes se distinguen en skills/Snapshots_n8n_Jorge_Valencia.json. No se modificó el runtime n8n ni se atribuye a una traza una revisión documental posterior.

## Mejora observada en el mismo caso

El caso YTLS6SW04 solicitó cinco días de vacaciones. Propuesta V1 informó saldo actual 10, saldo proyectado 5 y prima bruta/adicional MXN 875. Revisión V1 devolvió validado=false y señaló falta de explicación explícita de la base/tasa, redacción potencialmente operativa y trazabilidad de la explicación de la prima.

Propuesta V2 mantuvo las cifras e incorporó que la tasa era 25% sobre salario diario simulado, junto con una redacción informativa. Revisión V2 devolvió validado=true. Se trata de una mejora de explicación y validación, no de un cambio de importe ni una medición de exactitud legal general. Después RH rechazó la solicitud: superar la revisión no sustituye la aprobación humana.

| Tramo | Llamadas | Costo GPT-5 USD |
|---|---|---:|
| Recorrido inicial, incluida V1 y revisión | L1–L4 | 0.01283625 |
| Corrección y segunda revisión | L5–L6 | 0.00396700 |
| Total del caso | L1–L6 | 0.01680325 |

Fuente: costos/Conciliacion_costos_Jorge_Valencia.json y evidencias/registros/Evidencia_agentes_loops_Jorge_Valencia.json. Las filas que resumen el loop no se suman de nuevo a las generaciones.

La corrección histórica ocurrió antes de la integración del adaptador posterior: ese caso no contiene carga_skill. Se muestran las evidencias complementarias sin atribuirle una versión de skill que no consta en su traza. La guía pide carga, mejora y reutilización; no se presupone que guardar estos documentos reejecuta el caso.

## Parámetros, retorno y salida de los loops

**Calidad de negocio.** Entrada: propuesta, cálculos deterministas, fuentes y caso_id. Responsables: orquestador y Revisión. Medir esquema, cifras, fuentes y advertencias; diagnosticar diferencias; devolverlas a Propuesta y revisar una vez más. Máximo de dos propuestas: una original y una corrección. Se justifica frente a las tres iteraciones sugeridas por la guía para limitar consumo: cuatro especialistas iniciales más dos llamadas de corrección completan el máximo global de seis. Comparte 120 segundos y USD 0.10. Si vuelve a fallar o se agota un límite, cerrar con Error controlado, sin liberar aprobación ni escribir reserva automática.

**Seguridad y costo.** Entrada: siguiente paso, autorización, permiso, límites, consumo y reserva. Responsable: reglas deterministas del orquestador/subworkflow. Evaluar → autorizar o detener → reservar → ejecutar el paso → registrar consumo → volver a comprobar. Comparte seis generaciones, 120 segundos y USD 0.10. Al faltar autorización o margen, detener con causa; ante escritura parcial conservar control para conciliación. No confundir iteraciones del chequeo con número de propuestas o con todas las ejecuciones de nodos.

El ensayo 246 comprueba el código de autorización con entradas sintéticas: reserva de USD 0.01625 bloqueada por tope USD 0.001; siguiente generación bloqueada cuando existen seis intentos; contraste dentro del límite autorizado. No prueba persistencia en tablas ni sustituye las trazas históricas de los loops.

## Autoevaluación técnica propuesta

Escala aplicada: 0 ausente, 1 insuficiente, 2 parcial con brecha material en el aspecto, 3 suficiente con límites declarados, 4 claro y ampliamente sustentado en el aspecto evaluado. Es una valoración cualitativa de diseño y evidencia disponible, no una tasa de éxito medida. Umbral de la guía: al menos 16/20 y ningún aspecto menor que 3.

| Elemento | Claridad / propósito | Contexto / secuencia | Evidencia | Control / retorno | Utilidad | Total |
|---|---:|---:|---:|---:|---:|---:|
| Skill de negocio 1.0.1 | 4 | 4 | 3 | 4 | 4 | 19/20 |
| Skill de seguridad/costo 1.0.0 | 4 | 4 | 3 | 3 | 4 | 18/20 |
| Loop de calidad | 4 | 4 | 4 | 3 | 4 | 19/20 |
| Loop de seguridad/costo | 4 | 4 | 3 | 3 | 4 | 18/20 |

- **Skill de negocio:** alcance específico de quince empleados/tres equipos y separación entre consultar, calcular, proponer y aprobar; ejemplos de entrada válida/incompleta. Evidencia 3 porque hay cargas y resultados reales, pero no validación exhaustiva de todos los casos de calendario/pagos.
- **Skill de seguridad/costo:** reglas concretas de acceso, destinos, presupuesto y escritura; respuesta de secretos, control de versión y ensayos de autorización. Evidencia/control 3 por la combinación de recorridos históricos y pruebas aisladas, con denegación de usuario sin permiso documentada después por captura, sin inspección de sus escrituras internas. No afirmar que todos los guardrails ya están probados.
- **Loop de calidad:** cuatro trazas L3–L6 enlazan diagnóstico, corrección, versiones y resultado, con costo conciliado. Control 3 porque existe límite y salida definida, pero no se ha documentado aquí un caso que agote la corrección y falle de nuevo.
- **Loop de seguridad/costo:** trazas de pasos y costos medidos respaldan la secuencia; el ensayo 246 confirma decisiones del guardrail. Evidencia/control 3 por falta de prueba integral de persistencia del bloqueo y de todos los caminos de error.

La valoración propuesta supera el umbral de diseño documentado; no constituye una calificación de la docente ni acredita un alcance mayor que las evidencias citadas.

## Referencias y alcance

- Guía del estudiante, página 7: mínimos, mejora/reutilización y autoevaluación; página 12: P11.
- agentes/Contratos_Jorge_Valencia.json; n8n/01_principal_Jorge_Valencia.json y 02_llm_Jorge_Valencia.json.
- skills/Snapshots_n8n_Jorge_Valencia.json; loops/LOOPS.md, distinguiendo su especificación histórica de su actualización posterior.
- evidencias/registros/Evidencia_agentes_loops_Jorge_Valencia.json; costos/Conciliacion_costos_Jorge_Valencia.json.
- evidencias/registros/P09_ejecucion_246_Jorge_Valencia.json; tests/pruebas.csv.

Esta consolidación utiliza evidencia ya recibida; no genera nuevas llamadas ni modifica los servicios. Actualización posterior: Jorge aportó la captura de P07; /start y /nuevo recibieron denegación sin pase vigente. Véase evidencias/registros/P07_usuario_sin_permiso_Jorge_Valencia.json. No se inspeccionaron ejecución o tablas de esa petición. Los CSV originales son un corte histórico: los ensayos posteriores se mantienen como evidencias separadas.
