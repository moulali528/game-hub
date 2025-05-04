import React, { useEffect, useState } from "react";
import { Genre } from "../interface/gameInterface";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface FetchGenreResponse {
  count: number;
  results: Genre[];
}

const useGenre: React.FC = () => {
  const [genres, setGenrs] = useState<Genre[]>([]);
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const controller = new AbortController();
    setIsLoading(true);
    apiClient
      .get<FetchGenreResponse>("/genres", { signal: controller.signal })
      .then((res) => {
        setGenrs(res.data.results);
        setIsLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err);
      });
    return () => controller.abort();
  }, []);

  return { genres, error, isLoading };
};

export default useGenre;
