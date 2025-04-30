import { Text, SimpleGrid } from "@chakra-ui/react";
import useGames from "../hooks/useGame";
import GameCard from "./GameCard";

const GameGrid: React.FC = () => {
  const { games, error } = useGames();

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding={"10px"}
        spacing={10}
        borderRadius={"10px"}
      >
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
