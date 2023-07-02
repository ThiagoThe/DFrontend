import axios, { AxiosInstance } from "axios";

const api: AxiosInstance = axios.create({
  baseURL: "https://swapi.dev/api/vehicles/",
});

export { api };
