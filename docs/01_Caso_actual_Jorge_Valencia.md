# Caso y KPI de la implementación actual
Elaborado por: Jorge Valencia. Corte: 4 de noviembre de 2026.

Usuario: RH autorizado. Empresa de referencia: BYD México, automotriz; datos y políticas operativas ficticios. Alcance: 15 empleados EMP-001 a EMP-015 en EQ-A/B/C. Entrada: empleado y fechas; salida: propuesta revisada con folio, días, saldo, prima estimada y alertas. Inicio en Telegram, cierre por decisión humana o detención controlada. La voz consulta información y no aprueba.

## KPI publicados

| Indicador | Fórmula | Unidad y fuente |
|---|---|---|
| Solicitudes registradas | Número de folios únicos en la selección | Solicitudes; proyección sanitizada de rh_solicitudes |
| Pendientes de aprobación | Conteo de estado mostrado Pendiente de aprobación | Solicitudes; misma selección |
| Días aprobados | Suma de dias_solicitados de filas Aprobada | Días laborables; misma selección |

El periodo corresponde a fechas de creación de la selección y el corte de consulta se muestra en pantalla; no son tasas mensuales ni número de empleados. Fórmulas verificables en web/metrics.js. Filtros afectan KPI, gráfica e historial. El panel deriva Expirada si el registro pendiente tiene fecha de vencimiento válida ya transcurrida, sin escribir ese cambio en la tabla. Casos heredados sin metadata pueden seguir contándose pendientes aunque requieran nueva propuesta para decidir.

No se afirman mejoras medidas de productividad ni ahorro frente a un proceso manual. Se excluyen datos reales de personal, nómina/pagos, decisiones laborales reales y cálculo profesional definitivo. La información legal es apoyo informativo con revisión humana.
