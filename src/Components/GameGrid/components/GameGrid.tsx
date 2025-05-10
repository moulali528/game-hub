import { Text, SimpleGrid } from "@chakra-ui/react";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCard from "./GameCard";
import useGame from "../../../hooks/useGame";
import { GameQuery, Genre, Platform } from "../../../interface/gameInterface";

// interface GameGridProps {
//   selectedGenre: Genre | null;
//   selectedPlatform: Platform | null;
//   selectedOrder: string;
// }

interface GameGridProps {
  gameQuery: GameQuery;
}

const GameGrid: React.FC<GameGridProps> = ({ gameQuery }) => {
  const { data: games, error, isLoading } = useGame(gameQuery);
  const skeletons: number[] = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
  ];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding={"10px"}
        spacing={3}
        borderRadius={"10px"}
      >
        {isLoading &&
          skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)}
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
