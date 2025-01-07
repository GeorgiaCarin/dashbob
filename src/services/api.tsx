import axios from "axios";
import { getToken } from "./AuthService";

export const api_dashboard = axios.create({
    baseURL: `${import.meta.env.VITE_API_DASHBOARD}/dashboard`,

    // withCredentials: true,
    timeout: 300000,
  });

  api_dashboard.interceptors.request.use((config) => {
    const token = getToken(); // Pega o token atualizado
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });