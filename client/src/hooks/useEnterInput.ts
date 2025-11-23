import { useState, useCallback } from "react";
import usePrimiteStore from "../Store/usePrimiteStore";

export const useEnterInput = () => {
  const prime = usePrimiteStore((state) => state.prime);
  const [value, setValue] = useState<number>(0);

  const handleValueChange = useCallback((newValue: number) => {
    setValue(newValue);
  }, []);

  const handleCheckPrime = useCallback(() => {
    prime(value);
  }, [prime, value]);

  const handleSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    prime(value);
  }, [prime, value]);

  return {
    value,
    handleValueChange,
    handleCheckPrime,
    handleSubmit,
  };
};