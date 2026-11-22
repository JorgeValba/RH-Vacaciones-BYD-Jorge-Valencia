# Skills descargables y su carga
Elaborado por: Jorge Valencia.

## Referencia a la Guía del estudiante

De acuerdo con la **Guía del estudiante, página 7**, se pide entregar dos skills específicos, sus entradas, procedimiento, límites, aceptación, ejemplos y versión, y demostrar su carga y reutilización.

Cada skill está en un archivo SKILL.md descargable; el adaptador y los snapshots distinguen la versión documental de la verificada en n8n. La referencia identifica el requisito; su cumplimiento se contrasta con los archivos y resultados enlazados, no solamente con la existencia de la carpeta.

## Qué contiene y en qué formato

| Archivo o carpeta | Formato | Qué contiene y qué hacer con él |
|---|---|---|
| [Snapshots_n8n_Jorge_Valencia.json](Snapshots_n8n_Jorge_Valencia.json) | JSON (.json) | Versiones/hashes del runtime probado y revisiones documentales de SKILL.md. |
| [evaluar_vacaciones/SKILL.md](evaluar_vacaciones/SKILL.md) | Markdown | Skill de negocio: valida días, saldo, cobertura y cálculo; descargar el archivo o leer sus instrucciones. |
| [seguridad_y_costo/SKILL.md](seguridad_y_costo/SKILL.md) | Markdown | Skill de calidad, seguridad y costo: revisa salidas, permisos y límites; descargar el archivo o leer sus instrucciones. |

## Cómo utilizarlo

Abrir uno de los enlaces SKILL.md; GitHub lo presenta como texto renderizado. Para obtener el archivo usar Download raw file o Raw y guardar como SKILL.md dentro de su carpeta. Se puede descargar todo el repositorio para conservar ambas carpetas.

## Entorno y configuración

El adaptador local lee archivos Markdown; n8n ejecuta snapshots compilados del nodo Cargar skills versionados. n8n no instala un skill por arrastrar un .md al lienzo.

## Validación y resultado esperado

Ejecutar node tests/skills.test.mjs y consultar E-P11-01. El JSON diferencia la revisión documental actual de la versión/hash realmente ejecutados; no cambiar snapshots sin recompilar.

## Relaciones con el proyecto

- [Guía general](../README.md): requisitos, instalación, inicio, credenciales, parada y solución de problemas.
- [Índice de evidencias](../evidencias/README.md): resultados y archivos relacionados.
- [Matriz de pruebas](../tests/pruebas.csv): entradas, esperados y resultados observados.

## Descargar los dos archivos Markdown

[Evaluar vacaciones](evaluar_vacaciones/SKILL.md) · [Seguridad y costo](seguridad_y_costo/SKILL.md).

GitHub puede mostrar la pestaña de vista previa por defecto: no significa que el .md falte. Download raw file descarga el contenido; Raw permite guardarlo como texto con nombre SKILL.md. El proyecto no requiere instalar un archivo ZIP adicional.

Las trazas muestran negocio 1.0.1 y seguridad 1.0.0 cargados en YTLSBKE8E y YTLSEX4SR. Los archivos actuales son revisiones documentales 1.0.2 y 1.0.1: las reglas se mantienen, pero sus hashes cambian al corregir documentación. El JSON de snapshots conserva ambas referencias sin atribuir al runtime una revisión que no ejecutó.

<!-- INICIO LECTURA SEMANTICA -->
## Lectura e interpretación de los archivos

Esta guía de lectura es una ayuda documental añadida por Jorge Valencia para revisión humana o asistida por IA. La guía del curso exige trazabilidad y reproducibilidad; no impone estas fichas ni convierte una descripción en prueba ejecutada. El archivo enlazado es la fuente; su README explica cómo interpretarlo, con procedencia, fecha y alcance.

### [Snapshots_n8n_Jorge_Valencia.json](Snapshots_n8n_Jorge_Valencia.json)

**Tipo y uso:** Mapa de versiones de skills y snapshots compilados.

**Qué contiene:** modo_carga=snapshot_compilado y dos entradas skills con ruta/skill_id, version, sha256_fuente e integridad_fnv1a; version_documento/sha256_documento describen el MD revisado.

**Cómo interpretarlo:** Comparar la traza con version y sha256_fuente del snapshot ejecutado; usar los campos *_documento para la revisión actual del SKILL.md. No son necesariamente los mismos bytes.

**Alcance y límite:** Un hash o MD en GitHub no actualiza automáticamente n8n. El adaptador compila/carga; las trazas aportan la evidencia operativa.
<!-- FIN LECTURA SEMANTICA -->
