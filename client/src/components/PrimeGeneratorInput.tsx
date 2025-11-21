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
    <Card className="w-full max-w-xl">
      <CardContent className="p-6 space-y-4">
        <div className="grid gap-2 sm:grid-cols-2">
          <Button onClick={generateOnce} disabled={isLoading}>
            {isLoading ? "..." : "Générer (affiche si premier)"}
          </Button>
          <Button
            onClick={generatePrimeOnly}
            disabled={isLoading}
            variant="secondary"
          >
            {isLoading ? "..." : "Forcer un nombre premier"}
          </Button>
        </div>
        <Button
          onClick={toggleAuto}
          variant={isAuto ? "destructive" : "outline"}
          className="w-full"
        >
          {isAuto ? "Arrêter le flux" : "Générer en continu"}
        </Button>

        <div className="text-center text-2xl font-bold text-primary min-h-[48px] flex items-center justify-center">
          {prime ?? "—"}
        </div>

        {history.length > 0 && (
          <div className="text-sm text-muted-foreground">
            <span className="font-semibold">Historique :</span>{" "}
            {history.join(", ")}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default PrimeGeneratorInput;
