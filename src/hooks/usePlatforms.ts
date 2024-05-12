import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";
import platforms from "../data/platforms";
import { FetchResponse } from "../services/api-client";
export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () =>
  useQuery<FetchResponse<Platform>, Error>({
    queryKey: ["platform"],
    queryFn: () =>
      apiClient
        .get("/platforms/lists/parents")
        .then((response) => response.data),
    staleTime: 24 * 60 * 60 * 1000, // 24Hrs
    initialData: { count: platforms.length, results: platforms },
  });

export default usePlatforms;
