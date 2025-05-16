import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";
import { Genre } from "../interface/gameInterface";
import { FetchResponse } from "./useData";

const useGenre = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: () =>
      apiClient.get<FetchResponse<Genre>>("/genres").then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000,
  });

export default useGenre;
