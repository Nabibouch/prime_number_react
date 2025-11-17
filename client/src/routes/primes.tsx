import Primes from '@/Views/Primes'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/primes')({
  component: Primes,
})

