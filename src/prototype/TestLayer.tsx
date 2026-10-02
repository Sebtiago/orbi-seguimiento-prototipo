import { useEffect, useState, type ReactNode } from "react"
import { useProto } from "./store"
import { Agenda, Buscador, Sidebar, TopBar } from "./product/Pages"
import {
  ConfirmDelete,
  LucasTransition,
  ProcessModal,
  ReminderModal,
  RemindersDrawer,
  ReminderViewModal,
  ToastView,
} from "./product/Overlays"
import LucasSim from "./product/LucasFinanciacion"
import Perfil360 from "./product/Perfil360"
import { Button } from "./product/ui"
import { SessionLogModal } from "./product/SessionLog"

const TASKS = [
  "Hoy empiezas tu jornada y tu agenda está vacía. Quieres encontrar a un cliente para empezar a hacerle seguimiento. ¿Por dónde empezarías?",
  "Camila Rodríguez te acaba de contactar. Quieres tenerla en tu agenda de seguimiento.",
  "Quieres saber cómo va el proceso de financiación de Camila Rodríguez. Consulta cómo está.",
  "Necesitas revisar el detalle de la financiación en la plataforma externa. Ve allí para consultarlo.",
  "Le prometiste a Camila que la llamarías pronto. Deja un recordatorio para no olvidarlo y confirma que quedó en tu agenda.",
  "Quieres revisar todos los recordatorios de todos tus clientes guardados. Entra al listado completo y revisa cuáles están activos y cuáles vencidos.",
]
const LAST_TASK_INDEX = TASKS.length - 1

function Centered({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-full items-center justify-center bg-gradient-to-br from-orbi-soft via-white to-white p-6">
      <div className="w-full max-w-xl text-center">{children}</div>
    </div>
  )
}

const chip =
  "cursor-pointer whitespace-nowrap rounded-md border border-neutral-200 bg-white px-3 py-1.5 text-[11px] font-semibold text-chrome-muted shadow-xs transition-colors hover:border-orbi hover:text-orbi"

export default function TestLayer() {
  const { s, d } = useProto()
  const [showBrief, setShowBrief] = useState(true)
  const [nameDraft, setNameDraft] = useState(s.participantName)
  const [logOpen, setLogOpen] = useState(false)

  useEffect(() => {
    if (s.phase === "intro") setNameDraft(s.participantName)
  }, [s.phase, s.participantName])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.altKey && e.key.toLowerCase() === "l") {
        setLogOpen((v) => !v)
      }
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [])

  let content: ReactNode

  if (s.phase === "intro")
    content = (
      <Centered>
        <h1 className="text-3xl font-bold">Prueba de usabilidad</h1>
        <p className="mx-auto mt-4 max-w-md text-chrome-muted">
          Vas a realizar varias tareas en una herramienta para asesores
          comerciales. No hay respuestas correctas o incorrectas: queremos ver
          cómo la usas. Piensa en voz alta.
        </p>
        <div className="mx-auto mt-6 max-w-xs text-left">
          <label className="mb-1 block text-xs font-semibold text-ink">
            Tu nombre
          </label>
          <input
            value={nameDraft}
            onChange={(e) => setNameDraft(e.target.value)}
            placeholder="Escribe tu nombre"
            className="h-11 w-full rounded-lg border border-neutral-300 px-3 text-sm outline-none focus:border-orbi"
          />
        </div>
        <Button
          className="mt-6 h-12 px-10"
          disabled={!nameDraft.trim()}
          onClick={() => {
            d({ t: "setName", name: nameDraft.trim() })
            d({ t: "start" })
          }}
        >
          Comenzar
        </Button>
      </Centered>
    )
  else if (s.phase === "taskCard")
    content = (
      <Centered>
        <p className="text-sm font-semibold uppercase tracking-wider text-orbi">
          Tarea {s.taskIndex + 1} de {TASKS.length}
        </p>
        <p className="mt-4 text-xl font-medium leading-relaxed">
          {TASKS[s.taskIndex]}
        </p>
        <Button
          className="mt-8 h-12 px-10"
          onClick={() => d({ t: "beginTask" })}
        >
          Iniciar tarea
        </Button>
        <Reset />
      </Centered>
    )
  else if (s.phase === "done")
    content = (
      <Centered>
        <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-orbi text-2xl text-white">
          ✓
        </div>
        <h1 className="text-2xl font-bold">Tarea finalizada</h1>
        <Button className="mt-8 h-12 px-10" onClick={() => d({ t: "next" })}>
          {s.taskIndex >= LAST_TASK_INDEX ? "Terminar" : "Siguiente tarea"}
        </Button>
        {s.taskIndex >= LAST_TASK_INDEX && (
          <div className="mt-3">
            <button
              onClick={() => d({ t: "explore" })}
              className="cursor-pointer text-sm font-semibold text-orbi underline"
            >
              Seguir explorando Orbi Seguimiento
            </button>
          </div>
        )}
        <Reset />
      </Centered>
    )
  else if (s.phase === "end")
    content = (
      <Centered>
        <h1 className="text-3xl font-bold">¡Gracias por participar!</h1>
        <p className="mt-4 text-chrome-muted">
          Has completado la prueba. Tus respuestas nos ayudan a mejorar ORBI.
        </p>
        <div className="mt-4">
          <button
            onClick={() => d({ t: "explore" })}
            className="cursor-pointer text-sm font-semibold text-orbi underline"
          >
            Seguir explorando Orbi Seguimiento
          </button>
        </div>
        <Reset />
      </Centered>
    )
  else
    content = (
      <div className="flex h-full flex-col">
        <div className="shrink-0 border-b border-neutral-200 bg-neutral-50 px-5 py-3">
          {s.phase === "explore" ? (
            <div className="flex items-center gap-3">
              <span className="inline-flex shrink-0 items-center rounded-full bg-orbi-soft px-3 py-1.5 text-xs font-bold text-orbi">
                Explorando Orbi Seguimiento libremente
              </span>
              <div className="ml-auto flex items-center gap-2">
                <Reset inline />
              </div>
            </div>
          ) : (
            <>
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex shrink-0 items-center rounded-full bg-orbi-soft px-3 py-1.5 text-xs font-bold text-orbi">
                  Tarea {s.taskIndex + 1} de {TASKS.length}
                </span>
                <button
                  className={chip}
                  onClick={() => setShowBrief(!showBrief)}
                >
                  {showBrief ? "Ocultar instrucciones" : "Ver instrucciones"}
                </button>
                <div className="ml-auto flex items-center gap-2">
                  <button className={chip} onClick={() => d({ t: "fill" })}>
                    Cargar 15 clientes
                  </button>
                  <button className={chip} onClick={() => d({ t: "finish" })}>
                    Finalizar tarea
                  </button>
                  <Reset inline />
                </div>
              </div>
              {showBrief && (
                <p className="mt-2.5 text-sm leading-relaxed text-ink">
                  {TASKS[s.taskIndex]}
                </p>
              )}
            </>
          )}
        </div>
        <div className="relative flex min-h-0 flex-1 flex-col">
          {s.view !== "lucasSim" &&
            s.view !== "lucasTransition" &&
            s.view !== "perfil360" && <TopBar />}
          <div className="flex min-h-0 flex-1">
            {s.view !== "lucasSim" &&
              s.view !== "lucasTransition" &&
              s.view !== "perfil360" && <Sidebar />}
            <main className="min-w-0 flex-1 overflow-y-auto">
              {s.view === "agenda" && <Agenda />}
              {s.view === "buscador" && <Buscador />}
              {s.view === "lucasTransition" && <LucasTransition />}
              {s.view === "lucasSim" && <LucasSim />}
              {s.view === "perfil360" && <Perfil360 />}
            </main>
          </div>
          <ProcessModal />
          <RemindersDrawer />
          <ReminderViewModal />
          {s.reminderForm && (
            <ReminderModal key={s.reminderForm.editId ?? "new"} />
          )}
          <ConfirmDelete />
          <ToastView />
        </div>
      </div>
    )

  return (
    <>
      {content}
      {logOpen && <SessionLogModal onClose={() => setLogOpen(false)} />}
    </>
  )
}

function Reset({ inline }: { inline?: boolean }) {
  const { d } = useProto()
  return (
    <button
      onClick={() => d({ t: "reset" })}
      className={
        inline
          ? "cursor-pointer whitespace-nowrap rounded-md border border-neutral-200 bg-white px-3 py-1.5 text-[11px] font-semibold text-red-500 shadow-xs transition-colors hover:border-red-300 hover:bg-red-50"
          : "fixed right-4 bottom-3 cursor-pointer text-xs text-chrome-muted/60 underline hover:text-chrome-muted"
      }
    >
      Reiniciar prueba
    </button>
  )
}
