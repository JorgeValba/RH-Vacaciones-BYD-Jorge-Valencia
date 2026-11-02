# RH Vacaciones BYD
Elaborado por: Jorge Valencia.

Asistente de Recursos Humanos para evaluar solicitudes de vacaciones sobre 15 empleados ficticios y tres equipos. n8n recibe Telegram, coordina cuatro especialistas, calcula saldo, cobertura y prima con reglas verificables y registra una decisión humana de prueba.

## Estado
Telegram, propuesta, aprobación y rechazo se probaron en n8n mediante pruebas manuales comunicadas por el responsable. Las pruebas completas y sus registros siguen en preparación. Este repositorio inicia con los skills y loops; todavía no contiene el sitio, la integración de voz ni el workflow de publicación.

Los skills cuentan con un adaptador local y una integración compilada preparada para n8n V2.2, pendiente de ejecución en la cuenta. Consultar docs/Integracion_skills_Jorge_Valencia.md. La presencia de archivos no acredita uso operativo por sí sola.

## Verificación local
Con Node.js: `node tests/skills.test.mjs`.
La prueba comprueba lectura de ambos skills, reutilización con dos identificadores sintéticos y rechazo de un identificador inválido. No llama a OpenAI, Telegram ni n8n.

## Controles
Operación SIMULADA, autorización en servidor, aprobación vinculada a folio/versión, deduplicación, control de escritura, límites de gasto y trazabilidad. Las exportaciones completas y credenciales permanecen privadas. No incorporar tokens, claves, listas de usuarios/chats ni conversaciones al repositorio.
