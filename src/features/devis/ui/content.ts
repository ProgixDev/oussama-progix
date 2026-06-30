/**
 * Faithful content for the Progix "Devis contractuel" — SourcePro. List-shaped
 * data lives here; prose with inline emphasis is authored in the section JSX.
 *
 * All copy uses French typography (’ « » … —) — keep it that way.
 */

export const cover = {
  tag: "Devis contractuel · Bon de commande",
  title: "Développement de votre",
  titleLight: "application de sourcing",
  subtitle:
    "Application mobile de sourcing et de validation de fournisseurs chinois fiables : base de données curée, recherche intelligente, fiches enrichies, avis et abonnement — plus back-office, landing page et accompagnement marketing jusqu’à la mise en marché. Un prix fixe, une équipe senior, votre propriété à 100 %.",
  badges: [
    { l: "Montant total", v: "4 850 €", u: "" },
    { l: "Délai de livraison", v: "60", u: " jours" },
    { l: "Accompagnement", v: "90", u: " jours" },
  ],
  meta: [
    { l: "Projet", v: "SourcePro" },
    { l: "Client", v: "Oussama" },
    { l: "Prestataire", v: "Progix Inc. · NEQ 1181317117" },
    { l: "Référence · Date", v: "DEVIS-PROGIX-2026 · ____________" },
  ],
} as const;

export const trust = [
  { n: "12", l: "ingénieurs dédiés" },
  { n: "100+", l: "projets livrés" },
  { n: "100 %", l: "propriété au Client" },
  { n: "CA · FR", l: "équipe Canada & France" },
] as const;

/** Section 02 — prestations included, grouped. `b` is emphasized, `t` follows. */
export const incl1 = [
  { b: "Application mobile iOS & Android", t: ", design sur mesure inclus" },
  {
    b: "Base de données de fournisseurs fiables",
    t: ", classés par catégorie et niveau de qualité",
  },
  { b: "Recherche intelligente par produit", t: " mettant en avant les écarts de qualité" },
  {
    b: "Fiches produits & fournisseurs enrichies",
    t: " (caractéristiques réelles, points de vigilance)",
  },
  { b: "Système d’avis & de signalement", t: " communautaire" },
  { b: "Favoris, listes personnelles & alertes", t: " de nouveautés" },
  { b: "Back-office d’administration", t: " complet (fournisseurs, produits, catégories, avis)" },
  { b: "Landing page", t: " de présentation, optimisée acquisition" },
  { b: "3 révisions de maquettes", t: " incluses dans le forfait" },
] as const;

export const incl2 = [
  { b: "Système d’abonnement in-app", t: " (Apple App Store & Google Play)" },
  { b: "Gestion de compte", t: " et des préférences utilisateur" },
  { b: "Hébergement cloud scalable", t: " selon la charge utilisateur" },
  { b: "Publication", t: " sur l’App Store & le Google Play Store" },
] as const;

export const incl3 = [
  { b: "Formation marketing complète (3 h)", t: " : UGC, Meta Ads, Apple Search Ads" },
  { b: "Acteur UGC fourni", t: " par Progix + scripts publicitaires" },
  { b: "Suivi hebdomadaire", t: " des KPIs pendant 90 jours" },
  { b: "Support technique 90 jours", t: " + documentation technique complète" },
] as const;

/** Section 03 — components covered by the fixed-price package. The devis
 * states a single all-inclusive total, with no per-line pricing. */
export const investment = [
  { strong: "Application mobile iOS + Android", text: " (design sur mesure)" },
  { text: "Back-office d’administration & gestion de contenu" },
  { text: "Base de données & moteur de recherche intelligent" },
  { text: "Fiches enrichies, avis & système communautaire" },
  { text: "Landing page de présentation" },
  { text: "Intégration de l’abonnement in-app (stores)" },
  { text: "Publication App Store + Play Store" },
  { text: "Accompagnement marketing 90 j (formation, acteur UGC, scripts, suivi)" },
  { text: "Hébergement cloud (mise en place) & support 90 jours" },
] as const;

/** Section 03 — detailed per-line price breakdown. Amounts sum to the fixed
 * total (`priceTotal`). Edit any line here; keep the sum equal to the total. */
export const priceBreakdown = [
  { label: "Application mobile iOS + Android", note: " (design sur mesure)", price: "1 850 €" },
  { label: "Back-office d’administration", note: " & gestion de contenu", price: "700 €" },
  { label: "Base de données", note: " & moteur de recherche intelligent", price: "600 €" },
  { label: "Landing page", note: " de présentation", price: "300 €" },
  { label: "Abonnement in-app", note: " + publication App Store & Play Store", price: "400 €" },
  {
    label: "Accompagnement marketing 90 j",
    note: " (formation, acteur UGC, scripts, suivi)",
    price: "700 €",
  },
  { label: "Hébergement cloud", note: " (mise en place) & support 90 jours", price: "300 €" },
] as const;

export const priceTotal = "4 850 €";

/** Section 03 — payment schedule: 5 equal monthly instalments of 970 € (20 %
 * each) summing to the fixed total (4 850 €). */
export const payments = [
  {
    pct: "MOIS 1 · 20 %",
    when: "Au démarrage",
    desc: "À la signature et à la réunion de cadrage",
    amount: "970 €",
  },
  {
    pct: "MOIS 2 · 20 %",
    when: "Échéance à 30 jours",
    desc: "Pendant le développement de l’application",
    amount: "970 €",
  },
  {
    pct: "MOIS 3 · 20 %",
    when: "Échéance à 60 jours",
    desc: "À la livraison et la publication sur les stores",
    amount: "970 €",
  },
  {
    pct: "MOIS 4 · 20 %",
    when: "Échéance à 90 jours",
    desc: "Pendant l’accompagnement marketing",
    amount: "970 €",
  },
  {
    pct: "MOIS 5 · 20 %",
    when: "Échéance à 120 jours",
    desc: "Solde — fin de l’accompagnement",
    amount: "970 €",
  },
] as const;

/** Section 06 — delivery phases. */
export const phases = [
  {
    tag: "PHASE 1",
    title: "Cadrage",
    desc: "≈ J1 – J8 · spécifications & architecture",
  },
  {
    tag: "PHASE 2",
    title: "Design UI/UX",
    desc: "≈ J9 – J18 · maquettes (3 révisions incluses)",
  },
  {
    tag: "PHASE 3",
    title: "Développement",
    desc: "≈ J19 – J54 · base, back-office, app, abonnement",
  },
] as const;

/** Header / footer navigation across the document set. Accueil and the Devis are
 * the home document (`/`); the cahier des charges and calendrier are their own
 * routes. */
export const navLinks = [
  { key: "accueil", label: "Présentation", href: "/" },
  { key: "cahier", label: "Cahier des charges", href: "/cahier-des-charges" },
  { key: "calendrier", label: "Calendrier", href: "/calendrier" },
  { key: "devis", label: "Devis contractuel", href: "/devis" },
] as const;
