import type { CSSProperties, ReactNode } from "react";
import { Cover } from "./cover";
import { DcHeader } from "./dc-header";
import { DownloadFab } from "./download-fab";
import { Footer } from "./footer";
import { ScrollReveal } from "./scroll-reveal";
import { SectionHeader } from "./primitives";
import { ChapterBand } from "./chapter-band";
import styles from "./devis.module.css";

/* ------------------------------------------------------------------ */
/* Shared inline-style fragments (lifted verbatim from the source).   */
/* ------------------------------------------------------------------ */

const SECTION_DOTS: CSSProperties = {
  width: "100%",
};

const CONTAINER: CSSProperties = {
  maxWidth: "1040px",
  margin: "0 auto",
  padding: "clamp(56px,7vw,94px) clamp(24px,5vw,48px)",
};

const CARD: CSSProperties = {
  background: "var(--card-grad)",
  border: "1px solid var(--card-bd)",
  borderRadius: "14px",
  padding: "22px 24px",
  boxShadow: "var(--shadow)",
};

const CARD_TITLE: CSSProperties = {
  fontFamily: "var(--font-disp)",
  fontSize: "15px",
  color: "#fff",
  fontWeight: 600,
  margin: "0 0 7px",
  display: "flex",
  alignItems: "center",
  gap: "9px",
};

const CARD_TEXT: CSSProperties = {
  fontSize: "14px",
  margin: 0,
  color: "var(--slate)",
  lineHeight: 1.6,
};

const ROUND_BADGE: CSSProperties = {
  width: "30px",
  height: "30px",
  borderRadius: "50%",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
  color: "#fff",
  fontSize: "13px",
  fontWeight: 700,
  fontFamily: "var(--font-disp)",
};

const GRID_AUTO: CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,340px),1fr))",
  gap: "16px",
};

const H3_DIAMOND: CSSProperties = {
  fontFamily: "var(--font-disp)",
  fontSize: "19px",
  color: "#fff",
  fontWeight: 600,
  margin: "34px 0 12px",
  display: "flex",
  alignItems: "center",
  gap: "10px",
};

const INFOBOX: CSSProperties = {
  background: "var(--tint-2)",
  border: "1px solid rgba(56,182,255,0.22)",
  borderRadius: "14px",
  padding: "18px 22px",
  margin: "16px 0",
  display: "flex",
  gap: "14px",
  alignItems: "flex-start",
};

const INFOBOX_ICON: CSSProperties = {
  flexShrink: 0,
  width: "30px",
  height: "30px",
  borderRadius: "8px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#fff",
  fontWeight: 700,
  fontSize: "14px",
  fontFamily: "var(--font-disp)",
  background: "var(--cyan)",
};

const INFOBOX_TITLE: CSSProperties = {
  fontFamily: "var(--font-disp)",
  fontSize: "14px",
  margin: "0 0 4px",
  color: "#fff",
  fontWeight: 600,
};

const INFOBOX_TEXT: CSSProperties = {
  fontSize: "13.6px",
  margin: 0,
  color: "var(--slate)",
  lineHeight: 1.55,
};

const STRONG_INK: CSSProperties = { color: "var(--ink)", fontWeight: 600 };

const TH: CSSProperties = {
  background: "var(--navy)",
  color: "#fff",
  textAlign: "left",
  padding: "11px 15px",
  fontFamily: "var(--font-disp)",
  fontWeight: 600,
  fontSize: "11px",
  letterSpacing: ".6px",
  textTransform: "uppercase",
};

const TAG_BASE: CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  fontFamily: "var(--font-disp)",
  fontWeight: 600,
  fontSize: "10.5px",
  letterSpacing: ".6px",
  textTransform: "uppercase",
  padding: "4px 11px",
  borderRadius: "999px",
  whiteSpace: "nowrap",
};

const STEP_CARD: CSSProperties = {
  flex: "1 1 180px",
  background: "var(--card-grad)",
  border: "1px solid var(--card-bd)",
  borderRadius: "14px",
  padding: "16px 14px",
  boxShadow: "var(--shadow)",
};

const STEP_EYEBROW: CSSProperties = {
  fontFamily: "var(--font-disp)",
  fontWeight: 700,
  fontSize: "11px",
  color: "var(--cyan-ink)",
  letterSpacing: ".5px",
};

const STEP_TITLE: CSSProperties = {
  fontFamily: "var(--font-disp)",
  fontWeight: 600,
  fontSize: "14px",
  color: "#fff",
  margin: "6px 0 4px",
};

const STEP_DESC: CSSProperties = {
  fontSize: "12.5px",
  color: "var(--slate)",
  lineHeight: 1.5,
};

const STEP_RULE: CSSProperties = {
  height: "6px",
  borderRadius: "6px",
  background: "linear-gradient(90deg,var(--cyan),var(--navy))",
  margin: "14px 0 0",
};

const ARCH_NODE: CSSProperties = {
  background: "var(--card)",
  border: "1.5px solid var(--line)",
  borderRadius: "11px",
  padding: "12px 14px",
  minWidth: "130px",
  textAlign: "center",
  boxShadow: "var(--shadow)",
};

const ARCH_NODE_TITLE: CSSProperties = {
  fontFamily: "var(--font-disp)",
  fontWeight: 600,
  fontSize: "12.5px",
  color: "#fff",
};

const ARCH_NODE_SUB: CSSProperties = {
  fontSize: "11px",
  color: "var(--muted)",
  marginTop: "2px",
};

const ARCH_COL_LABEL: CSSProperties = {
  textAlign: "center",
  fontFamily: "var(--font-disp)",
  fontSize: "10px",
  letterSpacing: "1.2px",
  textTransform: "uppercase",
  color: "var(--muted)",
  marginBottom: "4px",
};

const ARCH_ARROW: CSSProperties = {
  display: "flex",
  alignItems: "center",
  color: "var(--cyan)",
  fontSize: "18px",
  fontWeight: 700,
};

const A_GRAD = "linear-gradient(150deg,var(--cyan-deep),var(--cyan))";
const N_GRAD = "linear-gradient(150deg,var(--navy),var(--navy-700))";

/* ------------------------------------------------------------------ */
/* Small presentational helpers                                        */
/* ------------------------------------------------------------------ */

function Strong({ children }: { children: ReactNode }) {
  return <strong style={STRONG_INK}>{children}</strong>;
}

/** Subsection heading with the cyan diamond marker, with custom top margin. */
function DiamondHeading({
  children,
  marginTop = "34px",
}: {
  children: ReactNode;
  marginTop?: string;
}) {
  return (
    <h3 style={{ ...H3_DIAMOND, margin: `${marginTop} 0 12px` }}>
      <span style={{ color: "var(--cyan)", fontSize: "13px" }} aria-hidden="true">
        ◆
      </span>
      {children}
    </h3>
  );
}

function FeatureCard({
  icon,
  iconBg,
  title,
  children,
}: {
  icon: ReactNode;
  iconBg: string;
  title: ReactNode;
  children: ReactNode;
}) {
  return (
    <div style={CARD}>
      <h4 style={CARD_TITLE}>
        <span style={{ ...ROUND_BADGE, background: iconBg }} aria-hidden="true">
          {icon}
        </span>
        {title}
      </h4>
      <p style={CARD_TEXT}>{children}</p>
    </div>
  );
}

function InfoCallout({
  iconBg = "var(--cyan)",
  icon = "i",
  title,
  titleColor = "#fff",
  borderColor = "rgba(56,182,255,0.22)",
  background = "var(--tint-2)",
  children,
}: {
  iconBg?: string;
  icon?: ReactNode;
  title: string;
  titleColor?: string;
  borderColor?: string;
  background?: string;
  children: ReactNode;
}) {
  return (
    <div style={{ ...INFOBOX, background, border: `1px solid ${borderColor}` }}>
      <div style={{ ...INFOBOX_ICON, background: iconBg }} aria-hidden="true">
        {icon}
      </div>
      <div>
        <h4 style={{ ...INFOBOX_TITLE, color: titleColor }}>{title}</h4>
        <p style={INFOBOX_TEXT}>{children}</p>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Data lifted from the renderVals() island.                           */
/* ------------------------------------------------------------------ */

const meta = [
  { l: "Projet", v: "SourcePro" },
  { l: "Client", v: "Oussama" },
  { l: "Prestataire", v: "Progix Inc. · NEQ 1181317117" },
  { l: "Référence · Version", v: "CDC-PROGIX-2026 · v1.0" },
] as const;

const toc = [
  { n: "01", t: "Contexte & vision du projet" },
  { n: "02", t: "Objectifs du projet" },
  { n: "03", t: "Public cible" },
  { n: "04", t: "Modèle économique" },
  { n: "05", t: "Fonctionnalités détaillées" },
  { n: "06", t: "Parcours utilisateur type" },
  { n: "07", t: "Approche technique" },
  { n: "08", t: "Sécurité, RGPD & exigences non-fonctionnelles" },
  { n: "09", t: "Livrables & publication" },
  { n: "10", t: "Hors périmètre & évolutions (Phase 2)" },
  { n: "11", t: "Accompagnement marketing (90 jours)" },
  { n: "12", t: "Démarche, planning & validation" },
  { n: "13", t: "Prérequis & engagements du client" },
] as const;

type Tag = { label: string; bg: string; fg: string; bd: string };
type Feat = { b: string; t: string };
type Module = {
  n: string;
  iconBg: string;
  title: string;
  hasBadge: boolean;
  badge: string;
  desc: string;
  feats: Feat[];
  tags: Tag[];
};

const ok: Tag = { label: "Inclus V1", bg: "var(--ok-bg)", fg: "var(--ok)", bd: "none" };
const cy = (label: string): Tag => ({
  label,
  bg: "var(--tint)",
  fg: "var(--cyan-ink)",
  bd: "none",
});
const nv = (label: string): Tag => ({
  label,
  bg: "rgba(255,255,255,0.08)",
  fg: "#cdd9ec",
  bd: "none",
});
const gh = (label: string): Tag => ({
  label,
  bg: "rgba(255,255,255,0.05)",
  fg: "var(--muted)",
  bd: "1px solid var(--line)",
});
const F = (b: string, t: string): Feat => ({ b, t });

const modules: Module[] = [
  {
    n: "01",
    iconBg: N_GRAD,
    title: "Base de données de fournisseurs",
    hasBadge: true,
    badge: "Cœur de la plateforme",
    desc: "Un répertoire de fournisseurs chinois fiables, sélectionnés et qualifiés par Progix et le client.",
    feats: [
      F(
        "Fiche détaillée par fournisseur",
        " : spécialité, catégories couvertes, niveau de fiabilité.",
      ),
      F("Indicateur de confiance visuel", " (badge, score ou code couleur)."),
      F("", "Catégories de produits couvertes par chaque fournisseur."),
    ],
    tags: [ok],
  },
  {
    n: "02",
    iconBg: N_GRAD,
    title: "Classement par niveau de qualité",
    hasBadge: true,
    badge: "Cœur de la plateforme",
    desc: "Produits et fournisseurs organisés en paliers de qualité, identifiables en un coup d’œil.",
    feats: [
      F("Hiérarchie claire", " : produits phares → intermédiaires → déconseillés."),
      F("", "Tri et filtres par catégorie, niveau de qualité et type de produit."),
    ],
    tags: [ok],
  },
  {
    n: "03",
    iconBg: A_GRAD,
    title: "Recherche intelligente par produit",
    hasBadge: true,
    badge: "Promesse centrale",
    desc: "L’utilisateur recherche un produit et SourcePro met en avant les meilleures options vérifiées.",
    feats: [
      F("", "Recherche par mot-clé et navigation par catégories."),
      F("Mise en avant des écarts de qualité", " entre produits visuellement identiques."),
      F("", "Suggestions des références les plus fiables pour chaque recherche."),
    ],
    tags: [ok, cy("« 10× le même stylo, 10 qualités »")],
  },
  {
    n: "04",
    iconBg: A_GRAD,
    title: "Fiches produits enrichies",
    hasBadge: false,
    badge: "",
    desc: "Une vraie lecture de ce que l’utilisateur va recevoir — au-delà des descriptions trompeuses.",
    feats: [
      F("Caractéristiques réelles", " et points d’attention (« à savoir avant d’acheter »)."),
      F("", "Indicateur de qualité et niveau de recommandation."),
      F("", "Catégorisation claire (phare / intermédiaire / à éviter)."),
    ],
    tags: [ok],
  },
  {
    n: "05",
    iconBg: N_GRAD,
    title: "Avis & signalement communautaire",
    hasBadge: false,
    badge: "",
    desc: "Les utilisateurs enrichissent la plateforme et renforcent la fiabilité de la base au fil du temps.",
    feats: [
      F("", "Avis et notes des utilisateurs sur les produits et fournisseurs."),
      F("", "Signalement d’un fournisseur ou produit décevant."),
      F("", "Remontée des bons plans par la communauté."),
    ],
    tags: [ok],
  },
  {
    n: "06",
    iconBg: A_GRAD,
    title: "Favoris & listes personnelles",
    hasBadge: false,
    badge: "",
    desc: "L’utilisateur garde sous la main les produits et fournisseurs qui l’intéressent.",
    feats: [
      F("", "Enregistrement de produits et fournisseurs en favoris."),
      F("Listes thématiques", " (ex. « maison », « électronique »)."),
    ],
    tags: [ok],
  },
  {
    n: "07",
    iconBg: N_GRAD,
    title: "Alertes & nouveautés",
    hasBadge: false,
    badge: "",
    desc: "Ramener régulièrement l’utilisateur dans l’app et justifier l’abonnement dans la durée.",
    feats: [
      F("", "Notifications à l’ajout de nouveaux fournisseurs fiables dans une catégorie suivie."),
      F("", "Mise en avant régulière de sélections et nouveautés."),
    ],
    tags: [ok],
  },
  {
    n: "08",
    iconBg: A_GRAD,
    title: "Abonnement & gestion de compte",
    hasBadge: false,
    badge: "",
    desc: "Le modèle repose sur un abonnement donnant accès à l’ensemble de la base qualifiée.",
    feats: [
      F("Abonnement mensuel", " donnant accès complet à la base qualifiée."),
      F("", "Gestion du compte, de l’abonnement et des préférences."),
      F("", "Intégration des paiements et des abonnements in-app (stores)."),
    ],
    tags: [ok, cy("Monétisation")],
  },
  {
    n: "09",
    iconBg: N_GRAD,
    title: "Back-office d’administration",
    hasBadge: false,
    badge: "",
    desc: "Un panneau d’administration complet pour gérer l’intégralité du contenu en autonomie.",
    feats: [
      F("", "Ajout, modification et classement des fournisseurs et produits."),
      F("", "Gestion des catégories et des niveaux de qualité."),
      F("Modération des avis", " et des signalements."),
      F("", "Tableau de bord de suivi (utilisateurs, abonnements, contenus)."),
    ],
    tags: [ok, gh("Web sécurisé")],
  },
];

/* ------------------------------------------------------------------ */
/* The page                                                            */
/* ------------------------------------------------------------------ */

/**
 * Full "Cahier des charges" document — header, hero cover, the table of
 * contents, the thirteen content sections, and the footer. A Server Component
 * composing the shared client leaves (header, FAB, scroll-reveal) at the edges.
 */
export function CahierDocument() {
  return (
    <div className={styles.root} data-devis-root>
      <DcHeader active="cahier" />
      <main className={styles.main}>
        <DownloadFab />
        <Cover
          tag="Cahier des charges · Document de cadrage"
          title="Plateforme de sourcing"
          titleLight="de fournisseurs fiables"
          subtitle="Application mobile de sourcing et de validation de fournisseurs chinois fiables : base de données curée, classement par niveau de qualité, recherche intelligente, fiches enrichies, avis communautaires et abonnement. Un outil d’aide à la décision pour acheter en confiance."
          badges={[]}
          meta={meta}
        />

        {/* SOMMAIRE */}
        <section data-dc-section style={{ ...SECTION_DOTS, backgroundColor: "var(--band-a)" }}>
          <div style={CONTAINER}>
            <span
              style={{
                fontFamily: "var(--font-disp)",
                fontWeight: 600,
                fontSize: "11px",
                letterSpacing: "1.8px",
                textTransform: "uppercase",
                color: "var(--cyan-ink)",
                display: "inline-flex",
                alignItems: "center",
                gap: "9px",
              }}
            >
              <span
                style={{
                  width: "22px",
                  height: "2px",
                  background: "var(--cyan)",
                  borderRadius: "2px",
                  display: "inline-block",
                }}
                aria-hidden="true"
              />
              Sommaire
            </span>
            <h2
              style={{
                fontFamily: "var(--font-disp)",
                fontSize: "clamp(23px,3vw,28px)",
                color: "#fff",
                fontWeight: 600,
                letterSpacing: "-.01em",
                margin: "12px 0 0",
              }}
            >
              Ce que couvre ce document
            </h2>
            <p
              style={{
                margin: "12px 0 0",
                fontSize: "15.5px",
                color: "var(--slate)",
                maxWidth: "66ch",
                lineHeight: 1.62,
              }}
            >
              Ce cahier des charges définit le périmètre fonctionnel et technique de l’Application,
              les livrables attendus et la démarche de réalisation. Il sert de base contractuelle au
              devis associé.
            </p>
            <div style={{ marginTop: "24px", borderTop: "1px solid var(--line)" }}>
              {toc.map((row) => (
                <div
                  key={row.n}
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    gap: "14px",
                    padding: "13px 2px",
                    borderBottom: "1px solid var(--line)",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-disp)",
                      fontWeight: 600,
                      color: "var(--cyan-ink)",
                      fontSize: "13px",
                      width: "30px",
                      flexShrink: 0,
                    }}
                  >
                    {row.n}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-disp)",
                      fontWeight: 500,
                      color: "#fff",
                      fontSize: "15px",
                    }}
                  >
                    {row.t}
                  </span>
                  <span
                    style={{
                      flex: 1,
                      borderBottom: "1px dotted var(--line)",
                      transform: "translateY(-4px)",
                      minWidth: "20px",
                    }}
                    aria-hidden="true"
                  />
                  <span
                    style={{
                      fontFamily: "var(--font-disp)",
                      color: "var(--muted)",
                      fontSize: "13px",
                    }}
                    aria-hidden="true"
                  >
                    —
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 01 — CONTEXTE */}
        <section
          id="s1"
          data-dc-section
          style={{ ...SECTION_DOTS, backgroundColor: "var(--band-b)" }}
        >
          <div style={CONTAINER}>
            <SectionHeader
              num="01 — CONTEXTE"
              title="Contexte & vision du projet"
              lead="Acheter un produit chinois sur les grandes marketplaces relève souvent du pari : un même article existe en dizaines de variantes de qualité radicalement différente, les descriptions sont trompeuses, et l’acheteur découvre trop tard que la chaise commandée a la taille d’une figurine. SourcePro répond à ce problème par une base de données curée de fournisseurs fiables, classés et qualifiés."
            />
            <p
              style={{
                fontSize: "15.5px",
                color: "var(--ink)",
                margin: "0 0 13px",
                lineHeight: 1.62,
              }}
            >
              SourcePro s’adresse aux <Strong>particuliers</Strong> qui achètent des produits en
              provenance de Chine et veulent acheter en confiance, sans mauvaises surprises. Plutôt
              qu’une marketplace de plus, c’est un <Strong>outil d’aide à la décision</Strong> qui
              guide l’utilisateur vers le bon produit chez le bon fournisseur.
            </p>
            <DiamondHeading>Positionnement différenciant</DiamondHeading>
            <p
              style={{
                fontSize: "14.5px",
                color: "var(--slate)",
                margin: "0 0 13px",
                lineHeight: 1.62,
              }}
            >
              Là où les autres plateformes vendent des produits, SourcePro vend de la{" "}
              <Strong>fiabilité</Strong> et de la tranquillité d’esprit. L’utilisateur ne paie pas
              pour acheter — il s’abonne pour <Strong>savoir où acheter sans se faire avoir</Strong>
              .
            </p>
            <div
              style={{
                background:
                  "linear-gradient(155deg,var(--navy-900),var(--navy) 60%,var(--navy-800))",
                color: "#DDE8F4",
                borderRadius: "22px",
                padding: "30px clamp(24px,4vw,34px)",
                margin: "22px 0",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-disp)",
                  fontWeight: 600,
                  fontSize: "11px",
                  letterSpacing: "1.8px",
                  textTransform: "uppercase",
                  color: "var(--cyan)",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "9px",
                  position: "relative",
                }}
              >
                <span
                  style={{
                    width: "22px",
                    height: "2px",
                    background: "var(--cyan)",
                    borderRadius: "2px",
                    display: "inline-block",
                  }}
                  aria-hidden="true"
                />
                Pourquoi SourcePro a de la valeur
              </span>
              <h3
                style={{
                  fontFamily: "var(--font-disp)",
                  color: "#fff",
                  fontSize: "19px",
                  fontWeight: 600,
                  margin: "12px 0 6px",
                  position: "relative",
                  lineHeight: 1.3,
                }}
              >
                Le bon produit, chez le bon fournisseur — sans se faire avoir
              </h3>
              <p
                style={{
                  color: "#B9CCE2",
                  margin: 0,
                  fontSize: "14px",
                  lineHeight: 1.6,
                  position: "relative",
                }}
              >
                Un même article peut exister en dizaines de variantes de qualité radicalement
                différente. SourcePro met en avant ces écarts et recommande, pour chaque besoin, la
                référence la plus fiable — l’utilisateur achète l’esprit tranquille.
              </p>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,160px),1fr))",
                  gap: "22px",
                  marginTop: "18px",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                <div>
                  <div
                    style={{
                      fontFamily: "var(--font-disp)",
                      fontWeight: 700,
                      fontSize: "26px",
                      color: "#fff",
                      letterSpacing: "-.02em",
                    }}
                  >
                    1
                    <small style={{ color: "var(--cyan)", fontSize: "15px", fontWeight: 600 }}>
                      {" "}
                      base
                    </small>
                  </div>
                  <div
                    style={{
                      fontSize: "12px",
                      color: "#9FB6CE",
                      marginTop: "3px",
                      lineHeight: 1.4,
                    }}
                  >
                    curée de fournisseurs fiables, classés et qualifiés
                  </div>
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: "var(--font-disp)",
                      fontWeight: 700,
                      fontSize: "26px",
                      color: "#fff",
                      letterSpacing: "-.02em",
                    }}
                  >
                    3
                    <small style={{ color: "var(--cyan)", fontSize: "15px", fontWeight: 600 }}>
                      {" "}
                      paliers
                    </small>
                  </div>
                  <div
                    style={{
                      fontSize: "12px",
                      color: "#9FB6CE",
                      marginTop: "3px",
                      lineHeight: 1.4,
                    }}
                  >
                    de qualité : phares, intermédiaires, à éviter
                  </div>
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: "var(--font-disp)",
                      fontWeight: 700,
                      fontSize: "26px",
                      color: "#fff",
                      letterSpacing: "-.02em",
                    }}
                  >
                    10×
                    <small style={{ color: "var(--cyan)", fontSize: "15px", fontWeight: 600 }}>
                      {" "}
                      qualités
                    </small>
                  </div>
                  <div
                    style={{
                      fontSize: "12px",
                      color: "#9FB6CE",
                      marginTop: "3px",
                      lineHeight: 1.4,
                    }}
                  >
                    le même produit, des qualités très différentes
                  </div>
                </div>
              </div>
            </div>
            <DiamondHeading>Constitution de la base de données</DiamondHeading>
            <p
              style={{
                fontSize: "14.5px",
                color: "var(--slate)",
                margin: "0 0 13px",
                lineHeight: 1.62,
              }}
            >
              La valeur de SourcePro repose sur la qualité de sa base de fournisseurs. La stratégie
              consiste à identifier en priorité les{" "}
              <Strong>fournisseurs les plus fiables et reconnus</Strong>, en se concentrant d’abord
              sur les acteurs majeurs, puis à enrichir progressivement la base par catégorie. La
              structuration des fiches et l’expérience de recherche sont affinées ensemble par
              itérations tout au long du projet.
            </p>
          </div>
        </section>

        {/* 02 — OBJECTIFS */}
        <section
          id="s2"
          data-dc-section
          style={{ ...SECTION_DOTS, backgroundColor: "var(--band-a)" }}
        >
          <div style={CONTAINER}>
            <SectionHeader num="02 — OBJECTIFS" title="Objectifs du projet" />
            <div style={GRID_AUTO}>
              <FeatureCard icon="1" iconBg="var(--cyan)" title="Une base de fournisseurs fiables">
                Offrir un répertoire de fournisseurs chinois sélectionnés pour leur fiabilité,
                organisé par catégorie de produits.
              </FeatureCard>
              <FeatureCard icon="2" iconBg="var(--navy)" title="Classer par niveau de qualité">
                Distinguer les références phares, intermédiaires et à éviter, pour identifier le bon
                produit en un coup d’œil.
              </FeatureCard>
              <FeatureCard icon="3" iconBg="var(--cyan)" title="Trouver vite, sans se perdre">
                Permettre de trouver rapidement le bon produit sans se noyer dans des millions
                d’offres — une véritable « application de poche ».
              </FeatureCard>
              <FeatureCard icon="4" iconBg="var(--navy)" title="Générer des revenus récurrents">
                Asseoir un modèle d’abonnement clair et à forte valeur perçue, consulté avant chaque
                achat.
              </FeatureCard>
            </div>
            <InfoCallout title="Objectif business du porteur">
              Construire une plateforme à la traction démontrable, en faisant de la fiabilité et de
              la tranquillité d’esprit la valeur que l’utilisateur paie. Chaque choix produit vise
              la <Strong>rétention</Strong> et la valeur perçue de l’abonnement autant que le
              chiffre d’affaires.
            </InfoCallout>
          </div>
        </section>

        {/* 03 — UTILISATEURS */}
        <section
          id="s3"
          data-dc-section
          style={{ ...SECTION_DOTS, backgroundColor: "var(--band-b)" }}
        >
          <div style={CONTAINER}>
            <SectionHeader
              num="03 — PUBLIC"
              title="Public cible"
              lead="SourcePro s’adresse à un public B2C de particuliers : acheteurs réguliers ou occasionnels de produits importés de Chine, chineurs et revendeurs débutants — toute personne qui veut éviter les arnaques et les déceptions."
            />
            <UserCard
              letter="A"
              letterBg="linear-gradient(150deg,var(--cyan-deep),var(--cyan))"
              title="L’acheteur particulier (abonné)"
              desc="Achète régulièrement ou ponctuellement des produits importés de Chine et veut acheter en confiance, sans mauvaises surprises."
              rows={[
                {
                  b: "Attentes :",
                  t: " trouver vite le bon produit chez un fournisseur fiable, comprendre les écarts de qualité et éviter les arnaques.",
                },
                { b: "Support :", t: " application mobile (iOS + Android)." },
              ]}
              tags={[cy("Abonnement mensuel"), gh("Accès complet à la base")]}
            />
            <UserCard
              letter="B"
              letterBg="linear-gradient(150deg,var(--navy),var(--navy-700))"
              title="Le chineur / revendeur débutant"
              desc="Achète pour revendre ou pour s’équiper et a besoin d’identifier rapidement les références fiables et les bonnes affaires."
              rows={[
                {
                  b: "Attentes :",
                  t: " repérer les produits phares, éviter les déceptions et gagner du temps dans la recherche.",
                },
                { b: "Support :", t: " application mobile (iOS + Android)." },
              ]}
              tags={[nv("Recherche par qualité"), cy("Favoris & listes")]}
            />
            <UserCard
              letter="C"
              letterBg="linear-gradient(150deg,var(--navy),var(--navy-700))"
              title="L’administrateur (le porteur du projet)"
              desc="Gère les fournisseurs, produits, catégories, avis et abonnements depuis un back-office web."
              rows={[
                {
                  b: "Attentes :",
                  t: " piloter la base en autonomie, ajouter et classer le contenu sans intervention technique.",
                },
                { b: "Support :", t: " back-office d’administration web." },
              ]}
              tags={[gh("Accès web sécurisé")]}
            />
          </div>
        </section>

        {/* 04 — MODÈLE ÉCONOMIQUE */}
        <section
          id="s4"
          data-dc-section
          style={{ ...SECTION_DOTS, backgroundColor: "var(--band-a)" }}
        >
          <div style={CONTAINER}>
            <SectionHeader
              num="04 — MODÈLE ÉCONOMIQUE"
              title="Modèle économique"
              lead="Un modèle 100 % abonnement : l’utilisateur s’abonne pour accéder à l’ensemble de la base qualifiée de fournisseurs. Simple, lisible et à forte valeur perçue, sans aucune commission sur les achats."
            />
            <div style={{ overflowX: "auto", margin: "16px 0" }}>
              <table
                style={{
                  width: "100%",
                  borderCollapse: "collapse",
                  fontSize: "13.6px",
                  border: "1px solid var(--line)",
                  borderRadius: "14px",
                  overflow: "hidden",
                  minWidth: "560px",
                }}
              >
                <thead>
                  <tr>
                    <th style={TH}>Offre</th>
                    <th style={TH}>Formule</th>
                    <th style={TH}>Tarif</th>
                    <th style={TH}>Inclus</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={TD}>
                      <Strong>Abonné</Strong>
                      <br />
                      (particulier)
                    </td>
                    <td style={TD}>Abonnement mensuel</td>
                    <td style={TD}>
                      <Strong>Abonnement in-app</Strong>
                      <br />
                      <span style={{ color: "var(--muted)" }}>sans engagement</span>
                    </td>
                    <td style={TD}>
                      Accès complet à la base qualifiée : fournisseurs, produits, recherche, fiches
                      enrichies, avis, favoris et alertes.
                    </td>
                  </tr>
                  <tr>
                    <td style={TD_ALT}>
                      <Strong>Découverte</Strong>
                      <br />
                      (avant abonnement)
                    </td>
                    <td style={TD_ALT}>Onboarding guidé</td>
                    <td style={TD_ALT}>
                      <Strong>Gratuit</Strong>
                      <br />
                      <span style={{ color: "var(--muted)" }}>aperçu</span>
                    </td>
                    <td style={TD_ALT}>
                      Présentation de la proposition de valeur et aperçu de la base avant de
                      s’abonner.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <DiamondHeading marginTop="30px">Encaissement de l’abonnement</DiamondHeading>
            <p
              style={{
                fontSize: "14.5px",
                color: "var(--slate)",
                margin: "0 0 13px",
                lineHeight: 1.62,
              }}
            >
              L’abonnement est encaissé directement dans l’application, via les stores, et géré de
              façon transparente :
            </p>
            <div style={GRID_AUTO}>
              <FeatureCard icon="›" iconBg="var(--cyan)" title="Abonnement in-app (stores)">
                Abonnements in-app via l’<Strong>App Store</Strong> et le{" "}
                <Strong>Google Play Store</Strong> (norme imposée par Apple & Google), avec gestion
                des reçus et des renouvellements.
              </FeatureCard>
              <FeatureCard icon="›" iconBg="var(--navy)" title="Un modèle transparent">
                L’utilisateur paie un abonnement clair ; SourcePro ne prélève{" "}
                <Strong>aucune commission</Strong> sur les achats qu’il réalise ensuite auprès des
                fournisseurs.
              </FeatureCard>
            </div>
            <InfoCallout title="Un modèle simple et lisible">
              Le revenu provient exclusivement des abonnements. SourcePro ne prélève aucune
              commission sur les achats réalisés auprès des fournisseurs : l’utilisateur paie pour
              savoir où acheter, pas pour acheter.
            </InfoCallout>
          </div>
        </section>

        {/* 05 — PÉRIMÈTRE FONCTIONNEL */}
        <section
          id="s5"
          data-dc-section
          style={{ ...SECTION_DOTS, backgroundColor: "var(--band-b)" }}
        >
          <div style={CONTAINER}>
            <SectionHeader
              num="05 — FONCTIONNALITÉS"
              title="Fonctionnalités détaillées"
              lead="Ensemble des modules inclus dans la version 1 (livraison initiale). Chaque module ci-dessous fait partie de la prestation. Les évolutions ultérieures sont décrites en section 10."
            />
            {modules.map((m) => (
              <div
                key={m.n}
                style={{
                  background: "var(--card-grad)",
                  border: "1px solid var(--card-bd)",
                  borderRadius: "14px",
                  margin: "16px 0",
                  boxShadow: "var(--shadow)",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    gap: "14px",
                    alignItems: "flex-start",
                    padding: "20px 22px 14px",
                  }}
                >
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "11px",
                      color: "#fff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      fontWeight: 600,
                      fontFamily: "var(--font-disp)",
                      fontSize: "15px",
                      boxShadow: "0 6px 14px rgba(12,35,64,.22)",
                      background: m.iconBg,
                    }}
                    aria-hidden="true"
                  >
                    {m.n}
                  </div>
                  <div style={{ flex: 1 }}>
                    <h4
                      style={{
                        fontFamily: "var(--font-disp)",
                        fontSize: "16px",
                        color: "#fff",
                        fontWeight: 600,
                        margin: "2px 0 3px",
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        flexWrap: "wrap",
                      }}
                    >
                      {m.title}
                      {m.hasBadge ? (
                        <span
                          style={{
                            ...TAG_BASE,
                            background: "var(--tint)",
                            color: "var(--cyan-ink)",
                          }}
                        >
                          {m.badge}
                        </span>
                      ) : null}
                    </h4>
                    <div
                      style={{
                        fontSize: "13.5px",
                        color: "var(--slate)",
                        lineHeight: 1.55,
                      }}
                    >
                      {m.desc}
                    </div>
                  </div>
                </div>
                <div style={{ padding: "4px 22px 14px clamp(22px,4vw,76px)" }}>
                  {m.feats.map((f, i) => (
                    <div
                      key={i}
                      style={{
                        display: "flex",
                        gap: "10px",
                        padding: "6px 0",
                        fontSize: "13.6px",
                        color: "var(--slate)",
                        lineHeight: 1.5,
                      }}
                    >
                      <span
                        style={{
                          color: "var(--cyan-ink)",
                          flexShrink: 0,
                          fontWeight: 700,
                          fontSize: "12px",
                          marginTop: "3px",
                        }}
                        aria-hidden="true"
                      >
                        ✓
                      </span>
                      <span>
                        {f.b ? <Strong>{f.b}</Strong> : null}
                        {f.t}
                      </span>
                    </div>
                  ))}
                </div>
                <div
                  style={{
                    padding: "0 22px 18px clamp(22px,4vw,76px)",
                    display: "flex",
                    gap: "8px",
                    flexWrap: "wrap",
                  }}
                >
                  {m.tags.map((t) => (
                    <span
                      key={t.label}
                      style={{
                        ...TAG_BASE,
                        background: t.bg,
                        color: t.fg,
                        border: t.bd,
                      }}
                    >
                      {t.label}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <ChapterBand
          eyebrow="La promesse"
          title="La fiabilité se vérifie,"
          titleAccent="produit par produit."
          sub="Base curée de fournisseurs fiables, classement par niveau de qualité et recherche qui révèle les écarts : SourcePro guide l’utilisateur vers le bon produit, sans se faire avoir."
        />

        {/* 06 — PARCOURS */}
        <section
          id="s6"
          data-dc-section
          style={{ ...SECTION_DOTS, backgroundColor: "var(--band-a)" }}
        >
          <div style={CONTAINER}>
            <SectionHeader num="06 — PARCOURS" title="Parcours utilisateur type" />
            <JourneyHeading letter="A">Découvrir &amp; s’abonner</JourneyHeading>
            <JourneyRow
              steps={[
                {
                  n: "ÉTAPE 1",
                  t: "Télécharger",
                  d: "Installe l’app et découvre la proposition de valeur via un onboarding clair.",
                },
                {
                  n: "ÉTAPE 2",
                  t: "S’abonner",
                  d: "Souscrit à l’abonnement pour débloquer la base qualifiée de fournisseurs.",
                },
                {
                  n: "ÉTAPE 3",
                  t: "Explorer",
                  d: "Parcourt les catégories et les fournisseurs fiables référencés.",
                },
                {
                  n: "ÉTAPE 4",
                  t: "Mettre en favori",
                  d: "Enregistre les produits et fournisseurs qui l’intéressent.",
                },
              ]}
            />
            <JourneyHeading letter="B" marginTop="30px">
              Rechercher &amp; décider
            </JourneyHeading>
            <JourneyRow
              steps={[
                {
                  n: "ÉTAPE 1",
                  t: "Rechercher",
                  d: "Recherche un produit précis ou navigue par catégorie.",
                },
                {
                  n: "ÉTAPE 2",
                  t: "Comparer",
                  d: "SourcePro met en avant les écarts de qualité entre produits similaires.",
                },
                {
                  n: "ÉTAPE 3",
                  t: "Décider",
                  d: "Consulte la fiche enrichie et les avis, identifie le bon produit.",
                },
                {
                  n: "ÉTAPE 4",
                  t: "Être fidélisé",
                  d: "Favoris, alertes et nouveautés le ramènent régulièrement dans l’app.",
                },
              ]}
            />
          </div>
        </section>

        {/* 07 — TECHNIQUE */}
        <section
          id="s7"
          data-dc-section
          style={{ ...SECTION_DOTS, backgroundColor: "var(--band-b)" }}
        >
          <div style={CONTAINER}>
            <SectionHeader
              num="07 — TECHNIQUE"
              title="Architecture & choix technologiques"
              lead="Progix sélectionne les technologies les plus adaptées au besoin, en privilégiant la performance, la rapidité de développement et la maintenabilité. Le choix final de la stack relève de l’expertise de Progix."
            />
            <div style={GRID_AUTO}>
              <FeatureCard icon="›" iconBg="var(--cyan)" title="Application mobile cross-platform">
                Une seule base de code pour <Strong>iOS et Android</Strong> : performances natives,
                interface haut de gamme et délais maîtrisés — idéal pour une app grand public riche
                en interactions.
              </FeatureCard>
              <FeatureCard icon="›" iconBg="var(--navy)" title="Back-office &amp; API">
                Un panneau web d’administration et une API claire et maintenable pour gérer
                fournisseurs, produits, catégories, avis et abonnements, avec une montée en charge
                aisée.
              </FeatureCard>
              <FeatureCard icon="›" iconBg="var(--cyan)" title="Base de données optimisée">
                Une architecture de données optimisée pour la{" "}
                <Strong>recherche et le filtrage rapides</Strong> (catégories, niveaux de qualité,
                fiches), taillée pour la solidité et l’intégrité des données.
              </FeatureCard>
              <FeatureCard icon="›" iconBg="var(--navy)" title="Hébergement cloud scalable">
                Infrastructure cloud qui s’adapte à la charge utilisateur, avec sauvegardes
                régulières et supervision — prête à absorber la croissance sans refonte.
              </FeatureCard>
            </div>
            <DiamondHeading marginTop="30px">Services & intégrations</DiamondHeading>
            <div style={{ overflowX: "auto", margin: "16px 0" }}>
              <table
                style={{
                  width: "100%",
                  borderCollapse: "collapse",
                  fontSize: "13.6px",
                  border: "1px solid var(--line)",
                  borderRadius: "14px",
                  overflow: "hidden",
                  minWidth: "520px",
                }}
              >
                <thead>
                  <tr>
                    <th style={TH}>Brique</th>
                    <th style={TH}>Solution</th>
                    <th style={TH}>Rôle</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={TD_NB}>
                      <Strong>Abonnements in-app</Strong>
                    </td>
                    <td style={TD_NB}>App Store / Google Play</td>
                    <td style={TD_NB}>
                      Abonnements & achats intégrés iOS/Android, reçus et renouvellements.
                    </td>
                  </tr>
                  <tr>
                    <td style={TD_NB_ALT}>
                      <Strong>Recherche &amp; filtrage</Strong>
                    </td>
                    <td style={TD_NB_ALT}>Index optimisé</td>
                    <td style={TD_NB_ALT}>
                      Recherche par produit, catégories et niveaux de qualité.
                    </td>
                  </tr>
                  <tr>
                    <td style={TD_NB}>
                      <Strong>Notifications push</Strong>
                    </td>
                    <td style={TD_NB}>Service push</td>
                    <td style={TD_NB}>Alertes nouveautés et nouveaux fournisseurs fiables.</td>
                  </tr>
                  <tr>
                    <td style={TD_NB_ALT}>
                      <Strong>Stockage média</Strong>
                    </td>
                    <td style={TD_NB_ALT}>Object storage cloud</td>
                    <td style={TD_NB_ALT}>Visuels des produits et des fournisseurs.</td>
                  </tr>
                  <tr>
                    <td style={{ ...TD_NB, borderBottom: "none" }}>
                      <Strong>Back-office</Strong>
                    </td>
                    <td style={{ ...TD_NB, borderBottom: "none" }}>Panneau d’administration</td>
                    <td style={{ ...TD_NB, borderBottom: "none" }}>
                      Gestion du contenu et modération des avis.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <DiamondHeading marginTop="30px">Vue d’architecture</DiamondHeading>
            <div
              style={{
                background: "var(--paper)",
                border: "1px solid var(--line)",
                borderRadius: "14px",
                padding: "26px 22px",
                margin: "16px 0",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "stretch",
                  justifyContent: "center",
                  gap: "14px",
                  flexWrap: "wrap",
                }}
              >
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  <div style={ARCH_COL_LABEL}>Clients</div>
                  <div style={ARCH_NODE}>
                    <div style={ARCH_NODE_TITLE}>App mobile</div>
                    <div style={ARCH_NODE_SUB}>iOS + Android</div>
                  </div>
                  <div style={ARCH_NODE}>
                    <div style={ARCH_NODE_TITLE}>Landing page</div>
                    <div style={ARCH_NODE_SUB}>Présentation</div>
                  </div>
                  <div style={ARCH_NODE}>
                    <div style={ARCH_NODE_TITLE}>Back-office</div>
                    <div style={ARCH_NODE_SUB}>Administration</div>
                  </div>
                </div>
                <div style={ARCH_ARROW} aria-hidden="true">
                  →
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                    justifyContent: "center",
                  }}
                >
                  <div style={ARCH_COL_LABEL}>Cœur applicatif</div>
                  <div
                    style={{
                      ...ARCH_NODE,
                      border: "1.5px solid var(--cyan)",
                      background: "var(--card-grad)",
                    }}
                  >
                    <div style={ARCH_NODE_TITLE}>API</div>
                    <div style={ARCH_NODE_SUB}>Logique métier & sécurité</div>
                  </div>
                  <div
                    style={{
                      ...ARCH_NODE,
                      border: "1.5px solid var(--navy)",
                      background: "var(--card-grad)",
                    }}
                  >
                    <div style={ARCH_NODE_TITLE}>Base de données</div>
                    <div style={ARCH_NODE_SUB}>Recherche &amp; filtrage</div>
                  </div>
                </div>
                <div style={ARCH_ARROW} aria-hidden="true">
                  →
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                    justifyContent: "center",
                  }}
                >
                  <div style={ARCH_COL_LABEL}>Services externes</div>
                  <div style={ARCH_NODE}>
                    <div style={ARCH_NODE_TITLE}>Stores</div>
                    <div style={ARCH_NODE_SUB}>Abonnements in-app</div>
                  </div>
                  <div style={ARCH_NODE}>
                    <div style={ARCH_NODE_TITLE}>Recherche</div>
                    <div style={ARCH_NODE_SUB}>Index optimisé</div>
                  </div>
                  <div style={ARCH_NODE}>
                    <div style={ARCH_NODE_TITLE}>Push</div>
                    <div style={ARCH_NODE_SUB}>Notifications</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 08 — SÉCURITÉ & CONFORMITÉ */}
        <section
          id="s8"
          data-dc-section
          style={{ ...SECTION_DOTS, backgroundColor: "var(--band-a)" }}
        >
          <div style={CONTAINER}>
            <SectionHeader
              num="08 — SÉCURITÉ & CONFORMITÉ"
              title="Sécurité, RGPD & exigences non-fonctionnelles"
            />
            <div style={GRID_AUTO}>
              <FeatureCard icon="⛩" iconBg="var(--navy)" title="Sécurité">
                Authentification par jeton (JWT), mots de passe chiffrés, communications en HTTPS,
                contrôle des accès par rôle, bonnes pratiques contre les vulnérabilités courantes.
              </FeatureCard>
              <FeatureCard icon="§" iconBg="var(--cyan)" title="RGPD & données">
                Hébergement conforme, consentement explicite, droit d’accès et d’effacement,
                minimisation des données, politique de confidentialité. Données personnelles
                traitées conformément au RGPD.
              </FeatureCard>
              <FeatureCard icon="⚡" iconBg="var(--navy)" title="Performance">
                Temps de réponse fluides, écrans qui se chargent rapidement, recherche et filtres
                réactifs même avec un volume croissant de fournisseurs et de produits.
              </FeatureCard>
              <FeatureCard icon="›" iconBg="var(--cyan)" title="Scalabilité">
                Architecture prête à absorber la croissance (montée du nombre d’utilisateurs,
                extension du catalogue et des catégories) sans refonte structurelle.
              </FeatureCard>
              <FeatureCard icon="♺" iconBg="var(--navy)" title="Disponibilité">
                Service stable, sauvegardes régulières de la base de données, supervision de base de
                la production.
              </FeatureCard>
              <FeatureCard icon="⚐" iconBg="var(--cyan)" title="Évolutivité & langues">
                Code structuré et documenté pour faciliter la reprise et les évolutions.
                Architecture prête au multilingue ; <Strong>français</Strong> au lancement.
              </FeatureCard>
            </div>
          </div>
        </section>

        {/* 09 — LIVRABLES */}
        <section
          id="s9"
          data-dc-section
          style={{ ...SECTION_DOTS, backgroundColor: "var(--band-b)" }}
        >
          <div style={CONTAINER}>
            <SectionHeader num="09 — LIVRABLES" title="Livrables & publication" />
            <div
              style={{
                background: "var(--card-grad)",
                border: "1px solid var(--card-bd)",
                borderRadius: "14px",
                padding: "8px 24px",
                boxShadow: "var(--shadow)",
                margin: "14px 0",
              }}
            >
              {[
                {
                  n: "1",
                  t: "Application mobile iOS & Android",
                  d: "Publiée sur l’App Store et le Google Play Store, avec un design sur mesure.",
                },
                {
                  n: "2",
                  t: "Back-office d’administration",
                  d: "Interface web de pilotage : fournisseurs, produits, catégories, avis, abonnements, tableau de bord.",
                },
                {
                  n: "3",
                  t: "Landing page",
                  d: "Page de présentation responsive, optimisée pour l’acquisition.",
                },
                {
                  n: "4",
                  t: "Base de données qualifiée",
                  d: "Première constitution de la base de fournisseurs fiables, classés et qualifiés, prête à enrichir.",
                },
                {
                  n: "5",
                  t: "Code source & documentation technique",
                  d: "Transfert de propriété progressif au fil des paiements ; documentation permettant la reprise par tout développeur.",
                },
                {
                  n: "6",
                  t: "Accompagnement marketing — 90 jours",
                  d: "Formation complète + suivi hebdomadaire + acteur UGC fourni (voir section 11).",
                },
              ].map((d, i, arr) => (
                <div
                  key={d.n}
                  style={{
                    display: "flex",
                    gap: "16px",
                    padding: "16px 0",
                    borderBottom: i < arr.length - 1 ? "1px solid var(--line)" : "none",
                  }}
                >
                  <div
                    style={{
                      width: "38px",
                      height: "38px",
                      borderRadius: "10px",
                      background: "var(--tint)",
                      color: "var(--cyan-ink)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: "var(--font-disp)",
                      fontWeight: 700,
                      flexShrink: 0,
                    }}
                    aria-hidden="true"
                  >
                    {d.n}
                  </div>
                  <div>
                    <div
                      style={{
                        fontFamily: "var(--font-disp)",
                        fontWeight: 600,
                        fontSize: "15px",
                        color: "#fff",
                        marginBottom: "3px",
                      }}
                    >
                      {d.t}
                    </div>
                    <div
                      style={{
                        fontSize: "13.4px",
                        color: "var(--slate)",
                        lineHeight: 1.5,
                      }}
                    >
                      {d.d}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <InfoCallout title="Propriété intellectuelle">
              Le client est propriétaire à <Strong>100 %</Strong> de l’Application livrée. La
              propriété est transférée progressivement à mesure des paiements ; une documentation
              complète est remise à la livraison finale.
            </InfoCallout>
          </div>
        </section>

        {/* 10 — ÉVOLUTIONS */}
        <section
          id="s10"
          data-dc-section
          style={{ ...SECTION_DOTS, backgroundColor: "var(--band-a)" }}
        >
          <div style={CONTAINER}>
            <SectionHeader
              num="10 — ÉVOLUTIONS"
              title="Hors périmètre & évolutions (Phase 2)"
              lead="Pour garantir un lancement rapide et maîtrisé, les éléments suivants ne font pas partie de la version 1. Ils pourront être développés en évolutions, selon les priorités issues des premiers mois d’exploitation."
            />
            <div style={GRID_AUTO}>
              <FeatureCard icon="+" iconBg="var(--navy)" title="Version web">
                Accès à la base depuis le navigateur, au-delà du mobile.
              </FeatureCard>
              <FeatureCard icon="+" iconBg="var(--navy)" title="Comparateur avancé">
                Comparaison côte à côte de produits et fournisseurs similaires.
              </FeatureCard>
              <FeatureCard icon="+" iconBg="var(--navy)" title="Nouvelles catégories">
                Extension progressive du catalogue à de nouvelles familles de produits.
              </FeatureCard>
              <FeatureCard icon="+" iconBg="var(--navy)" title="Programme de contributeurs">
                Valorisation des utilisateurs qui enrichissent la base (avis, signalements).
              </FeatureCard>
              <FeatureCard icon="+" iconBg="var(--navy)" title="Analytics avancés">
                Tableaux de bord poussés, exports, segmentation fine des utilisateurs.
              </FeatureCard>
            </div>
            <InfoCallout
              icon="!"
              iconBg="var(--amber)"
              title="Après les 90 jours"
              titleColor="#f0c98a"
              borderColor="rgba(232,161,58,0.3)"
              background="var(--amber-bg)"
            >
              Maintenance mensuelle en option (support continu). Les nouvelles fonctionnalités
              post-livraison sont développées au tarif horaire convenu. Détails chiffrés dans le
              devis.
            </InfoCallout>
          </div>
        </section>

        {/* 11 — ACCOMPAGNEMENT */}
        <section
          id="s11"
          data-dc-section
          style={{ ...SECTION_DOTS, backgroundColor: "var(--band-b)" }}
        >
          <div style={CONTAINER}>
            <SectionHeader
              num="11 — ACCOMPAGNEMENT"
              title="Accompagnement marketing (90 jours)"
              lead="Progix ne livre pas qu’une application : un accompagnement de 90 jours est inclus pour assurer le lancement commercial et l’acquisition des premiers utilisateurs."
            />
            <div style={GRID_AUTO}>
              <FeatureCard icon="1" iconBg="var(--cyan)" title="Formation complète (3 h)">
                Méthode pour créer des vidéos publicitaires (UGC) qui convertissent, lancer et
                optimiser des campagnes <Strong>Meta Ads</Strong> et{" "}
                <Strong>Apple Search Ads</Strong>.
              </FeatureCard>
              <FeatureCard icon="2" iconBg="var(--navy)" title="Acteur UGC fourni">
                Progix fournit l’acteur pour les vidéos publicitaires et les scripts associés, basés
                sur son playbook interne.
              </FeatureCard>
              <FeatureCard icon="3" iconBg="var(--cyan)" title="Suivi hebdomadaire">
                Un point par semaine : revue des KPIs, validation des actions réalisées, consignes
                concrètes pour la semaine suivante.
              </FeatureCard>
              <FeatureCard icon="4" iconBg="var(--navy)" title="Objectifs de croissance">
                Définition des cibles d’acquisition et des leviers, ajustés chaque semaine selon les
                résultats.
              </FeatureCard>
            </div>
            <div
              style={{
                background:
                  "linear-gradient(155deg,var(--navy-900),var(--navy) 60%,var(--navy-800))",
                color: "#DDE8F4",
                borderRadius: "22px",
                padding: "30px clamp(24px,4vw,34px)",
                margin: "22px 0",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-disp)",
                  fontWeight: 600,
                  fontSize: "11px",
                  letterSpacing: "1.8px",
                  textTransform: "uppercase",
                  color: "var(--cyan)",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "9px",
                  position: "relative",
                }}
              >
                <span
                  style={{
                    width: "22px",
                    height: "2px",
                    background: "var(--cyan)",
                    borderRadius: "2px",
                    display: "inline-block",
                  }}
                  aria-hidden="true"
                />
                Objectifs de performance visés
              </span>
              <h3
                style={{
                  fontFamily: "var(--font-disp)",
                  color: "#fff",
                  fontSize: "19px",
                  fontWeight: 600,
                  margin: "12px 0 4px",
                  position: "relative",
                  lineHeight: 1.3,
                }}
              >
                Un coût d’acquisition par client <em>payant</em>
              </h3>
              <p
                style={{
                  color: "#B9CCE2",
                  margin: 0,
                  fontSize: "14px",
                  lineHeight: 1.6,
                  position: "relative",
                }}
              >
                Engagement de moyens sur le coût d’acquisition, sous réserve que le client applique
                les recommandations, investisse le budget publicitaire convenu et participe aux
                points hebdomadaires.
              </p>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,160px),1fr))",
                  gap: "22px",
                  marginTop: "18px",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                <div>
                  <div
                    style={{
                      fontFamily: "var(--font-disp)",
                      fontWeight: 700,
                      fontSize: "26px",
                      color: "#fff",
                      letterSpacing: "-.02em",
                    }}
                  >
                    90 j
                  </div>
                  <div
                    style={{
                      fontSize: "12px",
                      color: "#9FB6CE",
                      marginTop: "3px",
                      lineHeight: 1.4,
                    }}
                  >
                    d’accompagnement &amp; de suivi hebdomadaire des KPIs
                  </div>
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: "var(--font-disp)",
                      fontWeight: 700,
                      fontSize: "26px",
                      color: "#fff",
                      letterSpacing: "-.02em",
                    }}
                  >
                    A/B
                  </div>
                  <div
                    style={{
                      fontSize: "12px",
                      color: "#9FB6CE",
                      marginTop: "3px",
                      lineHeight: 1.4,
                    }}
                  >
                    tests de paywalls &amp; d’audiences pour optimiser la conversion
                  </div>
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: "var(--font-disp)",
                      fontWeight: 700,
                      fontSize: "26px",
                      color: "#fff",
                      letterSpacing: "-.02em",
                    }}
                  >
                    Hebdo
                  </div>
                  <div
                    style={{
                      fontSize: "12px",
                      color: "#9FB6CE",
                      marginTop: "3px",
                      lineHeight: 1.4,
                    }}
                  >
                    point de suivi & ajustement sur 90 jours
                  </div>
                </div>
              </div>
            </div>
            <p
              style={{
                fontSize: "12px",
                color: "var(--muted)",
                fontStyle: "italic",
                margin: "8px 0 0",
                lineHeight: 1.5,
              }}
            >
              Le coût d’acquisition par client payant intègre déjà la conversion. Ces objectifs sont
              conditionnés à la pleine collaboration du client ; à défaut, l’engagement ne
              s’applique pas.
            </p>
          </div>
        </section>

        {/* 12 — DÉMARCHE */}
        <section
          id="s12"
          data-dc-section
          style={{ ...SECTION_DOTS, backgroundColor: "var(--band-a)" }}
        >
          <div style={CONTAINER}>
            <SectionHeader
              num="12 — DÉMARCHE"
              title="Démarche, planning & validation"
              lead="Réalisation itérative sur un délai de 60 jours à compter du démarrage (réception de l’acompte + réunion de cadrage), avec validation du client à chaque étape clé."
            />
            <div style={{ margin: "8px 0 0" }}>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                {[
                  {
                    n: "PHASE 1",
                    t: "Cadrage",
                    range: "≈ J1 – J8",
                    d: "Réunion de lancement, spécifications fines, validation du périmètre.",
                  },
                  {
                    n: "PHASE 2",
                    t: "Design UI/UX",
                    range: "≈ J9 – J18",
                    d: "Maquettes des écrans (jusqu’à 3 révisions incluses), validation visuelle.",
                  },
                  {
                    n: "PHASE 3",
                    t: "Développement",
                    range: "≈ J19 – J54",
                    d: "Base de données, back-office, app mobile, abonnement & notifications — par incréments.",
                  },
                  {
                    n: "PHASE 4",
                    t: "Recette & publication",
                    range: "≈ J55 – J60",
                    d: "Tests qualité, corrections, mise en ligne et publication sur les stores.",
                  },
                ].map((p) => (
                  <div key={p.n} style={STEP_CARD}>
                    <div style={STEP_EYEBROW}>{p.n}</div>
                    <div style={{ ...STEP_TITLE, margin: "6px 0 2px" }}>{p.t}</div>
                    <div style={{ fontSize: "12px", color: "var(--muted)" }}>{p.range}</div>
                    <div style={{ ...STEP_DESC, marginTop: "8px" }}>{p.d}</div>
                  </div>
                ))}
              </div>
              <div style={STEP_RULE} aria-hidden="true" />
            </div>
            <div style={INFOBOX}>
              <div style={INFOBOX_ICON} aria-hidden="true">
                i
              </div>
              <div>
                <h4 style={INFOBOX_TITLE}>Calendrier détaillé des sprints</h4>
                <p style={INFOBOX_TEXT}>
                  Le découpage précis en sprints, jalons et livrables intermédiaires fait l’objet
                  d’un document dédié (
                  <span style={{ color: "var(--cyan-ink)", fontWeight: 600 }}>
                    « Calendrier des sprints »
                  </span>
                  ), aligné sur ce planning et sur l’échéancier de paiement du devis.
                </p>
              </div>
            </div>
            <DiamondHeading marginTop="30px">Validation</DiamondHeading>
            <ul style={{ listStyle: "none", margin: "10px 0", padding: 0 }}>
              {[
                <>
                  Chaque phase clé (<b style={STRONG_INK}>design, fonctionnalités, publication</b>)
                  est validée par le client avant de passer à la suivante.
                </>,
                <>
                  Les retards imputables au client (absence de validation, de contenu ou d’accès) ne
                  sont pas comptés dans le délai.
                </>,
                <>Un point d’avancement régulier assure la transparence tout au long du projet.</>,
              ].map((node, i) => (
                <li
                  key={i}
                  style={{
                    position: "relative",
                    padding: "5px 0 5px 22px",
                    fontSize: "14px",
                    color: "var(--slate)",
                    lineHeight: 1.55,
                  }}
                >
                  <span
                    style={{
                      position: "absolute",
                      left: 0,
                      top: "5px",
                      color: "var(--cyan)",
                      fontWeight: 700,
                      fontSize: "12px",
                    }}
                    aria-hidden="true"
                  >
                    —
                  </span>
                  {node}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 13 — PRÉREQUIS */}
        <section
          id="s13"
          data-dc-section
          style={{ ...SECTION_DOTS, backgroundColor: "var(--band-b)" }}
        >
          <div style={CONTAINER}>
            <SectionHeader
              num="13 — PRÉREQUIS"
              title="Prérequis & engagements du client"
              lead="Pour tenir le délai et la qualité, certains éléments relèvent du client."
            />
            <InfoCallout
              icon="▸"
              iconBg="var(--amber)"
              title="Comptes & accès à fournir"
              titleColor="#f0c98a"
              borderColor="rgba(232,161,58,0.3)"
              background="var(--amber-bg)"
            >
              Compte <Strong>Apple Developer</Strong> (99 $/an) et{" "}
              <Strong>Google Play Console</Strong> (25 $ une fois), compte <Strong>Stripe</Strong>{" "}
              (pour les paiements) — Progix accompagne la création et publie ensuite pour le client.
            </InfoCallout>
            <div style={GRID_AUTO}>
              <FeatureCard icon="▸" iconBg="var(--navy)" title="Contenus & informations">
                Fournir en temps utile les textes, visuels et informations sur les fournisseurs et
                produits à référencer, ainsi que les validations à chaque étape.
              </FeatureCard>
              <FeatureCard icon="▸" iconBg="var(--navy)" title="Budget publicitaire">
                Prévoir le budget d’acquisition recommandé pour le lancement (réparti entre Meta
                Ads, Apple Search Ads et production UGC).
              </FeatureCard>
              <FeatureCard icon="▸" iconBg="var(--navy)" title="Participation">
                Participer aux points hebdomadaires et appliquer les recommandations marketing pour
                activer l’engagement de performance.
              </FeatureCard>
              <FeatureCard icon="▸" iconBg="var(--navy)" title="Réactivité">
                Répondre et valider dans des délais raisonnables pour ne pas décaler le planning.
              </FeatureCard>
            </div>
          </div>
        </section>

        <Footer
          heading="Prêts à construire SourcePro"
          text="Ce cahier des charges fixe le périmètre de la version 1 et sert de base au devis contractuel associé. Toute évolution du périmètre fera l’objet d’un accord écrit entre les parties."
        />
      </main>
      <ScrollReveal />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Section-03 user cards & Section-06 journey rows (local helpers).    */
/* ------------------------------------------------------------------ */

const TD: CSSProperties = {
  padding: "11px 15px",
  borderBottom: "1px solid var(--line)",
  verticalAlign: "top",
  color: "var(--slate)",
  lineHeight: 1.5,
};

const TD_ALT: CSSProperties = { ...TD, background: "var(--paper)" };

const TD_NB: CSSProperties = {
  padding: "11px 15px",
  borderBottom: "1px solid var(--line)",
  color: "var(--slate)",
  lineHeight: 1.5,
};

const TD_NB_ALT: CSSProperties = { ...TD_NB, background: "var(--paper)" };

type UserRow = { b: string; t?: string; node?: ReactNode };

function UserCard({
  letter,
  letterBg,
  title,
  desc,
  rows,
  tags,
}: {
  letter: string;
  letterBg: string;
  title: string;
  desc: string;
  rows: UserRow[];
  tags: Tag[];
}) {
  return (
    <div
      style={{
        background: "var(--card-grad)",
        border: "1px solid var(--card-bd)",
        borderRadius: "14px",
        margin: "16px 0",
        boxShadow: "var(--shadow)",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "14px",
          alignItems: "flex-start",
          padding: "20px 22px 14px",
        }}
      >
        <div
          style={{
            width: "40px",
            height: "40px",
            borderRadius: "11px",
            background: letterBg,
            color: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            fontWeight: 600,
            fontFamily: "var(--font-disp)",
            fontSize: "15px",
            boxShadow: "0 6px 14px rgba(12,35,64,.22)",
          }}
          aria-hidden="true"
        >
          {letter}
        </div>
        <div style={{ flex: 1 }}>
          <h4
            style={{
              fontFamily: "var(--font-disp)",
              fontSize: "16px",
              color: "#fff",
              fontWeight: 600,
              margin: "2px 0 3px",
            }}
          >
            {title}
          </h4>
          <div style={{ fontSize: "13.5px", color: "var(--slate)", lineHeight: 1.55 }}>{desc}</div>
        </div>
      </div>
      <div style={{ padding: "4px 22px 14px clamp(22px,4vw,76px)" }}>
        {rows.map((r, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              gap: "10px",
              padding: "6px 0",
              fontSize: "13.6px",
              color: "var(--slate)",
              lineHeight: 1.5,
            }}
          >
            <span
              style={{
                color: "var(--cyan-ink)",
                flexShrink: 0,
                fontWeight: 700,
                fontSize: "12px",
                marginTop: "3px",
              }}
              aria-hidden="true"
            >
              ▸
            </span>
            <span>
              {r.node ? (
                r.node
              ) : (
                <>
                  <Strong>{r.b}</Strong>
                  {r.t}
                </>
              )}
            </span>
          </div>
        ))}
      </div>
      <div
        style={{
          padding: "0 22px 18px clamp(22px,4vw,76px)",
          display: "flex",
          gap: "8px",
          flexWrap: "wrap",
        }}
      >
        {tags.map((t) => (
          <span key={t.label} style={{ ...TAG_BASE, background: t.bg, color: t.fg, border: t.bd }}>
            {t.label}
          </span>
        ))}
      </div>
    </div>
  );
}

function JourneyHeading({
  letter,
  children,
  marginTop = "14px",
}: {
  letter: string;
  children: ReactNode;
  marginTop?: string;
}) {
  return (
    <h3
      style={{
        fontFamily: "var(--font-disp)",
        fontSize: "18px",
        color: "#fff",
        fontWeight: 600,
        margin: `${marginTop} 0 12px`,
        display: "flex",
        alignItems: "center",
        gap: "10px",
      }}
    >
      <span style={{ color: "var(--cyan)", fontSize: "13px", fontWeight: 700 }} aria-hidden="true">
        {letter}
      </span>
      {children}
    </h3>
  );
}

function JourneyRow({ steps }: { steps: ReadonlyArray<{ n: string; t: string; d: string }> }) {
  return (
    <div style={{ margin: "0 0 8px" }}>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
        {steps.map((s) => (
          <div key={s.n} style={STEP_CARD}>
            <div style={STEP_EYEBROW}>{s.n}</div>
            <div style={STEP_TITLE}>{s.t}</div>
            <div style={STEP_DESC}>{s.d}</div>
          </div>
        ))}
      </div>
      <div style={STEP_RULE} aria-hidden="true" />
    </div>
  );
}
