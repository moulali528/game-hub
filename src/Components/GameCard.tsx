import React from "react";
import { Game } from "../interface/gameInterface";
import { Card, CardBody, Heading, Text } from "@chakra-ui/react";

interface gameCardProps {
  game: Game;
}

const GameCard: React.FC<gameCardProps> = ({ game }) => {
  return (
    <Card borderRadius={"10px"} overflow={"hidden"}>
      <img src={game.background_image} alt="Image" />
      <CardBody>
        <Heading fontSize={"xl"}>{game.name}</Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
