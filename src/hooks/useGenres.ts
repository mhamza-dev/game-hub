// import genres from "../data/genres";

import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import APIClient, { FetchResponse } from "../services/api-client";
import Genre from "../entities/Genre";

// const useGenres = () => ({data: genres, isLoading: false, error: null})
const apiClient = new APIClient<Genre>("/genres");

const useGenres = () =>
  useQuery<FetchResponse<Genre>, Error>({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, // 24Hrs
    initialData: { count: genres.length, results: genres, next: "" },
  });

export default useGenres;