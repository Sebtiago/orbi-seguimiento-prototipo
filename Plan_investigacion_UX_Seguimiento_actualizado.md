# Plan de investigación UX - Seguimiento

## 1. Objetivo de investigación

Comprender cómo asesores comerciales y jefes de sala realizan hoy el seguimiento de clientes y negocios, y validar si la propuesta de **Seguimiento** responde de forma clara y útil a esas necesidades.

La investigación busca identificar si los usuarios comprenden y pueden utilizar el flujo de búsqueda, guardado, consulta de clientes y recordatorios; qué información necesitan para tomar decisiones; y qué diferencias deberían existir entre la experiencia del asesor y la del jefe de sala antes de avanzar a desarrollo.

---

## 2. Preguntas de investigación

1. ¿Cómo realizan actualmente los asesores el seguimiento de sus clientes entre plataformas y cómo deciden a cuáles prestar atención?

2. ¿Entienden los asesores el modelo de Seguimiento: **buscar clientes → guardarlos → consultar sus procesos → crear recordatorios → ir a gestionar a la plataforma correspondiente**?

3. ¿Qué valor aporta poder consultar en un solo lugar los estados de:
   - Leads
   - Cotización
   - Reserva
   - Retoma
   - Financiación
   - Seguro
   - Factura
   - Trámite
   - Entrega
   - App

4. ¿La información presentada es suficiente para que el asesor decida qué hacer y en qué plataforma continuar la gestión?

5. ¿Los asesores utilizarían una lista de clientes guardados y recordatorios como parte de su rutina real de seguimiento? ¿Cómo la utilizarían y con qué frecuencia?

6. ¿Cómo determinan los asesores cuándo volver a hacer seguimiento a un cliente y qué señales utilizan para priorizarlo?

7. ¿Qué necesita realmente un jefe de sala conocer sobre la operación de sus asesores: detalle de clientes, estados de negocios, tareas, pendientes o una visión agregada?

8. ¿Seguimiento se percibe como una herramienta que reduce esfuerzo y centraliza información o como una plataforma adicional que agrega trabajo?

---

## 3. Jobs-to-be-Done

| Job | Dimensión funcional | Dimensión emocional | Dimensión social |
|---|---|---|---|
| Cuando estoy gestionando varios clientes, quiero saber rápidamente qué necesita mi atención para organizar mi seguimiento sin depender de mi memoria. | Priorizar clientes, consultar procesos y recordar pendientes. | Sentir control sobre la cartera y reducir incertidumbre. | Verse organizado y confiable frente al cliente y al equipo. |
| Cuando necesito retomar un negocio, quiero entender qué ha pasado en sus diferentes procesos para decidir dónde intervenir. | Consultar estados y navegar a la plataforma correspondiente. | Sentirse seguro antes de contactar al cliente. | Dar una imagen de conocimiento integral del proceso. |
| Cuando superviso un equipo, quiero identificar dónde necesitan apoyo mis asesores para intervenir sin revisar cliente por cliente innecesariamente. | Identificar negocios, etapas, bloqueos y responsables. | Sentir visibilidad y control sobre la operación. | Liderar con información y no únicamente con reportes verbales. |

---

## 4. Métricas de validación

### Objetivo

Convertir los comportamientos, dificultades y percepciones observados durante las sesiones en señales comparables que permitan determinar qué aspectos de Seguimiento pueden mantenerse, cuáles necesitan iteración y cuáles requieren replantearse antes de avanzar a desarrollo.

Estas métricas no buscan medir velocidad ni eficiencia en segundos. Buscan identificar:

- comprensión del producto;
- autonomía durante el flujo;
- utilidad percibida;
- suficiencia de la información;
- intención de incorporar la herramienta a la rutina real de trabajo.

### 4.1. Métricas para asesores

#### 01. Comprensión del producto

**Pregunta que responde**

¿El asesor entiende qué es Seguimiento y para qué le puede servir?

**Escala**

- **Comprende:** entiende el propósito general sin explicación.
- **Comprende parcialmente:** reconoce algunas funciones, pero no construye el modelo completo.
- **No comprende:** interpreta un propósito diferente o necesita explicación directa.

#### 02. Autonomía en el flujo principal

**Pregunta que responde**

¿El asesor puede completar las acciones principales sin ayuda del moderador?

**Escala por tarea**

- **Sin ayuda**
- **Con ayuda**
- **No logrado**

#### 03. Comprensión y valor de clientes guardados

**Pregunta que responde**

¿El asesor entiende para qué sirve guardar clientes y encuentra un uso real para esta funcionalidad?

**Escala de valor**

- **Valor claro:** identifica espontáneamente situaciones concretas de uso.
- **Valor condicionado:** lo utilizaría solo en determinados casos.
- **Sin valor identificado:** preferiría buscar nuevamente cada cliente o no encuentra utilidad en guardar.

**Información adicional a registrar**

- Cantidad aproximada de clientes que mantendría guardados.
- Criterios para guardar clientes.
- Criterios para retirar clientes de la agenda.

#### 04. Comprensión de estados y suficiencia de información

**Pregunta que responde**

¿La información disponible permite al asesor comprender qué está pasando con el cliente?

**Escala**

- **Suficiente:** entiende la situación y cuenta con el contexto necesario.
- **Parcial:** entiende el estado general, pero necesita información adicional.
- **Insuficiente:** necesita entrar a otras plataformas solo para comprender qué ocurre.

#### 05. Accionabilidad de la información

**Pregunta que responde**

¿La información presentada permite decidir qué hacer después?

**Escala**

- **Puede decidir:** sabe qué hacer y hacia dónde dirigirse.
- **Duda:** identifica que debe actuar, pero necesita más información.
- **No puede decidir:** el estado mostrado no le permite definir una siguiente acción.

#### 06. Valor de los recordatorios

**Pregunta que responde**

¿Los recordatorios responden a una necesidad real dentro de la forma en que el asesor hace seguimiento?

**Escala de valor**

- **Valor claro**
- **Valor condicionado**
- **Sin valor identificado**

**Casos de uso emergentes**

Registrar para qué los utilizarían:

- volver a llamar a un cliente;
- confirmar documentos;
- revisar una respuesta;
- retomar una negociación;
- verificar un cambio de estado;
- otros.

#### 07. Cadencia de seguimiento

**Pregunta que responde**

¿Qué determina cuándo un asesor vuelve a revisar o contactar a un cliente?

**Resultado esperado**

Identificar patrones que permitan decidir si Seguimiento debe depender principalmente de recordatorios manuales o si en el futuro existen oportunidades para sugerencias, alertas o señales automáticas.

#### 08. Encaje en la rutina de trabajo

**Pregunta que responde**

¿El asesor identifica un momento real de su jornada en el que utilizaría Seguimiento?

**Escala**

- **Uso recurrente claro**
- **Uso ocasional**
- **No identifica un momento de uso**

#### 09. Valor global percibido

**Pregunta que responde**

¿Seguimiento simplifica la gestión actual o se percibe como una herramienta adicional?

**Escala**

- **Reduce esfuerzo**
- **No cambia significativamente el proceso**
- **Agrega esfuerzo**

**Evidencia a registrar**

La clasificación siempre debe estar acompañada por el motivo expresado por el participante.

### 4.2. Métricas para jefes de sala

#### 01. Nivel de información requerido

Identificar desde dónde comienza normalmente su lectura de la operación:

- cliente;
- negocio;
- asesor;
- etapa;
- cartera;
- visión agregada.

#### 02. Necesidad de detalle

Identificar cuándo necesita pasar de una visión general al detalle de un cliente o negocio.

**Registrar**

- qué situación dispara la revisión;
- qué información necesita antes de intervenir;
- qué nivel de detalle considera excesivo.

#### 03. Valor de los estados por plataforma

Identificar cuáles estados tienen valor real para la supervisión.

Clasificar cada plataforma como:

- **Necesaria para seguimiento**
- **Útil solo en algunos casos**
- **Demasiado operativa para el rol**

#### 04. Modelo de supervisión

Identificar qué señales utiliza el jefe de sala para saber que debe intervenir.

#### 05. Recordatorios vs. tareas

**Pregunta que responde**

¿Los recordatorios deberían seguir siendo una herramienta personal del asesor o existe una necesidad diferente de asignación y seguimiento desde el liderazgo?

Clasificar la expectativa del participante:

- **Recordatorios privados del asesor**
- **Recordatorios visibles para el jefe**
- **Necesidad de tareas asignables**
- **Modelo mixto**
- **No encuentra valor en esta funcionalidad**

#### 06. Valor de Seguimiento para el jefe de sala

Registrar qué pregunta espera poder responder rápidamente utilizando el producto.

---

# 5. Guía de sesión - 30 minutos

Por tratarse de una validación de prototipo bastante enfocada, se reducirá ligeramente la exploración contextual y se dedicará más tiempo a tareas observables dentro del producto.

| Bloque | Duración | Tiempo |
|---|---:|---:|
| Introducción | 3 min | 0:00 → 3:00 |
| Contexto actual | 5 min | 3:00 → 8:00 |
| Prueba del prototipo | 14 min | 8:00 → 22:00 |
| Valor y JTBD | 5 min | 22:00 → 27:00 |
| Cierre | 3 min | 27:00 → 30:00 |

---

# Guía para asesores

## Bloque 1 - Introducción

> Gracias por acompañarnos. Estamos trabajando en una nueva experiencia para apoyar el seguimiento de clientes y queremos entender cómo se adapta -o no- a la forma en la que realmente trabajas.
>
> No estamos evaluando qué tan bien utilizas una herramienta. Estamos evaluando el producto, así que si algo es confuso, difícil o no tiene sentido, eso nos ayuda.
>
> Durante la sesión voy a pedirte que realices algunas tareas en un prototipo. Te pediré que vayas diciendo en voz alta qué estás pensando, qué esperas que ocurra y qué te genera dudas.
>
> La sesión dura aproximadamente 30 minutos. La información se utilizará únicamente para mejorar el producto y no para evaluar tu desempeño.
>
> [Si se graba] ¿Estás de acuerdo con que grabemos esta sesión para poder revisar posteriormente los hallazgos?
>
> ¿Tienes alguna pregunta antes de comenzar?

---

## Bloque 2 - Contexto actual

### Preguntas

1. Pensando en esta semana, ¿cómo sabes hoy a qué clientes necesitas hacerles seguimiento?

2. Aproximadamente, ¿cuántos clientes o negocios puedes estar gestionando al mismo tiempo?

3. ¿Cómo decides cuáles clientes revisar primero?

4. Cuéntame la última vez que tuviste que averiguar: **“¿en qué va este cliente?”** ¿Qué hiciste?

5. ¿Después de cuánto tiempo normalmente vuelves a revisar o contactar un negocio?

---

## Bloque 3 - Prueba del prototipo

### Tarea 1 - Primera aproximación

> Sin hacer clic todavía, cuéntame qué crees que puedes hacer en esta pantalla.

#### Observar

- ¿Entiende “Mi agenda”?
- ¿Reconoce Recordatorios?
- ¿Comprende Mis clientes?
- ¿Identifica Buscar clientes?
- ¿Comprende que la agenda inicialmente está vacía?

### Después

> Si quisieras empezar a hacer seguimiento a uno de tus clientes, ¿qué harías?

#### Éxito esperado

El usuario descubre **Buscar clientes** sin ayuda.

#### Si falla

No corregir inmediatamente. Preguntar:

> ¿Qué esperarías encontrar aquí para saber cómo empezar?

---

### Tarea 2 - Buscar y guardar un cliente

#### Escenario

> Imagina que quieres hacer seguimiento a Camila Rodríguez. Encuéntrala y déjala disponible en tu agenda para consultarla fácilmente después.

#### Observar

- Encuentra Buscar clientes.
- Entiende el campo de búsqueda.
- Entiende que debe presionar Buscar.
- Identifica el resultado correcto.
- Descubre la acción Guardar.
- Comprende qué significa guardar.
- Entiende dónde debería aparecer luego.

#### Preguntas después de terminar

> ¿Qué entiendes que pasó cuando guardaste a Camila?

> ¿Qué esperas encontrar ahora cuando vuelvas a Mi agenda?

### Pregunta clave

> En tu trabajo real, ¿guardarías clientes así o normalmente preferirías buscarlos cada vez que los necesitas?

#### Sondeos

- ¿A cuántos guardarías aproximadamente?
- ¿Qué clientes merecerían estar guardados?
- ¿Cuándo quitarías uno?

> **Nota para investigación:** esta pregunta valida una de las hipótesis estructurales más importantes del producto.

---

### Tarea 3 - Comprender estados del cliente

#### Escenario

> Ahora imagina que Camila te contacta y quiere saber cómo va su proceso. Utiliza la información disponible para entender qué está pasando.

#### No decir

> “Mira la financiación”.

Dejar que el participante explore libremente.

#### Observar

- Cómo interpreta la matriz.
- Qué columna revisa primero.
- Si entiende los estados.
- Si identifica ausencia de proceso.
- Si entiende que las plataformas representan frentes diferentes del negocio.

#### Preguntar al terminar

> Con lo que estás viendo, ¿qué podrías decirle al cliente?

> ¿Qué información te hace falta para sentir que realmente entiendes su situación?

> ¿Hay información aquí que para ti sea innecesaria?

---

### Tarea 4 - Decidir dónde gestionar

#### Escenario

> Ves que hay algo en este cliente que requiere que continúes la gestión. ¿Qué harías desde aquí?

#### Éxito esperado

El participante comprende que Seguimiento informa sobre el proceso y que debe dirigirse a la plataforma especializada para continuar la gestión.

#### Preguntar después

> Antes de entrar a esa plataforma, ¿la información que viste aquí fue suficiente para decidir que necesitabas hacerlo?

> ¿Qué dato necesitarías ver aquí para evitar entrar solo a “averiguar qué pasa”?

### Pregunta crítica

El objetivo es descubrir cuánto contexto necesita entregar Seguimiento antes de que el usuario deba saltar a otra plataforma.

Queremos evitar que la experiencia sea únicamente:

**estado → abrir otra plataforma**

---

### Tarea 5 - Crear un recordatorio

#### Escenario

> Decides que no necesitas hacer nada hoy, pero quieres revisar nuevamente este cliente más adelante. Déjate un recordatorio para hacerlo.

#### Observar

- Descubre la creación de recordatorio.
- Entiende la asociación con el cliente.
- Entiende la plataforma.
- Entiende la fecha y hora.
- Sabe qué escribir.
- Entiende dónde verá el recordatorio después.

#### Preguntar

> ¿Para qué situaciones reales utilizarías este recordatorio?

> ¿Con qué frecuencia crees que crearías uno?

> ¿Qué determinaría la fecha que pondrías?

> ¿Qué tendría que pasar para que este recordatorio realmente te resulte útil y no termine siendo otra lista que ignoras?

> **Nota para investigación:** esta última pregunta es especialmente importante para entender el valor real de Recordatorios.

---

## Bloque 4 - Valor del producto y JTBD

**Duración: 5 minutos**

1. Comparando esta experiencia con cómo trabajas hoy, ¿en qué parte crees que realmente te ayudaría?

2. ¿En qué parte crees que no te ayudaría o te agregaría trabajo?

3. Si mañana tuvieras acceso a esta herramienta, ¿en qué momento de tu jornada crees que la abrirías?

4. Si tuvieras que explicarle a otro asesor para qué sirve esta herramienta, ¿cómo se lo explicarías?

   > **Nota para investigación:** esta pregunta permite evaluar el modelo mental que construyó el participante sobre el producto.

5. De todo lo que viste, ¿qué sería indispensable para ti y qué podríamos quitar sin afectar tu trabajo?

---

## Bloque 5 - Cierre

**Duración: 3 minutos**

> Si pudieras cambiar una sola cosa de esta herramienta, ¿qué cambiarías?

> ¿Hay algo más sobre cómo haces seguimiento de tus clientes que no hayamos hablado y que creas que deberíamos entender?

> Gracias por tu tiempo. Estamos realizando estas sesiones antes de avanzar al desarrollo para identificar qué debemos mantener, cambiar o eliminar. Tus respuestas se analizarán junto con las de otros participantes y no se utilizarán para evaluar tu trabajo.

---

# 6. Guía para jefes de sala

Los primeros minutos de la sesión pueden mantenerse iguales a los de los asesores. Después, el foco cambia hacia supervisión, acompañamiento del equipo y nivel de información necesario.

## Contexto actual

### Preguntas

1. ¿Cómo sabes hoy qué está pasando con los negocios de tus asesores?

2. ¿En qué situaciones necesitas revisar un cliente específico?

3. ¿Qué información revisas habitualmente con tus asesores?

4. Cuando detectas que algo necesita atención, ¿qué haces?

5. ¿Cómo manejan hoy compromisos, pendientes o tareas entre tú y los asesores?

---

## Mostrar el prototipo del asesor

Introducirlo así:

> Esta es una propuesta pensada inicialmente para el asesor. Quiero que la observes desde tu rol, no que imagines que necesariamente esta será tu pantalla.

Luego pedir:

> Cuéntame qué información de esta vista te sería útil a ti como jefe de sala y qué información consideras demasiado detallada para tu rol.

Evitar preguntar directamente:

> “¿Te gustaría esta pantalla?”

---

## Temas específicos para jefe de sala

### 1. Nivel de detalle

> Cuando quieres saber cómo va la operación, ¿necesitas revisar cliente por cliente o normalmente necesitas empezar desde algo más agregado?

#### Sondeos

- ¿Por asesor?
- ¿Por etapa?
- ¿Por negocio?
- ¿Por tiempo sin gestión?
- ¿Por plataforma?
- ¿Por marca?

---

### 2. Estados de plataformas

> ¿Qué valor tendría para ti ver directamente el estado de Leads, Cotización, Financiación, Seguros, Retomas y Trámites?

> ¿En qué situaciones sí entrarías a revisar ese detalle?

> ¿Hay estados que deberían llamarte la atención automáticamente?

---

### 3. Recordatorios vs. tareas

Este tema debe explorarse de forma especialmente neutral.

#### No preguntar

> “¿Te gustaría asignar recordatorios?”

#### Preguntar

> Cuando necesitas que un asesor haga seguimiento a un cliente, ¿cómo lo manejas hoy?

Después:

> ¿Qué diferencia ves entre un recordatorio personal del asesor y una tarea o compromiso que tú le asignas?

Y:

> ¿Crees que estos recordatorios deberían ser privados del asesor, visibles para ti, o depende de la situación? ¿Por qué?

### Hallazgo potencial a explorar

Esta conversación puede evidenciar que existen dos objetos diferentes:

- **Recordatorio personal:** herramienta de organización individual del asesor.
- **Tarea asignada:** compromiso generado desde un rol de liderazgo o supervisión.

No asumir que ambos deben convertirse en el mismo componente.

---

### 4. Valor real para el jefe de sala

> Si tuvieras acceso a una herramienta como esta, ¿qué pregunta debería permitirte responder en menos de un minuto?

> ¿Qué información no debería faltar para poder responder esa pregunta?

> ¿Qué información del prototipo del asesor quitarías de tu versión?

> ¿Qué agregarías?

> **Nota para investigación:** esta puede ser una de las preguntas más valiosas para definir posteriormente la experiencia específica de jefe de sala.

---

### 5. Supervisión vs. gestión

> ¿Tu necesidad principal es entender el detalle del cliente o entender cómo está funcionando la cartera de cada asesor?

> ¿Cuándo bajas del panorama general al detalle de un negocio?

> ¿Qué situación hace que necesites intervenir?

Estas respuestas ayudarán a determinar si la experiencia de jefe de sala debería partir del cliente individual o de una visión agregada de la operación.
