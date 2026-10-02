import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  type Dispatch,
  type ReactNode,
} from "react"
import {
  ALL_CLIENTS,
  FILLER_CLIENTS,
  MAX_TRACKED,
  type Process,
  type Reminder,
} from "./data"

export type View =
  | "agenda"
  | "buscador"
  | "lucasTransition"
  | "lucasSim"
  | "perfil360"
export type Phase = "intro" | "taskCard" | "task" | "done" | "end" | "explore"
export interface Toast {
  msg: string
  action?: "undo" | "agenda"
  actionLabel?: string
  undoId?: string
}

export interface LogEntry {
  at: string
  event: string
  detail?: string
}

export const TASK_EVENTS = [
  "visitedBuscador",
  "addedCamila",
  "openedFin",
  "visitedLucas",
  "reminderCreated",
  "reviewedReminders",
]

const LAST_TASK = TASK_EVENTS.length - 1

function isoDaysFromNow(days: number, hh: number, mm: number) {
  const d = new Date()
  d.setDate(d.getDate() + days)
  const date = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`
  const time = `${String(hh).padStart(2, "0")}:${String(mm).padStart(2, "0")}`
  return { date, time }
}

function seedReminders(): Reminder[] {
  return [
    {
      id: "seed1",
      clientId: "camila",
      platform: "Financiación",
      ...isoDaysFromNow(0, 15, 0),
      title: "Confirmar docs",
      message: "Confirmar documentos pendientes",
      done: false,
    },
    {
      id: "seed2",
      clientId: "ana",
      platform: "Factura",
      ...isoDaysFromNow(1, 9, 30),
      title: "Validar oferta",
      message: "Validar oferta final con cliente",
      done: false,
    },
    {
      id: "seed3",
      clientId: "laura",
      platform: "Cotización",
      ...isoDaysFromNow(3, 11, 0),
      title: "Llamar cliente",
      message: "Llamar para confirmar propuesta",
      done: false,
    },
    {
      id: "seed4",
      clientId: "santiago",
      platform: "Cotización",
      ...isoDaysFromNow(-2, 8, 30),
      title: "Enviar simulación",
      message:
        "Enviar la simulación actualizada y validar si desea continuar con la solicitud",
      done: false,
    },
    {
      id: "seed5",
      clientId: "camilo",
      platform: "Leads",
      ...isoDaysFromNow(-4, 10, 30),
      title: "Compartir docs",
      message:
        "Compartir el listado final de documentos para radicar el estudio de crédito",
      done: true,
    },
  ]
}

export interface State {
  phase: Phase
  taskIndex: number
  pendingDone: boolean
  view: View
  tracked: string[]
  reminders: Reminder[]
  searched: string | null
  modal: { clientId: string; process: Process } | null
  drawer: boolean
  reminderForm: {
    editId?: string
    clientId?: string
    platform?: Process
  } | null
  confirmDelete: string | null
  viewReminder: string | null
  toast: Toast | null
  participantName: string
  log: LogEntry[]
}

export const initial: State = {
  phase: "intro",
  taskIndex: 0,
  pendingDone: false,
  view: "agenda",
  tracked: [],
  reminders: [],
  searched: null,
  modal: null,
  drawer: false,
  reminderForm: null,
  confirmDelete: null,
  viewReminder: null,
  toast: null,
  participantName: "",
  log: [],
}

export type Action =
  | { t: "reset" }
  | { t: "setName"; name: string }
  | { t: "start" }
  | { t: "beginTask" }
  | { t: "finish" }
  | { t: "next" }
  | { t: "explore" }
  | { t: "nav"; view: View }
  | { t: "search"; q: string | null }
  | { t: "track"; id: string }
  | { t: "untrack"; id: string }
  | { t: "fill" }
  | { t: "modal"; v: State["modal"] }
  | { t: "drawer"; v: boolean }
  | { t: "form"; v: State["reminderForm"] }
  | { t: "confirmDelete"; v: string | null }
  | { t: "viewReminder"; v: string | null }
  | { t: "saveReminder"; r: Reminder }
  | { t: "patchReminder"; id: string; p: Partial<Reminder> }
  | { t: "deleteReminder"; id: string }
  | { t: "toast"; v: Toast | null }

function logged(s: State, event: string, detail?: string): State {
  return {
    ...s,
    log: [...s.log, { at: new Date().toISOString(), event, detail }],
  }
}

function withEvent(s: State, ev: string): State {
  if (s.phase === "task" && TASK_EVENTS[s.taskIndex] === ev)
    return { ...s, pendingDone: true }
  return s
}

function reducer(s: State, a: Action): State {
  switch (a.t) {
    case "reset":
      return logged(
        { ...initial, log: s.log },
        "session_reset",
        s.participantName || undefined,
      )
    case "setName":
      return { ...s, participantName: a.name }
    case "start":
      return logged(
        { ...s, phase: "taskCard" },
        "session_start",
        s.participantName || undefined,
      )
    case "beginTask": {
      const i = s.taskIndex
      const isReminderReview = i === 5
      return logged(
        {
          ...s,
          phase: "task",
          pendingDone: false,
          toast: null,
          view: i === 1 ? "buscador" : "agenda",
          tracked: isReminderReview
            ? ["camila", "camila-r", "camilo", "ana", "laura", "santiago"]
            : s.tracked,
          reminders: isReminderReview ? seedReminders() : s.reminders,
          modal:
            i === 3 && s.tracked.includes("camila")
              ? { clientId: "camila", process: "Financiación" }
              : null,
          drawer: false,
          reminderForm: null,
          confirmDelete: null,
          viewReminder: null,
        },
        "task_start",
        `Tarea ${i + 1}`,
      )
    }
    case "finish":
      return logged(
        { ...s, phase: "done", pendingDone: false, toast: null },
        "task_complete",
        `Tarea ${s.taskIndex + 1}`,
      )
    case "next":
      return s.taskIndex >= LAST_TASK
        ? logged({ ...s, phase: "end" }, "session_end")
        : { ...s, phase: "taskCard", taskIndex: s.taskIndex + 1 }
    case "explore":
      return logged({ ...s, phase: "explore" }, "explore_start")
    case "nav": {
      const n = {
        ...s,
        view: a.view,
        modal: null,
        drawer: false,
        reminderForm: null,
        viewReminder: null,
        toast: null,
      }
      if (a.view === "buscador") return withEvent(n, "visitedBuscador")
      if (a.view === "lucasSim") return withEvent(n, "visitedLucas")
      return n
    }
    case "search":
      return { ...s, searched: a.q }
    case "track": {
      if (s.tracked.includes(a.id)) return s
      if (s.tracked.length >= MAX_TRACKED)
        return {
          ...s,
          toast: {
            msg: "Límite de clientes alcanzado. Retira un cliente de tu agenda para agregar otro.",
            action: "agenda",
            actionLabel: "Ir a Tu agenda",
          },
        }
      const n: State = {
        ...s,
        tracked: [...s.tracked, a.id],
        toast: {
          msg: `${ALL_CLIENTS.find((c) => c.id === a.id)!.name} se agregó a tu agenda.`,
          action: "undo",
          actionLabel: "Deshacer",
          undoId: a.id,
        },
      }
      return a.id === "camila" ? withEvent(n, "addedCamila") : n
    }
    case "untrack":
      return { ...s, tracked: s.tracked.filter((x) => x !== a.id), toast: null }
    case "fill":
      return {
        ...s,
        tracked: [
          ...new Set([...s.tracked, ...FILLER_CLIENTS.map((c) => c.id)]),
        ].slice(0, MAX_TRACKED),
      }
    case "modal": {
      const n = { ...s, modal: a.v }
      return a.v?.clientId === "camila" && a.v.process === "Financiación"
        ? withEvent(n, "openedFin")
        : n
    }
    case "drawer": {
      const n = { ...s, drawer: a.v }
      return a.v ? withEvent(n, "reviewedReminders") : n
    }
    case "form":
      return { ...s, reminderForm: a.v }
    case "confirmDelete":
      return { ...s, confirmDelete: a.v }
    case "viewReminder":
      return { ...s, viewReminder: a.v }
    case "saveReminder": {
      const exists = s.reminders.some((r) => r.id === a.r.id)
      const reminders = exists
        ? s.reminders.map((r) => (r.id === a.r.id ? a.r : r))
        : [...s.reminders, a.r]
      const n: State = {
        ...s,
        reminders,
        reminderForm: null,
        modal: null,
        toast: {
          msg: exists ? "Recordatorio actualizado" : "Recordatorio creado",
        },
      }
      return exists ? n : withEvent(n, "reminderCreated")
    }
    case "patchReminder":
      return {
        ...s,
        reminders: s.reminders.map((r) =>
          r.id === a.id ? { ...r, ...a.p } : r,
        ),
      }
    case "deleteReminder":
      return {
        ...s,
        reminders: s.reminders.filter((r) => r.id !== a.id),
        confirmDelete: null,
        toast: { msg: "Recordatorio eliminado" },
      }
    case "toast":
      return { ...s, toast: a.v }
  }
}

const KEY = "orbi-proto-v1"
const LOG_KEY = "orbi-proto-log-archive"

function logEntryKey(e: LogEntry) {
  return `${e.at}|${e.event}|${e.detail ?? ""}`
}

export function readLogArchive(): LogEntry[] {
  try {
    const raw = localStorage.getItem(LOG_KEY)
    const parsed: LogEntry[] = raw ? JSON.parse(raw) : []
    return [...parsed].sort((a, b) => a.at.localeCompare(b.at))
  } catch {
    return []
  }
}

function mergeIntoArchive(incoming: LogEntry[]): LogEntry[] {
  const existing = readLogArchive()
  const seen = new Set(existing.map(logEntryKey))
  const merged = [...existing]
  for (const e of incoming) {
    const key = logEntryKey(e)
    if (!seen.has(key)) {
      seen.add(key)
      merged.push(e)
    }
  }
  merged.sort((a, b) => a.at.localeCompare(b.at))
  try {
    localStorage.setItem(LOG_KEY, JSON.stringify(merged))
  } catch {
    // storage unavailable (private mode, quota) — archive stays session-only
  }
  return merged
}

const Ctx = createContext<{ s: State; d: Dispatch<Action> } | null>(null)

export function PrototypeProvider({ children }: { children: ReactNode }) {
  const [s, d] = useReducer(reducer, initial, (init) => {
    try {
      const raw = sessionStorage.getItem(KEY)
      return raw ? { ...init, ...JSON.parse(raw), toast: null } : init
    } catch {
      return init
    }
  })
  useEffect(() => {
    sessionStorage.setItem(KEY, JSON.stringify({ ...s, toast: null }))
  }, [s])
  useEffect(() => {
    if (s.log.length) mergeIntoArchive(s.log)
  }, [s.log])
  useEffect(() => {
    if (!s.pendingDone) return
    const t = setTimeout(() => d({ t: "finish" }), 1400)
    return () => clearTimeout(t)
  }, [s.pendingDone])
  useEffect(() => {
    if (s.view !== "lucasTransition") return
    const t = setTimeout(() => d({ t: "nav", view: "lucasSim" }), 1500)
    return () => clearTimeout(t)
  }, [s.view])
  return <Ctx.Provider value={{ s, d }}>{children}</Ctx.Provider>
}

export const useProto = () => useContext(Ctx)!
export const trackedClients = (s: State) =>
  s.tracked.map((id) => ALL_CLIENTS.find((c) => c.id === id)!)
