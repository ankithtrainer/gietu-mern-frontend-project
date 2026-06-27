import axios from "axios";
import { VITE_API_URL } from "../config/env";
console.log(VITE_API_URL);
const authApi = axios.create({
  baseURL: VITE_API_URL
});

authApi.interceptors.request.use((config) => {

  const token =
    localStorage.getItem("token");

  if(token){

    config.headers.Authorization =
      `Bearer ${token}`;
  }

  return config;
});

export default authApi;