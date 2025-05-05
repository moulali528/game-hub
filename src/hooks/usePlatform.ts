import { Platform } from "../interface/gameInterface";
import useData from "./useData";

const usePlatform = () => useData<Platform>("/platforms/lists/parents");

export default usePlatform;
