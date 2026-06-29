import { Cover } from "./cover";
import { DcHeader } from "./dc-header";
import { DownloadFab } from "./download-fab";
import { Footer } from "./footer";
import { ScrollReveal } from "./scroll-reveal";
import { SectionHeader } from "./primitives";
import { ChapterBand } from "./chapter-band";
import styles from "./devis.module.css";

/* ---------- Cover data (from the renderVals() island) ---------- */
const coverBadges: ReadonlyArray<{ l: string; v: string; u: string }> = [
  { l: "Durée totale", v: "60", u: " j" },
  { l: "Sprints", v: "6", u: "" },
  { l: "Phases", v: "4", u: "" },
  { l: "Jalons", v: "3", u: "" },
];

const coverMeta: ReadonlyArray<{ l: string; v: string }> = [
  { l: "Projet", v: "SourcePro" },
  { l: "Client", v: "Oussama" },
  { l: "Prestataire", v: "Progix Inc. · NEQ 1181317117" },
  { l: "Référence · Version", v: "SPRINT-PROGIX-2026 · v1.0" },
];

/* ---------- Section 01 — overview data ---------- */
type Stat = { n: string; u: string; l: string };
const stats: ReadonlyArray<Stat> = [
  { n: "60", u: " jours", l: "de la signature à la publication" },
  { n: "6", u: "", l: "sprints (Sprint 1 → 6)" },
  { n: "4", u: "", l: "phases avec validation client" },
  { n: "3", u: "", l: "jalons de paiement (30/40/30)" },
];

const G_NV = "linear-gradient(90deg,var(--navy),var(--navy-700))";
const G_TL = "linear-gradient(90deg,var(--navy-700),var(--cyan-deep))";
const G_CY = "linear-gradient(90deg,var(--cyan-deep),var(--cyan))";

type GanttRow = {
  name: string;
  sprint: string;
  left: string;
  width: string;
  label: string;
  bg: string;
};
const gantt: ReadonlyArray<GanttRow> = [
  { name: "Cadrage", sprint: "Sprint 1", left: "0%", width: "13.3%", label: "J1–8", bg: G_NV },
  {
    name: "Design UI/UX",
    sprint: "Sprint 2",
    left: "13.3%",
    width: "16.7%",
    label: "J9–18",
    bg: G_TL,
  },
  {
    name: "Base & back-office",
    sprint: "Sprint 3",
    left: "30%",
    width: "23.3%",
    label: "J19–32",
    bg: G_CY,
  },
  {
    name: "Application mobile",
    sprint: "Sprint 4",
    left: "53.3%",
    width: "23.3%",
    label: "J33–46",
    bg: G_CY,
  },
  {
    name: "Abonnement & notifications",
    sprint: "Sprint 5",
    left: "76.7%",
    width: "13.3%",
    label: "J47–54",
    bg: G_CY,
  },
  {
    name: "Tests & lancement",
    sprint: "Sprint 6",
    left: "90%",
    width: "10%",
    label: "J55–60",
    bg: G_NV,
  },
];

/* ---------- Section 02 — sprint detail data ---------- */
const ACC = "linear-gradient(160deg,var(--cyan-deep),var(--cyan))";
const NAV = "linear-gradient(160deg,var(--navy-900),var(--navy))";

type Tag = { label: string; bg: string; fg: string; bd: string };
const cy = (label: string): Tag => ({
  label,
  bg: "var(--tint)",
  fg: "var(--cyan-ink)",
  bd: "none",
});
const nv = (label: string): Tag => ({ label, bg: "#E9EEF6", fg: "var(--navy)", bd: "none" });
const gh = (label: string): Tag => ({
  label,
  bg: "#fff",
  fg: "var(--muted)",
  bd: "1px solid var(--line)",
});
const okT = (label: string): Tag => ({ label, bg: "var(--ok-bg)", fg: "var(--ok)", bd: "none" });

type Feat = { b: string; t: string };
const F = (b: string, t: string): Feat => ({ b, t });

type Sprint = {
  hasPhase: boolean;
  phaseNum?: string;
  phaseTitle?: string;
  phaseDays?: string;
  phaseDotBg?: string;
  leftBg: string;
  num: string;
  days: string;
  name: string;
  feats: ReadonlyArray<Feat>;
  tags: ReadonlyArray<Tag>;
};

const sprints: ReadonlyArray<Sprint> = [
  {
    hasPhase: true,
    phaseNum: "1",
    phaseTitle: "Phase 1 — Cadrage",
    phaseDays: "J1 – J8",
    phaseDotBg: "var(--navy)",
    leftBg: NAV,
    num: "1",
    days: "J1–J8",
    name: "Cadrage & architecture",
    feats: [
      F("", "Réunion de kickoff et cadrage détaillé du projet."),
      F("Définition des workflows", " et des parcours utilisateurs."),
      F("Structuration de la base de données", " (catégories, niveaux de qualité, fiches)."),
      F("", "Spécifications fonctionnelles, user stories et choix de la stack."),
    ],
    tags: [cy("Cadrage validé"), nv("Architecture technique"), gh("Backlog priorisé")],
  },
  {
    hasPhase: true,
    phaseNum: "2",
    phaseTitle: "Phase 2 — Design",
    phaseDays: "J9 – J18",
    phaseDotBg: "var(--cyan-deep)",
    leftBg: ACC,
    num: "2",
    days: "J9–J18",
    name: "Design UI/UX",
    feats: [
      F("Maquettes des écrans principaux", " : accueil, recherche, fiches, abonnement."),
      F("", "Système de navigation type « application de poche »."),
      F("Direction artistique", " et identité visuelle de l’app."),
      F("", "Design des écrans du back-office · jusqu’à 3 révisions incluses."),
    ],
    tags: [cy("Maquettes validées"), nv("Design system")],
  },
  {
    hasPhase: true,
    phaseNum: "3",
    phaseTitle: "Phase 3 — Développement",
    phaseDays: "J19 – J54",
    phaseDotBg: "var(--cyan)",
    leftBg: ACC,
    num: "3",
    days: "J19–J32",
    name: "Base de données & back-office",
    feats: [
      F("Structure de base de données", " des fournisseurs et produits."),
      F("Back-office d’administration complet", " : catégories, niveaux de qualité, fiches."),
      F("", "Système de modération des avis et signalements."),
      F("", "Première intégration de données fournisseurs pour tests."),
    ],
    tags: [cy("Back-office fonctionnel"), nv("Base de données")],
  },
  {
    hasPhase: false,
    leftBg: ACC,
    num: "4",
    days: "J33–J46",
    name: "Application mobile",
    feats: [
      F("Application mobile iOS + Android", " : recherche intelligente, navigation par catégories."),
      F("Fiches produits & fournisseurs enrichies", "."),
      F("", "Système d’avis, favoris et listes personnelles."),
      F("", "Premier build de test (TestFlight / APK) et itérations."),
    ],
    tags: [cy("App mobile en test"), nv("Recherche & fiches")],
  },
  {
    hasPhase: false,
    leftBg: ACC,
    num: "5",
    days: "J47–J54",
    name: "Abonnement & notifications",
    feats: [
      F("Abonnement in-app", " (Apple / Google) et gestion de compte."),
      F("", "Gestion des préférences utilisateur."),
      F("Système d’alertes", " et de notifications de nouveautés."),
      F("", "Optimisation de l’onboarding et de l’écran d’abonnement."),
    ],
    tags: [cy("Monétisation"), nv("Notifications")],
  },
  {
    hasPhase: true,
    phaseNum: "4",
    phaseTitle: "Phase 4 — Recette & lancement",
    phaseDays: "J55 – J60",
    phaseDotBg: "var(--navy)",
    leftBg: NAV,
    num: "6",
    days: "J55–J60",
    name: "Tests, finitions & lancement",
    feats: [
      F("Tests complets (QA)", " et correction des bugs."),
      F("", "Optimisation des performances et de l’expérience utilisateur."),
      F("", "Préparation des fiches stores (textes, visuels, captures)."),
      F("Publication", " sur l’App Store et le Play Store."),
    ],
    tags: [okT("Application publiée"), nv("Fiches stores")],
  },
];

/* ---------- Section 03 — payment milestones data ---------- */
type Mile = { pct: string; nm: string; when: string; amt: string; trig: string };
const miles: ReadonlyArray<Mile> = [
  {
    pct: "30 % · ACOMPTE",
    nm: "Au démarrage",
    when: "À la signature et au lancement du Sprint 1",
    amt: "1 500 €",
    trig: "↗ Déclenche le cadrage",
  },
  {
    pct: "40 % · LIVRAISON",
    nm: "À la publication",
    when: "En fin de Sprint 6, application publiée sur les stores",
    amt: "2 000 €",
    trig: "↗ À la livraison",
  },
  {
    pct: "30 % · LANCEMENT",
    nm: "Après accompagnement",
    when: "À l’issue de la formation marketing",
    amt: "1 500 €",
    trig: "↗ Solde final",
  },
];

const dispFont = "var(--font-disp)";

/**
 * "Calendrier des sprints" document — header, hero cover, the four content
 * sections (overview + Gantt, sprint detail, payment milestones, cadence &
 * validation), and the footer. A Server Component composing client leaves
 * (header, FAB, scroll-reveal) at the edges.
 */
export function CalendrierDocument() {
  return (
    <div className={styles.root} data-devis-root>
      <DcHeader active="calendrier" />
      <main className={styles.main}>
        <DownloadFab />
        <Cover
          tag="Calendrier des sprints · Planning de réalisation"
          title="Le plan de"
          titleLight="livraison, sprint par sprint"
          subtitle="Découpage détaillé du développement de SourcePro sur 60 jours — 6 sprints, livraison itérative avec validation à chaque étape. Aligné sur l’échéancier du devis."
          badges={coverBadges}
          meta={coverMeta}
        />

        {/* 01 — VUE D’ENSEMBLE */}
        <section
          id="s1"
          data-dc-section
          style={{
            width: "100%",
            backgroundColor: "var(--band-a)",
          }}
        >
          <div
            style={{
              maxWidth: "1040px",
              margin: "0 auto",
              padding: "clamp(56px,7vw,94px) clamp(24px,5vw,48px)",
            }}
          >
            <SectionHeader
              num="01 — VUE D’ENSEMBLE"
              title="Vue d’ensemble du planning"
              lead="Le projet est livré de façon itérative sur 60 jours, du cadrage jusqu’à la publication sur les stores. Le calendrier ci-dessous s’aligne sur les phases et l’échéancier de paiement du devis."
            />
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,150px),1fr))",
                gap: "1px",
                background: "var(--line)",
                border: "1px solid var(--line)",
                borderRadius: "14px",
                overflow: "hidden",
                margin: "18px 0",
              }}
            >
              {stats.map((t) => (
                <div
                  key={t.l}
                  style={{ background: "#fff", padding: "20px 16px", textAlign: "center" }}
                >
                  <div
                    style={{
                      fontFamily: dispFont,
                      fontWeight: 700,
                      fontSize: "28px",
                      color: "var(--navy)",
                      letterSpacing: "-.02em",
                    }}
                  >
                    {t.n}
                    <small style={{ fontSize: "14px", color: "var(--cyan)", fontWeight: 600 }}>
                      {t.u}
                    </small>
                  </div>
                  <div
                    style={{
                      fontSize: "11.5px",
                      color: "var(--muted)",
                      marginTop: "4px",
                      lineHeight: 1.35,
                    }}
                  >
                    {t.l}
                  </div>
                </div>
              ))}
            </div>
            <h3
              style={{
                fontFamily: dispFont,
                fontSize: "18px",
                color: "var(--navy)",
                fontWeight: 600,
                margin: "30px 0 12px",
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <span style={{ color: "var(--cyan)", fontSize: "13px" }}>◆</span>Diagramme de Gantt
            </h3>
            <div style={{ overflowX: "auto", margin: "16px 0" }}>
              <div
                style={{
                  border: "1px solid var(--line)",
                  borderRadius: "14px",
                  padding: "22px 22px 18px",
                  background: "var(--paper)",
                  minWidth: "640px",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    height: "16px",
                    marginLeft: "172px",
                    marginBottom: "12px",
                    borderBottom: "1px solid var(--line)",
                  }}
                >
                  {(
                    [
                      { left: "0%", label: "J1" },
                      { left: "18%", label: "J12" },
                      { left: "38%", label: "J24" },
                      { left: "58%", label: "J36" },
                      { left: "78%", label: "J48" },
                      { left: "98%", label: "J60" },
                    ] as const
                  ).map((mark) => (
                    <span
                      key={mark.label}
                      style={{
                        position: "absolute",
                        left: mark.left,
                        top: 0,
                        fontFamily: dispFont,
                        fontSize: "10px",
                        fontWeight: 600,
                        color: "var(--muted)",
                      }}
                    >
                      {mark.label}
                    </span>
                  ))}
                </div>
                {gantt.map((g) => (
                  <div
                    key={g.sprint}
                    style={{ display: "flex", alignItems: "center", marginBottom: "9px" }}
                  >
                    <div style={{ width: "172px", flexShrink: 0, paddingRight: "14px" }}>
                      <div
                        style={{
                          fontFamily: dispFont,
                          fontWeight: 600,
                          fontSize: "12.5px",
                          color: "var(--navy)",
                          lineHeight: 1.25,
                        }}
                      >
                        {g.name}
                      </div>
                      <div style={{ fontSize: "10.5px", color: "var(--muted)" }}>{g.sprint}</div>
                    </div>
                    <div
                      style={{
                        position: "relative",
                        flex: 1,
                        height: "30px",
                        background: "#fff",
                        borderRadius: "7px",
                        border: "1px solid var(--line)",
                      }}
                    >
                      <div
                        style={{
                          position: "absolute",
                          top: "3px",
                          bottom: "3px",
                          borderRadius: "5px",
                          display: "flex",
                          alignItems: "center",
                          padding: "0 9px",
                          color: "#fff",
                          fontSize: "10.5px",
                          fontWeight: 600,
                          fontFamily: dispFont,
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          boxShadow: "0 2px 7px rgba(12,35,64,.20)",
                          left: g.left,
                          width: g.width,
                          background: g.bg,
                        }}
                      >
                        {g.label}
                      </div>
                    </div>
                  </div>
                ))}
                <div
                  style={{
                    display: "flex",
                    gap: "18px",
                    marginLeft: "172px",
                    marginTop: "14px",
                    flexWrap: "wrap",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "7px",
                      fontSize: "11.5px",
                      color: "var(--slate)",
                    }}
                  >
                    <span
                      style={{
                        width: "14px",
                        height: "10px",
                        borderRadius: "3px",
                        background: "var(--navy)",
                      }}
                    />
                    Cadrage & mise en production
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "7px",
                      fontSize: "11.5px",
                      color: "var(--slate)",
                    }}
                  >
                    <span
                      style={{
                        width: "14px",
                        height: "10px",
                        borderRadius: "3px",
                        background: "var(--cyan-deep)",
                      }}
                    />
                    Design
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "7px",
                      fontSize: "11.5px",
                      color: "var(--slate)",
                    }}
                  >
                    <span
                      style={{
                        width: "14px",
                        height: "10px",
                        borderRadius: "3px",
                        background: "var(--cyan)",
                      }}
                    />
                    Développement
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{
                background: "var(--tint-2)",
                border: "1px solid #D5EAFB",
                borderRadius: "14px",
                padding: "18px 22px",
                margin: "16px 0",
                display: "flex",
                gap: "14px",
                alignItems: "flex-start",
              }}
            >
              <div
                style={{
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
                  fontFamily: dispFont,
                  background: "var(--cyan)",
                }}
              >
                i
              </div>
              <div>
                <h4
                  style={{
                    fontFamily: dispFont,
                    fontSize: "14px",
                    margin: "0 0 4px",
                    color: "var(--navy)",
                    fontWeight: 600,
                  }}
                >
                  Durée indicative & jalonnement
                </h4>
                <p
                  style={{
                    fontSize: "13.6px",
                    margin: 0,
                    color: "var(--slate)",
                    lineHeight: 1.55,
                  }}
                >
                  Les bornes en jours sont indicatives et peuvent légèrement glisser selon les
                  retours de validation. Le démarrage (J1) correspond à la réception de l’acompte et
                  à la réunion de cadrage. Sprints d’environ une semaine, avec une démo en fin de
                  chaque sprint.
                </p>
              </div>
            </div>
          </div>
        </section>

        <ChapterBand
          eyebrow="Méthode"
          title="Itératif, validé"
          titleAccent="à chaque étape."
          sub="Vous validez chaque sprint via TestFlight ou APK lors d’un point hebdomadaire — la livraison finale ne réserve aucune surprise."
        />

        {/* 02 — DÉTAIL */}
        <section
          id="s2"
          data-dc-section
          style={{
            width: "100%",
            backgroundColor: "var(--band-b)",
          }}
        >
          <div
            style={{
              maxWidth: "1040px",
              margin: "0 auto",
              padding: "clamp(56px,7vw,94px) clamp(24px,5vw,48px)",
            }}
          >
            <SectionHeader num="02 — DÉTAIL" title="Détail des sprints" />
            {sprints.map((s) => (
              <div key={s.num}>
                {s.hasPhase ? (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      margin: "30px 0 6px",
                      paddingBottom: "10px",
                      borderBottom: "2px solid var(--line)",
                    }}
                  >
                    <div
                      style={{
                        width: "34px",
                        height: "34px",
                        borderRadius: "9px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#fff",
                        fontFamily: dispFont,
                        fontWeight: 700,
                        fontSize: "13px",
                        flexShrink: 0,
                        background: s.phaseDotBg,
                      }}
                    >
                      {s.phaseNum}
                    </div>
                    <div
                      style={{
                        fontFamily: dispFont,
                        fontWeight: 600,
                        fontSize: "17px",
                        color: "var(--navy)",
                      }}
                    >
                      {s.phaseTitle}
                    </div>
                    <div
                      style={{
                        marginLeft: "auto",
                        fontFamily: dispFont,
                        fontSize: "12px",
                        fontWeight: 600,
                        color: "var(--cyan-ink)",
                        background: "var(--tint)",
                        padding: "4px 12px",
                        borderRadius: "999px",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {s.phaseDays}
                    </div>
                  </div>
                ) : null}
                <div
                  style={{
                    display: "flex",
                    border: "1px solid var(--line)",
                    borderRadius: "14px",
                    margin: "12px 0",
                    background: "#fff",
                    boxShadow: "var(--shadow)",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      width: "104px",
                      flexShrink: 0,
                      color: "#fff",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "18px 10px",
                      textAlign: "center",
                      background: s.leftBg,
                    }}
                  >
                    <div
                      style={{
                        fontFamily: dispFont,
                        fontSize: "10px",
                        letterSpacing: "1.2px",
                        textTransform: "uppercase",
                        color: "rgba(255,255,255,.7)",
                      }}
                    >
                      Sprint
                    </div>
                    <div
                      style={{
                        fontFamily: dispFont,
                        fontWeight: 700,
                        fontSize: "34px",
                        lineHeight: 1,
                        margin: "2px 0 6px",
                      }}
                    >
                      {s.num}
                    </div>
                    <div
                      style={{
                        fontFamily: dispFont,
                        fontSize: "11px",
                        fontWeight: 600,
                        color: "#fff",
                        background: "rgba(255,255,255,.16)",
                        padding: "3px 9px",
                        borderRadius: "999px",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {s.days}
                    </div>
                  </div>
                  <div style={{ flex: 1, padding: "18px 22px", minWidth: 0 }}>
                    <div
                      style={{
                        fontFamily: dispFont,
                        fontWeight: 600,
                        fontSize: "16px",
                        color: "var(--navy)",
                        marginBottom: "10px",
                      }}
                    >
                      {s.name}
                    </div>
                    {s.feats.map((f, fi) => (
                      <div
                        key={fi}
                        style={{
                          display: "flex",
                          gap: "9px",
                          padding: "4px 0",
                          fontSize: "13.4px",
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
                        >
                          ✓
                        </span>
                        <span>
                          <strong style={{ color: "var(--ink)", fontWeight: 600 }}>{f.b}</strong>
                          {f.t}
                        </span>
                      </div>
                    ))}
                    <div
                      style={{
                        marginTop: "12px",
                        paddingTop: "12px",
                        borderTop: "1px solid var(--line)",
                        display: "flex",
                        gap: "8px",
                        alignItems: "baseline",
                        flexWrap: "wrap",
                      }}
                    >
                      <span
                        style={{
                          fontFamily: dispFont,
                          fontSize: "10px",
                          letterSpacing: ".8px",
                          textTransform: "uppercase",
                          color: "var(--muted)",
                        }}
                      >
                        Livrables
                      </span>
                      {s.tags.map((t) => (
                        <span
                          key={t.label}
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            fontFamily: dispFont,
                            fontWeight: 600,
                            fontSize: "10.5px",
                            letterSpacing: ".6px",
                            textTransform: "uppercase",
                            padding: "4px 11px",
                            borderRadius: "999px",
                            whiteSpace: "nowrap",
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
                </div>
              </div>
            ))}
            <div
              style={{
                background: "var(--ok-bg)",
                border: "1px solid #C7EBD9",
                borderRadius: "14px",
                padding: "18px 22px",
                margin: "16px 0",
                display: "flex",
                gap: "14px",
                alignItems: "flex-start",
              }}
            >
              <div
                style={{
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
                  fontFamily: dispFont,
                  background: "var(--ok)",
                }}
              >
                ↗
              </div>
              <div>
                <h4
                  style={{
                    fontFamily: dispFont,
                    fontSize: "14px",
                    margin: "0 0 4px",
                    color: "#0B6E4B",
                    fontWeight: 600,
                  }}
                >
                  Puis : accompagnement marketing (90 jours)
                </h4>
                <p
                  style={{
                    fontSize: "13.6px",
                    margin: 0,
                    color: "var(--slate)",
                    lineHeight: 1.55,
                  }}
                >
                  À la suite de la publication débute l’accompagnement marketing : formation
                  complète (3 h), acteur UGC fourni, et suivi hebdomadaire des KPIs pendant 90
                  jours.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 03 — JALONS */}
        <section
          id="s3"
          data-dc-section
          style={{
            width: "100%",
            backgroundColor: "var(--band-a)",
          }}
        >
          <div
            style={{
              maxWidth: "1040px",
              margin: "0 auto",
              padding: "clamp(56px,7vw,94px) clamp(24px,5vw,48px)",
            }}
          >
            <SectionHeader
              num="03 — JALONS"
              title="Jalons de paiement"
              lead="Trois versements alignés sur l’avancement, identiques à l’échéancier du devis (30 / 40 / 30)."
            />
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,200px),1fr))",
                gap: "14px",
                margin: "16px 0",
              }}
            >
              {miles.map((m) => (
                <div
                  key={m.pct}
                  style={{
                    border: "1px solid var(--line)",
                    borderRadius: "14px",
                    padding: "18px 18px",
                    background: "#fff",
                    boxShadow: "var(--shadow)",
                    transition: "transform .25s ease,box-shadow .3s ease,border-color .25s ease",
                  }}
                >
                  <div
                    style={{
                      fontFamily: dispFont,
                      fontWeight: 700,
                      fontSize: "13px",
                      color: "var(--cyan-ink)",
                    }}
                  >
                    {m.pct}
                  </div>
                  <div
                    style={{
                      fontFamily: dispFont,
                      fontWeight: 600,
                      fontSize: "14px",
                      color: "var(--navy)",
                      margin: "7px 0 3px",
                    }}
                  >
                    {m.nm}
                  </div>
                  <div
                    style={{
                      fontSize: "12px",
                      color: "var(--muted)",
                      minHeight: "30px",
                      lineHeight: 1.4,
                    }}
                  >
                    {m.when}
                  </div>
                  <div
                    style={{
                      fontFamily: dispFont,
                      fontWeight: 700,
                      fontSize: "24px",
                      color: "var(--navy)",
                      marginTop: "8px",
                      borderTop: "1px solid var(--line)",
                      paddingTop: "10px",
                    }}
                  >
                    {m.amt}
                  </div>
                  <div
                    style={{
                      fontSize: "11px",
                      color: "var(--cyan-ink)",
                      marginTop: "6px",
                      fontWeight: 600,
                    }}
                  >
                    {m.trig}
                  </div>
                </div>
              ))}
            </div>
            <div
              style={{
                background: "var(--tint-2)",
                border: "1px solid #D5EAFB",
                borderRadius: "14px",
                padding: "18px 22px",
                margin: "16px 0",
                display: "flex",
                gap: "14px",
                alignItems: "flex-start",
              }}
            >
              <div
                style={{
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
                  fontFamily: dispFont,
                  background: "var(--cyan)",
                }}
              >
                €
              </div>
              <div>
                <h4
                  style={{
                    fontFamily: dispFont,
                    fontSize: "14px",
                    margin: "0 0 4px",
                    color: "var(--navy)",
                    fontWeight: 600,
                  }}
                >
                  Montant total : 5 000 €
                </h4>
                <p
                  style={{
                    fontSize: "13.6px",
                    margin: 0,
                    color: "var(--slate)",
                    lineHeight: 1.55,
                  }}
                >
                  Paiements par Stripe ou virement bancaire, en euros. Aucune taxe applicable
                  (prestataire canadien / client français). Aucun travail de développement ne débute
                  avant réception de l’acompte.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 04 — CADENCE */}
        <section
          id="s4"
          data-dc-section
          style={{
            width: "100%",
            backgroundColor: "var(--band-b)",
          }}
        >
          <div
            style={{
              maxWidth: "1040px",
              margin: "0 auto",
              padding: "clamp(56px,7vw,94px) clamp(24px,5vw,48px)",
            }}
          >
            <SectionHeader num="04 — CADENCE" title="Cadence & validation" />
            <h3
              style={{
                fontFamily: dispFont,
                fontSize: "18px",
                color: "var(--navy)",
                fontWeight: 600,
                margin: "14px 0 10px",
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <span style={{ color: "var(--cyan)", fontSize: "13px" }}>◆</span>Rythme de travail
            </h3>
            <ul style={{ listStyle: "none", margin: "8px 0", padding: 0 }}>
              <li
                style={{
                  position: "relative",
                  padding: "5px 0 5px 22px",
                  fontSize: "13.8px",
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
                >
                  ↗
                </span>
                Sprints d’environ{" "}
                <b style={{ color: "var(--ink)", fontWeight: 600 }}>une semaine</b>, avec une{" "}
                <b style={{ color: "var(--ink)", fontWeight: 600 }}>démo en fin de chaque sprint</b>
                .
              </li>
              <li
                style={{
                  position: "relative",
                  padding: "5px 0 5px 22px",
                  fontSize: "13.8px",
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
                >
                  ↗
                </span>
                <b style={{ color: "var(--ink)", fontWeight: 600 }}>
                  Point d’avancement hebdomadaire
                </b>{" "}
                : revue de ce qui a été livré et priorités de la semaine suivante.
              </li>
              <li
                style={{
                  position: "relative",
                  padding: "5px 0 5px 22px",
                  fontSize: "13.8px",
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
                >
                  ↗
                </span>
                Développement <b style={{ color: "var(--ink)", fontWeight: 600 }}>itératif</b> :
                chaque sprint livre un incrément testable.
              </li>
            </ul>
            <h3
              style={{
                fontFamily: dispFont,
                fontSize: "18px",
                color: "var(--navy)",
                fontWeight: 600,
                margin: "30px 0 10px",
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <span style={{ color: "var(--cyan)", fontSize: "13px" }}>◆</span>Points de validation
            </h3>
            <ul style={{ listStyle: "none", margin: "8px 0", padding: 0 }}>
              <li
                style={{
                  position: "relative",
                  padding: "5px 0 5px 22px",
                  fontSize: "13.8px",
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
                >
                  ↗
                </span>
                Validation du Client à chaque{" "}
                <b style={{ color: "var(--ink)", fontWeight: 600 }}>fin de phase clé</b> (design,
                fonctionnalités, publication) avant de poursuivre.
              </li>
              <li
                style={{
                  position: "relative",
                  padding: "5px 0 5px 22px",
                  fontSize: "13.8px",
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
                >
                  ↗
                </span>
                Les{" "}
                <b style={{ color: "var(--ink)", fontWeight: 600 }}>retards imputables au Client</b>{" "}
                (absence de validation, de contenu ou d’accès) décalent d’autant le calendrier et ne
                sont pas comptés dans le délai.
              </li>
              <li
                style={{
                  position: "relative",
                  padding: "5px 0 5px 22px",
                  fontSize: "13.8px",
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
                >
                  ↗
                </span>
                Toute modification du périmètre fait l’objet d’un accord écrit (voir{" "}
                <a
                  href="/devis"
                  style={{ color: "var(--cyan-ink)", fontWeight: 600, textDecoration: "none" }}
                >
                  devis
                </a>{" "}
                &{" "}
                <a
                  href="/cahier-des-charges"
                  style={{ color: "var(--cyan-ink)", fontWeight: 600, textDecoration: "none" }}
                >
                  cahier des charges
                </a>
                ).
              </li>
            </ul>
            <div
              style={{
                background: "var(--amber-bg)",
                border: "1px solid #F3DFBC",
                borderRadius: "14px",
                padding: "18px 22px",
                margin: "16px 0",
                display: "flex",
                gap: "14px",
                alignItems: "flex-start",
              }}
            >
              <div
                style={{
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
                  fontFamily: dispFont,
                  background: "var(--amber)",
                }}
              >
                ▸
              </div>
              <div>
                <h4
                  style={{
                    fontFamily: dispFont,
                    fontSize: "14px",
                    margin: "0 0 4px",
                    color: "#8A5A12",
                    fontWeight: 600,
                  }}
                >
                  Ce qui maintient le rythme
                </h4>
                <p
                  style={{
                    fontSize: "13.6px",
                    margin: 0,
                    color: "var(--slate)",
                    lineHeight: 1.55,
                  }}
                >
                  La tenue des 60 jours dépend de la réactivité des validations et de la fourniture
                  des contenus et accès en temps utile. Plus les retours sont rapides, plus la
                  livraison est fluide.
                </p>
              </div>
            </div>
          </div>
        </section>

        <Footer
          heading="Un plan clair, une livraison maîtrisée"
          text="Ce calendrier accompagne le devis et le cahier des charges. Sprint après sprint, vous voyez SourcePro prendre forme jusqu’à la mise en marché."
        />
      </main>
      <ScrollReveal />
    </div>
  );
}
