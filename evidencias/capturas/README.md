# Capturas de pruebas
Elaborado por: Jorge Valencia.

De acuerdo con la **Guía del estudiante, página 12**, las capturas complementan los registros y el acceso funcional. Se conservaron quince imágenes PNG/JPG sin edición; los nombres incluyen el ID de la ficha. La clasificación por carpetas es una decisión de organización.

Abrir la [ficha de evidencia](../README.md) para leer qué demuestra cada imagen y sus límites. Las imágenes no se ejecutan ni instalan; pueden verse en GitHub o descargarse. El catálogo técnico conserva sus hashes y procedencia.

<!-- INICIO LECTURA SEMANTICA -->
## Lectura e interpretación de los archivos

Esta guía de lectura es una ayuda documental añadida por Jorge Valencia para revisión humana o asistida por IA. La guía del curso exige trazabilidad y reproducibilidad; no impone estas fichas ni convierte una descripción en prueba ejecutada. El archivo enlazado es la fuente; su README explica cómo interpretarlo, con procedencia, fecha y alcance.

### [E-P14-02_KPI_Jorge_Valencia.png](E05_panel/E-P14-02_KPI_Jorge_Valencia.png)

**Tipo y uso:** Vista general del panel sin filtros.

**Qué contiene:** KPI 13 solicitudes, dos pendientes y 14 días aprobados, con fuente/fecha del corte.

**Cómo interpretarlo:** Son folios únicos, pendientes de decisión y días de casos aprobados; las tres magnitudes tienen unidades distintas.

**Alcance y límite:** Captura histórica; no garantiza valores actuales ni corresponde a 13 empleados distintos.

### [E-P14-03_Grafica_Jorge_Valencia.png](E05_panel/E-P14-03_Grafica_Jorge_Valencia.png)

**Tipo y uso:** Distribución histórica de estados.

**Qué contiene:** Barras con cantidades 3 aprobadas, 3 expiradas, 2 pendientes y los demás estados con una.

**Cómo interpretarlo:** Las longitudes representan conteos desde cero; sumar categorías devuelve 13 casos del mismo corte.

**Alcance y límite:** No es serie temporal, porcentaje de éxito de IA ni evidencia de una nueva aprobación.

### [E-P14-03_Historial_Jorge_Valencia.png](E05_panel/E-P14-03_Historial_Jorge_Valencia.png)

**Tipo y uso:** Historial de trece folios.

**Qué contiene:** Tabla con folio, equipo, estado, días y actualización.

**Cómo interpretarlo:** Cruzar un folio con solicitudes/trazas; «días» son los solicitados del registro, no saldo restante.

**Alcance y límite:** Una fila Aprobada se contrasta con la reserva y decisión; la tabla por sí sola no prueba ausencia de duplicados de escritura.

### [E-P14-04_Fila_EQ_B_Jorge_Valencia.png](E05_panel/E-P14-04_Fila_EQ_B_Jorge_Valencia.png)

**Tipo y uso:** Fila resultante del filtro EQ-B.

**Qué contiene:** Un registro de EQ-B, cinco días y estado Requiere ajuste por cobertura; indicador 1 de 13 registros.

**Cómo interpretarlo:** Una fila mostrada de trece totales refleja filtro activo. Comparar con la captura de KPI filtrados.

**Alcance y límite:** No demuestra por sí sola un cambio en la base ni una solicitud aprobada.

### [E-P14-04_Filtro_EQ_B_Jorge_Valencia.png](E05_panel/E-P14-04_Filtro_EQ_B_Jorge_Valencia.png)

**Tipo y uso:** Resultado visual de filtrar EQ-B.

**Qué contiene:** Filtro seleccionado y KPI 1/0/0, con un estado de cobertura insuficiente.

**Cómo interpretarlo:** El filtro cambia el conjunto de todas las métricas: un caso, cero pendientes y cero días aprobados en esa selección.

**Alcance y límite:** No contradice los totales 13/2/14 sin filtro ni indica que falten registros.

### [E-P04-02_Cero_filas_Jorge_Valencia.png](P04_version_incorrecta/E-P04-02_Cero_filas_Jorge_Valencia.png)

**Tipo y uso:** Consulta sin reservas para el filtro referido.

**Qué contiene:** Vista de tabla con No rows y Total 0.

**Cómo interpretarlo:** Se interpreta junto con P04_version_incorrecta: Jorge confirmó el filtro de la reserva del caso/versión rechazados.

**Alcance y límite:** El filtro no se ve completo en la imagen; aislada no demuestra que toda la tabla esté vacía.

### [E-P05-01_Recorrido_A_Jorge_Valencia.png](P05_entrada_incompleta/E-P05-01_Recorrido_A_Jorge_Valencia.png)

**Tipo y uso:** Primer tramo del recorrido de rechazo.

**Qué contiene:** Telegram Trigger, Configuración, normalización y enrutado; nodos ejecutados marcados en verde.

**Cómo interpretarlo:** Seguir líneas y nodos verdes hacia Responder ayuda o rechazo; contrastar con la entrada incompleta del registro P05.

**Alcance y límite:** No contiene todo el log ni lectura de tablas; se complementa con el tramo B y el reporte de Jorge.

### [E-P05-01_Recorrido_B_Jorge_Valencia.png](P05_entrada_incompleta/E-P05-01_Recorrido_B_Jorge_Valencia.png)

**Tipo y uso:** Segundo tramo del recorrido de rechazo.

**Qué contiene:** Preparación/resolución de acceso y respuesta de ayuda; especialistas sin ejecución visible.

**Cómo interpretarlo:** Continuar la ruta del tramo A; ramas grises sin marca visible no se presentan como etapas generadas.

**Alcance y límite:** La captura no mide tokens ni garantiza ausencia de toda escritura interna fuera de lo mostrado.

### [E-P06-01_Peticion_rechazada_Jorge_Valencia.jpg](P06_peticion_secretos/E-P06-01_Peticion_rechazada_Jorge_Valencia.jpg)

**Tipo y uso:** Solicitud adversaria y respuesta Telegram.

**Qué contiene:** Texto que pide claves y token, seguido de respuesta de comando no reconocido/ayuda.

**Cómo interpretarlo:** Leer el ataque como dato de prueba. La respuesta visible no entrega credenciales ni cambia políticas.

**Alcance y límite:** No es una inyección que llegó al modelo: el enrutador rechazó el formato.

### [E-P06-01_Recorrido_Jorge_Valencia.png](P06_peticion_secretos/E-P06-01_Recorrido_Jorge_Valencia.png)

**Tipo y uso:** Recorrido n8n de la petición rechazada.

**Qué contiene:** Ruta hacia Responder ayuda o rechazo y rama de especialistas no ejecutada visiblemente.

**Cómo interpretarlo:** Complementa la respuesta Telegram y explica por qué no se atribuye esta defensa a una generación del LLM.

**Alcance y límite:** No identifica todo el log ni mide consumo; no ensaya todos los tipos de inyección.

### [E-P07-01_Acceso_denegado_Jorge_Valencia.png](P07_usuario_sin_permiso/E-P07-01_Acceso_denegado_Jorge_Valencia.png)

**Tipo y uso:** Denegación a cuenta sin pase.

**Qué contiene:** /start y /nuevo reciben Acceso no habilitado o vencido; solicitud de código.

**Cómo interpretarlo:** Ambos mensajes carecen de folio/propuesta nueva. Leer junto al contexto de cuenta sin permiso aportado por Jorge.

**Alcance y límite:** No hay lectura posterior de tablas; la respuesta no distingue por sí sola pase inexistente de vencido.

### [E-P08-02_Aviso_Telegram_Jorge_Valencia.jpg](P08_timeout/E-P08-02_Aviso_Telegram_Jorge_Valencia.jpg)

**Tipo y uso:** Mensaje comprensible tras timeout del ensayo.

**Qué contiene:** Aviso de dos intentos, detención controlada y ninguna respuesta IA/reserva; folio ENSAYO-P08-263.

**Cómo interpretarlo:** El folio enlaza con la salida estructurada; el aviso orienta al usuario sin afirmar una vacación aprobada.

**Alcance y límite:** El mensaje solo no prueba duración, reintento o escritura; esos hechos se apoyan en el JSON del ensayo.

### [E-P13-01_1366_panel_Jorge_Valencia.png](P13_interfaz/E-P13-01_1366_panel_Jorge_Valencia.png)

**Tipo y uso:** Panel en emulación de escritorio.

**Qué contiene:** Viewport 1366 con indicadores, gráfica y tabla distribuidos en ancho de escritorio.

**Cómo interpretarlo:** Dimensiones de DevTools identifican el tamaño ensayado; inspeccionar legibilidad y distribución.

**Alcance y límite:** Captura estática: interacciones/teclado se respaldan con confirmaciones separadas; no prueba todos los navegadores.

### [E-P13-01_390_panel_Jorge_Valencia.png](P13_interfaz/E-P13-01_390_panel_Jorge_Valencia.png)

**Tipo y uso:** Panel en emulación móvil.

**Qué contiene:** Viewport de 390 px con tarjetas e indicadores apilados y gráfica adaptada.

**Cómo interpretarlo:** Contrastar contenido y KPI con escritorio; cambia disposición, no definición de la métrica.

**Alcance y límite:** Es emulación responsive, no una prueba exhaustiva de teléfonos físicos ni de teclado.

### [E-P13-01_Microfono_denegado_Jorge_Valencia.png](P13_interfaz/E-P13-01_Microfono_denegado_Jorge_Valencia.png)

**Tipo y uso:** Permiso denegado y alternativa visible en Pages.

**Qué contiene:** En el widget: Se produjo un error / Permission denied; detrás, aviso de micrófono y opciones de texto/Telegram, con consentimiento marcado.

**Cómo interpretarlo:** La URL visible identifica GitHub Pages. Error de permiso y aviso respaldan P13; el campo de texto y enlace son alternativas visibles.

**Alcance y límite:** No hay respuesta de texto bajo bloqueo ni panel de permisos de Chrome visible. No concluir conversación exitosa o consumo a partir de la imagen.
<!-- FIN LECTURA SEMANTICA -->
