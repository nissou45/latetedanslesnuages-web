import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Accueil from "./pages/Accueil";
import Prestations from "./pages/Prestations";
import Contact from "./pages/Contact";
import RendezVous from "./pages/RendezVous";
import Inscription from "./pages/Inscription";
import Connexion from "./pages/Connexion";
import MonEspace from "./pages/MonEspace";
export default function App() {
  return (
    <div className="min-h-screen bg-beige font-poppins">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/prestations" element={<Prestations />} />{" "}
          <Route path="/contact" element={<Contact />} />
          <Route path="/rendez-vous" element={<RendezVous />} />
          <Route path="/inscription" element={<Inscription />} />
          <Route path="/connexion" element={<Connexion />} />
          <Route path="/mon-espace" element={<MonEspace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
