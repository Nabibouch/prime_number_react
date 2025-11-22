import PrimeGenerator from "@/Views/PrimeGenerator"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/prime-generator")({
  component: PrimeGenerator,
})
