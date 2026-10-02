import { PrototypeProvider } from "./prototype/store"
import TestLayer from "./prototype/TestLayer"

export default function App() {
  return (
    <PrototypeProvider>
      <TestLayer />
    </PrototypeProvider>
  )
}
