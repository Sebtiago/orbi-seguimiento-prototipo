# Prototipo de usabilidad: Seguimiento (ORBI)

## Contexto
Convertir las pantallas de Seguimiento (Figma `RhSaT6CdxjmQZxinR8PCNB`, nodos 397:20028 drawer Recordatorios, 397:24770, 397:29564, 397:25958 + referencias `z4mgqLuGXMQSQeCY2azEJA`) en un solo prototipo navegable con capa de moderación tipo Maze y estado persistente. Sin rediseño: se conserva sidebar, tipografía Poppins/Inter, colores teal ORBI, tablas, modales, drawers y botones.

## Pasos
1. **Contexto de diseño**: descargar el archivo `design_context.zip` de cada nodo (llamadas `get_design_context` en paralelo), copiar `assets/` a `public/assets/`, resolver las fuentes de `<figma_imported_fonts>` con `figma fonts resolve` → `public/fonts`, y declarar `@font-face` en `src/index.css` (después de `@import 'tailwindcss'`). Tokens (teal, #151A36, sombras) van en `@theme`.
2. **Estado** `src/prototype/store.tsx`: context + reducer con `phase` (intro | taskIntro | task | taskDone | end), `taskIndex`, `view` (agenda | buscador | lucasTransition | lucasSim), `tracked[]`, `reminders[]`, `query`/`results`/`hasSearched`, `toast`. Persistencia en `sessionStorage`; `reset()` vuelve al estado inicial.
3. **Datos** `src/prototype/data.ts`: 5 clientes (Camila Rodríguez + 4 con "Camila"/otros), conteos por proceso (Leads, Cotización, Reserva, Retoma, Financiación, Seguro, Factura, Trámite); Camila: Leads/Cotización/Financiación activos; detalle Financiación = Lucas Financiación · Aprobado · Hoy 10:30 a. m. Filtros de búsqueda por nombre/cédula/teléfono, ejecutada solo al pulsar Buscar/Enter.
4. **Capa de test** `src/prototype/TestLayer.tsx`: pantalla inicial, 5 tarjetas de tarea (texto exacto del brief), "Tarea finalizada", pantalla final; botón discreto "Reiniciar prueba" (esquina). Detectores de completitud:
   - T1: entrar a Buscador.  T2: Camila en `tracked` (tras expirar toast/deshacer opcional → aparece "Tarea finalizada" al navegar o tras pocos segundos).
   - T3: abrir detalle Financiación (al iniciar, view=agenda). T4: volver de Lucas sim (vuelve con modal de Camila abierto). T5: recordatorio creado → final.
   Avance mediante un botón discreto "Finalizar tarea" del moderador además de la detección automática.
5. **Producto** (`src/prototype/product/`): `Sidebar` (Tu agenda, Buscador de clientes, sin destacar), `Agenda` (Recordatorios con empty state/tabla + botón "Crear recordatorio"; Clientes en seguimiento con empty state, "Puedes tener hasta 15…", contador "N de 15 clientes", tabla con celdas de proceso clicables), `Buscador` (estado de orientación, tabla de resultados con "Agregar a seguimiento"/"En seguimiento"), `ProcessModal`, `ReminderModal` (cliente, plataforma, fecha, hora, mensaje vacío; Crear deshabilitado hasta completar; modo editar/cambiar fecha), `RemindersDrawer` (tabs Activos/Completados, cards con menú: completar, editar, cambiar fecha y hora, eliminar), `Toast` (autocierre 5 s, acción Deshacer / Ver clientes en seguimiento), `LucasTransition` (1.5 s) y `LucasSim` ("Volver a Seguimiento").
6. **Límite 15**: si `tracked.length >= 15`, toast "Límite de clientes alcanzado" con acción a Tu agenda; para probarlo, opción oculta en el menú de moderador "Cargar 15 clientes" (no en la capa de producto). Retirar cliente desde menú de fila.
7. `src/App.tsx` monta `<PrototypeProvider><TestLayer/></PrototypeProvider>`.

## Verificación
Recorrido manual completo en el preview: intro → T1…T5 → final; probar Deshacer, duplicado bloqueado, límite 15, acciones del drawer y Reiniciar prueba. Comprobar que no quedan URLs de Figma remotas y que los assets en `public/assets` no están vacíos.
