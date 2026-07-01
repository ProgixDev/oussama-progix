import { cn } from "@/lib/utils";
import { BadgeHeading, InfoBox, Pill, SectionHeader, Strong, SubHeading } from "./primitives";
import {
  incl1,
  incl2,
  incl3,
  priceBreakdown,
  priceTotal,
  payments,
  phases,
  trust,
} from "./content";
import styles from "./devis.module.css";

/** A styled reference to another (not-yet-implemented) document in the set. */
function DocRef({ children }: { children: React.ReactNode }) {
  return <span className={styles.link}>{children}</span>;
}

function CheckList({ items }: { items: ReadonlyArray<{ b: string; t: string }> }) {
  return (
    <div className={styles.checkGrid}>
      {items.map((i) => (
        <div key={i.b} className={styles.check}>
          <span className={styles.checkMark} aria-hidden="true">
            ✓
          </span>
          <span>
            <Strong>{i.b}</Strong>
            {i.t}
          </span>
        </div>
      ))}
    </div>
  );
}

/** Sections 01–08 of the devis (section 09, the signature block, is separate). */
export function BodySections() {
  return (
    <>
      {/* 01 — OBJET */}
      <section id="s1" data-dc-section className={cn(styles.section, styles.sectionA)}>
        <div className={styles.container}>
          <SectionHeader num="01 — OBJET" title="Objet du devis" />
          <p className={styles.pLead}>
            Le présent devis contractuel (le « Devis ») définit les modalités selon lesquelles{" "}
            <Strong>Progix Inc.</Strong> (le « Prestataire ») s’engage à concevoir, développer et
            livrer <Strong>SourcePro</Strong> (l’« Application »), une application mobile de
            sourcing et de validation de fournisseurs fiables, pour le compte du client signataire
            (le « Client »).
          </p>
          <p className={styles.p}>
            Il précise les prestations incluses, l’investissement et son échéancier,
            l’accompagnement marketing, ainsi que les engagements respectifs des Parties. Le
            périmètre fonctionnel et technique détaillé fait l’objet du{" "}
            <DocRef>cahier des charges</DocRef> associé, qui complète le présent Devis. La signature
            du Devis vaut acceptation de l’ensemble de ses termes et engagement ferme.
          </p>
          <div className={styles.trust}>
            {trust.map((t) => (
              <div key={t.l} className={styles.trustCell}>
                <div className={styles.trustNum}>{t.n}</div>
                <div className={styles.trustLabel}>{t.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 02 — PRESTATIONS */}
      <section id="s2" data-dc-section className={cn(styles.section, styles.sectionB)}>
        <div className={styles.container}>
          <SectionHeader
            num="02 — PRESTATIONS"
            title="Tout ce qui est inclus"
            lead="Une prestation complète, de la conception jusqu’à la mise en marché et au lancement commercial. Rien à gérer en plus."
          />
          <SubHeading first>Conception & développement</SubHeading>
          <CheckList items={incl1} />
          <SubHeading>Abonnement, hébergement & mise en ligne</SubHeading>
          <CheckList items={incl2} />
          <SubHeading>Lancement & accompagnement</SubHeading>
          <CheckList items={incl3} />
        </div>
      </section>

      {/* 03 — INVESTISSEMENT */}
      <section id="s3" data-dc-section className={cn(styles.section, styles.sectionA)}>
        <div className={styles.container}>
          <SectionHeader
            num="03 — INVESTISSEMENT"
            title="Votre investissement"
            lead="Un forfait fixe, tout compris jusqu’à la mise en marché — voici ce qu’il couvre."
          />
          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Poste</th>
                  <th className={styles.thRight}>Prix</th>
                </tr>
              </thead>
              <tbody>
                {priceBreakdown.map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 1 ? styles.tableAlt : undefined}>
                    <td>
                      <Strong>{row.label}</Strong>
                      {row.note}
                    </td>
                    <td className={styles.tableNum}>{row.price}</td>
                  </tr>
                ))}
                <tr className={styles.tableTotal}>
                  <td>Total — forfait fixe, tout compris</td>
                  <td className={styles.tableTotalAmount}>{priceTotal}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className={styles.note} style={{ fontStyle: "normal" }}>
            Décomposition indicative d’un forfait global et fixe : le prix est ferme et tout
            compris. Les montants par poste sont donnés à titre informatif et ne sont pas facturés
            séparément.
          </p>
          <div className={cn(styles.totalPanel, styles.lift)}>
            <div className={styles.totalPanelInner}>
              <div className={styles.totalEyebrow}>Montant total · forfait fixe</div>
              <div className={styles.totalValue}>4 850 €</div>
              <div className={styles.totalNote}>
                Prix ferme, tout compris jusqu’à la mise en marché. Aucun coût caché.
              </div>
            </div>
          </div>
          <InfoBox icon="€" title="Aucune taxe applicable">
            Progix étant une entreprise <Strong>canadienne</Strong> et le Client étant établi en{" "}
            <Strong>France</Strong>, la prestation n’est pas assujettie à la TVA ni à aucune taxe de
            vente (service transfrontalier — autoliquidation par le preneur le cas échéant).{" "}
            <Strong>Le montant de 4 850 € correspond au montant net à payer.</Strong>
          </InfoBox>
          <SubHeading>Échéancier de paiement</SubHeading>
          <div className={styles.grid3} style={{ margin: "6px 0 16px" }}>
            {payments.map((p) => (
              <div key={p.pct} className={cn(styles.payCard, styles.lift)}>
                <div className={styles.payPct}>{p.pct}</div>
                <div className={styles.payWhen}>{p.when}</div>
                <div className={styles.payDesc}>{p.desc}</div>
                <div className={styles.payAmount}>{p.amount}</div>
              </div>
            ))}
          </div>
          <p style={{ fontSize: "13px", color: "var(--slate)", margin: 0, lineHeight: 1.6 }}>
            Règlement en <Strong>5 mensualités égales de 970 €</Strong> par <Strong>Stripe</Strong>{" "}
            ou <Strong>virement bancaire</Strong>, en euros. Aucun travail de développement ne
            débute avant réception du <Strong>premier versement</Strong>. Le modèle de revenus de
            l’Application repose sur un <Strong>abonnement mensuel</Strong> donnant accès à
            l’ensemble de la base qualifiée de fournisseurs fiables.
          </p>
        </div>
      </section>

      {/* 04 — ACCOMPAGNEMENT */}
      <section id="s4" data-dc-section className={cn(styles.section, styles.sectionB)}>
        <div className={styles.container}>
          <SectionHeader
            num="04 — ACCOMPAGNEMENT"
            title="Accompagnement marketing & garantie"
            lead="On ne vous laisse pas avec une application — on vous laisse avec un business qui acquiert ses premiers utilisateurs. Accompagnement inclus pendant 90 jours."
          />
          <div className={styles.grid2}>
            <div className={cn(styles.card, styles.lift)}>
              <h3 className={styles.cardTitle}>
                <span className={styles.cardNum} aria-hidden="true">
                  1
                </span>
                Formation complète (3 h)
              </h3>
              <p className={styles.cardText}>
                Créer des vidéos publicitaires (UGC) qui convertissent, lancer et optimiser des
                campagnes <Strong>Meta Ads</Strong> et <Strong>Apple Search Ads</Strong>.
              </p>
            </div>
            <div className={cn(styles.card, styles.lift)}>
              <h3 className={styles.cardTitle}>
                <span className={cn(styles.cardNum, styles.cardNumNavy)} aria-hidden="true">
                  2
                </span>
                Acteur UGC fourni
              </h3>
              <p className={styles.cardText}>
                Progix fournit l’acteur pour les vidéos et les scripts associés, issus de son
                playbook interne.
              </p>
            </div>
            <div className={cn(styles.card, styles.lift)}>
              <h3 className={styles.cardTitle}>
                <span className={styles.cardNum} aria-hidden="true">
                  3
                </span>
                Suivi hebdomadaire
              </h3>
              <p className={styles.cardText}>
                Revue des KPIs, validation des actions réalisées et consignes concrètes pour la
                semaine suivante.
              </p>
            </div>
            <div className={cn(styles.card, styles.lift)}>
              <h3 className={styles.cardTitle}>
                <span className={cn(styles.cardNum, styles.cardNumNavy)} aria-hidden="true">
                  4
                </span>
                Objectifs de croissance
              </h3>
              <p className={styles.cardText}>
                Cibles d’acquisition et leviers définis ensemble, ajustés chaque semaine selon les
                résultats.
              </p>
            </div>
          </div>
          <div className={styles.guarantee}>
            <span className={styles.guaranteeEyebrow}>
              <span className={styles.guaranteeEyebrowBar} aria-hidden="true" />
              Garantie de performance
            </span>
            <h3 className={styles.guaranteeTitle}>
              Un coût d’acquisition d’<em>1 € par utilisateur</em>
            </h3>
            <p className={styles.guaranteeText}>
              Progix s’engage sur un{" "}
              <strong style={{ color: "#fff", fontWeight: 600 }}>
                coût d’acquisition de 1 € par utilisateur acquis
              </strong>{" "}
              et un{" "}
              <strong style={{ color: "#fff", fontWeight: 600 }}>
                taux de conversion de 25 % en abonnement
              </strong>
              . Si ces objectifs ne sont pas atteints au terme des 90 jours, Progix poursuit
              l’accompagnement{" "}
              <strong style={{ color: "#fff", fontWeight: 600 }}>sans frais</strong> jusqu’à leur
              atteinte.
            </p>
            <div className={styles.guaranteeStats}>
              <div>
                <div className={styles.guaranteeStatValue}>1 €</div>
                <div className={styles.guaranteeStatLabel}>
                  coût d’acquisition garanti par utilisateur acquis
                </div>
              </div>
              <div>
                <div className={styles.guaranteeStatValue}>25 %</div>
                <div className={styles.guaranteeStatLabel}>
                  taux de conversion des utilisateurs en abonnés
                </div>
              </div>
              <div>
                <div className={styles.guaranteeStatValue}>90 j</div>
                <div className={styles.guaranteeStatLabel}>
                  d’accompagnement & de suivi hebdomadaire des KPIs
                </div>
              </div>
              <div>
                <div className={styles.guaranteeStatValue}>UGC</div>
                <div className={styles.guaranteeStatLabel}>
                  vidéos publicitaires + scripts fournis par Progix
                </div>
              </div>
            </div>
          </div>
          <p className={styles.note}>
            Garantie conditionnelle : elle s’applique sous réserve que le Client applique l’ensemble
            des recommandations, investisse le budget publicitaire minimum convenu (2 000 € au
            lancement, réparti entre Meta Ads, Apple Search Ads et production UGC) et participe
            activement aux points hebdomadaires. À défaut, la garantie devient caduque.
          </p>
        </div>
      </section>

      {/* 05 — APRÈS-LIVRAISON */}
      <section id="s5" data-dc-section className={cn(styles.section, styles.sectionA)}>
        <div className={styles.container}>
          <SectionHeader num="05 — APRÈS-LIVRAISON" title="Support, maintenance & propriété" />
          <InfoBox variant="ok" icon="★" title="Vous êtes propriétaire à 100 %">
            Le Client est propriétaire de l’intégralité de l’Application. La propriété
            intellectuelle est <Strong>transférée progressivement à mesure des paiements</Strong> :
            chaque versement réglé transfère la portion correspondante des travaux. À la livraison
            finale, une documentation technique complète est remise — l’Application peut être
            reprise par tout développeur de votre choix. <Strong>Aucun verrouillage.</Strong>
          </InfoBox>
          <SubHeading>Support inclus — 90 jours</SubHeading>
          <ul className={styles.arrowList}>
            <li className={styles.arrowItem}>
              Correction des bugs et ajustements mineurs de workflow (hors nouvelles
              fonctionnalités).
            </li>
            <li className={styles.arrowItem}>
              Temps de réponse sous <Strong>24 heures</Strong> + point de suivi hebdomadaire.
            </li>
          </ul>
          <SubHeading>
            Au-delà des 90 jours <Pill>Optionnel</Pill>
          </SubHeading>
          <div className={styles.grid2}>
            <div className={cn(styles.card, styles.lift)}>
              <h3 className={styles.cardTitle}>
                <span className={cn(styles.cardNum, styles.cardNumNavy)} aria-hidden="true">
                  ♲
                </span>
                Maintenance mensuelle
              </h3>
              <p className={styles.cardText}>
                <Strong>90 € / mois</Strong> — support continu, correction de bugs et petites
                corrections, disponibilité étendue grâce à l’équipe sur plusieurs fuseaux horaires.
              </p>
            </div>
            <div className={cn(styles.card, styles.lift)}>
              <h3 className={styles.cardTitle}>
                <span className={styles.cardNum} aria-hidden="true">
                  +
                </span>
                Évolutions & nouvelles fonctionnalités
              </h3>
              <p className={styles.cardText}>
                <Strong>80 $ / heure</Strong> — pour toute évolution postérieure de l’Application
                (version web, analytics avancés, nouvelles catégories de fournisseurs…).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 06 — DÉLAI */}
      <section id="s6" data-dc-section className={cn(styles.section, styles.sectionB)}>
        <div className={styles.container}>
          <SectionHeader
            num="06 — DÉLAI"
            title="Délai & démarche de réalisation"
            lead="Livraison sous 60 jours à compter de la date de démarrage (réception de l’acompte + réunion de cadrage). Réalisation itérative, avec validation du Client à chaque étape clé."
          />
          <div className={styles.grid3} style={{ margin: "16px 0" }}>
            {phases.map((p) => (
              <div key={p.tag} className={cn(styles.payCard, styles.lift)}>
                <div className={styles.payPct}>{p.tag}</div>
                <div className={styles.payWhen}>{p.title}</div>
                <div className={styles.phaseDesc}>{p.desc}</div>
              </div>
            ))}
          </div>
          <InfoBox icon="i" title="Recette, publication & calendrier détaillé">
            La phase finale (≈ J55 – J60) couvre les tests qualité, les corrections et la
            publication sur les stores. Le découpage précis en sprints fait l’objet d’un document
            dédié (<DocRef>« Calendrier des sprints »</DocRef>), aligné sur le présent échéancier de
            paiement.
          </InfoBox>
          <SubHeading>Garantie de délai — compensation en cas de retard</SubHeading>
          <p className={styles.p}>
            Si la livraison est retardée pour une cause <Strong>imputable à Progix</Strong>, le
            Client bénéficie d’une compensation <Strong>dès le premier jour de retard</Strong>, sous
            forme de réduction du montant total, croissante avec la durée du retard :
          </p>
          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Retard de livraison (imputable à Progix)</th>
                  <th className={styles.thRight}>Compensation</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>De 1 à 10 jours</td>
                  <td className={styles.tableNum}>−5 % du montant total</td>
                </tr>
                <tr className={styles.tableAlt}>
                  <td>De 11 à 20 jours</td>
                  <td className={styles.tableNum}>−10 % du montant total</td>
                </tr>
                <tr>
                  <td>De 21 à 30 jours</td>
                  <td className={styles.tableNum}>−15 % du montant total</td>
                </tr>
                <tr className={styles.tableAlt}>
                  <td>Au-delà de 30 jours</td>
                  <td className={styles.tableNum}>−20 % du montant total (plafond)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <InfoBox icon="!" title="Le retard doit être imputable à Progix">
            Cette compensation s’applique <Strong>uniquement aux retards causés par Progix</Strong>.
            Les retards imputables au Client —{" "}
            <Strong>
              validations tardives, retours et feedbacks, contenus, informations ou accès non
              fournis en temps utile
            </Strong>{" "}
            — repoussent d’autant la date de livraison et ne donnent lieu à aucune compensation.
          </InfoBox>
        </div>
      </section>

      {/* 07 — ENGAGEMENTS */}
      <section id="s7" data-dc-section className={cn(styles.section, styles.sectionA)}>
        <div className={styles.container}>
          <SectionHeader num="07 — ENGAGEMENTS" title="Engagements du Client & pénalités" />
          <BadgeHeading badge="A" first>
            Engagements du Client
          </BadgeHeading>
          <p className={styles.p}>
            Pour permettre la tenue du délai et la qualité de la livraison, le Client s’engage à :
          </p>
          <ul className={styles.arrowList}>
            <li className={styles.arrowItem}>
              Fournir en temps utile les <Strong>contenus, informations et validations</Strong>{" "}
              nécessaires à l’avancement.
            </li>
            <li className={styles.arrowItem}>
              Créer les comptes <Strong>Apple Developer</Strong> (99 $/an) et{" "}
              <Strong>Google Play Console</Strong> (25 $ une fois) et fournir les accès — Progix
              accompagne la création et publie pour le Client.
            </li>
            <li className={styles.arrowItem}>
              Créer un compte <Strong>Stripe</Strong> et fournir un accès développeur pour les
              paiements le cas échéant.
            </li>
            <li className={styles.arrowItem}>
              Prévoir le <Strong>budget publicitaire minimum</Strong> de 2 000 € pour le lancement.
            </li>
            <li className={styles.arrowItem}>
              Participer aux <Strong>points hebdomadaires</Strong> et appliquer les recommandations
              marketing.
            </li>
          </ul>
          <BadgeHeading badge="B">Pénalités de retard</BadgeHeading>
          <p className={styles.p}>
            En cas de retard de livraison imputable au Prestataire,{" "}
            <Strong>dès le premier jour de retard</Strong>, une compensation financière progressive
            est appliquée sous forme de réduction du montant total, selon le{" "}
            <Strong>barème de compensation détaillé en section 06 (« Délai »)</Strong> (−5 % à −20 %
            selon la durée du retard). Les retards imputables au Client (validations tardives,
            retours et feedbacks, absence de contenu ou d’accès) ne sont pas pris en compte dans ce
            calcul et repoussent d’autant la date de livraison.
          </p>
        </div>
      </section>

      {/* 08 — DISPOSITIONS */}
      <section id="s8" data-dc-section className={cn(styles.section, styles.sectionB)}>
        <div className={styles.container}>
          <SectionHeader num="08 — DISPOSITIONS" title="Dispositions générales" />
          <BadgeHeading badge="1" first>
            Droit applicable & juridiction
          </BadgeHeading>
          <p className={styles.p}>
            Le présent Devis est régi par les lois de la province de Québec et les lois fédérales du
            Canada applicables. Tout litige est soumis à la compétence exclusive des tribunaux de la
            province de Québec, district de Montréal.
          </p>
          <BadgeHeading badge="2">Intégralité de l’entente</BadgeHeading>
          <p className={styles.p}>
            Le présent Devis, complété par le <DocRef>cahier des charges</DocRef> associé, constitue
            l’intégralité de l’entente entre les Parties relativement à son objet et remplace toute
            entente ou communication antérieure.
          </p>
          <BadgeHeading badge="3">Modifications</BadgeHeading>
          <p className={styles.p}>
            Toute modification du présent Devis ou du périmètre convenu doit faire l’objet d’un
            écrit signé par les deux Parties.
          </p>
          <BadgeHeading badge="4">Divisibilité</BadgeHeading>
          <p className={styles.p}>
            Si une disposition du présent Devis est jugée invalide ou inapplicable, les autres
            dispositions demeurent en vigueur et de plein effet.
          </p>
        </div>
      </section>
    </>
  );
}
