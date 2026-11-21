# Loops de calidad y seguridad
Elaborado por: Jorge Valencia.

## Referencia a la Guía del estudiante

De acuerdo con la **Guía del estudiante, página 7**, se pide definir dos loops con responsables, criterios, retorno, iteraciones, tiempo y presupuesto, y demostrar corrección V1 fallida a V2 validada.

LOOPS.md reúne las reglas; los enlaces identifican la corrección histórica y las cargas de skills sin atribuirles una ejecución común inexistente. La referencia identifica el requisito; su cumplimiento se contrasta con los archivos y resultados enlazados, no solamente con la existencia de la carpeta.

## Qué contiene y en qué formato

| Archivo o carpeta | Formato | Qué contiene y qué hacer con él |
|---|---|---|
| [LOOPS.md](LOOPS.md) | Markdown (.md) | Dos loops con entrada, secuencia, responsable, retorno, máximos y salida. |

## Cómo utilizarlo

Leer LOOPS.md y localizar las ramas descritas en 01_principal y 02_llm. Se recrean importando los workflows de n8n, no cargando LOOPS.md como automatización.

## Entorno y configuración

Las ramas se ejecutan en n8n; Markdown documenta sus reglas y JSON/CSV de evidencias conservan sus resultados.

## Validación y resultado esperado

Contrastar propuesta V1, revisión negativa, V2 y revisión positiva del mismo caso. En seguridad, distinguir límites configurados, trazas y ensayo aislado.

## Relaciones con el proyecto

- [Guía general](../README.md): requisitos, instalación, inicio, credenciales, parada y solución de problemas.
- [Índice de evidencias](../evidencias/README.md): resultados y archivos relacionados.
- [Matriz de pruebas](../tests/pruebas.csv): entradas, esperados y resultados observados.
