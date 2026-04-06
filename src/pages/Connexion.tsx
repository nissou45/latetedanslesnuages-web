import { useForm } from "react-hook-form";

type FormData = {
  email: string;
  password: string;
};

export default function Connexion() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log("Connexion :", data);
  };

  return (
    <section className="max-w-md mx-auto px-6 py-10">
      <div className="bg-white rounded-3xl p-10 shadow-sm">
        <h2 className="text-2xl font-semibold text-gris-doux text-center mb-2">
          Se connecter
        </h2>
        <p className="text-center text-gris-clair text-sm mb-8">
          Bon retour parmi nous ✨
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
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

          <button
            type="submit"
            className="py-3 rounded-full bg-rose-poudre text-gris-doux font-semibold hover:bg-rose-hover transition-all duration-200 mt-2"
          >
            Se connecter
          </button>
        </form>

        <p className="text-center text-gris-clair text-sm mt-6">
          Pas encore de compte ?{" "}
          <a href="/inscription" className="text-pink-400 hover:underline">
            S'inscrire
          </a>
        </p>
      </div>
    </section>
  );
}
