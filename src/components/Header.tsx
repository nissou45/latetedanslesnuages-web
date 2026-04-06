import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Header() {
  return (
    <header className="flex flex-col items-center text-center pt-4">
      <img src={logo} alt="Logo La Tête dans les Nuages" className="w-48" />
      <h1 className="text-4xl font-semibold text-gris-doux mt-2">
        La Tête dans les Nuages
      </h1>
      <p className="text-gris-clair text-base mt-1">
        Coiffure à domicile – douceur & élégance
      </p>

      <nav className="flex gap-2 mt-4">
        {[
          { to: "/", label: "Accueil" },
          { to: "/prestations", label: "Prestations" },
          { to: "/contact", label: "Contact" },
          { to: "/rendez-vous", label: "Prendre RDV" },
          { to: "/inscription", label: "S'inscrire" },

          { to: "/connexion", label: "Connexion" },
        ].map(({ to, label }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `px-4 py-2 rounded-full text-gris-doux transition-all duration-200 text-sm
              ${isActive ? "bg-rose-poudre border border-rose-hover" : "hover:bg-rose-poudre"}`
            }
          >
            {label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}
