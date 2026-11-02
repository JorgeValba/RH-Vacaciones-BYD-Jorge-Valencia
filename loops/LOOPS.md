# Loops del asistente RH
Elaborado por: Jorge Valencia. Versión 1.0. Estado: especificación para integrar y contrastar con n8n.

## Calidad de negocio
Entrada: propuesta del Agente 3, datos y cálculos deterministas, fuentes y caso_id. Responsable: orquestador y Agente 4.
Generar → medir esquema, cifras y fuentes → diagnosticar diferencias → devolver al Agente 3 → revisar nuevamente.
Máximo: dos propuestas totales, una original y una corrección; se mantiene el límite existente para controlar consumo. Si la segunda revisión falla: Error controlado, sin aprobación ni reserva.
Tiempo: dentro de los 120 segundos del caso; presupuesto: comparte el tope de 0.10 USD, sin crear una bolsa adicional. Máximo global de seis llamadas generativas. Los valores deben coincidir con Configuración antes de integrar.
Salida: pendiente de aprobación solo después de revisión válida. Registrar V1 fallida, diagnóstico, V2 y costo incremental con el mismo caso_id. La aparición de V2 por sí sola no prueba que hubo mejora: se requiere la traza.

## Seguridad y costo
Entrada: paso siguiente, autorización, permisos, presupuesto y consumo acumulado. Responsable: reglas del orquestador, sin LLM para decidir permisos.
Evaluar → autorizar o detener → reservar costo → ejecutar paso permitido → registrar consumo → revisar límites → volver al control antes del siguiente paso.
Máximo: seis llamadas generativas por caso; 120 segundos y 0.10 USD compartidos. No reintentar automáticamente una escritura empresarial ambigua. Superar un límite bloquea nuevas llamadas y genera cierre controlado; una escritura parcial conserva control para conciliación.
Salida: continuar únicamente con autorización y margen; al agotarse presupuesto/tiempo/llamadas: Error controlado y motivo observable. Registrar costos desconocidos como null y no contabilizar dos veces el subtotal del loop.

## Evidencia pendiente
Carga de ambos archivos en n8n; ejecución con dos casos; V1 fallida y V2 corregida; pruebas de inyección, acceso y presupuesto. Las pruebas locales del adaptador no sustituyen estas ejecuciones.
## Autoevaluación de diseño, no de funcionamiento
Escala 0–4: claridad 4, contexto 4, evidencia 3, control 4, utilidad 3 = 18/20 para cada skill y loop. La evidencia se califica 3 porque las condiciones están definidas, pero la operación integrada todavía no se acredita. Revisar con los registros de n8n antes de entregar.
