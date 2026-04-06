import { Link } from "react-router-dom";
import photo from "../assets/IMG_3355.png";

export default function Accueil() {
  return (
    <>
      {/* INTRO */}
      <section className="text-center max-w-2xl mx-auto mt-10 px-4">
        <h2 className="text-2xl font-semibold text-gris-doux mb-3">
          Coiffure à domicile, avec douceur et élégance
        </h2>
        <p className="text-gris-clair text-base">
          Bienvenue dans mon univers, où chaque coiffure devient un moment de
          bien-être.
        </p>
      </section>

      {/* À PROPOS */}
      <section className="flex justify-center px-6 py-10">
        <div className="flex flex-col md:flex-row items-start gap-16 max-w-5xl w-full">
          {/* PHOTO */}
          <div className="w-full md:w-1/2 flex justify-start">
            <img
              src={photo}
              alt="Nissrine"
              className="w-full max-w-sm rounded-2xl object-cover shadow-md"
            />
          </div>

          {/* TEXTE */}
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl font-semibold text-gris-doux mb-4">
              À propos
            </h2>
            <p className="text-gris-clair mb-3 leading-relaxed">
              Je m'appelle <strong>Nissrine</strong>. Coiffeuse depuis plus de
              dix ans, j'ai créé <strong>La Tête dans les Nuages</strong> pour
              offrir une expérience à domicile douce, élégante et totalement
              personnalisée.
            </p>
            <p className="text-gris-clair mb-3 leading-relaxed">
              J'aime révéler la beauté naturelle de chaque femme, que ce soit
              pour une coupe, un brushing, une coloration, un balayage ou des
              cheveux frisés à travailler en douceur.
            </p>
            <p className="text-gris-clair mb-6 leading-relaxed">
              Au-delà d'un savoir-faire, c'est un moment de confiance, de
              détente, une transformation qui doit faire du bien.
            </p>

            {/* BOUTONS */}
            <div className="flex flex-col gap-4">
              <Link
                to="/rendez-vous"
                className="text-center py-4 px-8 bg-rose-poudre text-gris-doux font-semibold rounded-full hover:bg-rose-hover transition-all duration-300"
              >
                Prendre rendez-vous
              </Link>
              <Link
                to="/contact"
                className="text-center py-4 px-8 bg-rose-poudre text-gris-doux font-semibold rounded-full hover:bg-rose-hover transition-all duration-300 opacity-90"
              >
                Me contacter
              </Link>
              <Link
                to="/prestations"
                className="text-center py-4 px-8 bg-rose-poudre text-gris-doux font-semibold rounded-full hover:bg-rose-hover transition-all duration-300 opacity-90"
              >
                Découvrir mes prestations
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
