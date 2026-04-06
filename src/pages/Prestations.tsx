import { useState } from "react";
import { prestations } from "../data/prestations";
import type { Prestation } from "../data/prestations";

export default function Prestations() {
  const [selected, setSelected] = useState<Prestation | null>(null);

  return (
    <section className="max-w-6xl mx-auto px-6 py-10">
      <h2 className="text-3xl font-semibold text-gris-doux text-center mb-2">
        Mes prestations
      </h2>
      <p className="text-center text-gris-clair mb-10">Coiffure à domicile</p>

      {/* GRILLE DE CARTES */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {prestations.map((p, i) => (
          <div
            key={i}
            className="bg-white rounded-3xl p-8 shadow-sm flex flex-col justify-between"
          >
            <div>
              <h3 className="text-gris-doux font-semibold text-lg mb-2">
                {p.title}
              </h3>
              <p className="text-gris-clair text-sm leading-relaxed">
                {p.description}
              </p>
            </div>
            <button
              onClick={() => setSelected(p)}
              className="mt-6 self-center px-6 py-2 rounded-full bg-rose-poudre text-gris-doux font-medium hover:bg-rose-hover transition-all duration-200"
            >
              Voir détails
            </button>
          </div>
        ))}
      </div>

      {/* MODALE */}
      {selected && (
        <div
          className="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-white rounded-3xl p-10 max-w-lg w-[90%] relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-5 text-2xl text-gris-clair hover:text-gris-doux"
            >
              ✕
            </button>
            <h2 className="text-xl font-semibold text-gris-doux mb-2">
              {selected.title}
            </h2>
            <p className="text-sm font-medium text-gris-clair mb-3">
              Durée : {selected.time}
            </p>
            <p className="text-gris-clair text-sm leading-relaxed mb-4">
              {selected.description}
            </p>
            <ul className="list-disc pl-5 text-sm text-gris-clair space-y-1">
              {selected.options.map((opt, i) => (
                <li key={i}>
                  <strong>{opt.label}</strong> : {opt.price}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </section>
  );
}
