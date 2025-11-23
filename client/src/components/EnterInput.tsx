import { Button } from "./ui/button"
import { Card, CardContent } from "./ui/card"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { useEnterInput } from "../hooks/useEnterInput"
import ResultCard from "./ResultCard"

const EnterInput = () => {
  const { handleValueChange, handleCheckPrime, handleSubmit } = useEnterInput()

  return (
    <Card className="w-full max-w-2xl border-white/10 bg-slate-900/50 backdrop-blur-xl shadow-2xl">
      <CardContent className="px-5 pt-1 pb-3">
        <div className="text-center mb-4">
          <Label htmlFor="input" className="text-xl font-semibold text-white">
            Entrez un nombre
          </Label>
        </div>
        <form className="space-y-5" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <Input
              id="input"
              type="number"
              placeholder="Ex: 17, 29, 101..."
              className="h-16 text-xl text-center bg-slate-950/50 border-white/10 text-white placeholder:text-slate-500 focus:border-blue-500/50 focus:ring-blue-500/20 transition-all"
              onChange={(e) => handleValueChange(Number(e.target.value))}
              required
            />
          </div>
          <ResultCard />
          <Button
            type="button"
            onClick={handleCheckPrime}
            className="w-full h-14 text-base font-semibold bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 transition-all hover:scale-105"
          >
            Vérifier si premier
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};
export default EnterInput;
