import { Game, GameQuery, Genre, Platform } from "../interface/gameInterface";
import useData from "./useData";

const useGame = (gameQuery: GameQuery) =>
  useData<Game>(
    "/games",
    {
      params: {
        genres: gameQuery.genre?.id,
        platforms: gameQuery.platform?.id,
        ordering: gameQuery.selectedOrder,
      },
    },
    [gameQuery]
  );

export default useGame;
