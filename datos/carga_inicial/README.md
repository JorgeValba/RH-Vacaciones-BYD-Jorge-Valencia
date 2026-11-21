# Carga inicial de las tablas fuente
Elaborado por: Jorge Valencia.

## Propósito y relación con la guía

Guía pp.4 y 13: muestra reproducible sanitizada y diccionario.

## Qué contiene y en qué formato

| Archivo o carpeta | Formato | Qué contiene y qué hacer con él |
|---|---|---|
| [rh_aprobadas.csv](rh_aprobadas.csv) | CSV UTF-8 (.csv) | Filas ficticias de rh_aprobadas; importar como tabla y respetar encabezados/tipos del esquema. |
| [rh_calendario.csv](rh_calendario.csv) | CSV UTF-8 (.csv) | Filas ficticias de rh_calendario; importar como tabla y respetar encabezados/tipos del esquema. |
| [rh_empleados.csv](rh_empleados.csv) | CSV UTF-8 (.csv) | Filas ficticias de rh_empleados; importar como tabla y respetar encabezados/tipos del esquema. |
| [rh_fuentes_lft.csv](rh_fuentes_lft.csv) | CSV UTF-8 (.csv) | Filas ficticias de rh_fuentes_lft; importar como tabla y respetar encabezados/tipos del esquema. |
| [rh_primas_pagadas.csv](rh_primas_pagadas.csv) | CSV UTF-8 (.csv) | Filas ficticias de rh_primas_pagadas; importar como tabla y respetar encabezados/tipos del esquema. |
| [rh_reglas.csv](rh_reglas.csv) | CSV UTF-8 (.csv) | Filas ficticias de rh_reglas; importar como tabla y respetar encabezados/tipos del esquema. |

## Cómo utilizarlo

Importar cada CSV como tabla del mismo proyecto n8n. Usar encabezados, tipos y fechas del esquema; no importar esta carpeta como un workflow.

## Entorno y configuración

Datos ficticios; su lectura/importación ocurre en n8n. No se ejecuta código ni se instala un paquete.

## Validación y resultado esperado

rh_empleados contiene quince personas; rh_aprobadas contiene dos reservas semilla de cobertura. Crear solicitudes/trazas/costos vacíos; no confundir semillas con aprobaciones producidas por el bot.

## Relaciones con el proyecto

- [Guía general](../../README.md): requisitos, instalación, inicio, credenciales, parada y solución de problemas.
- [Índice de evidencias](../../evidencias/indice.md): resultados y archivos relacionados.
- [Matriz de pruebas](../../tests/pruebas.csv): entradas, esperados y resultados observados.


## Pasos de importación

1. Abrir Data tables del proyecto n8n y crear/importar cada CSV como tabla propia.
2. Revisar encabezados y tipos contra ../Esquema_tablas_Jorge_Valencia.json. Conservar IDs ficticios y fechas como texto cuando corresponda.
3. Comprobar quince empleados, tres equipos y las dos reservas semilla de cobertura; no confundirlas con aprobaciones creadas por Telegram.
4. Crear aparte las tablas de salida vacías y la fila de control indicada en el README raíz.
5. Seleccionar esas tablas en los Data Table de los cuatro workflows: el nombre visible no sustituye su ID interno.

rh_primas_pagadas contiene un pago ficticio para verificar cálculo de prima adicional. rh_fuentes_lft contiene referencias seleccionables; el modelo no debe inventar una fuente que no figure entre las permitidas. Los CSV no incluyen secretos, usuarios autorizados o pases.
