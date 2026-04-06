import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Header() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const isConnected = !!localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/connexion");
  };

  const links = [
    { to: "/", label: "Accueil" },
    { to: "/prestations", label: "Prestations" },
    { to: "/contact", label: "Contact" },
    { to: "/rendez-vous", label: "Prendre RDV" },
    ...(isConnected
      ? [{ to: "/mon-espace", label: `Mon espace` }]
      : [
          { to: "/inscription", label: "S'inscrire" },
          { to: "/connexion", label: "Connexion" },
        ]),
  ];

  return (
    <header className="flex flex-col items-center text-center pt-4 px-4">
      <img src={logo} alt="Logo" className="w-32 md:w-48" />
      <h1 className="text-2xl md:text-4xl font-semibold text-gris-doux mt-2">
        La Tête dans les Nuages
      </h1>
      <p className="text-gris-clair text-sm md:text-base mt-1">
        Coiffure à domicile – douceur & élégance
      </p>

      {/* DESKTOP NAV */}
      <nav className="hidden md:flex gap-2 mt-4 flex-wrap justify-center items-center">
        {links.map(({ to, label }) => (
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
        {isConnected && (
          <button
            onClick={handleLogout}
            className="px-4 py-2 rounded-full text-gris-clair text-sm hover:bg-rose-poudre transition-all"
          >
            Déconnexion
          </button>
        )}
      </nav>

      {/* MOBILE HAMBURGER */}
      <div className="md:hidden w-full flex justify-end px-2 mt-3">
        <button
          onClick={() => setOpen(!open)}
          className="text-gris-doux text-2xl px-3 py-1 rounded-xl hover:bg-rose-poudre transition-all"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <nav className="md:hidden flex flex-col w-full gap-1 mt-2 mb-3">
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `px-4 py-3 rounded-xl text-gris-doux text-sm text-left transition-all
                ${isActive ? "bg-rose-poudre" : "hover:bg-rose-poudre"}`
              }
            >
              {label}
            </NavLink>
          ))}
          {isConnected && (
            <button
              onClick={handleLogout}
              className="px-4 py-3 rounded-xl text-gris-clair text-sm text-left hover:bg-rose-poudre transition-all"
            >
              Déconnexion
            </button>
          )}
        </nav>
      )}
    </header>
  );
}
