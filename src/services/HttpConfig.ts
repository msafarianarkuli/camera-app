import axios from "axios";

const baseURL = "https://rickandmortyapi.com/api/";

const Http = axios.create({ baseURL });
Http.interceptors.request.use((config) => {
  return config;
});

export default Http;
