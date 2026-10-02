import logoMark from "../../assets/lucas/logo-mark.svg"
import iconTracking from "../../assets/lucas/icon-tracking.svg"
import iconChevronRight from "../../assets/lucas/icon-chevron-right.svg"
import iconDownload from "../../assets/lucas/icon-download.svg"
import iconCaretUp from "../../assets/lucas/icon-caret-up.svg"
import iconCaretDown from "../../assets/lucas/icon-caret-down.svg"
import iconInicio from "../../assets/lucas/icon-inicio.svg"
import iconGestor from "../../assets/lucas/icon-gestor.svg"
import iconConcesionarios from "../../assets/lucas/icon-concesionarios.svg"
import iconEntidades from "../../assets/lucas/icon-entidades.svg"
import iconClientes from "../../assets/lucas/icon-clientes.svg"
import iconRoles from "../../assets/lucas/icon-roles.svg"
import iconDatastudio from "../../assets/lucas/icon-datastudio.svg"
import iconAccesos from "../../assets/lucas/icon-accesos.svg"
import iconHistorial from "../../assets/lucas/icon-historial.svg"
import iconVerticalDots from "../../assets/lucas/icon-vertical-dots.svg"

const NAV_ITEMS = [
  { icon: iconConcesionarios, label: "Concesionarios" },
  { icon: iconEntidades, label: "Entidades bancarias" },
  { icon: iconClientes, label: "Clientes" },
  { icon: iconRoles, label: "Roles" },
  { icon: iconDatastudio, label: "DataStudio" },
  { icon: iconAccesos, label: "Administración accesos" },
  { icon: iconHistorial, label: "Historial" },
]

function NavItem({
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
      className={`flex items-center gap-3 rounded-md px-3 py-3 ${active ? "bg-[#e6e6f4]" : ""}`}
    >
      <img src={icon} alt="" className="h-6 w-6 shrink-0" />
      <span
        className={`text-base ${active ? "font-semibold text-[#000068]" : "text-[#363f4f]"}`}
      >
        {label}
      </span>
    </div>
  )
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex-1">
      <p className="mb-1.5 text-base font-semibold text-[#262d38]">{label}</p>
      <div className="w-full rounded-lg border border-[#bec0c4] bg-[#f2f3f4] px-3.5 py-2.5 text-base text-[#787e89] shadow-xs">
        {value || "Escribe tu información"}
      </div>
    </div>
  )
}

function AccordionOpen({
  title,
  fields,
}: {
  title: string
  fields: [string, string][]
}) {
  return (
    <div className="rounded-md bg-[#f9fafd] shadow-sm">
      <div className="flex items-center gap-4 px-6 py-3">
        <p className="flex-1 text-base font-semibold text-[#363f4f]">{title}</p>
        <button className="flex items-center gap-2 rounded-md bg-[#363f4f] px-3.5 py-2 text-[10px] font-semibold text-[#f9fafd] shadow-xs">
          Descargar formulario
          <img src={iconDownload} alt="" className="h-5 w-5" />
        </button>
        <img src={iconCaretUp} alt="" className="h-5 w-5" />
      </div>
      <div className="flex flex-col gap-5 px-6 pb-6">
        <div className="flex gap-6">
          <Field label={fields[0][0]} value={fields[0][1]} />
          <Field label={fields[1][0]} value={fields[1][1]} />
        </div>
        <div className="flex gap-6">
          <Field label={fields[2][0]} value={fields[2][1]} />
          <Field label={fields[3][0]} value={fields[3][1]} />
        </div>
      </div>
    </div>
  )
}

function AccordionRow({ label, edit }: { label: string; edit?: boolean }) {
  return (
    <div className="flex items-center gap-4 rounded-md bg-[#f9fafd] px-6 py-3 shadow-sm">
      <p className="flex-1 text-base text-[#5e6572]">{label}</p>
      {edit && (
        <button className="rounded-md border border-[#000093] px-3.5 py-2 text-[10px] font-semibold text-[#000093] shadow-xs">
          Editar
        </button>
      )}
      <img src={iconCaretDown} alt="" className="h-5 w-5" />
    </div>
  )
}

export default function LucasFinanciacion() {
  return (
    <div className="flex h-full bg-[#f6f7f8]">
      <aside className="flex w-[278px] shrink-0 flex-col justify-between border-r border-[#ebedef] bg-[#feffff]">
        <div>
          <div className="flex items-center gap-2 px-6 pt-10 pb-8">
            <img src={logoMark} alt="" className="h-8 w-8" />
            <span className="text-xl font-semibold text-[#000093]">
              Financieras
            </span>
          </div>
          <nav className="flex flex-col gap-1 px-4">
            <NavItem icon={iconInicio} label="Inicio" />
            <p className="px-3 py-3 text-xs font-semibold text-[#000086]">
              CONTENIDO
            </p>
            <NavItem icon={iconGestor} label="Gestor de solicitudes" active />
            {NAV_ITEMS.map((item) => (
              <NavItem key={item.label} icon={item.icon} label={item.label} />
            ))}
          </nav>
        </div>
        <div className="flex flex-col gap-6 px-4 pb-8">
          <div className="h-px w-full bg-[#ebedef]" />
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f9f5ff] text-lg font-medium text-[#7f56d9]">
                OR
              </span>
              <div className="text-base">
                <p className="font-semibold text-[#344054]">Olivia Rhye</p>
                <p className="text-[#667085]">olivia@untitledui.com</p>
              </div>
            </div>
            <img src={iconVerticalDots} alt="" className="h-5 w-5 shrink-0" />
          </div>
        </div>
      </aside>

      <main className="min-w-0 flex-1 overflow-y-auto">
        <div className="mx-auto flex max-w-[1040px] flex-col gap-8 px-6 py-10">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4 rounded-md bg-white px-6 pt-6 pb-5 shadow-xs">
              <h1 className="flex-1 text-2xl font-semibold text-[#000093]">
                Gestionar negocio
              </h1>
              <button className="flex items-center gap-2 rounded-md bg-[#000093] px-[18px] py-2.5 text-base font-semibold text-white shadow-xs">
                <img src={iconTracking} alt="" className="h-5 w-5" />
                Tracking
              </button>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-base text-[#5e6572]">
                Gestor de Solicitudes
              </span>
              <img src={iconChevronRight} alt="" className="h-4 w-4" />
              <span className="text-base text-[#000086]">
                Gestionar negocio
              </span>
            </div>
          </div>

          <div>
            <div className="flex gap-1">
              <span className="rounded-t-[5px] bg-[#e6e6f4] px-4 py-2 text-base font-bold text-[#000068]">
                Información del cliente
              </span>
              <span className="px-4 py-2 text-base text-[#000093]">
                Información del crédito
              </span>
              <span className="px-4 py-2 text-base text-[#000093]">
                Documentación
              </span>
            </div>
            <div className="h-px w-full bg-[#ebedef]" />
          </div>

          <div className="overflow-hidden rounded-md bg-white shadow-[0_12px_8px_rgba(16,24,40,0.08),0_4px_3px_rgba(16,24,40,0.03)]">
            <div className="flex items-center gap-4 border-b border-[#ebedef] px-6 py-5">
              <p className="flex-1 text-xl font-semibold text-[#00003e]">
                Información del cliente
              </p>
              <button className="rounded-md border border-[#363f4f] px-4 py-2.5 text-xs font-semibold text-[#363f4f] shadow-xs">
                Administrar formulario
              </button>
            </div>
            <div className="flex flex-col gap-6 px-6 py-6">
              <AccordionOpen
                title="Datos de representante legal"
                fields={[
                  ["Primer nombre*", "Camila"],
                  ["Segundo nombre", ""],
                  ["Primer apellido*", "Rodríguez"],
                  ["Segundo apellido", ""],
                ]}
              />
              <AccordionRow label="Datos de identificación" />
              <AccordionRow label="Datos demográficos" />
              <AccordionRow label="Datos laborales" />
              <AccordionRow label="Datos financieros" edit />

              <div className="flex items-center gap-4 rounded-md bg-[#f9fafd] px-6 py-3 shadow-sm">
                <p className="flex-1 text-base font-semibold text-[#363f4f]">
                  Datos de Empresa
                </p>
                <button className="flex items-center gap-2 rounded-md bg-[#363f4f] px-3.5 py-2 text-[10px] font-semibold text-[#f9fafd] shadow-xs">
                  Descargar formulario
                  <img src={iconDownload} alt="" className="h-5 w-5" />
                </button>
                <img src={iconCaretDown} alt="" className="h-5 w-5" />
              </div>
              <AccordionRow label="Datos de identificación" />
              <AccordionRow label="Datos laborales" />
              <AccordionRow label="Datos financieros" edit />

              <AccordionRow label="Datos del vehículo" edit />
            </div>
          </div>

          <p className="text-base text-[#363f4f]">
            Los términos, condiciones y tratamiento de datos fueron aceptados
            a través del código OTP [28-02-2024] y el código OTP
            [29-02-2024].
          </p>

          <div className="flex justify-center">
            <span className="w-[271px] rounded-md bg-[#000093] px-[18px] py-2.5 text-center text-base font-semibold text-white shadow-xs">
              Gestionar crédito
            </span>
          </div>
        </div>
      </main>
    </div>
  )
}
