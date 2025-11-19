import EnterInput from "@/components/EnterInput";
import usePrimiteStore from "@/Store/usePrimiteStore";

const Primes = () => {
  const number = usePrimiteStore((state) => state.number);
  const visible = usePrimiteStore((state) => state.visible);

  return (
    <>
      <div className="flex flex-col items-center">
        <EnterInput />
        <span>{number}</span>
        {visible ? "prime" : "false"}
      </div>
    </>
  );
};

export default Primes;
