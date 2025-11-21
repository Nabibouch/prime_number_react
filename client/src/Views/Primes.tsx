import EnterInput from "@/components/EnterInput";
import ResultCard from "@/components/ResultCard";

const Primes = () => {


  return (
    <div className="flex flex-col items-center gap-6">
      <div className="flex flex-col text-center gap-4">
        <h2 className="text-sm uppercase tracking-widest text-slate-500">Test de nombre premier</h2>
        <h1 className="text-4xl font-semibold text-slate-900">Testez votre nombre</h1>
        <p className="text-slate-500 max-w-2xl mx-auto">
          Ce test vous permet de vérifier facilement si un nombre est premier. Il vous suffit d’entrer 
          une valeur, et l’outil analyse instantanément si elle ne peut être divisée que par 1 et par elle-même. C’est un moyen simple et rapide pour mieux
          comprendre et identifier les nombres premiers
        </p>
    </div>
      <EnterInput />
      <ResultCard />
    </div>
  );
};

export default Primes;
