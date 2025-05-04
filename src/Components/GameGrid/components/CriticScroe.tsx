import { Badge } from "@chakra-ui/react";
import React from "react";

interface CriticScroeProps {
  score: number;
}
const CriticScroe: React.FC<CriticScroeProps> = ({ score }) => {
  const color = score > 75 ? "green" : score > 60 ? "yellow" : "";
  return (
    <Badge
      colorScheme={color}
      fontSize={"14px"}
      paddingX={"10px"}
      borderRadius={"4px"}
    >
      {score}
    </Badge>
  );
};

export default CriticScroe;
