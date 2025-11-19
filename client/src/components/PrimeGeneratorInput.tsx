import { usePrimeGeneratorStore } from "@/Store/usePrimeGeneratorStore";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

const PrimeGeneratorInput = () => {
  const { prime, isLoading, generate } = usePrimeGeneratorStore();

  return (
    <Card className="w-[600px]">
      <CardContent className="p-6 space-y-4">
        <Button onClick={generate} disabled={isLoading} className="w-full">
          {isLoading ? "Génération..." : "Générer un nombre premier"}
        </Button>
        {prime && (
          <div className="text-center text-2xl font-bold text-primary">
            {prime}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default PrimeGeneratorInput;
