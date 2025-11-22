import usePrimiteStore from "@/Store/usePrimiteStore"
import { CheckCircle2, XCircle } from "lucide-react"
import { Card, CardContent } from "./ui/card"

const ResultCard = () => {
  const number = usePrimiteStore((state) => state.number);
  const visible = usePrimiteStore((state) => state.visible);

  if (number === 0) {
    return null
  }

  const isPrime = visible;
  const resultText = isPrime ? "PREMIER" : "COMPOSITE"
  const borderColor = isPrime? "border-green-500/30" : "border-orange-500/30"
  const iconBgColor = isPrime ? "bg-gradient-to-br from-green-500/20 to-green-600/20 border-green-500/20 text-green-400"
    : "bg-gradient-to-br from-orange-500/20 to-orange-600/20 border-orange-500/20 text-orange-400"
  const textColor = isPrime ? "text-green-400" : "text-orange-400"
  const glowColor = isPrime? "shadow-green-500/20" : "shadow-orange-500/20"

  return (
    <Card
      className={`${borderColor} w-full max-w-2xl bg-slate-900/50 backdrop-blur-xl border shadow-2xl ${glowColor} transition-all hover:scale-105`}
    >
      <CardContent className="flex flex-col items-center justify-center p-12 gap-8">
        <div
          className={`w-20 h-20 rounded-full ${iconBgColor} border flex items-center justify-center shadow-lg transition-all`}
        >
          {isPrime ? (
            <CheckCircle2 className="w-10 h-10" />
          ) : (
            <XCircle className="w-10 h-10" />
          )}
        </div>
        <div className="text-center space-y-4">
          <div className="text-6xl md:text-7xl font-bold text-white mb-2">
            {number}
          </div>
          <div className="text-2xl font-semibold text-slate-400">est</div>
          <div className={`text-4xl md:text-5xl font-bold ${textColor}`}>
            {resultText}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ResultCard;