# Datos de muestra y esquema de tablas
Elaborado por: Jorge Valencia.

## Propósito y relación con la guía

Guía pp.4, 6 y 13: persistencia privada, muestra sanitizada y diccionario.

## Qué contiene y en qué formato

| Archivo o carpeta | Formato | Qué contiene y qué hacer con él |
|---|---|---|
| [Esquema_tablas_Jorge_Valencia.json](Esquema_tablas_Jorge_Valencia.json) | JSON (.json) | Diccionario de once tablas, columnas y tipos para crear/importar la base. |
| [Solicitudes_sanitizadas_Jorge_Valencia.json](Solicitudes_sanitizadas_Jorge_Valencia.json) | JSON (.json) | Corte de trece solicitudes con campos de muestra públicos; no base operativa. |
| [carga_inicial/](carga_inicial/README.md) | Carpeta | Abrir su README para formatos, uso y validación de ese componente. |

## Cómo utilizarlo

Leer Esquema_tablas_Jorge_Valencia.json y después carga_inicial/README.md. Importar las seis tablas fuente; crear salidas vacías con los tipos indicados. Solicitudes_sanitizadas es una muestra de resultados, no una carga de empleados.

## Entorno y configuración

Los JSON describen datos; CSV se importan en n8n. Las tablas operativas permanecen en n8n, no en Pages ni en GitHub.

## Validación y resultado esperado

Quince empleados, tres equipos y datos ficticios. Mantener fechas de negocio como AAAA-MM-DD y no importar los IDs administrados por n8n como columnas de usuario.

## Relaciones con el proyecto

- [Guía general](../README.md): requisitos, instalación, inicio, credenciales, parada y solución de problemas.
- [Índice de evidencias](../evidencias/indice.md): resultados y archivos relacionados.
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
