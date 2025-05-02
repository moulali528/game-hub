import React from "react";
import { Game } from "../interface/gameInterface";
import { Card, CardBody, Heading, HStack } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScroe from "./CriticScroe";
import getCroppedImageURL from "../services/image-url";

interface gameCardProps {
  game: Game;
}

const GameCard: React.FC<gameCardProps> = ({ game }) => {
  return (
    <Card width={"300px"} borderRadius={"10px"} overflow={"hidden"}>
      <img src={getCroppedImageURL(game.background_image)} alt="Image" />
      <CardBody>
        <Heading fontSize={"xl"}>{game.name}</Heading>
        <HStack justifyContent={"space-between"}>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScroe score={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
