import axios from "axios";

export const api_dashboard = axios.create({
    baseURL: import.meta.env.VITE_API_DASHBOARD ?? "",
    // withCredentials: true,
    timeout: 300000,
  });