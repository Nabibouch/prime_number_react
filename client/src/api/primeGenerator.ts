import { fetchNumberAlea } from './numberApi'

export function isPrime(n: number): boolean {
  if (n < 2) return false
  if (n === 2) return true
  if (n % 2 === 0) return false

  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    if (n % i === 0) return false
  }
  return true
}

export async function fetchPrimeCandidate() {
  const { number } = await fetchNumberAlea()
  return number
}

export async function fetchPrimeWithRetry(maxAttempts = 250) {
  for (let attempt = 0; attempt < maxAttempts; attempt++) {
    const candidate = await fetchPrimeCandidate()
    if (isPrime(candidate)) {
      return candidate
    }
  }
  throw new Error('Impossible de générer un nombre premier pour le moment.')
}

