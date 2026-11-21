# Prueba aislada P09
Elaborado por: Jorge Valencia.

1. Crear un workflow nuevo y vacío en n8n. No importar encima del principal.
2. Menú de tres puntos → Import from File → Prueba_P09_limites_Jorge_Valencia.json.
3. No publicar: solo tiene inicio manual y tres nodos de código. No solicita credenciales.
4. Pulsar Execute workflow. Abrir Resumen de evidencia → Output → JSON.
5. Esperado: TRES_CONTROLES_APROBADOS, motivos de presupuesto y MAX_LLAMADAS en los dos bloqueos, permitido=true únicamente en el contraste dentro de límites. Ninguna generación real se ejecuta.
6. Exportar el JSON de salida con ID/fecha de ejecución para la matriz. Conservar fallas, si las hay.

Se ejecuta literalmente el código Control de presupuesto del subworkflow exportado, dentro de un adaptador que entrega entradas sintéticas. Conteo supuesto: 1,000 tokens de entrada; salida máxima 1,500; reserva USD 0.01625. Primer ensayo: tope USD 0.001. Segundo: seis generaciones previas sintéticas y máximo seis. Tercero: cero generaciones previas y tope USD 0.10. Los importes previos no son consumo ocurrido.

El código genera la decisión y su causa en la salida de la ejecución; no escribe rh_costos/rh_trazas. Esta prueba aísla el guardrail y no sustituye una prueba integral de persistencia, API caída, carga o facturación. No acreditar esos alcances con este resultado. La salida APROBADO expresa la aserción del ensayo, no aprobación de vacaciones.
