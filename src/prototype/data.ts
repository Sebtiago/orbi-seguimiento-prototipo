export const PROCESSES = [
  "Leads",
  "Cotización",
  "Reserva",
  "Retoma",
  "Financiación",
  "Seguro",
  "Factura",
  "Trámite",
  "Entrega",
  "App",
] as const
export type Process = typeof PROCESSES[number]

export const PLATFORM_LABEL: Record<Process, string> = {
  Leads: "Orbi Leads",
  Cotización: "Orbi Cotización",
  Reserva: "Orbi Reserva",
  Retoma: "Orbi Retoma",
  Financiación: "Lucas Financiación",
  Seguro: "Orbi Seguro",
  Factura: "Orbi Factura",
  Trámite: "Orbi Trámite",
  Entrega: "Orbi Entrega",
  App: "Orbi App",
}

export interface Client {
  id: string
  name: string
  cc: string
  phone: string
  counts: Partial<Record<Process, number>>
}

export const CLIENTS: Client[] = [
  {
    id: "camila",
    name: "Camila Rodríguez",
    cc: "614.519.880",
    phone: "301 755 4012",
    counts: { Leads: 3, Cotización: 2, Financiación: 1 },
  },
  {
    id: "camila-r",
    name: "Camila Restrepo",
    cc: "1.037.221.904",
    phone: "310 220 8841",
    counts: { Leads: 1, Seguro: 1 },
  },
  {
    id: "camilo",
    name: "Camilo Rodríguez",
    cc: "79.882.310",
    phone: "315 482 9076",
    counts: { Cotización: 2, Reserva: 1 },
  },
  {
    id: "ana",
    name: "Ana Torres",
    cc: "52.846.193",
    phone: "315 482 9076",
    counts: { Financiación: 1, Factura: 1, App: 1 },
  },
  {
    id: "laura",
    name: "Laura Mejía",
    cc: "43.918.260",
    phone: "301 755 4012",
    counts: { Leads: 1, Retoma: 1 },
  },
  {
    id: "santiago",
    name: "Santiago Gómez",
    cc: "1.032.774.518",
    phone: "300 614 2289",
    counts: { Cotización: 1, Trámite: 1, Entrega: 1 },
  },
]

const FILLER_NAMES: [string, string, string][] = [
  ["Juan Esteban Quintero", "1.019.332.874", "301 442 8871"],
  ["María José Hernández", "43.556.219", "315 773 2049"],
  ["Carlos Andrés Ramírez", "79.221.804", "300 918 4456"],
  ["Luisa Fernanda Castro", "1.022.447.316", "312 664 7703"],
  ["Andrés Felipe Suárez", "80.335.912", "304 587 1290"],
  ["Diana Marcela Rojas", "52.771.608", "310 229 6634"],
  ["Jorge Iván Vargas", "19.448.025", "320 845 3317"],
  ["Paula Andrea Londoño", "1.015.887.441", "317 356 9982"],
  ["Sebastián Ortiz", "1.002.993.557", "313 671 4408"],
  ["Natalia Jiménez", "63.209.774", "302 118 5526"],
  ["Felipe Morales", "94.447.360", "318 763 0091"],
  ["Camila Andrea Ríos", "1.010.558.293", "311 904 2287"],
  ["Daniel Alejandro Pérez", "16.332.681", "314 229 7753"],
  ["Valeria Duarte", "1.033.776.459", "316 540 8812"],
  ["Juan Pablo Cárdenas", "11.298.645", "305 697 3341"],
]

export const FILLER_CLIENTS: Client[] = FILLER_NAMES.map(([name, cc, phone], i) => ({
  id: `f${i}`,
  name,
  cc,
  phone,
  counts: { [PROCESSES[i % PROCESSES.length]]: ((i % 3) + 1) as number },
}))

export const ALL_CLIENTS = [...CLIENTS, ...FILLER_CLIENTS]
export const clientById = (id: string) => ALL_CLIENTS.find((c) => c.id === id)!
export const MAX_TRACKED = 15

export interface Reminder {
  id: string
  clientId: string
  platform: Process
  date: string
  time: string
  title: string
  message: string
  done: boolean
}

const DAYS = [
  "Domingo",
  "Lunes",
  "Martes",
  "Miércoles",
  "Jueves",
  "Viernes",
  "Sábado",
]
const MONTHS = [
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

export function fmtDate(date: string, time: string) {
  const [y, m, d] = date.split("-").map(Number)
  const dt = new Date(y, m - 1, d)
  const [hh, mm] = time.split(":").map(Number)
  const h12 = hh % 12 === 0 ? 12 : hh % 12
  const suffix = hh >= 12 ? "p. m." : "a. m."
  return `${DAYS[dt.getDay()]} ${String(d).padStart(2, "0")} de ${MONTHS[m - 1]} ${y}  ${h12}:${String(mm).padStart(2, "0")} ${suffix}`
}
export const isOverdue = (r: Reminder) =>
  !r.done && new Date(`${r.date}T${r.time}`) < new Date()

const MONTHS_SHORT = [
  "ene",
  "feb",
  "mar",
  "abr",
  "may",
  "jun",
  "jul",
  "ago",
  "sep",
  "oct",
  "nov",
  "dic",
]

export function fmtTime(time: string) {
  const [hh, mm] = time.split(":").map(Number)
  const h12 = hh % 12 === 0 ? 12 : hh % 12
  const suffix = hh >= 12 ? "p. m." : "a. m."
  return `${h12}:${String(mm).padStart(2, "0")} ${suffix}`
}

export function fmtDateShort(date: string, time: string) {
  const today = new Date()
  const [y, m, d] = date.split("-").map(Number)
  const dt = new Date(y, m - 1, d)
  const sameDay = (a: Date, b: Date) =>
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  const tomorrow = new Date(today)
  tomorrow.setDate(today.getDate() + 1)
  const day = sameDay(dt, today)
    ? "Hoy"
    : sameDay(dt, tomorrow)
      ? "Mañana"
      : `${d} ${MONTHS_SHORT[m - 1]}`
  return `${day} · ${fmtTime(time)}`
}

export function nextReminder(clientId: string, reminders: Reminder[]) {
  const pending = reminders
    .filter((r) => r.clientId === clientId && !r.done)
    .sort((a, b) => (a.date + a.time).localeCompare(b.date + b.time))
  return { next: pending[0] ?? null, extra: Math.max(0, pending.length - 1) }
}
