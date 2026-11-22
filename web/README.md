# Sitio publicado en GitHub Pages
Elaborado por: Jorge Valencia.

## Referencia a la Guía del estudiante

De acuerdo con la **Guía del estudiante, páginas 5–6**, se pide publicar un panel con tres KPI, gráfica, historial, filtros, estados de interfaz e integración ElevenLabs; desplegar mediante Actions.

web/ contiene el sitio y sus recursos; la matriz y las capturas documentan las verificaciones efectuadas. La referencia identifica el requisito; su cumplimiento se contrasta con los archivos y resultados enlazados, no solamente con la existencia de la carpeta.

## Qué contiene y en qué formato

| Archivo o carpeta | Formato | Qué contiene y qué hacer con él |
|---|---|---|
| [app.js](app.js) | JavaScript (.js) | Interacción de filtros/panel y habilitación del widget según la interfaz. |
| [config.json](config.json) | JSON (.json) | ID público de agente y URLs de Telegram/proyección; no almacenar API keys. |
| [index.html](index.html) | HTML (.html) | Entrada HTML del sitio: presentación, panel, instrucciones y sección del asistente. |
| [metrics.js](metrics.js) | JavaScript (.js) | Funciones de indicadores, selección y representación de datos del panel. |
| [styles.css](styles.css) | CSS (.css) | Estilos y reglas responsive con paleta roja/gris/blanca del proyecto. |
| [data/](data/) | Carpeta | Archivos explicados en esta guía; abrir la carpeta para consultar sus fuentes. |
| [fonts/](fonts/) | Carpeta | Archivos explicados en esta guía; abrir la carpeta para consultar sus fuentes. |

## Cómo utilizarlo

index.html es la entrada. Configurar config.json para otra cuenta; mantener las claves fuera del navegador. Actions publica esta carpeta como artefacto de Pages.

## Entorno y configuración

Ejecuta en navegador; CSS y JS se sirven estáticos. El servicio n8n y ElevenLabs corren fuera de Pages. Para inspección local se puede usar un servidor HTTP local y después detenerlo al terminar.

## Validación y resultado esperado

Ejecutar node tests/validar_panel.mjs desde la raíz y revisar campos públicos, fechas, filtros y estados. La validación local no equivale a conversación de voz remota.

## Relaciones con el proyecto

- [Guía general](../README.md): requisitos, instalación, inicio, credenciales, parada y solución de problemas.
- [Índice de evidencias](../evidencias/README.md): resultados y archivos relacionados.
- [Matriz de pruebas](../tests/pruebas.csv): entradas, esperados y resultados observados.


## Configuración del sitio

En config.json, agent_id es público; panel_url es el endpoint GET sanitizado; telegram_url apunta al bot; stale_hours interviene en el aviso de respaldo. No añadir OPENAI_API_KEY, token de Telegram o secreto Header Auth. El script del widget y su activación se encuentran en index.html/app.js; el agente se administra en ElevenLabs.

Pages se configura en GitHub → Settings → Pages → Source: GitHub Actions. El workflow de .github/workflows/ valida y publica únicamente web/. Una foto guardada bajo evidencias/ es accesible en el repositorio, pero no aparece automáticamente en la página publicada.

## Inspección local opcional

Con Python 3 instalado, desde la raíz puede iniciarse un servidor estático para revisar recursos:

```text
python -m http.server 8000 --directory web
```

Abrir http://localhost:8000 y detener con Ctrl+C. Esta previsualización no inicia n8n, no garantiza que el dominio local tenga permiso para usar el widget y no sustituye la prueba en Pages. Python solo es necesario para esta alternativa local; los checks automatizados usan Node.

## Panel y estados

Solicitudes registradas cuenta folios; pendientes cuenta el estado mostrado; días aprobados suma días laborables de casos aprobados. Los filtros de estado/equipo/folio afectan indicadores, gráfica e historial. El corte histórico 13/2/14 se muestra en evidencia, no se fuerza como resultado de cualquier consulta actual.

La lectura dinámica ocurre al abrir, al pulsar Actualizar y cada sesenta segundos visibles. Ante error, el aviso distingue respaldo y fecha; el panel también contempla carga, sin datos y sin coincidencias. La interfaz no debe interpretar una gráfica o una respuesta del modelo como autorización para modificar vacaciones.

## Optimización del sondeo del panel

El panel actualiza automáticamente cada cinco minutos; conserva consulta al abrir, al volver a pestaña y manual. [Comparación de costo y calidad](../tests/Optimizacion_panel_Jorge_Valencia.md): diez criterios offline antes/después, con el compromiso de frescura declarado. No es una prueba de navegador o carga.
