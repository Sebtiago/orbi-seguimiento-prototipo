import { useProto } from "../store"
import { Button, I, Icon, Modal } from "./ui"
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

const RAIL_ITEMS = [
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
  { icon: iconPerfil360, label: "Perfil 360", active: true },
  { icon: iconPowerBi, label: "Power BI" },
  { icon: iconBoletines, label: "Boletines" },
  { icon: iconIdeas, label: "Ideas" },
]

const ACTIVITY_GROUPS: { title: string; items: { label: string; count: number }[] }[] = [
  {
    title: "Actividad general",
    items: [
      { label: "Leads", count: 3 },
      { label: "Cotización", count: 4 },
      { label: "Vehículos", count: 2 },
      { label: "Servicios de taller", count: 3 },
      { label: "Repuestos y accesorios", count: 4 },
    ],
  },
  {
    title: "Créditos",
    items: [
      { label: "Desembolsados", count: 1 },
      { label: "Solicitudes", count: 2 },
    ],
  },
  {
    title: "Seguros",
    items: [
      { label: "Emitidos", count: 4 },
      { label: "Solicitudes", count: 4 },
    ],
  },
  {
    title: "Satisfacción",
    items: [
      { label: "Encuestas", count: 0 },
      { label: "Legales", count: 0 },
    ],
  },
  {
    title: "Retomas",
    items: [
      { label: "Aceptadas", count: 1 },
      { label: "Solicitudes", count: 2 },
    ],
  },
]

function RailItem({
  icon,
  label,
  active,
}: {
  icon: string
  label: string
  active?: boolean
}) {
  return (
    <div
      className={`flex w-[70px] shrink-0 flex-col items-center gap-1 rounded-lg px-1 py-2 text-center ${active ? "bg-white/10" : ""}`}
    >
      <img src={icon} alt="" className="h-6 w-6 shrink-0" />
      <span className="text-[10px] leading-[15px] font-medium text-white">
        {label}
      </span>
    </div>
  )
}

export default function Perfil360() {
  const { d } = useProto()
  const back = () => d({ t: "nav", view: "agenda" })

  return (
    <div className="relative flex h-full">
      <div className="flex h-full">
        <nav className="flex w-20 shrink-0 flex-col items-center gap-1 overflow-y-auto bg-[#414042] py-4">
          <div className="mb-2 flex h-[40px] w-full shrink-0 items-center justify-center">
            <img src={isologoOrbi} alt="Orbi" className="h-[40px] w-[43px]" />
          </div>
          {RAIL_ITEMS.map((item) => (
            <RailItem key={item.label} {...item} />
          ))}
          <div className="mt-auto flex w-[70px] shrink-0 flex-col items-center gap-1 px-1 py-2 text-center">
            <img src={iconSoporte} alt="" className="h-6 w-6" />
            <span className="text-[10px] leading-[15px] font-medium text-white">
              Soporte
            </span>
          </div>
          <div className="flex w-[70px] shrink-0 flex-col items-center gap-1 px-1 py-2 text-center">
            <img src={iconLogout} alt="" className="h-6 w-6" />
            <span className="text-[10px] leading-[15px] font-medium text-white">
              Cerrar sesión
            </span>
          </div>
        </nav>

        <nav className="w-[220px] shrink-0 border-r border-neutral-200 bg-white p-3">
          <p className="mb-2 px-3 text-xs font-semibold text-[#4e5ba6]">
            Gestión
          </p>
          <div className="flex items-center gap-2 rounded-lg bg-[#f0f2fd] px-3 py-2.5 text-sm font-semibold text-[#4e5ba6]">
            <Icon d={I.search} size={18} />
            Buscador de personas
          </div>
        </nav>
      </div>

      <main className="min-w-0 flex-1 overflow-y-auto bg-neutral-50">
        <div className="border-b border-neutral-200 bg-white px-6 py-4">
          <h1 className="text-xl font-semibold text-ink">
            Ficha de la persona
          </h1>
          <div className="mt-2 flex items-center gap-2 text-xs font-semibold">
            <span className="flex items-center gap-1.5 text-[#4e5ba6]">
              <Icon d={I.home} size={14} />
              Home
            </span>
            <span className="text-neutral-300">/</span>
            <span className="text-ink">Ficha de la persona</span>
          </div>
        </div>

        <div className="mx-auto flex max-w-[1040px] flex-col gap-5 px-6 py-6">
          <div className="rounded-xl border border-neutral-200 bg-white p-5">
            <span className="inline-block rounded-full bg-[#f0f2fd] px-3 py-1 text-[11px] font-semibold text-[#4e5ba6]">
              Persona
            </span>
            <h2 className="mt-2 text-lg font-bold text-ink">
              Camila Rodríguez
            </h2>
            <div className="mt-3 grid grid-cols-2 gap-4 text-sm md:grid-cols-4">
              <div>
                <p className="text-xs text-chrome-muted">
                  Número de documento
                </p>
                <p className="font-semibold text-ink">CC 614.519.880</p>
              </div>
              <div>
                <p className="text-xs text-chrome-muted">
                  Fecha de nacimiento
                </p>
                <p className="font-semibold text-ink">15/03/1990</p>
              </div>
              <div>
                <p className="text-xs text-chrome-muted">Ciudad</p>
                <p className="font-semibold text-ink">Bogotá</p>
              </div>
              <div>
                <p className="text-xs text-chrome-muted">Dirección</p>
                <p className="font-semibold text-ink">Calle 93 # 14 - 20</p>
              </div>
              <div>
                <p className="text-xs text-chrome-muted">Celular</p>
                <p className="font-semibold text-ink">301 755 4012</p>
              </div>
              <div>
                <p className="text-xs text-chrome-muted">Correo</p>
                <p className="font-semibold text-ink">
                  camila.rodriguez@gmail.com
                </p>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-xl border border-neutral-200 bg-white">
            <p className="border-b border-neutral-200 px-5 py-3 text-sm font-bold text-ink">
              Resumen de actividad
            </p>
            <table className="w-full">
              <thead className="bg-neutral-50">
                <tr>
                  {["Estado / Marca", "Mazda", "Mercedes Benz", "BYD"].map(
                    (h) => (
                      <th
                        key={h}
                        className="px-4 py-2.5 text-left text-xs font-semibold text-chrome-muted"
                      >
                        {h}
                      </th>
                    ),
                  )}
                </tr>
              </thead>
              <tbody className="text-sm">
                {[
                  ["Carros comprados", "1 vehículo", "1 vehículo", "0 Vehículos"],
                  ["Cotizaciones", "3 Cotizaciones", "9 Cotizaciones", "2 Cotizaciones"],
                  ["Servicios de taller", "2 Servicios", "0 Servicios", "0 Servicios"],
                  ["Accesorios y repuestos", "No", "1 Repuesto", "No"],
                ].map((row) => (
                  <tr key={row[0]} className="border-t border-neutral-100">
                    <td className="px-4 py-2.5 font-medium text-ink">
                      {row[0]}
                    </td>
                    {row.slice(1).map((cell, i) => (
                      <td
                        key={i}
                        className={`px-4 py-2.5 ${cell.match(/^[1-9]/) ? "font-semibold text-[#4e5ba6]" : "text-chrome-muted"}`}
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="flex flex-wrap items-center gap-2 border-t border-neutral-200 px-5 py-3 text-xs">
              <span className="rounded-full bg-neutral-100 px-3 py-1 font-semibold text-chrome-muted">
                Vehículo en separación
              </span>
              <span className="text-chrome-muted">Mercedes Benz AMG Clase C 2025</span>
              <span className="ml-auto rounded-full bg-emerald-50 px-3 py-1 font-semibold text-emerald-600">
                App Cocotaxi · Reportado
              </span>
              <span className="rounded-full bg-red-50 px-3 py-1 font-semibold text-red-500">
                App Motorysa · En Descarga
              </span>
            </div>
          </div>

          <div className="rounded-xl border border-neutral-200 bg-white p-5">
            <p className="mb-3 text-sm font-bold text-ink">
              Historial de actividad
            </p>
            <div className="mb-4 grid grid-cols-3 gap-3 text-xs">
              {["Sección", "Marca", "Periodo de búsqueda"].map((l) => (
                <div key={l}>
                  <p className="mb-1 font-semibold text-ink">{l}</p>
                  <div className="h-9 rounded-lg border border-neutral-200 px-3 leading-9 text-chrome-muted">
                    Seleccionar
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-5">
              {ACTIVITY_GROUPS.map((group) => (
                <div key={group.title}>
                  <p className="mb-2 text-xs font-semibold text-chrome-muted">
                    {group.title}
                  </p>
                  <div className="flex flex-col gap-2">
                    {group.items.map((item) => (
                      <div
                        key={item.label}
                        className="flex items-center gap-3 rounded-lg border border-neutral-200 px-4 py-2.5"
                      >
                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#f0f2fd] text-[#4e5ba6]">
                          <Icon d={I.chart} size={14} />
                        </span>
                        <div className="flex-1">
                          <p className="text-sm font-semibold text-ink">
                            {item.label}
                          </p>
                          <p className="text-xs text-chrome-muted">
                            Actividades ({item.count})
                          </p>
                        </div>
                        <Icon d={I.chevron} size={16} className="text-chrome-muted" />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <div className="fixed inset-0 z-50">
        <Modal title="Sección fuera del alcance" onClose={back} width="max-w-[440px]">
          <p className="mb-6 text-center text-sm text-chrome-muted">
            Esta sección está fuera del testeo de Seguimiento.
          </p>
          <div className="flex justify-center">
            <Button onClick={back}>Volver a Seguimiento</Button>
          </div>
        </Modal>
      </div>
    </div>
  )
}
