# Evidencias identificadas y reproducibles
Elaborado por: Jorge Valencia.

## Propósito y relación con la guía

Guía pp.12–13: índice relacionado con pruebas, capturas y resultados verificables.

## Qué contiene y en qué formato

| Archivo o carpeta | Formato | Qué contiene y qué hacer con él |
|---|---|---|
| [Actions_verificados_Jorge_Valencia.json](Actions_verificados_Jorge_Valencia.json) | JSON (.json) | Registro estructurado de Actions verificados; leer procedencia, resultado y alcance. |
| [ElevenLabs_dominio_configurado_Jorge_Valencia.json](ElevenLabs_dominio_configurado_Jorge_Valencia.json) | JSON (.json) | Registro estructurado de ElevenLabs dominio configurado; leer procedencia, resultado y alcance. |
| [ElevenLabs_limites_publicados_Jorge_Valencia.json](ElevenLabs_limites_publicados_Jorge_Valencia.json) | JSON (.json) | Registro estructurado de ElevenLabs limites publicados; leer procedencia, resultado y alcance. |
| [indice.md](indice.md) | Markdown (.md) | Fichas E-Pxx-nn con archivos, observación, procedencia y límites. |
| [P04_version_incorrecta_Jorge_Valencia.json](P04_version_incorrecta_Jorge_Valencia.json) | JSON (.json) | Registro estructurado de P04 version incorrecta; leer procedencia, resultado y alcance. |
| [P05_entrada_incompleta_Jorge_Valencia.json](P05_entrada_incompleta_Jorge_Valencia.json) | JSON (.json) | Registro estructurado de P05 entrada incompleta; leer procedencia, resultado y alcance. |
| [P06_peticion_secretos_Jorge_Valencia.json](P06_peticion_secretos_Jorge_Valencia.json) | JSON (.json) | Registro estructurado de P06 peticion secretos; leer procedencia, resultado y alcance. |
| [P07_usuario_sin_permiso_Jorge_Valencia.json](P07_usuario_sin_permiso_Jorge_Valencia.json) | JSON (.json) | Registro estructurado de P07 usuario sin permiso; leer procedencia, resultado y alcance. |
| [P08_ejecucion_247_Jorge_Valencia.json](P08_ejecucion_247_Jorge_Valencia.json) | JSON (.json) | Registro estructurado de P08 ejecucion 247; leer procedencia, resultado y alcance. |
| [P09_ejecucion_246_Jorge_Valencia.json](P09_ejecucion_246_Jorge_Valencia.json) | JSON (.json) | Registro estructurado de P09 ejecucion 246; leer procedencia, resultado y alcance. |
| [P10_comparacion_248_249_Jorge_Valencia.json](P10_comparacion_248_249_Jorge_Valencia.json) | JSON (.json) | Registro estructurado de P10 comparacion 248 249; leer procedencia, resultado y alcance. |
| [P10_ejecucion_248_Jorge_Valencia.json](P10_ejecucion_248_Jorge_Valencia.json) | JSON (.json) | Registro estructurado de P10 ejecucion 248; leer procedencia, resultado y alcance. |
| [P10_ejecucion_249_Jorge_Valencia.json](P10_ejecucion_249_Jorge_Valencia.json) | JSON (.json) | Registro estructurado de P10 ejecucion 249; leer procedencia, resultado y alcance. |
| [P11_consolidacion_Jorge_Valencia.json](P11_consolidacion_Jorge_Valencia.json) | JSON (.json) | Registro estructurado de P11 consolidacion; leer procedencia, resultado y alcance. |
| [Pages_herramientas_verificadas_Jorge_Valencia.json](Pages_herramientas_verificadas_Jorge_Valencia.json) | JSON (.json) | Registro estructurado de Pages herramientas verificadas; leer procedencia, resultado y alcance. |
| [Publicacion_GitHub_20261121_Jorge_Valencia.json](Publicacion_GitHub_20261121_Jorge_Valencia.json) | JSON (.json) | Registro estructurado de Publicacion GitHub 20261121; leer procedencia, resultado y alcance. |
| [Registro_evidencias_Jorge_Valencia.csv](Registro_evidencias_Jorge_Valencia.csv) | CSV UTF-8 (.csv) | Catálogo tabular de IDs, pruebas y rutas para abrir en Excel. |
| [Registro_evidencias_Jorge_Valencia.json](Registro_evidencias_Jorge_Valencia.json) | JSON (.json) | Catálogo estructurado con hashes de archivos y selección de capturas. |
| [capturas/](capturas/README.md) | Carpeta | Abrir su README para formatos, uso y validación de ese componente. |
| [registros/](registros/README.md) | Carpeta | Abrir su README para formatos, uso y validación de ese componente. |
| [voz/](voz/README.md) | Carpeta | Abrir su README para formatos, uso y validación de ese componente. |

## Cómo utilizarlo

Abrir indice.md; buscar E-Pxx-nn y seguir sus archivos. pruebas.csv relaciona esos IDs con entrada, esperado, observado y versión. Registro_evidencias permite verificar rutas y SHA-256.

## Entorno y configuración

PNG/JPG son capturas; JSON registra resultados; CSV relaciona evidencias. Ningún archivo de esta carpeta ejecuta una operación de negocio.

## Validación y resultado esperado

Usar imágenes junto con registros; conservar procedencia y alcance. Los datos históricos, salidas compartidas y ensayos aislados se distinguen, sin atribuirles un alcance mayor.

## Relaciones con el proyecto

- [Guía general](../README.md): requisitos, instalación, inicio, credenciales, parada y solución de problemas.
- [Índice de evidencias](../evidencias/indice.md): resultados y archivos relacionados.
- [Matriz de pruebas](../tests/pruebas.csv): entradas, esperados y resultados observados.


## Identificación y consulta

Usar E-Pxx-nn como referencia estable. Por ejemplo, E-P04-01 enlaza el rechazo de V2 y la consulta posterior de V1; E-P04-02 enlaza la tabla vacía y declara que el filtro no aparece desplegado. El índice distingue qué se observa de lo que no se puede concluir con esa evidencia.

Registro_evidencias.csv contiene una fila por ficha para filtrar en Excel. Registro_evidencias.json añade rutas, tamaños y SHA-256 del corte de archivos. Los hashes comprueban coincidencia de archivos, no una fecha certificada de captura o un aval de la docente. No se agregan cadenas de razonamiento privado.

Para el informe, citar la ficha y usar enlaces del repositorio con el commit de entrega, conservando el mismo estado en el ZIP. Las fotos complementan las trazas/JSON y el acceso funcional. No colocar bajo web/ la base privada para que una imagen sea visible.

## Grupos de material

capturas/ reúne trece PNG/JPG por componente; registros/ conserva conciliaciones sanitizadas; voz/ conserva metadata hablada sin transcripción. Los JSON de la raíz contienen resultados de controles y sesiones concretas. Las salidas compartidas por Jorge se identifican como tales; no se atribuyen a una consulta independiente de API.
