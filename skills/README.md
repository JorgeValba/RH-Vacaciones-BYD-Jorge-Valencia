# Skills descargables y su carga
Elaborado por: Jorge Valencia.

## Propósito y relación con la guía

Guía p.7: dos SKILL.md específicos, ejemplos, versión, carga y reutilización trazadas.

## Qué contiene y en qué formato

| Archivo o carpeta | Formato | Qué contiene y qué hacer con él |
|---|---|---|
| [Snapshots_n8n_Jorge_Valencia.json](Snapshots_n8n_Jorge_Valencia.json) | JSON (.json) | Versiones/hashes del runtime probado y revisiones documentales de SKILL.md. |
| [evaluar_vacaciones/](evaluar_vacaciones/README.md) | Carpeta | Abrir su README para formatos, uso y validación de ese componente. |
| [seguridad_y_costo/](seguridad_y_costo/README.md) | Carpeta | Abrir su README para formatos, uso y validación de ese componente. |

## Cómo utilizarlo

Abrir uno de los enlaces SKILL.md; GitHub lo presenta como texto renderizado. Para obtener el archivo usar Download raw file o Raw y guardar como SKILL.md dentro de su carpeta. Se puede descargar todo el repositorio para conservar ambas carpetas.

## Entorno y configuración

El adaptador local lee archivos Markdown; n8n ejecuta snapshots compilados del nodo Cargar skills versionados. n8n no instala un skill por arrastrar un .md al lienzo.

## Validación y resultado esperado

Ejecutar node tests/skills.test.mjs y consultar E-P11-01. El JSON diferencia la revisión documental actual de la versión/hash realmente ejecutados; no cambiar snapshots sin recompilar.

## Relaciones con el proyecto

- [Guía general](../README.md): requisitos, instalación, inicio, credenciales, parada y solución de problemas.
- [Índice de evidencias](../evidencias/indice.md): resultados y archivos relacionados.
- [Matriz de pruebas](../tests/pruebas.csv): entradas, esperados y resultados observados.

## Descargar los dos archivos Markdown

[Evaluar vacaciones](evaluar_vacaciones/SKILL.md) · [Seguridad y costo](seguridad_y_costo/SKILL.md).

GitHub puede mostrar la pestaña de vista previa por defecto: no significa que el .md falte. Download raw file descarga el contenido; Raw permite guardarlo como texto con nombre SKILL.md. El proyecto no requiere instalar un archivo ZIP adicional.

Las trazas muestran negocio 1.0.1 y seguridad 1.0.0 cargados en YTLSBKE8E y YTLSEX4SR. Los archivos actuales son revisiones documentales 1.0.2 y 1.0.1: las reglas se mantienen, pero sus hashes cambian al corregir documentación. El JSON de snapshots conserva ambas referencias sin atribuir al runtime una revisión que no ejecutó.
