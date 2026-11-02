---
name: evaluar-vacaciones-byd
description: Preparar una propuesta de vacaciones con saldo, cobertura y prima validados.
version: 1.0.1
---
# Evaluar vacaciones RH BYD
Elaborado por: Jorge Valencia.

## Activador y objetivo
Solicitud /nuevo válida de una persona de RH autorizada. Preparar una propuesta trazable para uno de los 15 empleados ficticios, distribuidos en tres equipos de cinco. No aprobarla automáticamente.
## Entradas
caso_id, empleado_id, fecha_inicio, fecha_fin, modo SIMULADO, empleado, periodo, calendario, reglas, reservas aprobadas, primas pagadas y límite de costo. La autorización se verifica en el servidor antes de invocar al modelo.
## Fuentes
Tablas privadas rh_empleados, rh_calendario, rh_reglas, rh_aprobadas y rh_primas_pagadas. Fuentes LFT autorizadas y versionadas del proyecto. Si faltan datos, no sustituirlos por conocimiento supuesto del modelo.
## Pasos
1. Validar empleado existente, fechas ordenadas y presencia del calendario completo.
2. Obtener los cálculos deterministas del flujo: días laborables, saldo, cobertura diaria, prima bruta, cubierta y adicional.
3. Consultar únicamente reservas aprobadas del periodo aplicable y evitar descontar dos veces días ya incluidos en el corte.
4. Comparar cada día solicitado con cobertura mínima configurada. La coincidencia de fechas por sí sola no implica rechazo: importa la plantilla disponible.
5. Identificar pagos previos que correspondan al mismo tramo y periodo. Importe parcial o excesivo requiere revisión según las reglas del flujo.
6. El Agente 3 explica la propuesta; el Agente 4 verifica cifras exactas, fuentes y advertencias. El modelo no sustituye los cálculos.
7. Devolver estado provisional, versión, vigencia, motivos y siguiente acción. La reserva solo se escribe después de una decisión humana válida y revalidación.
## Alcance del Agente 2 — Consulta
Tu tarea se limita a identificar los registros y fuentes disponibles para el caso. Verifica la solicitud ya validada, la existencia de registros.empleado y registros.regla, el resumen de calendario consultado, plantilla del equipo y fuentes_disponibles. Selecciona solo fuente_id incluidos en fuentes_disponibles.
No solicites cálculos deterministas, saldo calculado, cobertura diaria ni prima bruta, cubierta o adicional para declarar datos_suficientes en esta etapa: su validación corresponde a Propuesta y Revisión y esos resultados se transfieren por otra parte del estado del flujo.
No exijas detalles de reservas aprobadas que no forman parte de tu contrato de entrada ni confirmes su ausencia. No exijas registros de pagos si primas_pagadas_periodo es una lista vacía: significa que la consulta no encontró pagos para ese periodo, no que falten datos.
Solo declara faltantes de tu contrato de consulta cuando estén ausentes, sean inválidos o contradictorios. No inventes valores, no calcules cifras ni confirmes viabilidad o aprobación. Con los registros anteriores válidos y fuentes autorizadas presentes, devuelve datos_suficientes=true, faltantes=[] y enumera lo efectivamente disponible; los controles de negocio posteriores siguen siendo obligatorios.
## Herramientas permitidas
Lectura de tablas indicadas y función determinista del flujo; llamada LLM controlada para explicar o revisar. No escritura de reservas, aprobación, pagos ni navegación libre desde este skill.
## Límites y errores
No inventar salario, antigüedad, derechos, fuentes ni disponibilidad. Datos insuficientes: solicitar aclaración o detener con motivo. Fecha de tabla con zona horaria: comparar el día en America/Mexico_City, sin aceptar otro día local.
## Salida
caso_id, agente, estado, resultado, fuentes, advertencias y referencias a trazas/consumo. Añadir versión y hash del skill en el registro de carga; no guardar razonamiento interno.
## Criterios de aceptación
Cifras coinciden con cálculos deterministas; mismo caso_id; fuentes identificadas; ninguna reserva anticipada; propuesta entendible y revisada.
## Ejemplos
Válido: EMP-002, 2026-11-23 a 2026-11-27, con calendario completo y cinco días laborables. Con saldo 10 y cobertura suficiente, proyectar saldo 5; la prima depende del salario y tasa de sus tablas.
Aclaración: /nuevo EMP-002 sin fechas. No llamar al modelo para inventarlas.
## Carga y uso
adaptador/cargar_skills.mjs lee este archivo, identifica versión y calcula SHA-256. Su contenido se adjunta a las instrucciones y el registro de carga acompaña al caso. Integración en n8n pendiente; guardar el archivo en GitHub por sí solo no acredita uso operativo.
