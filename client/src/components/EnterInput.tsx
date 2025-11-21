import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { useEnterInput } from "../hooks/useEnterInput";

const EnterInput = () => {
  const { handleValueChange, handleCheckPrime, handleSubmit } = useEnterInput();

  return (
    <div>
      <Card className="w-[600px]">
        <CardContent>
          <form className="flex flex-col gap-2 p-2" onSubmit={handleSubmit}>
            <Label htmlFor="input">Ecrivez un nb</Label>
            <Input
              id="input"
              type="number"
              placeholder="ex : 12"
              className="h-16 bg-slate-100 focus:outline-slate-600"
              onChange={(e) => handleValueChange(Number(e.target.value))}
              required
            />
            <Button 
            type="button" 
            onClick={handleCheckPrime}>
              Check !
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};
export default EnterInput;
