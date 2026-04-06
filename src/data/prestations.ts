export type Option = {
  label: string;
  price: string;
};

export type Prestation = {
  title: string;
  time: string;
  description: string;
  options: Option[];
};

export const prestations: Prestation[] = [
  {
    title: "Shampoing + Coupe + Brushing",
    time: "45 min",
    description:
      "Shampoing relaxant, coupe adaptée à votre morphologie et brushing naturel ou travaillé.",
    options: [{ label: "Forfait unique", price: "40 €" }],
  },
  {
    title: "Brushing",
    time: "20 à 40 min",
    description:
      "Brushing naturel, lisse ou wavy, adapté à votre longueur et votre style.",
    options: [
      { label: "Cheveux courts", price: "25 €" },
      { label: "Cheveux mi-longs", price: "30 €" },
      { label: "Cheveux longs", price: "35 €" },
    ],
  },
  {
    title: "Coupe seule",
    time: "20 min",
    description:
      "Coupe personnalisée étudiée selon votre visage, votre style et votre texture de cheveux.",
    options: [{ label: "Forfait unique", price: "30 €" }],
  },
  {
    title: "Couleur racines",
    time: "45 min",
    description:
      "Couverture parfaite des racines, application précise pour un résultat homogène.",
    options: [
      { label: "Cheveux courts", price: "30 €" },
      { label: "Cheveux mi-longs", price: "35 €" },
      { label: "Cheveux longs", price: "40 €" },
    ],
  },
  {
    title: "Couleur + Soin + Brushing",
    time: "1h30",
    description: "Coloration complète, soin profond et brushing de finition.",
    options: [{ label: "Forfait unique", price: "60 €" }],
  },
  {
    title: "Balayage / Mèches",
    time: "2h à 3h",
    description:
      "Éclaircissement sur mesure : mèches aluminium, balayage à l'air libre, effet naturel ou marqué.",
    options: [{ label: "À partir de", price: "80 € (sur devis)" }],
  },
  {
    title: "Ombré + Patine",
    time: "2h à 3h",
    description:
      "Dégradé lumineux + patine pour un fondu parfait, adapté à votre base naturelle.",
    options: [{ label: "À partir de", price: "90 € (sur devis)" }],
  },
  {
    title: "Soin profond (Botox / Kératine)",
    time: "45 min",
    description:
      "Traitement haute réparation : Inoar Botohair. Répare, hydrate et redonne de la brillance.",
    options: [{ label: "À partir de", price: "50 €" }],
  },
  {
    title: "Lissage professionnel",
    time: "2h à 3h",
    description:
      "Lissage enzymothérapie Belma Kosmetik, sans formol, bio, résultat 3 à 6 mois.",
    options: [
      { label: "Cheveux courts", price: "150 €" },
      { label: "Cheveux mi-longs", price: "180 à 220 €" },
      { label: "Cheveux longs", price: "250 € (sur devis)" },
    ],
  },
  {
    title: "Chignons & coiffures événementielles",
    time: "30 à 45 min",
    description:
      "Chignons bas, flous, tresses bohèmes, attaches élégantes. Idéal mariages, baptêmes et shootings.",
    options: [{ label: "À partir de", price: "50 €" }],
  },
  {
    title: "Coiffures enfants & ado",
    time: "20 à 30 min",
    description: "Coiffures fun et rassurantes pour les plus jeunes.",
    options: [{ label: "Forfait unique", price: "20 €" }],
  },
  {
    title: "Cheveux frisés & bouclés",
    time: "45 min à 1h",
    description:
      "Diagnostic personnalisé, coupe à sec et définition des boucles.",
    options: [
      { label: "Coupe à sec", price: "40 €" },
      { label: "Soin + définition", price: "55 €" },
    ],
  },
];
