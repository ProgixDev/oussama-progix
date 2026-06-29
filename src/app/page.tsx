import { AccueilDocument } from "@/features/devis";

/**
 * Home route — the password-gated Progix landing (Accueil). The gate (site-gate
 * feature) wraps the whole app from the root layout; this page is pure composition.
 */
export default function Page() {
  return <AccueilDocument />;
}
