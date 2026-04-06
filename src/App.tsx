import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-beige font-poppins">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<div>Accueil</div>} />
          <Route path="/prestations" element={<div>Prestations</div>} />
          <Route path="/contact" element={<div>Contact</div>} />
          <Route path="/rendez-vous" element={<div>RDV</div>} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
