import {
  useEffect,
  useRef,
  useState,
  type ButtonHTMLAttributes,
  type ReactNode,
} from "react"
import { createPortal } from "react-dom"

export const Icon = ({
  d,
  size = 20,
  className = "",
}: {
  d: ReactNode
  size?: number
  className?: string
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    {d}
  </svg>
)

export const I = {
  calendar: (
    <>
      <rect x="3.5" y="5" width="17" height="15" rx="2.5" />
      <path d="M3.5 10h17M8 3v4M16 3v4" />
    </>
  ),
  search: (
    <>
      <circle cx="11" cy="11" r="6.5" />
      <path d="m16 16 4 4" />
    </>
  ),
  close: <path d="M6 6l12 12M18 6 6 18" />,
  dots: (
    <>
      <circle cx="12" cy="5" r="1.4" fill="currentColor" />
      <circle cx="12" cy="12" r="1.4" fill="currentColor" />
      <circle cx="12" cy="19" r="1.4" fill="currentColor" />
    </>
  ),
  chevron: <path d="m6 9 6 6 6-6" />,
  home: (
    <path d="M4 11 12 4l8 7v8.5a.5.5 0 0 1-.5.5H14v-6h-4v6H4.5a.5.5 0 0 1-.5-.5z" />
  ),
  gauge: (
    <>
      <path d="M4 16a8 8 0 1 1 16 0" />
      <path d="m12 16 4-5" />
    </>
  ),
  money: (
    <>
      <rect x="3" y="7" width="18" height="10" rx="2" />
      <circle cx="12" cy="12" r="2.2" />
    </>
  ),
  chat: (
    <path d="M5 5h14a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1h-8l-4 3.5V16H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1z" />
  ),
  list: <path d="M9 6h11M9 12h11M9 18h11M4.5 6h.01M4.5 12h.01M4.5 18h.01" />,
  key: (
    <>
      <circle cx="8" cy="12" r="3.5" />
      <path d="M11.5 12H21M18 12v3" />
    </>
  ),
  book: (
    <path d="M5 4h11a3 3 0 0 1 3 3v13H8a3 3 0 0 1-3-3zM5 17a3 3 0 0 1 3-3h11" />
  ),
  chart: <path d="M5 20V10M12 20V4M19 20v-7" />,
  user: (
    <>
      <circle cx="12" cy="8.5" r="3.5" />
      <path d="M5 20c.8-3.5 3.5-5 7-5s6.2 1.5 7 5" />
    </>
  ),
  check: <path d="m5 12.5 4.5 4.5L19 7.5" />,
  external: (
    <path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5" />
  ),
  plus: <path d="M12 5v14M5 12h14" />,
  bell: (
    <>
      <path d="M6 8a6 6 0 0 1 12 0c0 4 1.5 5.5 1.5 5.5H4.5S6 12 6 8z" />
      <path d="M10 19a2 2 0 0 0 4 0" />
    </>
  ),
  grip: (
    <>
      <circle cx="9" cy="6" r="1.3" fill="currentColor" />
      <circle cx="9" cy="12" r="1.3" fill="currentColor" />
      <circle cx="9" cy="18" r="1.3" fill="currentColor" />
      <circle cx="15" cy="6" r="1.3" fill="currentColor" />
      <circle cx="15" cy="12" r="1.3" fill="currentColor" />
      <circle cx="15" cy="18" r="1.3" fill="currentColor" />
    </>
  ),
  chevronLeft: <path d="m15 6-6 6 6 6" />,
  chevronRight: <path d="m9 6 6 6-6 6" />,
  info: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 11v5M12 8h.01" />
    </>
  ),
  userCircle: (
    <>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="10" r="3" />
      <path d="M6.5 19c.8-2.6 2.9-4 5.5-4s4.7 1.4 5.5 4" />
    </>
  ),
  users: (
    <>
      <circle cx="9" cy="8" r="3" />
      <circle cx="16.5" cy="9.5" r="2.3" />
      <path d="M3 20c.6-3 2.8-4.5 6-4.5s5.6 1.6 6 4.5M14.3 15.2c2.6.2 4.3 1.5 5.1 3.6" />
    </>
  ),
  fileText: (
    <>
      <rect x="5" y="3" width="14" height="18" rx="2" />
      <path d="M8 8h8M8 12h8M8 16h5" />
    </>
  ),
  smile: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M8.5 10h.01M15.5 10h.01M8 15c1 1.2 2.4 1.8 4 1.8s3-.6 4-1.8" />
    </>
  ),
  shield: <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z" />,
  refresh: (
    <>
      <path d="M4 4v5h5" />
      <path d="M20 20v-5h-5" />
      <path d="M5 15a8 8 0 0 0 14 3M19 9A8 8 0 0 0 5 6" />
    </>
  ),
  tag: (
    <>
      <path d="M3 11l8-8h6a2 2 0 0 1 2 2v6l-8 8a2 2 0 0 1-2.8 0l-5.2-5.2a2 2 0 0 1 0-2.8z" />
      <circle cx="14.5" cy="9.5" r="1.1" fill="currentColor" />
    </>
  ),
  wrench: (
    <path d="M14.5 6.5a4 4 0 0 1-5.4 5.4L4 17l3 3 5.1-5.1a4 4 0 0 1 5.4-5.4l-2 2-2-2z" />
  ),
  folder: (
    <path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </>
  ),
  bulb: (
    <path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2.1h5c0-.9.4-1.6 1-2.1A6 6 0 0 0 12 3z" />
  ),
  headset: (
    <>
      <path d="M4 13v-1a8 8 0 0 1 16 0v1" />
      <rect x="3" y="13" width="4" height="6" rx="1.5" />
      <rect x="17" y="13" width="4" height="6" rx="1.5" />
    </>
  ),
  logout: (
    <>
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
      <path d="M16 17l5-5-5-5M21 12H9" />
    </>
  ),
}

export function Button({
  variant = "primary",
  className = "",
  ...p
}: ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "outline" | "ghost"
}) {
  const base =
    "inline-flex h-10 items-center justify-center gap-2 rounded-lg px-5 text-sm font-semibold transition-colors disabled:cursor-not-allowed disabled:opacity-40 cursor-pointer"
  const v = {
    primary: "bg-orbi text-white hover:bg-orbi-dark",
    outline: "border border-orbi bg-white text-orbi hover:bg-orbi-soft",
    ghost: "text-orbi hover:bg-orbi-soft",
  }[variant]
  return <button {...p} className={`${base} ${v} ${className}`} />
}

export function CloseButton({
  onClick,
  className = "",
}: {
  onClick: () => void
  className?: string
}) {
  return (
    <button
      aria-label="Cerrar"
      onClick={onClick}
      className={`flex h-8 w-8 shrink-0 cursor-pointer items-center justify-center rounded-md border border-orbi text-orbi hover:bg-orbi-soft ${className}`}
    >
      <Icon d={I.close} size={14} />
    </button>
  )
}

export function Modal({
  title,
  children,
  onClose,
  width = "max-w-[460px]",
}: {
  title?: string
  children: ReactNode
  onClose: () => void
  width?: string
}) {
  return (
    <div
      className="fixed inset-0 z-40 flex items-center justify-center bg-ink/30 p-4 backdrop-blur-sm"
      onMouseDown={onClose}
    >
      <div
        className={`relative w-full ${width} rounded-2xl bg-white p-8 shadow-[0_25px_25px_rgba(0,0,0,0.15)]`}
        onMouseDown={(e) => e.stopPropagation()}
      >
        <CloseButton onClick={onClose} className="absolute right-5 top-5" />
        {title && (
          <h2 className="mb-4 text-center text-xl font-bold text-black">
            {title}
          </h2>
        )}
        {children}
      </div>
    </div>
  )
}

export function EmptyState({
  icon,
  title,
  subtitle,
  height,
}: {
  icon: ReactNode
  title: string
  subtitle: string
  height?: string
}) {
  return (
    <div className={`flex w-full flex-col items-center justify-center gap-2 px-20 py-4 text-center ${height ?? ""}`}>
      <span className="flex h-[34px] w-[34px] items-center justify-center rounded-full bg-[#f8f9fb] text-orbi">
        {icon}
      </span>
      <p className="text-3xl leading-[38px] font-bold text-[#29272b]">{title}</p>
      <p className="max-w-[620px] text-xs leading-[18px] text-[#68666b]">{subtitle}</p>
    </div>
  )
}

export function useClickOutside<T extends HTMLElement>(onOutside: () => void) {
  const ref = useRef<T>(null)
  useEffect(() => {
    const h = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) onOutside()
    }
    document.addEventListener("mousedown", h)
    return () => document.removeEventListener("mousedown", h)
  }, [onOutside])
  return ref
}

export function ActionMenu({
  items,
  align = "right",
}: {
  items: { label: string; onClick: () => void; danger?: boolean }[]
  align?: "left" | "right"
}) {
  const [open, setOpen] = useState(false)
  const [pos, setPos] = useState({ top: 0, left: 0 })
  const btnRef = useRef<HTMLButtonElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    const place = () => {
      const r = btnRef.current?.getBoundingClientRect()
      if (!r) return
      setPos({
        top: r.bottom + 4,
        left: align === "right" ? r.right - 224 : r.left,
      })
    }
    place()
    const h = (e: MouseEvent) => {
      const t = e.target as Node
      if (btnRef.current?.contains(t) || menuRef.current?.contains(t)) return
      setOpen(false)
    }
    document.addEventListener("mousedown", h)
    window.addEventListener("scroll", place, true)
    window.addEventListener("resize", place)
    return () => {
      document.removeEventListener("mousedown", h)
      window.removeEventListener("scroll", place, true)
      window.removeEventListener("resize", place)
    }
  }, [open, align])

  return (
    <>
      <button
        ref={btnRef}
        aria-label="Más acciones"
        onClick={() => setOpen(!open)}
        className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-md text-chrome-muted hover:bg-neutral-100 hover:text-ink"
      >
        <Icon d={I.dots} size={18} />
      </button>
      {open &&
        createPortal(
          <div
            ref={menuRef}
            style={{ top: pos.top, left: pos.left }}
            className="fixed z-50 w-56 rounded-lg border border-neutral-200 bg-white p-1 shadow-lg"
          >
            {items.map((it, i) => (
              <button
                key={i}
                onClick={() => {
                  setOpen(false)
                  it.onClick()
                }}
                className={`w-full cursor-pointer rounded-md px-3 py-2 text-left text-xs font-semibold hover:bg-neutral-100 ${
                  it.danger ? "text-red-600" : "text-ink"
                }`}
              >
                {it.label}
              </button>
            ))}
          </div>,
          document.body,
        )}
    </>
  )
}

const WEEKDAYS = ["Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sa"]
const MONTH_NAMES = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
]

function MiniCalendar({
  value,
  onSelect,
}: {
  value: string
  onSelect: (iso: string) => void
}) {
  const init = value ? new Date(value + "T00:00:00") : new Date()
  const [cursor, setCursor] = useState(
    new Date(init.getFullYear(), init.getMonth(), 1),
  )
  const first = new Date(cursor.getFullYear(), cursor.getMonth(), 1)
  const startOffset = first.getDay()
  const daysInMonth = new Date(
    cursor.getFullYear(),
    cursor.getMonth() + 1,
    0,
  ).getDate()
  const cells = [
    ...Array(startOffset).fill(null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ]
  const iso = (day: number) =>
    `${cursor.getFullYear()}-${String(cursor.getMonth() + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`
  return (
    <div>
      <div className="mb-2 flex items-center justify-between">
        <button
          type="button"
          onClick={() =>
            setCursor(new Date(cursor.getFullYear(), cursor.getMonth() - 1, 1))
          }
          className="flex h-7 w-7 cursor-pointer items-center justify-center rounded-md text-chrome-muted hover:bg-neutral-100"
        >
          <Icon d={I.chevronLeft} size={16} />
        </button>
        <span className="text-sm font-semibold text-ink">
          {MONTH_NAMES[cursor.getMonth()]} {cursor.getFullYear()}
        </span>
        <button
          type="button"
          onClick={() =>
            setCursor(new Date(cursor.getFullYear(), cursor.getMonth() + 1, 1))
          }
          className="flex h-7 w-7 cursor-pointer items-center justify-center rounded-md text-chrome-muted hover:bg-neutral-100"
        >
          <Icon d={I.chevronRight} size={16} />
        </button>
      </div>
      <div className="grid grid-cols-7 gap-1 text-center text-xs text-chrome-muted">
        {WEEKDAYS.map((w) => (
          <span key={w} className="py-1 font-semibold">
            {w}
          </span>
        ))}
        {cells.map((day, i) => {
          if (day === null) return <span key={i} />
          const d = iso(day)
          const selected = d === value
          return (
            <button
              type="button"
              key={i}
              onClick={() => onSelect(d)}
              className={`flex h-8 w-8 cursor-pointer items-center justify-center rounded-full text-sm ${
                selected
                  ? "bg-orbi font-semibold text-white"
                  : "text-ink hover:bg-orbi-soft"
              }`}
            >
              {day}
            </button>
          )
        })}
      </div>
    </div>
  )
}

export function DateField({
  value,
  onChange,
  placeholder = "Seleccionar",
}: {
  value: string
  onChange: (iso: string) => void
  placeholder?: string
}) {
  const [open, setOpen] = useState(false)
  const ref = useClickOutside<HTMLDivElement>(() => setOpen(false))
  const label = value
    ? new Date(value + "T00:00:00").toLocaleDateString("es-CO", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : placeholder
  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className={`flex h-11 w-full cursor-pointer items-center justify-between rounded-lg border border-neutral-300 px-3 text-sm ${
          value ? "text-ink" : "text-neutral-400"
        }`}
      >
        {label}
        <Icon d={I.chevron} size={16} className="text-chrome-muted" />
      </button>
      {open && (
        <div className="absolute left-0 top-12 z-30 w-72 rounded-xl border border-neutral-200 bg-white p-4 shadow-xl">
          <MiniCalendar value={value} onSelect={(d) => onChange(d)} />
          <div className="mt-3 grid grid-cols-2 gap-2">
            <Button
              variant="outline"
              className="h-9"
              onClick={() => {
                onChange("")
                setOpen(false)
              }}
            >
              Cancelar
            </Button>
            <Button
              className="h-9"
              onClick={() => setOpen(false)}
              disabled={!value}
            >
              Filtrar
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}

export function DateTimeField({
  date,
  time,
  onChange,
  placeholder = "Seleccionar",
}: {
  date: string
  time: string
  onChange: (date: string, time: string) => void
  placeholder?: string
}) {
  const [open, setOpen] = useState(false)
  const [draftDate, setDraftDate] = useState(date)
  const [hour, setHour] = useState(
    time
      ? Number(time.slice(0, 2)) % 12 === 0
        ? 12
        : Number(time.slice(0, 2)) % 12
      : 12,
  )
  const [minute, setMinute] = useState(time ? time.slice(3, 5) : "00")
  const [ampm, setAmpm] = useState<"AM" | "PM">(
    time && Number(time.slice(0, 2)) >= 12 ? "PM" : "AM",
  )
  const ref = useClickOutside<HTMLDivElement>(() => setOpen(false))
  const label = date && time ? fmtDateLabel(date, time) : placeholder
  const apply = () => {
    if (!draftDate) return setOpen(false)
    const h24 = ampm === "PM" ? (hour % 12) + 12 : hour % 12
    onChange(draftDate, `${String(h24).padStart(2, "0")}:${minute}`)
    setOpen(false)
  }
  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className={`flex h-11 w-full cursor-pointer items-center justify-between rounded-lg border border-neutral-300 px-3 text-sm ${
          date && time ? "text-ink" : "text-neutral-400"
        }`}
      >
        <span className="truncate">{label}</span>
        <Icon d={I.chevron} size={16} className="shrink-0 text-chrome-muted" />
      </button>
      {open && (
        <div className="absolute left-0 top-12 z-30 w-80 rounded-xl border border-neutral-200 bg-white p-4 shadow-xl">
          <MiniCalendar value={draftDate} onSelect={setDraftDate} />
          <div className="mt-3 flex items-center gap-2">
            <select
              value={hour}
              onChange={(e) => setHour(Number(e.target.value))}
              className="h-9 flex-1 rounded-lg border border-neutral-300 px-2 text-sm"
            >
              {Array.from({ length: 12 }, (_, i) => i + 1).map((h) => (
                <option key={h} value={h}>
                  {h}
                </option>
              ))}
            </select>
            <span className="text-chrome-muted">:</span>
            <select
              value={minute}
              onChange={(e) => setMinute(e.target.value)}
              className="h-9 flex-1 rounded-lg border border-neutral-300 px-2 text-sm"
            >
              {["00", "15", "30", "45"].map((m) => (
                <option key={m} value={m}>
                  {m}
                </option>
              ))}
            </select>
            <select
              value={ampm}
              onChange={(e) => setAmpm(e.target.value as "AM" | "PM")}
              className="h-9 flex-1 rounded-lg border border-neutral-300 px-2 text-sm"
            >
              <option value="AM">a. m.</option>
              <option value="PM">p. m.</option>
            </select>
          </div>
          <div className="mt-3 grid grid-cols-2 gap-2">
            <Button
              variant="outline"
              className="h-9"
              onClick={() => setOpen(false)}
            >
              Cancelar
            </Button>
            <Button className="h-9" onClick={apply} disabled={!draftDate}>
              Aceptar
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}

function fmtDateLabel(date: string, time: string) {
  const [y, m, d] = date.split("-").map(Number)
  const dt = new Date(y, m - 1, d)
  const [hh, mm] = time.split(":").map(Number)
  const h12 = hh % 12 === 0 ? 12 : hh % 12
  const suffix = hh >= 12 ? "p. m." : "a. m."
  const DAYS = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
  ]
  return `${DAYS[dt.getDay()]} ${d} de ${MONTH_NAMES[m - 1]} ${y}  ${h12}:${String(mm).padStart(2, "0")} ${suffix}`
}
