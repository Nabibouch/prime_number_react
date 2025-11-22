import EnterInput from "@/components/EnterInput"
import ResultCard from "@/components/ResultCard"

const Primes = () => {
  return (
    <div className="space-y-16">
      <section className="text-center space-y-6 max-w-3xl mx-auto">
        <div className="inline-block">
          <span className="text-xs uppercase tracking-widest text-blue-400 font-semibold px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20">
            Test de nombre premier
          </span>
        </div>
        <h1 className="text-5xl md:text-6xl font-bold leading-tight">
          <span className="text-white">Testez votre </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
            nombre
          </span>
        </h1>
        <p className="text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto">
          Ce test vous permet de vérifier facilement si un nombre est premier.
          Il vous suffit d'entrer une valeur, et l'outil analyse instantanément
          si elle ne peut être divisée que par 1 et par elle-même.
        </p>
      </section>

      <div className="flex flex-col items-center gap-10">
        <EnterInput />
        <ResultCard />
      </div>
    </div>
  )
}

export default Primes;
