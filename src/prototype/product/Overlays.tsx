import { useEffect, useState } from "react"
import {
  PLATFORM_LABEL,
  PROCESSES,
  clientById,
  fmtDate,
  isOverdue,
  type Process,
  type Reminder,
} from "../data"
import { useProto } from "../store"
import {
  Button,
  CloseButton,
  DateField,
  DateTimeField,
  I,
  Icon,
  Modal,
} from "./ui"
import iconAlertDiamond from "../../assets/toast/icon-alert-diamond.svg"
import iconClose from "../../assets/toast/icon-close.svg"

export function ProcessModal() {
  const { s, d } = useProto()
  if (!s.modal) return null
  const c = clientById(s.modal.clientId)
  const p = s.modal.process
  const close = () => d({ t: "modal", v: null })
  const isFin = p === "Financiación"
  const platform = PLATFORM_LABEL[p]
  const count = Math.max(1, c.counts[p] ?? 1)
  const items = Array.from({ length: count }, (_, i) => i + 1)
  return (
    <Modal
      title={`Detalle de ${platform}`}
      onClose={close}
      width="max-w-[560px]"
    >
      <p className="mb-5 text-center text-sm text-chrome-muted">
        Selecciona el proceso que deseas gestionar. Te llevaremos a la
        plataforma correspondiente para que puedas continuar con la gestión de
        sus estados y actividades.
      </p>
      <div className="flex items-center justify-between gap-3 rounded-xl bg-neutral-50 p-4">
        <div>
          <div className="text-base font-bold text-ink">{c.name}</div>
          <div className="mt-1 text-xs text-chrome-muted">
            Número de documento{" "}
            <span className="font-semibold text-ink">CC {c.cc}</span>
          </div>
          <div className="text-xs text-chrome-muted">
            Número de celular{" "}
            <span className="font-semibold text-ink">{c.phone}</span>
          </div>
        </div>
        <Button
          className="h-9 shrink-0"
          onClick={() => d({ t: "nav", view: "perfil360" })}
        >
          Ir perfil 360
        </Button>
      </div>
      <div className="mt-4 space-y-3">
        {items.map((i) => (
          <div
            key={i}
            className="flex items-start justify-between gap-3 rounded-lg bg-neutral-50 p-4"
          >
            <div>
              <div className="text-sm font-bold text-ink">
                {p} {i}
              </div>
              <div className="text-xs font-semibold text-orbi">
                {isFin ? "Aprobado" : "Proceso de negociación"}
              </div>
              <div className="mt-1 text-xs text-chrome-muted">
                Última actualización: hoy 10:30 a. m.
              </div>
            </div>
            {isFin ? (
              <button
                onClick={() => d({ t: "nav", view: "lucasTransition" })}
                className="shrink-0 cursor-pointer text-xs font-semibold text-orbi hover:underline"
              >
                Ir a Lucas Financiación
              </button>
            ) : (
              <button
                onClick={() =>
                  d({
                    t: "toast",
                    v: { msg: `Esto te llevaría a ${platform}` },
                  })
                }
                className="shrink-0 cursor-pointer text-xs font-semibold text-orbi hover:underline"
              >
                Revisar en {platform}
              </button>
            )}
          </div>
        ))}
      </div>
      <div className="mt-6 flex justify-center">
        <Button
          variant="outline"
          onClick={() => d({ t: "form", v: { clientId: c.id, platform: p } })}
        >
          Crear recordatorio
        </Button>
      </div>
    </Modal>
  )
}

const field =
  "h-11 w-full rounded-lg border border-neutral-300 bg-white px-3 text-sm outline-none focus:border-orbi"
const TITLE_MAX = 16
const DESC_MAX = 30

export function ReminderModal() {
  const { s, d } = useProto()
  const edit = s.reminders.find((r) => r.id === s.reminderForm?.editId)
  const [clientId, setClientId] = useState(
    edit?.clientId ?? s.reminderForm?.clientId ?? "",
  )
  const [platform, setPlatform] = useState<Process | "">(
    edit?.platform ?? s.reminderForm?.platform ?? "",
  )
  const [date, setDate] = useState(edit?.date ?? "")
  const [time, setTime] = useState(edit?.time ?? "")
  const [title, setTitle] = useState(edit?.title ?? "")
  const [message, setMessage] = useState(edit?.message ?? "")
  if (!s.reminderForm) return null
  const c = clientId ? clientById(clientId) : null
  const ok = clientId && platform && date && time && title && message
  const save = () => {
    const r: Reminder = {
      id: edit?.id ?? `r${Date.now()}`,
      clientId,
      platform: platform as Process,
      date,
      time,
      title,
      message,
      done: edit?.done ?? false,
    }
    d({ t: "saveReminder", r })
  }
  const label = "mb-1 block text-xs font-semibold text-ink"
  const helper = (max: number) => (
    <p className="mt-1 text-[11px] text-chrome-muted">
      {max} caracteres máximo
    </p>
  )
  return (
    <Modal
      title={edit ? "Editar recordatorio" : "Creación de recordatorio"}
      onClose={() => d({ t: "form", v: null })}
      width="max-w-[520px]"
    >
      <div className="space-y-4">
        {c ? (
          <div className="rounded-xl bg-neutral-50 p-4">
            <div className="text-base font-bold text-ink">{c.name}</div>
            <div className="mt-1 text-xs text-chrome-muted">
              Número de documento{" "}
              <span className="font-semibold text-ink">CC {c.cc}</span>
            </div>
            <div className="text-xs text-chrome-muted">
              Número de celular{" "}
              <span className="font-semibold text-ink">{c.phone}</span>
            </div>
          </div>
        ) : (
          <div>
            <label className={label}>Cliente</label>
            <select
              value={clientId}
              onChange={(e) => setClientId(e.target.value)}
              className={field}
            >
              <option value="">Seleccionar</option>
              {s.tracked.map((id) => (
                <option key={id} value={id}>
                  {clientById(id).name}
                </option>
              ))}
            </select>
          </div>
        )}
        <div>
          <label className={label}>Plataforma</label>
          <select
            value={platform}
            onChange={(e) => setPlatform(e.target.value as Process)}
            className={field}
          >
            <option value="">Seleccionar</option>
            {PROCESSES.map((p) => (
              <option key={p}>{p}</option>
            ))}
          </select>
        </div>
        <div>
          <label className={label}>Fecha y hora del recordatorio*</label>
          <DateTimeField
            date={date}
            time={time}
            onChange={(d2, t2) => {
              setDate(d2)
              setTime(t2)
            }}
          />
        </div>
        <div>
          <label className={label}>Título del recordatorio*</label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value.slice(0, TITLE_MAX))}
            placeholder="Escribe"
            className={field}
          />
          {helper(TITLE_MAX)}
        </div>
        <div>
          <label className={label}>Descripción del recordatorio*</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value.slice(0, DESC_MAX))}
            rows={3}
            placeholder="Escribe"
            className={`${field} h-auto py-2`}
          />
          {helper(DESC_MAX)}
        </div>
      </div>
      <div className="mt-6 grid grid-cols-2 gap-3">
        <Button variant="outline" onClick={() => d({ t: "form", v: null })}>
          Cancelar
        </Button>
        <Button disabled={!ok} onClick={save}>
          {edit ? "Guardar cambios" : "Crear recordatorio"}
        </Button>
      </div>
    </Modal>
  )
}

const viewField = "rounded-lg border border-neutral-200 bg-neutral-50 px-3.5 py-2.5 text-sm text-ink"

export function ReminderViewModal() {
  const { s, d } = useProto()
  const r = s.reminders.find((x) => x.id === s.viewReminder)
  if (!r) return null
  const c = clientById(r.clientId)
  const close = () => d({ t: "viewReminder", v: null })
  const label = "mb-1 block text-xs font-semibold text-ink"
  return (
    <Modal onClose={close} width="max-w-[480px]">
      <div className="mt-2 mb-5 rounded-xl bg-gradient-to-r from-orbi-soft to-white px-5 py-4">
        <p className="text-lg font-bold text-ink">{c.name}</p>
        <p className="mt-1 text-xs text-chrome-muted">
          Número de documento <span className="font-semibold text-ink">CC {c.cc}</span>
        </p>
        <p className="text-xs text-chrome-muted">
          Número de celular <span className="font-semibold text-ink">{c.phone}</span>
        </p>
      </div>
      <div className="space-y-4">
        <div>
          <label className={label}>Plataforma</label>
          <p className={viewField}>{r.platform}</p>
        </div>
        <div>
          <label className={label}>Fecha y hora del recordatorio</label>
          <p className={viewField}>{fmtDate(r.date, r.time)}</p>
        </div>
        <div>
          <label className={label}>Descripción del recordatorio</label>
          <p className={`${viewField} min-h-[72px] whitespace-pre-wrap`}>
            {r.message || "—"}
          </p>
        </div>
      </div>
      <div className="mt-6 flex justify-center">
        <Button
          variant="outline"
          onClick={() => {
            close()
            d({ t: "form", v: { editId: r.id } })
          }}
        >
          Editar recordatorio
        </Button>
      </div>
    </Modal>
  )
}

function ReminderCard({ r }: { r: Reminder }) {
  const { d } = useProto()
  const [menu, setMenu] = useState(false)
  const c = clientById(r.clientId)
  const over = isOverdue(r)
  const bar = r.done ? "bg-emerald-600" : over ? "bg-red-500" : "bg-blue-500"
  const chip = r.done
    ? ["Completado", "bg-emerald-50 text-emerald-600"]
    : over
      ? ["Vencido", "bg-red-50 text-red-500"]
      : null
  const item =
    "w-full cursor-pointer rounded-md px-3 py-2 text-left text-xs font-semibold hover:bg-neutral-100"
  return (
    <div className="relative mb-4 overflow-visible rounded-xl bg-neutral-50 py-4 pl-6 pr-4 shadow-xs">
      <span className={`absolute inset-y-0 left-0 w-1.5 rounded-l-xl ${bar}`} />
      <div className="flex items-center gap-2">
        {chip && (
          <span
            className={`rounded-full px-3 py-1 text-[10px] font-semibold ${chip[1]}`}
          >
            {chip[0]}
          </span>
        )}
        <span className="rounded-full border border-orbi px-3 py-1 text-[10px] font-medium text-orbi">
          {r.platform}
        </span>
        <button
          aria-label="Opciones"
          onClick={() => setMenu(!menu)}
          className="ml-auto cursor-pointer text-orbi"
        >
          <Icon d={I.dots} />
        </button>
      </div>
      <p className="mt-2 text-[11px] text-chrome-muted">
        {fmtDate(r.date, r.time)}
      </p>
      <p className="text-2xl font-semibold text-chrome">{c.name}</p>
      <p className="text-xs">CC {c.cc}</p>
      <p className="text-xs">{c.phone}</p>
      {r.message && (
        <p className="mt-2 text-[11px] text-chrome-muted">{r.message}</p>
      )}
      {menu && (
        <div className="absolute right-4 top-12 z-10 w-52 rounded-lg border border-neutral-200 bg-white p-1 shadow-lg">
          {!r.done && (
            <button
              className={item}
              onClick={() => {
                d({ t: "patchReminder", id: r.id, p: { done: true } })
                setMenu(false)
              }}
            >
              Marcar como completado
            </button>
          )}
          <button
            className={item}
            onClick={() => {
              d({ t: "form", v: { editId: r.id } })
              setMenu(false)
            }}
          >
            Editar
          </button>
          <button
            className={item}
            onClick={() => {
              d({ t: "confirmDelete", v: r.id })
              setMenu(false)
            }}
          >
            Eliminar recordatorio
          </button>
        </div>
      )}
    </div>
  )
}

export function RemindersDrawer() {
  const { s, d } = useProto()
  const [tab, setTab] = useState<"a" | "c">("a")
  const [dateFilter, setDateFilter] = useState("")
  const [platformFilter, setPlatformFilter] = useState<Process | "">("")
  if (!s.drawer) return null
  const matches = (r: Reminder) =>
    (!dateFilter || r.date === dateFilter) &&
    (!platformFilter || r.platform === platformFilter)
  const active = s.reminders.filter(
    (r) => !r.done && !isOverdue(r) && matches(r),
  )
  const done = s.reminders.filter(
    (r) => (r.done || isOverdue(r)) && matches(r),
  )
  const list = tab === "a" ? active : done
  const tabCls = (on: boolean) =>
    `flex-1 cursor-pointer border-b-2 pb-2 text-xs font-semibold ${
      on ? "border-orbi text-orbi" : "border-neutral-200 text-ink"
    }`
  const label = "mb-1 block text-xs font-semibold text-ink"
  return (
    <div
      className="fixed inset-0 z-30 flex justify-end bg-ink/30 backdrop-blur-sm"
      onMouseDown={() => d({ t: "drawer", v: false })}
    >
      <aside
        className="h-full w-full max-w-[380px] overflow-y-auto bg-white p-7 shadow-xl"
        onMouseDown={(e) => e.stopPropagation()}
      >
        <CloseButton
          onClick={() => d({ t: "drawer", v: false })}
          className="ml-auto"
        />
        <h2 className="mt-2 text-center text-xl font-bold text-black">
          Recordatorios
        </h2>
        <p className="mt-3 text-center text-sm text-chrome-muted">
          Aquí puedes administrar los recordatorios que has creado para
          organizar y dar seguimiento a tu agenda.
        </p>
        <div className="mt-5 grid grid-cols-2 gap-3">
          <div>
            <label className={label}>Filtra por fecha</label>
            <DateField value={dateFilter} onChange={setDateFilter} />
          </div>
          <div>
            <label className={label}>Filtra por plataforma</label>
            <select
              value={platformFilter}
              onChange={(e) =>
                setPlatformFilter(e.target.value as Process | "")
              }
              className={field}
            >
              <option value="">Seleccionar</option>
              {PROCESSES.map((p) => (
                <option key={p}>{p}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="mt-6 flex">
          <button className={tabCls(tab === "a")} onClick={() => setTab("a")}>
            Activos{" "}
            <span className="ml-1 rounded-full bg-indigo-400 px-2 py-0.5 text-[10px] text-white">
              {active.length}
            </span>
          </button>
          <button className={tabCls(tab === "c")} onClick={() => setTab("c")}>
            Completados
          </button>
        </div>
        <div className="mt-5">
          {list.length === 0 ? (
            <p className="py-10 text-center text-sm text-chrome-muted">
              No hay recordatorios {tab === "a" ? "activos" : "completados"}
            </p>
          ) : (
            list.map((r) => <ReminderCard key={r.id} r={r} />)
          )}
        </div>
      </aside>
    </div>
  )
}

export function ConfirmDelete() {
  const { s, d } = useProto()
  if (!s.confirmDelete) return null
  return (
    <div className="fixed inset-0 z-50">
      <Modal
        title="Eliminar recordatorio"
        onClose={() => d({ t: "confirmDelete", v: null })}
      >
        <p className="mb-6 text-center text-sm text-chrome-muted">
          ¿Estás seguro que deseas eliminar este recordatorio?
        </p>
        <div className="grid grid-cols-2 gap-3">
          <Button
            variant="outline"
            onClick={() => d({ t: "confirmDelete", v: null })}
          >
            Cancelar
          </Button>
          <Button
            onClick={() => d({ t: "deleteReminder", id: s.confirmDelete! })}
          >
            Eliminar
          </Button>
        </div>
      </Modal>
    </div>
  )
}

export function ToastView() {
  const { s, d } = useProto()
  const t = s.toast
  useEffect(() => {
    if (!t) return
    const id = setTimeout(() => d({ t: "toast", v: null }), 5000)
    return () => clearTimeout(id)
  }, [t, d])
  if (!t) return null
  return (
    <div
      key={t.msg}
      className="fixed top-[68px] right-6 z-[60] flex w-[460px] items-start gap-4 rounded-2xl border border-neutral-200 bg-[#e6f6f6] p-4 shadow-[0_1px_1.5px_rgba(16,24,40,0.1),0_1px_1px_rgba(16,24,40,0.06)]"
    >
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl bg-white shadow-[0_1px_1.5px_rgba(16,24,40,0.1),0_1px_1px_rgba(16,24,40,0.06)]">
        <img src={iconAlertDiamond} alt="" className="h-5 w-5" />
      </span>
      <div className="flex min-w-0 flex-1 flex-col gap-2">
        <div className="flex items-center gap-3">
          <p className="flex-1 text-base leading-6 font-medium text-ink">{t.msg}</p>
          <button
            aria-label="Cerrar"
            onClick={() => d({ t: "toast", v: null })}
            className="flex shrink-0 cursor-pointer items-center justify-center rounded-lg p-2 hover:bg-black/5"
          >
            <img src={iconClose} alt="" className="h-[18px] w-[18px]" />
          </button>
        </div>
        <div className="h-[10px] w-full overflow-hidden rounded-full bg-white">
          <div className="h-full origin-left animate-[toast-progress_5s_linear_forwards] rounded-full bg-orbi" />
        </div>
        {t.action && (
          <div className="flex justify-end">
            <Button
              className="h-9"
              onClick={() =>
                t.action === "undo"
                  ? d({ t: "untrack", id: t.undoId! })
                  : d({ t: "nav", view: "agenda" })
              }
            >
              {t.actionLabel}
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}

export function LucasTransition() {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-4 text-chrome-muted">
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-orbi-soft border-t-orbi" />
      <p className="text-sm">Redirigiendo a Lucas Financiación…</p>
    </div>
  )
}

