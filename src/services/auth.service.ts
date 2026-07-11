
import { api } from "@/lib/api";

export async function login(email: string, senha: string) {
  const response = await api.post("/signin", {
    email,
    senha,
  });

  return response.data;
}

export async function signup(
  nome: string,
  email: string,
  senha: string
) {
  const response = await api.post("/signup", {
    nome,
    email,
    senha,
  });

  return response.data;
}

