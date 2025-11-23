import PrimeGeneratorInput from "@/components/PrimeGeneratorInput"

// const tips = [
//   "Le premier bouton utilise la valeur actuelle de l'API et affiche uniquement si elle est première.",
//   "Le second force la recherche jusqu'à trouver un nombre premier valide.",
//   "Le mode automatique chaîne les nombres premiers toutes les 500 ms.",
// ]

const PrimeGenerator = () => {
  return (
    <div className="space-y-6">
      <section className="text-center space-y-6 max-w-3xl mx-auto">
        <div className="inline-block">
          <span className="text-xs uppercase tracking-widest text-blue-400 font-semibold px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20">
            Laboratoire interactif
          </span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          <span className="text-white">Générateur de </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
            nombres premiers
          </span>
        </h1>
        <p className="text-xl text-slate-300 leading-relaxed">
          Pilotez notre fausse API pour tester différentes stratégies de
          génération. Passez en mode rafale pour observer la création continue
          de nombres premiers.
        </p>
      </section>

      <div className="flex justify-center">
        <PrimeGeneratorInput />
      </div>

      {/* <section className="grid md:grid-cols-3 gap-6">
        {tips.map((tip, index) => (
          <div
            key={index}
            className="relative p-6 rounded-xl border border-white/5 bg-slate-900/30 backdrop-blur-sm hover:border-white/10 hover:bg-slate-900/50 transition-all duration-300"
          >
            <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-blue-500/50" />
            <p className="text-sm text-slate-300 leading-relaxed pr-6">{tip}</p>
          </div>
        ))}
      </section> */}
    </div>
  )
}

export default PrimeGenerator;
