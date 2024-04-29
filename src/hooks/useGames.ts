import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

const env = await import.meta.env;
const ApiKey = env.VITE_RAPID_API_KEY;
const HOST = env.VITE_RAPID_API_HOST;

interface Game {
  developer: string;
  freetogame_profile_url: string;
  game_url: string;
  genre: string;
  id: number;
  platform: string;
  publisher: string;
  release_date: string;
  short_description: string;
  thumbnail: string;
  title: string;
}

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [errors, setErrors] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    apiClient
      .get<Game[]>("/games", {
        signal: controller.signal,
        headers: { "X-RapidAPI-Key": ApiKey, "X-RapidAPI-Host": HOST },
      })
      .then((res) => setGames(res.data))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setErrors(err.message);
      });

    return () => controller.abort();
  }, []);
  return { games, errors };
};

export default useGames();
