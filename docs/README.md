# Documentación del sistema
Elaborado por: Jorge Valencia.

## Referencia a la Guía del estudiante

De acuerdo con la **Guía del estudiante, páginas 2–3, 13 y 15**, se pide definir el caso y la arquitectura, entregar el informe de 8–12 páginas sin anexos y explicar las decisiones y la reflexión individual.

Los documentos de esta carpeta desarrollan el caso, la arquitectura, el manual y análisis específicos; cada archivo conserva una función distinta. La referencia identifica el requisito; su cumplimiento se contrasta con los archivos y resultados enlazados, no solamente con la existencia de la carpeta.

## Qué contiene y en qué formato

| Archivo o carpeta | Formato | Qué contiene y qué hacer con él |
|---|---|---|
| [01_Caso_actual_Jorge_Valencia.md](01_Caso_actual_Jorge_Valencia.md) | Markdown (.md) | Empresa, usuario de RH, objetivo, alcance y KPI del escenario ficticio. |
| [Actions_evidencia_Jorge_Valencia.md](Actions_evidencia_Jorge_Valencia.md) | Markdown (.md) | Enlaces a fallo controlado de publicación y recuperación histórica. |
| [Arquitectura_Jorge_Valencia.md](Arquitectura_Jorge_Valencia.md) | Markdown (.md) | Diagrama Mermaid y explicación de componentes, datos y límites de acceso. |
| [Manual_instalacion_Jorge_Valencia.md](Manual_instalacion_Jorge_Valencia.md) | Markdown (.md) | Instalación paso a paso, tablas, credenciales, importación, publicación y recuperación. |
| [P11_Skills_loops_Jorge_Valencia.md](P11_Skills_loops_Jorge_Valencia.md) | Markdown (.md) | Carga/reutilización de skills, corrección V1→V2, costos y autoevaluación asistida. |
| [Uso_IA_y_licencias_Jorge_Valencia.md](Uso_IA_y_licencias_Jorge_Valencia.md) | Markdown (.md) | Herramientas de IA utilizadas, atribución de recursos y licencia de fuente. |

## Cómo utilizarlo

Comenzar por el caso; seguir el diagrama para identificar dónde corre cada componente y después el manual para importar/configurar. Para contrastar decisiones, abrir P11 y Actions.

## Entorno y configuración

No se ejecutan estos Markdown. Mermaid se representa como diagrama en GitHub; descargar el repositorio conserva su fuente.

## Validación y resultado esperado

La lectura debe permitir localizar tablas, credenciales y pasos sin tener que deducirlos del código.

## Relaciones con el proyecto

- [Guía general](../README.md): requisitos, instalación, inicio, credenciales, parada y solución de problemas.
- [Índice de evidencias](../evidencias/README.md): resultados y archivos relacionados.
- [Matriz de pruebas](../tests/pruebas.csv): entradas, esperados y resultados observados.

<!-- INICIO LECTURA SEMANTICA -->
## Lectura e interpretación de los archivos

Esta guía de lectura es una ayuda documental añadida por Jorge Valencia para revisión humana o asistida por IA. La guía del curso exige trazabilidad y reproducibilidad; no impone estas fichas ni convierte una descripción en prueba ejecutada. El archivo enlazado es la fuente; su README explica cómo interpretarlo, con procedencia, fecha y alcance.

Los Markdown son documentos explicativos: caso, arquitectura, manual, uso de IA y análisis de P11/Actions. Se distinguen afirmaciones de diseño de resultados observados enlazados. La arquitectura describe relaciones; el manual explica reproducción; las pruebas están en tests y evidencias, no se deducen del diagrama.
<!-- FIN LECTURA SEMANTICA -->

## Nomenclatura para el informe

Usar los [nombres documentales y su correspondencia técnica](../agentes/README.md#nombres-documentales-de-los-agentes): Kurt Lewin (Orquestador), Carl Rogers (Recepción), Jean Piaget (Consulta), Abraham Maslow (Propuesta), Daniel Kahneman (Revisión) y HR assistant BYD (canal de voz/texto). Mantener el rol técnico junto al nombre al citar nodos, contratos y trazas.
