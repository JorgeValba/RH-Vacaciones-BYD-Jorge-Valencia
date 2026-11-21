# Loops de RH Vacaciones BYD
Elaborado por: Jorge Valencia. Reglas y evidencia de ejecución.

## Calidad de negocio

Entrada: propuesta del Agente 3, cálculos deterministas, referencias y caso_id. Responsables: orquestador y Agente 4.

Secuencia: generar → contrastar esquema, cifras y fuentes → diagnosticar diferencias → devolver al Agente 3 → revisar otra vez. El máximo es dos propuestas totales, una original y una corrección; se justifica para mantener cuatro especialistas iniciales y dos llamadas de corrección dentro de seis generaciones, 120 segundos y USD 0.10 compartidos por caso.

Retorno: lista concreta de correcciones al Agente 3. Salida válida: propuesta revisada para decisión humana. Una segunda revisión negativa o un límite agotado produce Error controlado, sin aprobación automática ni reserva anticipada.

En el caso VAC-20261102-YTLS6SW04, Revisión V1 devolvió validado=false; Propuesta corrigió explicación de base/tasa y redacción; Revisión V2 devolvió validado=true. El costo incremental L5/L6 fue USD 0.003967. La decisión humana posterior fue rechazo: calidad validada no equivale a aprobación.

## Seguridad y costo

Entrada: paso siguiente, autorización, permisos, contador, tiempo, consumo y reserva. Responsable: lógica determinista del orquestador y subworkflow LLM.

Secuencia: comprobar acceso y margen → autorizar/detener → reservar costo → ejecutar paso permitido → registrar consumo → comprobar resultado y límites antes del paso siguiente. Máximo global: seis generaciones, 120 segundos y USD 0.10 por caso. No repetir indefinidamente una escritura ambigua.

Retorno: continuar solo con autorización y margen. Ante límite o datos insuficientes, detener con motivo. Escritura parcial de reserva: conservar control para conciliación. Un costo desconocido es null y una reserva presupuestaria no es un cargo pagado.

Las trazas de YTLSBKE8E y YTLSEX4SR documentan los controles. La ejecución aislada 246 contrastó presupuesto insuficiente, máximo de llamadas y caso dentro del límite; es una prueba del código de autorización con entradas sintéticas, no persistencia integral del bloqueo en todas las tablas.

## Evidencia y autoevaluación

La [consolidación P11](../docs/P11_Skills_loops_Jorge_Valencia.md) relaciona versiones, diagnóstico, costos y reutilización. Los registros están en [Evidencia_agentes_loops](../evidencias/registros/Evidencia_agentes_loops_Jorge_Valencia.json) y el [índice](../evidencias/indice.md#e-p11-01). La autoevaluación cualitativa asistida utiliza cinco aspectos 0–4 y conserva sus justificaciones; no es una calificación de la docente.

Estos loops ya están implementados en el workflow principal y el subworkflow de llamada controlada. LOOPS.md describe su operación; no se instala como si fuera un workflow JSON ni reemplaza los nodos ejecutables.
