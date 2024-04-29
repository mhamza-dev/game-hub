import axios from "axios"

const env = await import.meta.env;
const KEY = env.VITE_RAWG_API_KEY;

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: KEY,
  },
});