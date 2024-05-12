import axios from "axios"

export interface FetchResponse<T> {
  count: number;
  results: T[];
}

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "d728f16791a74489bd1e57efc1359d6a",
  },
});