export default function RendezVous() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-10">
      <div className="flex flex-col items-center gap-10">
        <div className="text-center max-w-xl">
          <h2 className="text-2xl font-semibold text-gris-doux mb-4">
            Prendre rendez-vous
          </h2>
          <p className="text-gris-clair leading-relaxed mb-3">
            Réservez votre moment de bien-être en toute simplicité. Je me
            déplace à domicile pour une expérience douce, élégante et
            personnalisée.
          </p>
          <p className="text-gris-clair leading-relaxed">
            Choisissez directement le créneau qui vous convient grâce à mon
            agenda en ligne.
          </p>
        </div>

        <div className="w-full">
          <iframe
            src="https://calendly.com/niss91/30min"
            frameBorder="0"
            className="w-full min-h-[700px] rounded-2xl shadow-sm"
          />
        </div>

        <div className="text-center">
          <p className="text-gris-clair mb-4">
            Vous avez une question ou une demande particulière ?
          </p>
          a
          <a
            href="https://wa.me/33656750771"
            target="_blank"
            rel="noreferrer"
            className="px-8 py-4 bg-rose-poudre text-gris-doux font-semibold rounded-full hover:bg-rose-hover transition-all duration-300"
          >
            Me contacter sur WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
