import React from "react";
import { Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react";
import PlatformIconList from "../../PlatformIconList";
import getCroppedImageURL from "../../../services/image-url";
import CriticScroe from "./CriticScroe";
import { Game } from "../../../interface/gameInterface";

interface gameCardProps {
  game: Game;
}

const GameCard: React.FC<gameCardProps> = ({ game }) => {
  return (
    <Card borderRadius={"10px"} overflow={"hidden"} cursor={"pointer"}>
      <Image src={getCroppedImageURL(game.background_image)} alt="Image" />
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
