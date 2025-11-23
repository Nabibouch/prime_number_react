import { create } from 'zustand';
import { persist } from 'zustand/middleware'

interface NumberState {
  number: number;
  visible: boolean;
  prime: (input?: number) => boolean;
}

function isPrime(n: number): boolean {
  if (n < 2) return false;
  if (n === 2) return true;
  if (n % 2 === 0) return false;
  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    if (n % i === 0) return false;
  }
  return true;
}

export const usePrimiteStore = create<NumberState>()(
    persist(
      (set, get) => ({
        number: 0,
        visible: false,
  
        prime: (input) => {
          const value = input ?? get().number;
          const isPrimeValue = isPrime(value);
  
          set({
            number: value,
            visible: isPrimeValue,
          });
  
          return isPrimeValue;
        },
      }),
      {
        name: 'primitive-store',
      }
    )
  );
  

export default usePrimiteStore;
