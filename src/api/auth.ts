import api from "./axios";

export const inscription = async (
  nom: string,
  email: string,
  password: string,
) => {
  const res = await api.post("/auth/inscription", { nom, email, password });
  return res.data;
};

export const connexion = async (email: string, password: string) => {
  const res = await api.post("/auth/connexion", { email, password });
  return res.data;
};
