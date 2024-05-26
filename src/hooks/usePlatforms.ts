import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import platforms from "../data/platforms";
import { FetchResponse } from "../services/api-client";
import Platform from "../entities/Platform";
const apiClient = new APIClient<Platform>("/platforms/lists/parents");

const usePlatforms = () =>
  useQuery<FetchResponse<Platform>, Error>({
    queryKey: ["platform"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, // 24Hrs
    initialData: { count: platforms.length, results: platforms, next: "" },
  });

export default usePlatforms;
