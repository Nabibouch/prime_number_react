import EnterInput from "@/components/EnterInput";
import ResultCard from "@/components/ResultCard";

const Primes = () => {


  return (
    <div className="flex flex-col items-center justify-center flex-1 gap-6">
      <EnterInput />
      <ResultCard />
    </div>
  );
};

export default Primes;
