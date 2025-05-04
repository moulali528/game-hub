import { Game } from "../interface/gameInterface";
import useData from "./useData";

const useGame = () => useData<Game>("/games");

export default useGame;
