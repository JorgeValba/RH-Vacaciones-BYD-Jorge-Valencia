# Integración de skills en RH Vacaciones BYD
Elaborado por: Jorge Valencia. Versión 2.2.

Los dos SKILL.md se compilan en el nodo Cargar skills versionados del workflow privado. Este nodo lee los archivos incluidos como una copia fija, valida su versión y huella de integridad FNV-1a y registra el SHA-256 de la fuente calculado durante la compilación. FNV-1a detecta modificaciones accidentales; no es un control criptográfico contra un atacante con permisos de edición del workflow. La autorización permanece en n8n.

Cada especialista recibe una selección de pasos del archivo según su rol. El adaptador registra versión, ruta, hash y modo snapshot_compilado. No hace peticiones a GitHub en cada caso; un cambio de SKILL.md requiere recompilar el export y probarlo. El contrato JSON de los especialistas permanece igual.

El subflujo de llamada controlada conserva la reserva previa de presupuesto y el conteo del prompt completo, incluidas las reglas añadidas. No se altera su ID ni se añade otro servicio. Las trazas de loop_seguridad y loop_calidad refieren a las mismas llamadas: no son costos nuevos que deban sumarse.

Estado: preparado para importar. No se afirma ejecución en la instancia de n8n hasta completar las pruebas. El adaptador local usa archivos de disco para permitir reproducir la carga; en n8n se usa la copia compilada, sin requerir acceso al disco del servidor.

No publicar la exportación privada completa: contiene referencias a credenciales, tablas y listas de acceso. Este repositorio solo contiene documentos sanitizados y el adaptador local.
