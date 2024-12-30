import axios from "axios";

const authApi = axios.create({
  baseURL: "", 
});

export async function login(login: string, password: string) {
  try {
    const response = await authApi.post("/login", { login, password });
    const token = response.data.token;

    localStorage.setItem("token", token);
    console.log("Login realizado com sucesso!");
  } catch (error) {
    console.error("Erro ao fazer login:", error);
    throw error;
  }
}

export function logout() {

  localStorage.removeItem("token");
  console.log("Logout realizado com sucesso!");
}

export function getToken(): string | null {
  return localStorage.getItem("token");
}