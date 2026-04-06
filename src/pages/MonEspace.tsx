type Rdv = {
  id: number;
  date: string;
  prestation: string;
  prix: string;
  statut: "à venir" | "terminé";
};

const rdvMock: Rdv[] = [
  {
    id: 1,
    date: "12 avril 2025 à 14h00",
    prestation: "Balayage / Mèches",
    prix: "80 €",
    statut: "à venir",
  },
  {
    id: 2,
    date: "03 mars 2025 à 10h30",
    prestation: "Shampoing + Coupe + Brushing",
    prix: "40 €",
    statut: "terminé",
  },
  {
    id: 3,
    date: "15 janvier 2025 à 11h00",
    prestation: "Soin profond (Botox / Kératine)",
    prix: "50 €",
    statut: "terminé",
  },
];

export default function MonEspace() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-10">
      <div className="flex flex-col gap-8">
        {/* HEADER ESPACE */}
        <div className="bg-white rounded-3xl p-8 shadow-sm flex items-center gap-6">
          <div className="w-16 h-16 rounded-full bg-rose-poudre flex items-center justify-center text-2xl font-semibold text-gris-doux">
            N
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gris-doux">
              Bonjour, Nissrine ✨
            </h2>
            <p className="text-gris-clair text-sm">cliente@email.com</p>
          </div>
        </div>

        {/* HISTORIQUE */}
        <div className="bg-white rounded-3xl p-8 shadow-sm">
          <h3 className="text-lg font-semibold text-gris-doux mb-6">
            Mes rendez-vous
          </h3>

          <div className="flex flex-col gap-4">
            {rdvMock.map((rdv) => (
              <div
                key={rdv.id}
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
                </div>
              </div>
            ))}
          </div>
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
