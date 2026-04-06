import api from "./axios";

export const getRdvs = async () => {
  const res = await api.get("/rdv");
  return res.data;
};

export const createRdv = async (
  prestation: string,
  date: string,
  prix: string,
) => {
  const res = await api.post("/rdv", { prestation, date, prix });
  return res.data;
};

export const deleteRdv = async (rdvId: string) => {
  const res = await api.delete(`/rdv/${rdvId}`);
  return res.data;
};
