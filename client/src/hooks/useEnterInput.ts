import { useState } from "react";
import usePrimiteStore from "../Store/usePrimiteStore";

export const useEnterInput = () => {
  const prime = usePrimiteStore((state) => state.prime);
  const [value, setValue] = useState(0);

  const handleValueChange = (newValue: number) => {
    setValue(newValue);
  };

  const handleCheckPrime = () => {
    prime(value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleCheckPrime();
  };

  return {
    value,
    handleValueChange,
    handleCheckPrime,
    handleSubmit,
  };
};

