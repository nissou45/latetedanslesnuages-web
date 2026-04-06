import { useState } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section className="max-w-2xl mx-auto px-6 py-10">
      <div className="bg-white rounded-3xl p-10 shadow-sm">
        <h2 className="text-2xl font-semibold text-gris-doux text-center mb-2">
          Me contacter
        </h2>
        <p className="text-center text-gris-clair mb-8">
          ✨ Prenons un moment pour imaginer votre prochain look ✨
        </p>

        <ul className="space-y-4 text-base text-gris-clair mb-10">
          <li className="flex items-center gap-3 flex-wrap">
            📞 <strong>Téléphone :</strong> 06 56 75 07 71
            <a
              href="https://wa.me/33656750771"
              target="_blank"
              rel="noreferrer"
              className="ml-2 px-3 py-1 bg-rose-poudre rounded-xl text-sm hover:bg-rose-hover transition-all"
            >
              💬 WhatsApp
            </a>
          </li>
          <li>
            📧 <strong>Email :</strong> latetedanslesnuages.coiffure@gmail.com
          </li>
          <li>
            📸 <strong>Instagram :</strong>{" "}
            <a
              href="https://www.instagram.com/latetedans_lesnuages.coiffure"
              target="_blank"
              rel="noreferrer"
              className="text-pink-400 hover:underline"
            >
              @latetedans_lesnuages.coiffure
            </a>
          </li>
        </ul>

        <div className="bg-[#faf7f5] rounded-2xl p-8">
          <h3 className="text-center text-gris-doux font-medium mb-6">
            Ou envoyez-moi un message :
          </h3>
          <form
            className="flex flex-col gap-4"
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
          >
            <input
              type="text"
              placeholder="Votre nom"
              required
              className="px-4 py-3 border border-rose-hover rounded-xl bg-white text-gris-doux focus:outline-none"
            />
            <input
              type="email"
              placeholder="Votre email"
              required
              className="px-4 py-3 border border-rose-hover rounded-xl bg-white text-gris-doux focus:outline-none"
            />
            <textarea
              placeholder="Votre message"
              required
              rows={4}
              className="px-4 py-3 border border-rose-hover rounded-xl bg-white text-gris-doux focus:outline-none resize-none"
            />
            <button
              type="submit"
              className="py-3 rounded-full bg-rose-poudre text-gris-doux font-semibold hover:bg-rose-hover transition-all duration-200"
            >
              Envoyer
            </button>
          </form>
          {sent && (
            <p className="text-center text-gris-clair mt-4 font-medium">
              ✨ Votre message a bien été envoyé ! ✨
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
