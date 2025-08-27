import axios from "axios";

import { CAT_API, CAT_API_KEY } from "@/config/config";

const Api = axios.create({ baseURL: `${CAT_API}` });

export const getCatById = (catId) => Api.get(`/${catId}`);

export const getCatList = (num = 50) =>
  Api.get(`/search?page=0&limit=${num}&has_breeds=1&api_key=${CAT_API_KEY}`);

export const getRandomCat = () =>
  Api.get(`/search?has_breeds=1&api_key=${CAT_API_KEY}`);
