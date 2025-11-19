import { create } from 'zustand';
import { fetchNumberAlea } from '@/api/numberApi';

function isPrime(n: number): boolean {
  if (n < 2) return false;
  if (n === 2) return true;
  if (n % 2 === 0) return false;
  for (let i = 3; i <= Math.sqrt(n); i += 2) { //sqrt veut dire square je sais que t'es ignorant et tu parles pas anglais
    if (n % i === 0) return false;
  }
  return true;
}

interface PrimeGeneratorState {
  prime: number | null;
  isLoading: boolean;
  generate: () => Promise<void>;
}

export const usePrimeGeneratorStore = create<PrimeGeneratorState>((set) => ({
  prime: null,
  isLoading: false,
  generate: async () => {
    set({ isLoading: true });
    const { number } = await fetchNumberAlea();
    if (isPrime(number)) {
      set({ prime: number, isLoading: false });
    } else {
      set({ isLoading: false });
    }
  },
}));

