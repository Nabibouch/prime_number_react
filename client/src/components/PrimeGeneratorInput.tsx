import { usePrimeGeneratorStore } from "@/Store/usePrimeGeneratorStore"
import { Button } from "./ui/button"
import { Card, CardContent } from "./ui/card"

const PrimeGeneratorInput = () => {
  const {
    prime,
    history,
    isLoading,
    isAuto,
    generateOnce,
    generatePrimeOnly,
    toggleAuto,
  } = usePrimeGeneratorStore()

  return (
    <Card className="w-full max-w-2xl border-white/10 bg-slate-900/50 backdrop-blur-xl shadow-2xl">
      <CardContent className="p-6 space-y-4">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-transparent to-blue-500/10 rounded-xl blur-xl" />
          <div className="relative text-center p-6 rounded-xl border border-white/10 bg-slate-950/50">
            <div className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 min-h-[80px] flex items-center justify-center">
              {prime ?? (
                <span className="text-slate-600 text-3xl font-normal">—</span>
              )}
            </div>
            <div className="mt-2 text-xs uppercase tracking-widest text-slate-500">
              {prime ? "Nombre premier" : "En attente"}
            </div>
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          <Button
            onClick={generateOnce}
            disabled={isLoading}
            className="h-11 text-sm font-semibold bg-gradient-to-r from-slate-700 to-slate-800 hover:from-slate-600 hover:to-slate-700 text-white border border-white/10 shadow-lg transition-all hover:scale-105"
          >
            {isLoading ? "Génération..." : "Générer (affiche si premier)"}
          </Button>
          <Button
            onClick={generatePrimeOnly}
            disabled={isLoading}
            className="h-11 text-sm font-semibold bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 transition-all hover:scale-105"
          >
            {isLoading ? "Recherche..." : "Forcer un nombre premier"}
          </Button>
        </div>

        <Button
          onClick={toggleAuto}
          className={`w-full h-11 text-sm font-semibold transition-all hover:scale-105 ${
            isAuto
              ? "bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 text-white shadow-lg shadow-red-500/30"
              : "bg-slate-800/50 hover:bg-slate-800 text-white border border-white/10"
          }`}
        >
          {isAuto ? "⏸ Arrêter le flux" : "▶ Générer en continu"}
        </Button>

        {history.length > 0 && (
          <div className="pt-4 border-t border-white/10">
            <div className="text-xs uppercase tracking-widest text-slate-500 mb-2 font-semibold">
              Historique récent
            </div>
            <div className="flex flex-wrap gap-2">
              {history.map((num, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-300 font-mono text-sm"
                >
                  {num}
                </span>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default PrimeGeneratorInput;