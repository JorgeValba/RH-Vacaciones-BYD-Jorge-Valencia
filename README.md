# RH Vacaciones BYD
Elaborado por: Jorge Valencia. Revisión de entrega: 21 de noviembre de 2026.

Asistente de RH para solicitudes de vacaciones de quince empleados ficticios y tres equipos. Telegram recibe solicitudes y decisiones autorizadas; n8n calcula, coordina cuatro especialistas GPT-5 y persiste estados. GitHub Pages muestra el panel y HR assistant BYD de ElevenLabs consulta estado/saldo del mismo registro. Operaciones SIMULADAS, sin pagos; demostración independiente de BYD México.

## Accesos y recorrido de evaluación

- [Sitio GitHub Pages](https://jorgevalba.github.io/RH-Vacaciones-BYD-Jorge-Valencia/).
- [Bot HR_BYD_bot](https://t.me/HR_BYD_bot). Solicitar un pase por el canal privado del curso; no se publica el código ni el token.
- [Actions](https://github.com/JorgeValba/RH-Vacaciones-BYD-Jorge-Valencia/actions). Ejecuciones históricas y alcance en [evidencia de publicación](docs/Actions_evidencia_Jorge_Valencia.md).
- [Índice de evidencias](evidencias/indice.md), [matriz P01–P14](tests/pruebas.csv) y [mapa de requisitos y pendientes](docs/Mapa_entrega_y_pendientes_Jorge_Valencia.md).

El usuario autorizado entra con `/acceso CODIGO_PRIVADO` y consulta `/ayuda`. Puede consultar el caso histórico `/estado VAC-20261102-YTLSBKE8E`; el corte revisado lo registra aprobado. Para demostrar una nueva decisión, crear una propuesta viable con `/nuevo EMP-004 2026-12-14 2026-12-18`, conservar el folio/versión devueltos y decidir dentro de treinta minutos. La viabilidad depende del registro actual: no se promete un resultado fijo ni se reabre un caso antiguo. Aprobar: `/aprobar FOLIO Vn`; rechazar: `/rechazar FOLIO Vn motivo`.

Desde Pages, consultar al asistente el folio efectivamente devuelto o el saldo de un empleado ficticio. RH conserva la decisión en Telegram. La voz no sustituye a los cuatro especialistas. Para evaluar, los servicios deben estar activos y con cuota; la disponibilidad no se deduce de una captura histórica. Jorge confirma que los cuatro exports son los mismos probados; vigencia del hosting actual pendiente de confirmar.

## Estructura y propósito

| Ruta | Qué encontrar |
|---|---|
| [docs/](docs/) | Caso, [arquitectura y diagrama](docs/Arquitectura_Jorge_Valencia.md), [manual](docs/Manual_instalacion_Jorge_Valencia.md), [borrador del informe](docs/Informe_base_Jorge_Valencia.md), uso de IA y pendientes. |
| [web/](web/) | index.html, estilos, scripts, fuente con licencia y respaldo sanitizado; es el contenido que Actions despliega. |
| [agentes/](agentes/) | Cinco roles, contratos, instrucciones y configuración activa documentada de voz. El archivo FRIDAY es histórico. |
| [n8n/](n8n/) | Cuatro plantillas sanitizadas, guía y mapa de configuración por nodo. |
| [skills/](skills/) y [loops/](loops/) | Dos SKILL.md, snapshots/hashes y secuencias de calidad/seguridad/costo. |
| [tests/](tests/) | Validadores, matriz con evidencias y ensayos manuales aislados. |
| [datos/](datos/) | Esquemas de once tablas, muestra sanitizada y seis CSV de carga inicial. |
| [costos/](costos/) | [Ledger](costos/costos.csv), [esquema](costos/Esquema_registro_Jorge_Valencia.md), tarifas/fuentes, resúmenes por etapa/caso y escenarios. |
| [evidencias/](evidencias/) | Índice, fichas, registros y [capturas seleccionadas](evidencias/capturas/), con límites explícitos. |
| [.github/workflows/](.github/workflows/) | Validación y despliegue; el punto inicial de .github es necesario. |
| [.env.example](.env.example) | Nombres orientativos sin valores; no es un archivo de claves del navegador. |
| [adaptador/](adaptador/) y [backend/](backend/) | Carga de skills y proyección del panel. |

## Requisitos, configuración y recreación

n8n Cloud con HTTPS; bot propio; credencial OpenAI; cuenta ElevenLabs; repositorio con Pages mediante Actions. Entorno histórico n8n 3.0.1; versiones de nodos en los JSON; CI usa Node 22. Los validadores locales usan módulos de Node, sin paquetes externos. Especialistas GPT-5 con 1,500 tokens por respuesta, seis generaciones, 120 segundos y USD 0.10 por caso, según el export. La conversación ElevenLabs tiene configuración/modelo independiente.

Seguir el [manual de instalación](docs/Manual_instalacion_Jorge_Valencia.md): importar los CSV en un proyecto n8n, crear tablas vacías de salida/control/accesos con [esquemas](datos/Esquema_tablas_Jorge_Valencia.json), importar cada workflow en un lienzo vacío y vincular credenciales desde n8n. Las plantillas contienen marcadores CONFIGURAR y no se ejecutan sin reemplazarlos. Consultar [mapa por nodo](n8n/Mapa_configuracion_Jorge_Valencia.json).

Orden: 02_llm → 01_principal → 03_voz → 04_panel. Publicar el subworkflow antes del principal; conservar un único Telegram Trigger por bot. Configurar IDs propios autorizados en Configuración y el secreto de voz en credenciales/servidor. No ejecutar el generador privado de pases de otra instancia. La provisión privada y una instalación independiente completa siguen como límite documentado.

## Pruebas y resultado esperado

Desde la raíz con Node.js:

```text
node tests/skills.test.mjs
node tests/voz.test.mjs
node tests/validar_panel.mjs
node tests/panel_actualizado.test.mjs
```

Las cuatro comprobaciones deben terminar con código cero. No contactan a los proveedores ni prueban disponibilidad remota. Actions ejecuta sus validaciones definidas en pages.yml y publica únicamente web/ si pasan. La matriz P01–P14 distingue integración histórica, configuración, capturas y ensayos aislados: no se presenta como catorce pruebas integrales aprobadas.

Para una ejecución funcional: `/ayuda`, `/probar_control`, solicitud de datos ficticios, revisión de folio/versión, decisión autorizada, consulta de estado y verificación del panel. Esperado: respuesta trazable o detención con motivo, sin inventar datos ni aprobar automáticamente. Repetir una aprobación ya decidida no debe insertar otra reserva. Detalles y solución de problemas en el manual.

## Inicio, parada y fallas

En el sistema existente no hay servidor que iniciar desde Pages: n8n y ElevenLabs deben permanecer publicados/disponibles. Para detener el bot, desactivar su workflow principal en n8n; detener consultas de voz/panel según el servicio que deba quedar fuera de operación. No eliminar tablas ni reservas para detener. En recreación, publicar después de configurar y comprobar cada componente.

Telegram sin respuesta: comprobar un solo receptor, publicación y credencial correcta. Error de tabla: seleccionar tablas del mismo proyecto. Error de voz/auditoría: revisar secreto de servidor y tabla de trazas; no pasar a consultas sin autorización. Modelo/cuota/presupuesto: conservar error y detener, sin cambiar automáticamente el modelo ni quitar guardrails. No liberar a mano un control pendiente sin conciliar la escritura.

## Datos, costos y límites

El corte histórico recibido contiene trece solicitudes; tres aprobaciones del bot suman catorce días, además de dos reservas semilla separadas. Las posteriores pruebas y solicitudes no se insertan artificialmente en ese corte. El panel vivo puede mostrar otro total. Datos públicos: folio, equipo, estado, días y fecha; no tablas privadas completas.

48 generaciones GPT-5 suman USD 0.13586950; nueve sesiones ElevenLabs documentadas completan un subtotal identificado de USD 0.27757026. No factura ni gasto total. Ver [costos y escenarios](costos/LEEME_costos_Jorge_Valencia.md): construcción no recuperada, otros consumos, optimización con calidad no medida y disponibilidad de plan siguen declarados como pendientes. Tarifas históricas fechadas no son una cotización vigente de noviembre 21.

Pages sirve estáticos; el panel consulta n8n al abrir y cada sesenta segundos visibles, más botón manual, con respaldo fechado ante fallo. Cada consulta puede consumir ejecución de plataforma aunque no use tokens. Un pase de treinta días no prolonga una prueba gratuita del hosting.

## Autoría y entrega

[Uso de IA y licencias](docs/Uso_IA_y_licencias_Jorge_Valencia.md). Mantener licencia OFL de Montserrat; BYD es escenario de demostración independiente. No subir .env real, claves, códigos, IDs personales o conversaciones completas.

Este commit reúne materiales revisados para la entrega. El informe final de 8–12 páginas, reflexión individual, video 5–8 min, demostración hasta doce minutos y ZIP del estado final se completan según el [mapa de pendientes](docs/Mapa_entrega_y_pendientes_Jorge_Valencia.md). No se afirma que un borrador o una captura sustituyan esos entregables.
