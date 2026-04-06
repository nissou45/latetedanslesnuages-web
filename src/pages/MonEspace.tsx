import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getRdvs, deleteRdv } from "../api/rdv";

type Rdv = {
  _id: string;
  prestation: string;
  date: string;
  prix: string;
  statut: string;
};

export default function MonEspace() {
  const navigate = useNavigate();
  const [rdvs, setRdvs] = useState<Rdv[]>([]);
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/connexion");
      return;
    }
    getRdvs().then(setRdvs);
  }, [navigate]);

  const handleDelete = async (rdvId: string) => {
    await deleteRdv(rdvId);
    setRdvs(rdvs.filter((r) => r._id !== rdvId));
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/connexion");
  };

  return (
    <section className="max-w-3xl mx-auto px-6 py-10">
      <div className="flex flex-col gap-8">
        {/* HEADER ESPACE */}
        <div className="bg-white rounded-3xl p-8 shadow-sm flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 rounded-full bg-rose-poudre flex items-center justify-center text-2xl font-semibold text-gris-doux">
              {user.nom?.charAt(0).toUpperCase()}
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gris-doux">
                Bonjour, {user.nom} ✨
              </h2>
              <p className="text-gris-clair text-sm">{user.email}</p>
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="text-sm px-4 py-2 rounded-full bg-rose-poudre text-gris-doux hover:bg-rose-hover transition-all"
          >
            Déconnexion
          </button>
        </div>

        {/* HISTORIQUE */}
        <div className="bg-white rounded-3xl p-8 shadow-sm">
          <h3 className="text-lg font-semibold text-gris-doux mb-6">
            Mes rendez-vous
          </h3>

          {rdvs.length === 0 ? (
            <p className="text-gris-clair text-sm text-center">
              Vous n'avez pas encore de rendez-vous.
            </p>
          ) : (
            <div className="flex flex-col gap-4">
              {rdvs.map((rdv) => (
                <div
                  key={rdv._id}
                  className="flex items-center justify-between p-4 rounded-2xl bg-[#faf7f5]"
                >
                  <div>
                    <p className="font-medium text-gris-doux text-sm">
                      {rdv.prestation}
                    </p>
                    <p className="text-gris-clair text-xs mt-1">{rdv.date}</p>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <span className="text-gris-doux font-semibold text-sm">
                      {rdv.prix}
                    </span>
                    <span
                      className={`text-xs px-3 py-1 rounded-full font-medium ${
                        rdv.statut === "à venir"
                          ? "bg-green-100 text-green-700"
                          : "bg-rose-poudre text-gris-doux"
                      }`}
                    >
                      {rdv.statut}
                    </span>
                    <button
                      onClick={() => handleDelete(rdv._id)}
                      className="text-xs text-red-400 hover:underline"
                    >
                      Supprimer
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* BOUTON NOUVEAU RDV */}
        <a
          href="/rendez-vous"
          className="text-center py-4 px-8 bg-rose-poudre text-gris-doux font-semibold rounded-full hover:bg-rose-hover transition-all duration-300"
        >
          Prendre un nouveau rendez-vous
        </a>
      </div>
    </section>
  );
}
