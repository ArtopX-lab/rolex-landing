export type Lang = "en" | "fr";

export const t = {
  en: {
    nav: { lang: "FR" },
    hero: {
      eyebrow: "Est. 1905 · Geneva",
      title: "Day-Date 40",
      body: "The first wristwatch to display the day of the week spelled out in full — worn by those who shape the course of history.",
      cta: "Explore Collection",
    },
    features: {
      eyebrow: "Crafted Without Compromise",
      heading: "Six centuries of watchmaking, distilled.",
      items: [
        {
          label: "Perpetual Movement",
          copy: "Calibre 3255 — a self-winding mechanical movement developed entirely in-house, beating at 28,800 vibrations per hour with a 70-hour power reserve.",
        },
        {
          label: "Everose Gold",
          copy: "An exclusive Rolex alloy of 18 ct gold with copper and a trace of platinum — resistant to fading, immune to the passage of time, and owned by no other Maison.",
        },
        {
          label: "Oyster Waterproofing",
          copy: "The world's first waterproof watch case — hermetically sealed with a screw-down crown and caseback, tested to 100 metres of hydrostatic pressure.",
        },
        {
          label: "President Bracelet",
          copy: "First created for the Day-Date in 1956 — a three-piece semi-circular link bracelet in solid Everose gold, paired with a concealed Crown-Clasp for an unbroken aesthetic line.",
        },
        {
          label: "Superlative Chronometer",
          copy: "Certified by COSC and then tested further by Rolex to a tolerance of ±2 seconds per day — a standard twice as precise as the official chronometer benchmark.",
        },
        {
          label: "Cyclops Date",
          copy: "A magnifying lens ground directly into the sapphire crystal above the date aperture, enlarging the date display by 2.5× for immediate legibility at a glance.",
        },
      ],
    },
    specs: {
      eyebrow: "Technical Specifications",
      heading: "The architecture of precision.",
      rows: [
        { label: "Reference No.", value: "228235" },
        { label: "Case Diameter", value: "40 mm" },
        { label: "Case Material", value: "Everose gold (18 ct)" },
        { label: "Movement", value: "Rolex Calibre 3255, Perpetual, self-winding" },
        { label: "Power Reserve", value: "Approximately 70 hours" },
        { label: "Accuracy", value: "±2 seconds per day (Superlative Chronometer)" },
        { label: "Crystal", value: "Sapphire, scratch-resistant, Cyclops lens over date" },
        { label: "Water Resistance", value: "100 metres / 330 feet" },
        { label: "Dial", value: "Chocolate, sunburst finish, diamond hour markers" },
        { label: "Bracelet", value: "President, three-piece links, solid Everose gold, concealed Crown-Clasp" },
      ],
    },
    cta: {
      eyebrow: "Yours to Command",
      heading1: "A century of mastery.",
      heading2: "One expression of it.",
      body: "Every Day-Date is made to order, finished by hand, and certified to outlast its owner. Visit an authorised retailer to begin yours.",
      button: "Find an Authorised Retailer",
    },
  },
  fr: {
    nav: { lang: "EN" },
    hero: {
      eyebrow: "Fondée en 1905 · Genève",
      title: "Day-Date 40",
      body: "La première montre à afficher le jour de la semaine en toutes lettres — portée par ceux qui façonnent le cours de l'histoire.",
      cta: "Explorer la Collection",
    },
    features: {
      eyebrow: "Artisanat sans compromis",
      heading: "Six siècles d'horlogerie, distillés.",
      items: [
        {
          label: "Mouvement Perpétuel",
          copy: "Calibre 3255 — un mouvement mécanique à remontage automatique entièrement développé en interne, battant à 28 800 alternances par heure avec une réserve de marche de 70 heures.",
        },
        {
          label: "Or Everose",
          copy: "Un alliage exclusif Rolex composé d'or 18 carats, de cuivre et d'une trace de platine — résistant à la décoloration, insensible au passage du temps, et détenu par aucune autre Maison.",
        },
        {
          label: "Étanchéité Oyster",
          copy: "Le premier boîtier de montre étanche au monde — hermétiquement scellé avec une couronne et un fond vissés, testé à 100 mètres de pression hydrostatique.",
        },
        {
          label: "Bracelet Président",
          copy: "Créé à l'origine pour le Day-Date en 1956 — un bracelet à maillons semi-circulaires en trois pièces en or Everose massif, associé à un fermoir à boucle dissimulé pour une ligne esthétique ininterrompue.",
        },
        {
          label: "Chronomètre Supérieur",
          copy: "Certifié par le COSC puis testé davantage par Rolex selon une tolérance de ±2 secondes par jour — un standard deux fois plus précis que la référence officielle des chronomètres.",
        },
        {
          label: "Date Cyclope",
          copy: "Un verre grossissant intégré directement dans le cristal saphir au-dessus du guichet de date, agrandissant l'affichage de la date de 2,5× pour une lisibilité immédiate d'un seul coup d'œil.",
        },
      ],
    },
    specs: {
      eyebrow: "Spécifications Techniques",
      heading: "L'architecture de la précision.",
      rows: [
        { label: "Référence", value: "228235" },
        { label: "Diamètre du boîtier", value: "40 mm" },
        { label: "Matériau du boîtier", value: "Or Everose (18 ct)" },
        { label: "Mouvement", value: "Rolex Calibre 3255, Perpétuel, remontage automatique" },
        { label: "Réserve de marche", value: "Environ 70 heures" },
        { label: "Précision", value: "±2 secondes par jour (Chronomètre Supérieur)" },
        { label: "Verre", value: "Saphir, antireflet, verre Cyclope sur la date" },
        { label: "Étanchéité", value: "100 mètres / 330 pieds" },
        { label: "Cadran", value: "Chocolat, finition soleil, index en diamants" },
        { label: "Bracelet", value: "Président, maillons en trois pièces, or Everose massif, fermoir Crown-Clasp dissimulé" },
      ],
    },
    cta: {
      eyebrow: "À Votre Commandement",
      heading1: "Un siècle de maîtrise.",
      heading2: "Une seule expression.",
      body: "Chaque Day-Date est fabriquée sur commande, finie à la main, et certifiée pour durer plus longtemps que son propriétaire. Visitez un détaillant agréé pour commencer la vôtre.",
      button: "Trouver un Détaillant Agréé",
    },
  },
} as const;
