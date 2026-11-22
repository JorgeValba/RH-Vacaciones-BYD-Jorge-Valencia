# Datos de muestra y esquema de tablas
Elaborado por: Jorge Valencia.

## Referencia a la Guía del estudiante

De acuerdo con la **Guía del estudiante, páginas 2, 6 y 13**, se pide identificar fuentes y reglas, separar datos públicos y privados y entregar diccionario y muestra reproducible.

Se conservan esquemas, muestra sanitizada y archivos de carga inicial; la base privada de operación no se publica. La referencia identifica el requisito; su cumplimiento se contrasta con los archivos y resultados enlazados, no solamente con la existencia de la carpeta.

## Qué contiene y en qué formato

| Archivo o carpeta | Formato | Qué contiene y qué hacer con él |
|---|---|---|
| [Esquema_tablas_Jorge_Valencia.json](Esquema_tablas_Jorge_Valencia.json) | JSON (.json) | Diccionario de once tablas, columnas y tipos para crear/importar la base. |
| [Solicitudes_sanitizadas_Jorge_Valencia.json](Solicitudes_sanitizadas_Jorge_Valencia.json) | JSON (.json) | Corte de trece solicitudes con campos de muestra públicos; no base operativa. |
| [carga_inicial/](carga_inicial/) | Carpeta | Archivos explicados en esta guía; abrir la carpeta para consultar sus fuentes. |

## Cómo utilizarlo

Leer Esquema_tablas_Jorge_Valencia.json y después carga_inicial/README.md. Importar las seis tablas fuente; crear salidas vacías con los tipos indicados. Solicitudes_sanitizadas es una muestra de resultados, no una carga de empleados.

## Entorno y configuración

Los JSON describen datos; CSV se importan en n8n. Las tablas operativas permanecen en n8n, no en Pages ni en GitHub.

## Validación y resultado esperado

Quince empleados, tres equipos y datos ficticios. Mantener fechas de negocio como AAAA-MM-DD y no importar los IDs administrados por n8n como columnas de usuario.

## Relaciones con el proyecto

- [Guía general](../README.md): requisitos, instalación, inicio, credenciales, parada y solución de problemas.
- [Índice de evidencias](../evidencias/README.md): resultados y archivos relacionados.
- [Matriz de pruebas](../tests/pruebas.csv): entradas, esperados y resultados observados.


## Tablas fuente y tablas de salida

| Grupo | Tablas | Uso |
|---|---|---|
| Fuente | Empleados, aprobadas semilla, calendario, reglas, fuentes LFT y primas pagadas | Se importan desde seis CSV ficticios |
| Salida | Solicitudes, trazas y costos | Se crean vacías; el flujo escribe resultados de nuevas operaciones |
| Control | Control de aprobaciones | Una fila GLOBAL Libre, propietario vacío, revision 0 y verificado 0 al crear la instancia |
| Acceso | Concesiones y huellas de pases | Gestión privada; no se distribuye la tabla operativa de Jorge |

El archivo Esquema_tablas describe columnas y tipos. IDs internos, createdAt y updatedAt administrados por n8n no se cargan como campos de usuario. Texto JSON dentro de una tabla se conserva como String; un objeto pegado a una celda no reemplaza su serialización.

Para Excel, importar CSV UTF-8 delimitado por coma, fijar los identificadores y fechas de negocio como texto y comprobar números con punto decimal. No convertir automáticamente fechas AAAA-MM-DD a medianoche UTC: puede cambiar el día al mostrarlas en México. La muestra de trece solicitudes es un corte de resultados; no se importa encima de la instancia operativa para volver a aprobar casos.

<!-- INICIO LECTURA SEMANTICA -->
## Lectura e interpretación de los archivos

Esta guía de lectura es una ayuda documental añadida por Jorge Valencia para revisión humana o asistida por IA. La guía del curso exige trazabilidad y reproducibilidad; no impone estas fichas ni convierte una descripción en prueba ejecutada. El archivo enlazado es la fuente; su README explica cómo interpretarlo, con procedencia, fecha y alcance.

### [Esquema_tablas_Jorge_Valencia.json](Esquema_tablas_Jorge_Valencia.json)

**Tipo y uso:** Esquema lógico para preparar tablas n8n.

**Qué contiene:** tablas identifica once tablas, sus columnas y tipos inferidos de CSV/exportaciones; origen explica cómo se recuperó el esquema.

**Cómo interpretarlo:** Usar nombres y tipos para crear/importar tablas y después vincular sus IDs en n8n. Una descripción de columnas no inserta datos por sí sola.

**Alcance y límite:** No incluye credenciales, todas las filas productivas ni pases privados. Revisar tipos al importar, sobre todo fechas y JSON guardado como texto.

### [Solicitudes_sanitizadas_Jorge_Valencia.json](Solicitudes_sanitizadas_Jorge_Valencia.json)

**Tipo y uso:** Copia histórica sanitizada para análisis.

**Qué contiene:** Envelope schema_version/autor/modo/tipo_datos, exportado_en=null y trece casos con campos públicos.

**Cómo interpretarlo:** null en exportado_en significa hora de exportación no informada, no «ahora» ni «sin solicitudes». Cada caso conserva folio, equipo, estado, días y marcas de tiempo.

**Alcance y límite:** No es la respuesta viva del endpoint. No sustituir la copia web fechada por este archivo sin cumplir las reglas de validación de fecha.
<!-- FIN LECTURA SEMANTICA -->
