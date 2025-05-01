import React from "react";
import { Game } from "../interface/gameInterface";
import { Card, CardBody, Heading } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";

interface gameCardProps {
  game: Game;
}

const GameCard: React.FC<gameCardProps> = ({ game }) => {
  return (
    <Card borderRadius={"10px"} overflow={"hidden"}>
      <img src={game.background_image} alt="Image" />
      <CardBody>
        <Heading fontSize={"xl"}>{game.name}</Heading>
        <PlatformIconList
          platforms={game.parent_platforms.map((p) => p.platform)}
        />
      </CardBody>
    </Card>
  );
};

export default GameCard;
