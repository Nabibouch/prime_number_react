import { create } from 'zustand';

interface NumberState {
    number: number;
    visible: boolean;
    setInput: (value: number) => void;
    prime: (value?: number) => boolean;
}

const usePrimiteStore = create<NumberState>((set, get) => ({
    number: 0,
    visible: false,

    setInput: (value) => {
        set({ number: value });
        get().prime(value);
    },

    prime: (input) => {
        const value = input ?? get().number;

        if (value < 2) {
            set({ visible: false });
            return false;
        }
        if (value === 2) {
            set({ visible: true });
            return true;
        }
        if (value % 2 === 0) {
            set({ visible: false });
            return false;
        }
        for (let i = 3; i <= Math.sqrt(value); i += 2) {
            if (value % i === 0) {
                set({ visible: false });
                return false;
            }
        }
        set({ visible: true });
        return true;
    }
}))

export default usePrimiteStore;