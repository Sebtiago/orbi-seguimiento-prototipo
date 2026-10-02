import { createPortal } from "react-dom"
import { readLogArchive, type LogEntry } from "../store"
import { Button, Modal } from "./ui"

const EVENT_LABEL: Record<string, string> = {
  session_start: "Inicio de sesión",
  session_reset: "Reinicio de prueba",
  session_end: "Fin de sesión",
  task_start: "Inicio de tarea",
  task_complete: "Tarea completada",
  explore_start: "Exploración libre",
}

function fmt(at: string) {
  try {
    return new Date(at).toLocaleString("es-CO", {
      dateStyle: "short",
      timeStyle: "medium",
    })
  } catch {
    return at
  }
}

function toCsv(entries: LogEntry[]): string {
  const header = "Fecha y hora,Evento,Detalle"
  const rows = entries.map((e) =>
    [fmt(e.at), EVENT_LABEL[e.event] ?? e.event, e.detail ?? ""]
      .map((v) => `"${String(v).replace(/"/g, '""')}"`)
      .join(","),
  )
  return [header, ...rows].join("\n")
}

function downloadCsv(entries: LogEntry[]) {
  const blob = new Blob([toCsv(entries)], { type: "text/csv;charset=utf-8;" })
  const url = URL.createObjectURL(blob)
  const a = document.createElement("a")
  a.href = url
  a.download = `orbi-seguimiento-log-${Date.now()}.csv`
  a.click()
  URL.revokeObjectURL(url)
}

export function SessionLogModal({ onClose }: { onClose: () => void }) {
  const entries = readLogArchive()
  return createPortal(
    <div className="fixed inset-0 z-[70]">
      <Modal title="Log de sesiones" onClose={onClose} width="max-w-[640px]">
        <p className="mb-4 text-center text-sm text-chrome-muted">
          Registro de fecha y hora por tarea, para revisar tiempos en el
          análisis. Se guarda en este navegador entre sesiones. Panel solo
          para el investigador — ábrelo con Ctrl+Alt+L.
        </p>
        <div className="mb-4 max-h-[50vh] overflow-y-auto rounded-lg border border-neutral-200">
          <table className="w-full text-left text-xs">
            <thead className="sticky top-0 bg-neutral-50">
              <tr>
                <th className="px-3 py-2 font-semibold text-chrome-muted">
                  Fecha y hora
                </th>
                <th className="px-3 py-2 font-semibold text-chrome-muted">
                  Evento
                </th>
                <th className="px-3 py-2 font-semibold text-chrome-muted">
                  Detalle
                </th>
              </tr>
            </thead>
            <tbody>
              {entries.length === 0 ? (
                <tr>
                  <td
                    colSpan={3}
                    className="px-3 py-6 text-center text-chrome-muted"
                  >
                    Aún no hay registros
                  </td>
                </tr>
              ) : (
                entries.map((e, i) => (
                  <tr key={i} className="border-t border-neutral-100">
                    <td className="px-3 py-2 whitespace-nowrap">
                      {fmt(e.at)}
                    </td>
                    <td className="px-3 py-2">
                      {EVENT_LABEL[e.event] ?? e.event}
                    </td>
                    <td className="px-3 py-2">{e.detail ?? "—"}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
        <div className="flex justify-center gap-3">
          <Button variant="outline" onClick={onClose}>
            Cerrar
          </Button>
          <Button
            disabled={entries.length === 0}
            onClick={() => downloadCsv(entries)}
          >
            Descargar CSV
          </Button>
        </div>
      </Modal>
    </div>,
    document.body,
  )
}
