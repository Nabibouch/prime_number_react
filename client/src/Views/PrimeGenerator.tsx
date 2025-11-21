import PrimeGeneratorInput from "@/components/PrimeGeneratorInput";

const tips = [
  "Le premier bouton utilise la valeur actuelle de l'API et affiche uniquement si elle est première.",
  "Le second force la recherche jusqu'à trouver un nombre premier valide.",
  "Le mode automatique chaîne les nombres premiers toutes les 500 ms.",
];

const PrimeGenerator = () => {
  return (
    <div className="space-y-10">
      <section className="text-center space-y-4">
        <p className="text-sm uppercase tracking-widest text-slate-500">
          Laboratoire interactif HALAL
        </p>
        <h1 className="text-4xl font-semibold text-slate-900">
          Générateur de nombres premiers
        </h1>
        <p className="text-slate-500 max-w-2xl mx-auto">
          Pilotez notre fausse API pour explorer différentes stratégies de génération de nombres premiers. 
          Activez la génération continue pour observer un flux ininterrompu de nouveaux nombres, ou optez pour la génération ponctuelle
          afin d’obtenir un nombre premier aléatoire. À vous de choisir la méthode qui correspond le mieux à votre exploration.
        </p>
      </section>

      <div className="flex justify-center">
        <PrimeGeneratorInput />
      </div>

      <section className="grid gap-4 md:grid-cols-3 text-sm text-slate-600">
        {tips.map((tip, index) => (
          <div
            key={index}
            className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
          >
            {tip}
          </div>
        ))}
      </section>
    </div>
  );
};

export default PrimeGenerator;
