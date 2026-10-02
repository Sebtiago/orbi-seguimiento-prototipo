# Prototipo de usabilidad Seguimiento (ORBI)

## Context
Implementar el plan aprobado en `plans/quiero-convertir-las-pantallas-delightful-leaf.md`: prototipo navegable con capa de moderación tipo Maze (intro, 5 tareas, "Tarea finalizada", final, "Reiniciar prueba") y capa de producto con estado persistente (0 clientes y 0 recordatorios al inicio; Camila Rodríguez; Financiación → Lucas Financiación · Aprobado). Fiel a Figma `RhSaT6CdxjmQZxinR8PCNB` (397:20028, 397:24770, 397:29564, 397:25958) y `z4mgqLuGXMQSQeCY2azEJA`. Sin tooltips ni ayudas.

## Steps
1. Skills `figma-design-to-code`, luego `get_design_context` por nodo en paralelo (skillNames); copiar assets a `public/assets`; fuentes vía `<figma_imported_fonts>` en `src/index.css`; tokens teal ORBI en `@theme`.
2. `src/prototype/store.tsx` (context + reducer, sessionStorage, reset) y `data.ts`.
3. `src/prototype/TestLayer.tsx` (moderación) y `product/` (Sidebar, Agenda, Buscador, ProcessModal, ReminderModal, RemindersDrawer, Toast, LucasTransition, LucasSim).
4. Límite de 15 clientes, deshacer, duplicados; `src/App.tsx` monta provider + TestLayer.

## Verification
Recorrido completo en el preview: intro → T1…T5 → final; Deshacer, duplicado, límite 15, acciones del drawer, Reiniciar prueba.
