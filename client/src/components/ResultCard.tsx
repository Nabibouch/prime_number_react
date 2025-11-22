import usePrimiteStore from "@/Store/usePrimiteStore";
import { Hash } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const ResultCard = () => {
  const number = usePrimiteStore((state) => state.number);
  const visible = usePrimiteStore((state) => state.visible);

  const resultText = visible ? "PRIME" : "COMPOSITE";
  const borderColor = visible ? "border-green-300" : "border-red-300";
  const iconBgColor = visible ? "bg-green-500" : "bg-red-500";
  const textColor = visible ? "text-green-500" : "text-red-500";

  return (
    <Card className={`${borderColor} bg-white rounded-lg shadow-sm`}>
      <CardContent className="flex flex-col items-center justify-center p-8 gap-6">
        <div className={`w-16 h-16 rounded-full ${iconBgColor} flex items-center justify-center`}>
          <Hash className="w-8 h-8 text-white" />
        </div>
        <div className="text-3xl font-bold text-center">
          <span className="text-blue-600">{number}</span>
          <span className="text-black"> is </span>
          <span className={textColor}>{resultText}</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default ResultCard;