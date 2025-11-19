import usePrimiteStore from "../Store/usePrimiteStore";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

const EnterInput = () => {
  const setInput = usePrimiteStore((state) => state.setInput);
  const prime = usePrimiteStore((state) => state.prime);

  return (
    <div>
      <Card className="w-[600px]">
        <CardContent>
          <form className="flex flex-col gap-2 p-2">
            <Label htmlFor="input">Ecrivez un nb</Label>
            <Input
              id="input"
              type="number"
              placeholder="ex : 12"
              className="h-16 bg-slate-100 focus:outline-slate-600"
              onChange={(e) => setInput(Number(e.target.value))}
              required
            />
            <Button onClick={() => prime}>Check !</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};
export default EnterInput;
