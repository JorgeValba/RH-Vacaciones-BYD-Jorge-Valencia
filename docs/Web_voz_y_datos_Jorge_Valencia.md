# HTML, voz y registro compartido
Elaborado por: Jorge Valencia.

## Requisitos contrastados con la guía

Páginas 2 y 5: el agente de voz debe consultar o crear un caso del registro de n8n, conservando el caso_id. No basta incrustar el enlace de una conversación sobre la LFT. Se implementa la ruta de consulta: estado de un folio existente y una segunda interacción de negocio para saldo de un empleado ficticio.

Página 5: el HTML incluye tres indicadores, gráfica, historial sanitizado, filtros, fechas y fuentes. El widget requiere consentimiento previo; ofrece Telegram y texto como alternativa. Página 6: una puerta de validación en Actions precede a la publicación de archivos estáticos en Pages. La actualización del panel se hace mediante exportación manual sanitizada y commit, método expresamente permitido en la guía.

Páginas 8 a 10: el HTML no contiene claves; el servidor valida entradas y solo devuelve campos permitidos. La consulta registra traza y evento de plataforma, pero su tokenización no aplica porque no llama a un LLM. Los cargos y duración de ElevenLabs se concilian con sus registros de conversación; no se reportan como cero ni se suman de nuevo a la misma llamada.

## Arquitectura

```text
Telegram → workflow principal → orquestador y cuatro agentes → rh_solicitudes
                                    ↓ aprobación humana y reservas
HTML → consentimiento → widget ElevenLabs → herramienta de servidor autenticada
                                       → workflow de consulta → mismas tablas
rh_solicitudes → exportación sanitizada manual → validación Actions → Pages
```

La voz añade una interfaz; no reemplaza a ninguno de los cuatro especialistas. El backend de voz no tiene Telegram Trigger, no aprueba, no cambia casos ni reserva días. Solo escribe sus propias trazas y referencias de consumo. No se aceptan destinos ni nombres de tabla elegidos por el interlocutor.

## Estado comprobado y pendiente

- F.R.I.D.A.Y conserva español, modelo gpt-5-mini y el documento LFT. Se crearon consultar_estado_rh y consultar_saldo_rh con autenticación mediante secreto y URL de producción de n8n.
- Jorge verificó en Preview la consulta del folio VAC-20261102-YTLSBKE8E (Aprobada, EMP-005, cuatro días) y el saldo de EMP-005 (seis días; periodo 2026-10-01 a 2027-09-30 después de corregir la lectura de fechas de calendario). Esta evidencia de Preview no sustituye la prueba desde Pages.
- El widget no expone selección de rama en el código de inserción utilizado. Main mantiene el tráfico del widget y se le adjuntaron las dos herramientas probadas y las instrucciones de RH. La configuración se verificó por lectura de API; el borrador pendiente de RH-BYD no se modificó. No se cambió el reparto de tráfico.
- El receptor de voz ya fue importado, autenticado y publicado por Jorge. El workflow de exportación del panel sigue pendiente de ejecutar. La primera prueba mostró un fallo al registrar auditoría; se corrigió la referencia de rh_trazas y luego la consulta respondió.
- El HTML se revisó localmente a 390 y 1366 píxeles, sin desbordamiento horizontal en el estado vacío. El botón de voz queda deshabilitado sin consentimiento. No se inició una conversación ni se concedió micrófono durante esta revisión.
- Pages quedó habilitado con GitHub Actions. La publicación se completó y la URL se abrió y verificó en el navegador. Se comprobó también una ejecución fallida deliberada que omitió el job de publicación. Ver enlaces abajo.
- Primera exportación real, prueba de herramienta desde la página y medición de conversación: pendientes. No se sustituyen por respuestas de muestra.
- Vencimiento de EMP-004 y demostración específica de corrección V1 → V2 con el mismo caso_id: pendientes del proyecto general.

## Actualizar los indicadores

Importar el workflow privado RH_Exportar_panel_Jorge_Valencia.json en el mismo proyecto de n8n. Ejecutarlo manualmente. El último nodo produce un único objeto JSON con campos permitidos. Guardar ese objeto como web/data/panel.json; si la descarga incluye la envoltura n8n de un array de items, conservar únicamente el objeto del campo json. No pegar una exportación de la tabla privada completa.

El exportador selecciona casos de vacaciones en modo SIMULADO y empleados de prueba EMP-001 a EMP-015. Omite casos de otros procesos; ante datos ambiguos o no habilitados detiene la exportación. No publica nombres, salario, prima individual, chat_id, usuario_id, decisiones completas ni conversaciones. El folio se conserva para poder consultar el mismo registro ficticio desde voz.

El corte público refleja el instante de exportación. Una propuesta pendiente cuya vigencia ya se agotó se muestra Expirada sin modificar la tabla privada. Exportar de nuevo después de cambios importantes; mientras no se publique la siguiente exportación, existe retraso. Se advierte al superar 24 horas.

## Indicadores y gráfica

Unidad de observación: un folio único. Todos los filtros afectan simultáneamente a las métricas, barras e historial. Solicitudes registradas = número de folios. Pendientes = número con estado Pendiente de aprobación en el corte. Días aprobados = suma de dias_solicitados de los casos Aprobada; no incluye pendientes ni rechazados.

La gráfica de barras horizontales compara el número de casos por estado, desde cero. Etiquetas y cifras acompañan al color. No se supone ahorro de tiempo ni mejora de productividad sin medición. Un resumen sin exportación muestra guiones; una exportación válida vacía puede mostrar conteos cero.

## Actions y Pages

Evidencia real: [publicación exitosa](https://github.com/JorgeValba/RH-Vacaciones-BYD-Jorge-Valencia/actions/runs/41396256574), [dato inválido que bloqueó la publicación](https://github.com/JorgeValba/RH-Vacaciones-BYD-Jorge-Valencia/actions/runs/41396056569) y [sitio público verificado](https://jorgevalba.github.io/RH-Vacaciones-BYD-Jorge-Valencia/). El sitio se publicó con el estado vacío documentado y la conexión de registros marcada como pendiente.

El workflow pages.yml valida skills, consultas, esquema público y cálculos; sube solo web como artefacto. Un push ejecuta la validación. Para publicar, habilitar Pages con origen GitHub Actions y ejecutar el workflow manual marcando publicar. No marcar prueba_bloqueo en esa ejecución.

Para la evidencia negativa, ejecutar manualmente con publicar=true y prueba_bloqueo=true: la puerta introduce en memoria modo REAL, la validación falla y el job de publicación depende de ella, por lo que no puede publicar. Después ejecutar con publicar=true y prueba_bloqueo=false. Conservar ambos enlaces de Actions. No requiere editar datos privados ni dejar el repositorio roto.

## Pruebas integradas que siguen pendientes

1. Sin cabecera o con secreto incorrecto: n8n rechaza antes de leer tablas.
2. Folio real de prueba: herramienta devuelve el estado del mismo caso; folio inexistente no se inventa.
3. Saldo de EMP-005: valor deriva de días generados, usados al corte y reservas aprobadas; comprobar contra las tablas actuales, no una cifra memorizada.
4. Solicitud de aprobar o revelar secretos por voz: no existe herramienta que lo permita y se rechaza.
5. Conversación desde Pages: verificar la llamada en ElevenLabs y la traza voz_consulta con el mismo caso_id y conversacion_id.
6. Micrófono denegado, servicio caído, campo faltante y registro duplicado: alternativa clara y sin inventar éxito.
7. Exportación actualizada: los indicadores y detalle corresponden al archivo publicado.
8. Conciliar duración, modelo y costo de ElevenLabs con la conversación y los eventos de n8n.

## Fuentes de implementación

- Guía del estudiante del proyecto, páginas 2, 5, 6, 8, 9, 10, 12 y 14.
- https://elevenlabs.io/docs/eleven-agents/customization/widget
- https://elevenlabs.io/docs/eleven-agents/customization/tools/webhook-tools
- https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.webhook/
- https://docs.n8n.io/integrations/builtin/credentials/webhook/
- https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages
