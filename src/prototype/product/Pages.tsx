import { useState, type ReactNode } from "react"
import {
  CLIENTS,
  MAX_TRACKED,
  PROCESSES,
  fmtDateShort,
  nextReminder,
  clientById,
  type Client,
} from "../data"
import { trackedClients, useProto } from "../store"
import { ActionMenu, Button, EmptyState, I, Icon } from "./ui"
import isologoOrbi from "../../assets/sidebar/isologo-orbi.svg"
import iconHome from "../../assets/sidebar/icon-home.svg"
import iconLeads from "../../assets/sidebar/icon-leads.svg"
import iconCotizaciones from "../../assets/sidebar/icon-cotizaciones.svg"
import iconSatisfaccion from "../../assets/sidebar/icon-satisfaccion.svg"
import iconGero from "../../assets/sidebar/icon-gero.svg"
import iconCreditos from "../../assets/sidebar/icon-creditos.svg"
import iconSeguros from "../../assets/sidebar/icon-seguros.svg"
import iconRetomas from "../../assets/sidebar/icon-retomas.svg"
import iconPricingUsados from "../../assets/sidebar/icon-pricing-usados.svg"
import iconManto from "../../assets/sidebar/icon-manto.svg"
import iconCarteraClientes from "../../assets/sidebar/icon-cartera-clientes.svg"
import iconPerfil360 from "../../assets/sidebar/icon-perfil-360.svg"
import iconPowerBi from "../../assets/sidebar/icon-power-bi.svg"
import iconBoletines from "../../assets/sidebar/icon-boletines.svg"
import iconIdeas from "../../assets/sidebar/icon-ideas.svg"
import iconSoporte from "../../assets/sidebar/icon-soporte.svg"
import iconLogout from "../../assets/sidebar/icon-logout.svg"
import avatarPhoto from "../../assets/sidebar/avatar-photo.jpg"
import logoOrbiTo from "../../assets/sidebar/logo-orbi-to.svg"
import iconCollapseLeft from "../../assets/sidebar/icon-collapse-left.svg"
import iconCollapseRight from "../../assets/sidebar/icon-collapse-right.svg"
import iconSeguimientoGroup from "../../assets/sidebar/icon-seguimiento-group.svg"
import iconChevronDown from "../../assets/sidebar/icon-chevron-down.svg"
import iconTuAgenda from "../../assets/sidebar/icon-tu-agenda.svg"
import iconBuscadorClientes from "../../assets/sidebar/icon-buscador-clientes.svg"
import statusDot from "../../assets/sidebar/status-dot.svg"
import iconMenuVertical from "../../assets/sidebar/icon-menu-vertical.svg"

const RAIL_ITEMS: { icon: string; label: string }[] = [
  { icon: iconHome, label: "Home" },
  { icon: iconLeads, label: "Leads" },
  { icon: iconCotizaciones, label: "Cotizaciones" },
  { icon: iconSatisfaccion, label: "Satisfacción" },
  { icon: iconGero, label: "Gero" },
  { icon: iconCreditos, label: "Créditos" },
  { icon: iconSeguros, label: "Seguros" },
  { icon: iconRetomas, label: "Retomas" },
  { icon: iconPricingUsados, label: "Pricing Usados" },
  { icon: iconManto, label: "Manto" },
  { icon: iconCarteraClientes, label: "Cartera de clientes" },
  { icon: iconPerfil360, label: "Perfil 360" },
  { icon: iconPowerBi, label: "Power BI" },
  { icon: iconBoletines, label: "Boletines" },
  { icon: iconIdeas, label: "Ideas" },
]

export function TopBar() {
  return (
    <header className="flex h-[52px] shrink-0 items-center gap-3 border-b border-neutral-200 bg-white px-4">
      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-orbi text-sm font-bold text-white">
        o
      </div>
      <span className="font-semibold text-ink">orbi</span>
      <span className="ml-auto flex h-9 w-9 items-center justify-center rounded-full text-chrome-muted hover:bg-neutral-100">
        <Icon d={I.bell} size={18} />
      </span>
    </header>
  )
}

export function Sidebar() {
  const { s, d } = useProto()
  const [expanded, setExpanded] = useState(true)

  return (
    <div className="flex h-full shrink-0">
      <nav className="flex w-20 shrink-0 flex-col items-center gap-3 bg-[#414042] py-4">
        <div className="flex h-[40px] w-full shrink-0 items-center justify-center">
          <img src={isologoOrbi} alt="Orbi" className="h-[40px] w-[43px]" />
        </div>
        <div className="h-px w-full shrink-0 bg-[#f5f5f5]/20" />
        <div className="flex min-h-0 w-full flex-1 flex-col items-center gap-1 overflow-x-hidden overflow-y-auto">
          {RAIL_ITEMS.map((item) => (
            <div
              key={item.label}
              className="flex w-[70px] shrink-0 flex-col items-center gap-1 px-1 py-3 text-center"
            >
              <img src={item.icon} alt="" className="h-6 w-6 shrink-0" />
              <span className="text-[10px] leading-[15px] font-medium text-white">
                {item.label}
              </span>
            </div>
          ))}
        </div>
        <div className="h-px w-full shrink-0 bg-[#f5f5f5]/20" />
        <div className="flex w-full shrink-0 flex-col items-center">
          <div className="flex w-[70px] flex-col items-center gap-1 px-1 py-3 text-center">
            <img src={iconSoporte} alt="" className="h-6 w-6" />
            <span className="text-[10px] leading-[15px] font-medium text-white">
              Soporte
            </span>
          </div>
          <div className="flex w-[70px] flex-col items-center gap-1 px-1 py-3 text-center">
            <img src={iconLogout} alt="" className="h-6 w-6" />
            <span className="text-[10px] leading-[15px] font-medium text-white">
              Cerrar sesión
            </span>
          </div>
        </div>
      </nav>

      <nav
        className={`flex h-full shrink-0 flex-col items-center bg-white pt-6 transition-[width] ${expanded ? "w-64" : "w-20"}`}
      >
        <div
          className={`flex w-full shrink-0 items-center px-4 ${expanded ? "justify-between" : "justify-center"}`}
        >
          {expanded && (
            <img src={logoOrbiTo} alt="Orbi · Torre de control" className="h-7 w-auto" />
          )}
          <button
            aria-label={expanded ? "Contraer menú" : "Expandir menú"}
            onClick={() => setExpanded(!expanded)}
            className="flex shrink-0 cursor-pointer items-center justify-center rounded-lg p-2 hover:bg-neutral-100"
          >
            <img
              src={expanded ? iconCollapseLeft : iconCollapseRight}
              alt=""
              className="h-[18px] w-[18px]"
            />
          </button>
        </div>

        <div className="mt-6 flex w-full min-h-0 flex-1 flex-col items-start gap-2 overflow-y-auto px-1">
          <div
            className={`flex w-full items-center gap-2 rounded-lg px-3 py-2 ${expanded ? "" : "justify-center px-1"}`}
          >
            <img src={iconSeguimientoGroup} alt="" className="h-[18px] w-[18px] shrink-0" />
            {expanded && (
              <span className="flex-1 text-left text-xs font-medium text-[#1b1b1c]">
                Seguimiento
              </span>
            )}
            <img src={iconChevronDown} alt="" className="h-3.5 w-3.5 shrink-0" />
          </div>

          <div className={`flex w-full items-center gap-2 ${expanded ? "pl-6" : "justify-center"}`}>
            {expanded && <span className="h-[34px] w-px shrink-0 bg-[#acacac]" />}
            <button
              onClick={() => d({ t: "nav", view: "agenda" })}
              className={`flex h-[34px] flex-1 cursor-pointer items-center gap-2 rounded-lg px-3 ${expanded ? "" : "flex-none justify-center px-2"} ${s.view === "agenda" ? "bg-[#e6f6f6]" : "hover:bg-neutral-50"}`}
            >
              <img src={iconTuAgenda} alt="" className="h-3.5 w-3.5 shrink-0" />
              {expanded && (
                <span className="flex-1 text-left text-xs font-semibold text-[#1b1b1c]">
                  Tu agenda
                </span>
              )}
            </button>
          </div>

          <div className={`flex w-full items-center gap-2 ${expanded ? "pl-6" : "justify-center"}`}>
            {expanded && <span className="h-[34px] w-px shrink-0 bg-[#acacac]" />}
            <button
              onClick={() => d({ t: "nav", view: "buscador" })}
              className={`flex h-[34px] flex-1 cursor-pointer items-center gap-2 rounded-lg px-3 ${expanded ? "" : "flex-none justify-center px-2"} ${s.view === "buscador" ? "bg-[#e6f6f6]" : "hover:bg-neutral-50"}`}
            >
              <img src={iconBuscadorClientes} alt="" className="h-3.5 w-3.5 shrink-0" />
              {expanded && (
                <span className="flex-1 text-left text-xs font-normal text-[#414042]">
                  Buscador de clientes
                </span>
              )}
            </button>
          </div>
        </div>

        <div
          className={`flex w-full shrink-0 items-center gap-1 border-t border-[#f5f5f5] py-3 ${expanded ? "justify-between px-3" : "justify-center px-0"}`}
        >
          <div className="relative shrink-0">
            <img
              src={avatarPhoto}
              alt=""
              className="h-8 w-8 rounded-full border border-white object-cover shadow"
            />
            <img src={statusDot} alt="" className="absolute -right-0.5 -bottom-0.5 h-[11px] w-[11px]" />
          </div>
          {expanded && (
            <div className="flex flex-1 flex-col items-start text-xs leading-[18px]">
              <span className="font-semibold text-black">Nombre Apellido</span>
              <span className="text-[#8a8a8a]">Disponible</span>
            </div>
          )}
          <button
            aria-label="Más opciones"
            className="flex shrink-0 cursor-pointer items-center justify-center rounded-lg p-2 hover:bg-neutral-100"
          >
            <img src={iconMenuVertical} alt="" className="h-[18px] w-[18px]" />
          </button>
        </div>
      </nav>
    </div>
  )
}

export function PageHeader({ crumb }: { crumb: string }) {
  return (
    <div>
      <div className="bg-[#f9f9f9] px-6 py-2">
        <h1 className="text-xl leading-[30px] font-semibold text-ink">Seguimiento</h1>
      </div>
      <div className="flex items-center gap-2 px-4 py-3 text-sm font-semibold">
        <span className="flex items-center gap-1.5 text-orbi">
          <Icon d={I.home} size={16} />
          Home
        </span>
        <span className="text-neutral-300">/</span>
        <span className="text-orbi">Seguimiento</span>
        <span className="text-neutral-300">/</span>
        <span className="text-ink">{crumb}</span>
      </div>
    </div>
  )
}

function Section({
  title,
  subtitle,
  right,
  tone = "white",
  footer,
  children,
}: {
  title: string
  subtitle?: string
  right?: ReactNode
  tone?: "gray" | "white"
  footer?: ReactNode
  children: ReactNode
}) {
  const gray = tone === "gray"
  return (
    <section className={`mb-6 flex w-full flex-col items-start gap-3 rounded-lg ${gray ? "bg-[#f9f9f9] p-2" : "bg-white p-4"}`}>
      <div className="flex w-full flex-col gap-2">
        <div className="flex w-full items-center gap-3">
          <div className="min-w-0 flex-1">
            <h2 className="text-base font-semibold text-ink">{title}</h2>
            {subtitle && <p className="mt-1 text-xs text-[#666]">{subtitle}</p>}
          </div>
          {right}
        </div>
        <div className="h-px w-full bg-[#dcdcdc]" />
      </div>
      <div className={`w-full ${gray ? "rounded-lg bg-white" : ""}`}>{children}</div>
      {footer}
    </section>
  )
}

const th = "px-4 py-3 text-left text-xs font-semibold text-chrome-muted"
const td = "px-4 py-3 text-sm text-ink"

function ClientProcessTable({
  clients,
  reminders,
  actions,
}: {
  clients: Client[]
  reminders: import("../data").Reminder[]
  actions: (
    c: Client,
  ) => { label: string; onClick: () => void; danger?: boolean }[]
}) {
  const { d } = useProto()
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[1220px]">
        <thead className="bg-neutral-50">
          <tr>
            <th className={`${th} w-[220px]`}>Cliente</th>
            {PROCESSES.map((p) => (
              <th key={p} className={`${th} text-center`}>
                {p}
              </th>
            ))}
            <th
              className={`${th} sticky right-0 z-10 bg-neutral-50 text-right shadow-[-6px_0_8px_-6px_rgba(0,0,0,0.15)]`}
            >
              Acciones
            </th>
          </tr>
        </thead>
        <tbody>
          {clients.map((c) => {
            const { next, extra } = nextReminder(c.id, reminders)
            return (
              <tr key={c.id} className="border-t border-neutral-100">
                <td className={`${td} w-[220px]`}>
                  <div className="flex items-start gap-2">
                    <Icon
                      d={I.grip}
                      size={16}
                      className="mt-1 shrink-0 text-neutral-300"
                    />
                    <div className="min-w-0">
                      <div className="truncate font-semibold">{c.name}</div>
                      <div className="truncate text-xs text-chrome-muted">
                        CC {c.cc} · {c.phone}
                      </div>
                      {next && (
                        <div className="mt-1 flex items-center gap-1">
                          <span className="inline-flex items-center gap-1 rounded-full bg-orbi-soft px-2 py-0.5 text-[10px] font-semibold text-orbi">
                            <Icon d={I.bell} size={10} />
                            {fmtDateShort(next.date, next.time)}
                          </span>
                          {extra > 0 && (
                            <span className="rounded-full bg-neutral-100 px-2 py-0.5 text-[10px] font-semibold text-chrome-muted">
                              +{extra}
                            </span>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </td>
                {PROCESSES.map((p) => {
                  const n = c.counts[p]
                  return (
                    <td key={p} className="px-2 py-3 text-center">
                      {n ? (
                        <button
                          onClick={() =>
                            d({ t: "modal", v: { clientId: c.id, process: p } })
                          }
                          className="h-8 min-w-10 cursor-pointer rounded-lg bg-orbi/80 px-2 text-sm font-semibold text-white hover:bg-orbi"
                        >
                          {n}
                        </button>
                      ) : (
                        <span className="inline-block h-8 w-10 content-center rounded-lg border border-neutral-200 text-sm text-neutral-300">
                          -
                        </span>
                      )}
                    </td>
                  )
                })}
                <td className="sticky right-0 z-10 bg-white px-2 py-3 text-right shadow-[-6px_0_8px_-6px_rgba(0,0,0,0.15)]">
                  <ActionMenu items={actions(c)} />
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export function Agenda() {
  const { s, d } = useProto()
  const clients = trackedClients(s)
  const upcoming = [...s.reminders]
    .filter((r) => !r.done)
    .sort((a, b) => (a.date + a.time).localeCompare(b.date + b.time))
  const preview = upcoming.slice(0, 3)
  const clientActions = (c: Client) => [
    {
      label: "Ingresar a perfil 360",
      onClick: () => d({ t: "nav", view: "perfil360" }),
    },
    {
      label: "Crear recordatorio",
      onClick: () => d({ t: "form", v: { clientId: c.id } }),
    },
    {
      label: "Quitar de clientes guardados",
      onClick: () => d({ t: "untrack", id: c.id }),
      danger: true,
    },
  ]
  return (
    <div>
      <PageHeader crumb="Mi agenda" />
      <div className="mx-auto flex w-full max-w-[1180px] flex-col gap-6 px-4 py-6">
        <Section
          title="Recordatorios"
          subtitle="Organiza tus próximos seguimientos y mantén a la vista lo que tienes pendiente con tus clientes."
          tone="gray"
          right={
            <Button onClick={() => d({ t: "form", v: {} })}>
              Crear recordatorio
            </Button>
          }
          footer={
            <button
              onClick={() => d({ t: "drawer", v: true })}
              className="flex cursor-pointer items-center gap-1.5 text-[13px] font-medium text-orbi hover:underline"
            >
              Ver todos los recordatorios
              <Icon d={I.chevronRight} size={16} />
            </button>
          }
        >
          {preview.length === 0 ? (
            <EmptyState
              height="h-[150px]"
              icon={<Icon d={I.bell} size={20} />}
              title="Aún no tienes recordatorios"
              subtitle="Los recordatorios que crees aparecerán aquí para ayudarte a organizar el seguimiento de tus clientes."
            />
          ) : (
            <div className="overflow-x-auto rounded-lg">
              <table className="w-full">
                <thead className="bg-neutral-50">
                  <tr>
                    {["Fecha y hora", "Cliente", "Plataforma", "Recordatorio"].map(
                      (h) => (
                        <th key={h} className={th}>
                          {h}
                        </th>
                      ),
                    )}
                    <th
                      className={`${th} sticky right-0 z-10 bg-neutral-50 shadow-[-6px_0_8px_-6px_rgba(0,0,0,0.15)]`}
                    >
                      Acción
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {preview.map((r) => (
                    <tr key={r.id} className="border-t border-neutral-100">
                      <td className={td}>{fmtDateShort(r.date, r.time)}</td>
                      <td className={`${td} font-semibold`}>
                        {clientById(r.clientId).name}
                      </td>
                      <td className={td}>{r.platform}</td>
                      <td
                        className={`${td} max-w-[280px] truncate text-chrome-muted`}
                      >
                        {r.title || r.message || "—"}
                      </td>
                      <td className="sticky right-0 z-10 bg-white px-4 py-3 text-sm shadow-[-6px_0_8px_-6px_rgba(0,0,0,0.15)]">
                        <button
                          onClick={() => d({ t: "viewReminder", v: r.id })}
                          className="cursor-pointer font-semibold text-orbi hover:underline"
                        >
                          Ver
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </Section>

        <Section
          title="Clientes guardados"
          subtitle={`Guarda hasta ${MAX_TRACKED} clientes para mantener a la mano los que quieres seguir de cerca.`}
          right={
            <Button onClick={() => d({ t: "nav", view: "buscador" })}>
              Ir al Buscador de clientes
            </Button>
          }
        >
          {clients.length === 0 ? (
            <EmptyState
              icon={<Icon d={I.folder} size={19} />}
              title="Aún no tienes clientes guardados"
              subtitle="Los clientes que agregues a tu agenda aparecerán aquí para que puedas consultar rápidamente sus procesos."
            />
          ) : (
            <div className="overflow-hidden rounded-lg border border-neutral-200">
              <ClientProcessTable
                clients={clients}
                reminders={s.reminders}
                actions={clientActions}
              />
            </div>
          )}
        </Section>
      </div>
    </div>
  )
}

export function Buscador() {
  const { s, d } = useProto()
  const [q, setQ] = useState(s.searched ?? "")
  const run = () => d({ t: "search", q: q.trim() || null })
  const norm = (x: string) =>
    x.toLowerCase()
      .normalize("NFD")
      .replace(/[̀-ͯ]/g, "")
  const term = s.searched ? norm(s.searched) : null
  const results: Client[] = term
    ? CLIENTS.filter(
        (c) =>
          norm(c.name).includes(term) ||
          c.cc.replace(/\./g, "").includes(term.replace(/\./g, "")) ||
          c.phone.replace(/\s/g, "").includes(term.replace(/\s/g, "")),
      )
    : []
  const total = results.reduce(
    (sum, c) => sum + Object.values(c.counts).reduce((a, b) => a + (b ?? 0), 0),
    0,
  )
  const resultActions = (c: Client) => {
    const on = s.tracked.includes(c.id)
    return [
      {
        label: "Ingresar a perfil 360",
        onClick: () => d({ t: "nav", view: "perfil360" }),
      },
      {
        label: "Crear recordatorio",
        onClick: () => d({ t: "form", v: { clientId: c.id } }),
      },
      on
        ? {
            label: "Quitar de clientes guardados",
            onClick: () => d({ t: "untrack", id: c.id }),
            danger: true,
          }
        : {
            label: "Guardar cliente como Favorito",
            onClick: () => d({ t: "track", id: c.id }),
          },
    ]
  }
  return (
    <div>
      <PageHeader crumb="Buscador de clientes" />
      <div className="mx-auto max-w-[1180px] px-4 py-6">
        <div className="flex flex-col gap-4 rounded-lg bg-[#f9f9f9] p-4">
          <div>
            <h2 className="text-base font-semibold text-ink">
              Buscador de clientes activos
            </h2>
          </div>
          <div className="flex gap-3">
            <form
              onSubmit={(e) => {
                e.preventDefault()
                run()
              }}
              className="flex flex-1 gap-3"
            >
              <label className="flex h-11 flex-1 items-center gap-2 rounded-lg border border-neutral-300 bg-white px-3 focus-within:border-orbi">
                <input
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                  placeholder="Escribe un nombre, cédula o teléfono"
                  className="w-full bg-transparent text-sm outline-none placeholder:text-neutral-400"
                />
                <button
                  type="submit"
                  aria-label="Buscar"
                  className="flex h-7 w-7 shrink-0 cursor-pointer items-center justify-center rounded-md bg-orbi text-white"
                >
                  <Icon d={I.search} size={15} />
                </button>
              </label>
            </form>
            <Button variant="outline" className="h-11 bg-white">
              <Icon d={I.list} size={16} />
              Filtros
            </Button>
          </div>
          {!term ? (
            <div className="rounded-lg bg-white">
              <EmptyState
                icon={<Icon d={I.search} size={36} />}
                title="Empieza realizando una búsqueda"
                subtitle="Ingresa un nombre, cédula o teléfono y selecciona Buscar para consultar los clientes activos asociados a tu cartera."
              />
            </div>
          ) : results.length === 0 ? (
            <div className="rounded-lg bg-white">
              <EmptyState
                icon={<Icon d={I.search} size={36} />}
                title="No encontramos resultados"
                subtitle={`No hay clientes activos que coincidan con "${s.searched}".`}
              />
            </div>
          ) : (
            <>
              <p className="text-sm font-semibold text-ink">
                {total} negocios activos
              </p>
              <div className="overflow-hidden rounded-lg bg-white shadow-[0_1px_2px_rgba(16,24,40,0.06),0_1px_3px_rgba(16,24,40,0.1)]">
                <ClientProcessTable
                  clients={results}
                  reminders={s.reminders}
                  actions={resultActions}
                />
                <div className="flex items-center justify-between border-t border-neutral-100 px-4 py-3">
                  <span className="rounded-lg border border-neutral-200 px-3 py-1.5 text-xs font-semibold text-ink">
                    20
                  </span>
                  <p className="text-xs text-chrome-muted">
                    Mostrando 1 a {results.length} de {results.length} resultados
                  </p>
                  <div className="flex items-center gap-1">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg text-chrome-muted">
                      <Icon d={I.chevronLeft} size={16} />
                    </span>
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-orbi-soft text-sm font-semibold text-orbi">
                      1
                    </span>
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg text-chrome-muted">
                      <Icon d={I.chevronRight} size={16} />
                    </span>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
