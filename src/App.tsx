import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Accueil from "./pages/Accueil";
import Prestations from "./pages/Prestations";
import Contact from "./pages/Contact";
import RendezVous from "./pages/RendezVous";

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
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
