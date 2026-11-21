# Mapa del repositorio y requisitos de entrega
Elaborado por: Jorge Valencia. Revisión de la guía completa: 21 de noviembre de 2026. No es una certificación de cumplimiento total.

La estructura de carpetas de la página 13 es sugerida; los entregables y mínimos de evaluación sí son obligatorios. La carpeta correcta de automatizaciones es **.github/workflows/**, con punto inicial. Las fotos se organizan como anexos bajo evidencias/capturas/, separadas del sitio web.

| Ruta | Contenido y motivo | Estado |
|---|---|---|
| README.md | Accesos, objetivo, recorrido, requisitos, mapa y enlaces para repetir una ejecución. | Preparado; uso del sistema depende de disponibilidad. |
| docs/ | Caso, arquitectura con diagrama, manual, revisión de guía y borrador de informe. | Manual/arquitectura preparados; informe final 8–12 páginas pendiente. |
| web/ | index.html, recursos, fuente, scripts y respaldo sanitizado. Solo esta carpeta se despliega en Pages. | Código del sitio existente conservado. |
| agentes/ | Orquestador, cuatro roles, instrucciones, entrada/salida y configuración documentada de voz. | Archivos históricos identificados como referencia, no prompt activo. |
| n8n/ | Cuatro exports sanitizados y mapa de tablas/credenciales/subworkflow. | Confirmados por Jorge como los mismos workflows probados; necesitan vinculación al importar. |
| skills/ | Dos SKILL.md versionados y hashes de snapshots. | Carga/reutilización trazadas; no editar sin recompilar. |
| loops/ | Calidad y seguridad/costo: entrada, responsable, retorno, salida y límites. | Evidencia enlazada, con especificación histórica distinguida. |
| tests/ | Matriz P01–P14, validadores locales y ensayos importables P08/P09/P10. | Alcances parciales conservados; no catorce pruebas integrales aprobadas. |
| datos/ | Diccionario/esquemas, muestra sanitizada y seis CSV iniciales. | Sin tabla de accesos operativa ni datos personales. |
| costos/ | Ledger por llamada/sesión, tarifas/fuentes/fechas, resúmenes por etapa y caso, escenarios y límites. | Consumo medido/calculado separado de desconocidos y estimaciones. |
| evidencias/ | Índice, 22 fichas, registro CSV/JSON, resultados y trece fotos seleccionadas. | Cada ficha indica procedencia y qué no demuestra. |
| .github/workflows/ | Validación previa al despliegue y publicación Pages. | Historial de fallo/bloqueo y recuperación enlazado. |
| .env.example | Nombres orientativos sin valores. | Credenciales reales fuera del repositorio y del navegador. |
| adaptador/ y backend/ | Código auxiliar de carga de skills y proyección de panel. | Extras necesarios para explicar/recrear la implementación. |

## Forma de las evidencias

Página 12: ID, fecha, versión, caso_id, entrada, esperado, obtenido, aprobado/fallido y ruta. La matriz conserva también estados parciales/no acreditados para no inventar un aprobado. evidencias_id enlaza fichas E-Pxx-nn; cada ficha lista archivos, resultado y límite. Capturas complementan logs, datos y acceso funcional, no los sustituyen.

Páginas 9–10: [costos.csv](../costos/costos.csv) incluye fecha_hora, caso_id, llamada_id, etapa/agente, proveedor/modelo, entrada/salida/caché, duración, unidad/tarifa, importe/moneda, estado/reintento y origen. [Esquema del registro](../costos/Esquema_registro_Jorge_Valencia.md) explica vacíos y categorías. Los resúmenes no se suman otra vez al ledger. Tres aprobaciones y un rechazo se concilian con las generaciones; la conversación hablada se mantiene distinta del chat escrito.

Página 7: [consolidación de skills/loops](P11_Skills_loops_Jorge_Valencia.md) reúne carga, V1 negativa→V2 validada, costo incremental y reutilización. Cinco aspectos puntuados 0–4, mínimo 16/20 y ninguno menor de 3; autoevaluación propuesta para revisión del autor. No atribuir carga posterior a una ejecución anterior.

## Entregables que no se resuelven creando carpetas

| Guía | Entregable | Situación |
|---|---|---|
| p.13 | Informe de 8–12 páginas sin anexos | Borrador Markdown disponible; falta versión diagramada final, revisión individual y referencias a commit. |
| p.13 | ZIP del mismo estado del repositorio con rama y commit | Se fijará tras integrar el informe final; nombre Valencia_Jorge_AI_Tools_ProyectoFinal.zip. |
| pp.13/15 | Video de 5–8 min y demostración hasta 12 min | Grabación/enlace no proporcionados; no se sustituyen por capturas. |
| pp.4/11/15 | Servicio y acceso disponibles durante evaluación | Comprobar n8n/ElevenLabs y cupos hoy; la prueba gratuita declarada el 4 de noviembre no acredita vigencia actual. |
| pp.9/10 | Construcción con IA y optimización costo/calidad | Costos de construcción no recuperados; comparación A/B de calidad no ejecutada. Se declaran, no se rellenan con cero. |
| pp.5/12 | Micrófono, consentimiento y accesibilidad | Móvil/escritorio documentados; falta cerrar causa del permiso de micrófono, secuencia inicial de consentimiento y obstrucción del widget. |
| pp.12/13 | Recreación reproducible | Manual y datos preparados; instalación independiente y provisión privada de nuevos pases aún no acreditadas. |

P08 prueba fallo DNS aislado, P09 autorización con fixtures y P10 consulta secuencial de evento histórico. Son evidencia útil de controles, sin afirmar error/persistencia integral, webhook duplicado real o concurrencia. La docente aplica la rúbrica por subcriterio; este repositorio no asigna automáticamente el puntaje máximo.

## Publicación y referencias

Publicar documentación y capturas en el repositorio no las añade automáticamente a la interfaz de Pages: Actions despliega web/. Desde el informe se enlaza el índice del repositorio por commit para conservar la versión. No colocar trazas privadas ni credenciales en web/ para que una captura sea accesible.
