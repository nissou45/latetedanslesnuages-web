import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { inscription } from "../api/auth";

type FormData = {
  nom: string;
  email: string;
  password: string;
  confirm: string;
};

export default function Inscription() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    try {
      const res = await inscription(data.nom, data.email, data.password);
      localStorage.setItem("token", res.token);
      localStorage.setItem("user", JSON.stringify(res.user));
      navigate("/mon-espace");
    } catch {
      alert("Cet email est déjà utilisé !");
    }
  };

  return (
    <section className="max-w-md mx-auto px-6 py-10">
      <div className="bg-white rounded-3xl p-10 shadow-sm">
        <h2 className="text-2xl font-semibold text-gris-doux text-center mb-2">
          Créer un compte
        </h2>
        <p className="text-center text-gris-clair text-sm mb-8">
          Rejoignez La Tête dans les Nuages ✨
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <div>
            <input
              {...register("nom", { required: "Le nom est requis" })}
              placeholder="Votre nom"
              className="w-full px-4 py-3 border border-rose-hover rounded-xl bg-white text-gris-doux focus:outline-none"
            />
            {errors.nom && (
              <p className="text-red-400 text-xs mt-1">{errors.nom.message}</p>
            )}
          </div>

          <div>
            <input
              {...register("email", { required: "L'email est requis" })}
              type="email"
              placeholder="Votre email"
              className="w-full px-4 py-3 border border-rose-hover rounded-xl bg-white text-gris-doux focus:outline-none"
            />
            {errors.email && (
              <p className="text-red-400 text-xs mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <input
              {...register("password", {
                required: "Le mot de passe est requis",
                minLength: { value: 6, message: "Minimum 6 caractères" },
              })}
              type="password"
              placeholder="Mot de passe"
              className="w-full px-4 py-3 border border-rose-hover rounded-xl bg-white text-gris-doux focus:outline-none"
            />
            {errors.password && (
              <p className="text-red-400 text-xs mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          <div>
            <input
              {...register("confirm", {
                required: "Veuillez confirmer",
                validate: (val) =>
                  val === watch("password") ||
                  "Les mots de passe ne correspondent pas",
              })}
              type="password"
              placeholder="Confirmer le mot de passe"
              className="w-full px-4 py-3 border border-rose-hover rounded-xl bg-white text-gris-doux focus:outline-none"
            />
            {errors.confirm && (
              <p className="text-red-400 text-xs mt-1">
                {errors.confirm.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="py-3 rounded-full bg-rose-poudre text-gris-doux font-semibold hover:bg-rose-hover transition-all duration-200 mt-2"
          >
            S'inscrire
          </button>
        </form>

        <p className="text-center text-gris-clair text-sm mt-6">
          Déjà un compte ?{" "}
          <a href="/connexion" className="text-pink-400 hover:underline">
            Se connecter
          </a>
        </p>
      </div>
    </section>
  );
}
