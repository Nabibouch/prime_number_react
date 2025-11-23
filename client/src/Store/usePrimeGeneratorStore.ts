import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { fetchPrimeCandidate, fetchPrimeWithRetry, isPrime } from '@/api/primeGenerator'

interface PrimeGeneratorState {
  prime: number | null
  history: number[]
  isLoading: boolean
  isAuto: boolean
  generateOnce: () => Promise<void>
  generatePrimeOnly: () => Promise<void>
  toggleAuto: () => Promise<void>
}

let autoTimeout: ReturnType<typeof setTimeout> | null = null

const pushToHistory = (history: number[], value: number, limit = 10) => {
  return [value, ...history].slice(0, limit)
}

export const usePrimeGeneratorStore = create<PrimeGeneratorState>()(
  persist(
    (set, get) => ({
      prime: null,
      history: [],
      isLoading: false,
      isAuto: false,

      generateOnce: async () => {
        set({ isLoading: true })
        const number = await fetchPrimeCandidate()

        if (isPrime(number)) {
          set((state) => ({
            prime: number,
            history: pushToHistory(state.history, number),
            isLoading: false
          }))
        } else {
          set({ isLoading: false })
        }
      },

      generatePrimeOnly: async () => {
        set({ isLoading: true })
        try {
          const prime = await fetchPrimeWithRetry()
          set((state) => ({
            prime,
            history: pushToHistory(state.history, prime),
            isLoading: false
          }))
        } catch (error) {
          set({ isLoading: false })
          throw error
        }
      },

      toggleAuto: async () => {
        const { isAuto } = get()

        // 1. STOP AUTO
        if (isAuto) {
          if (autoTimeout) {
            clearTimeout(autoTimeout)
            autoTimeout = null
          }
          set({ isAuto: false })
          return
        }

        // 2. START AUTO
        set({ isAuto: true })

        const loop = async () => {
          if (!get().isAuto) return

          try {
            const prime = await fetchPrimeWithRetry()
            set((state) => ({
              prime,
              history: pushToHistory(state.history, prime)
            }))
          } catch {
            set({ isAuto: false })
            return
          }

          autoTimeout = setTimeout(loop, 500)
        }

        loop()
      }
    }),
    {
      name: 'prime-generator-store',
      partialize: (state) => ({
        // 🔥 on persiste uniquement ça :
        prime: state.prime,
        history: state.history
      })
    }
  )
)
