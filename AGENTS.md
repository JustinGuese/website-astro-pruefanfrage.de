# pruefanfrage.de — Compliance sales funnel

German-only B2B lead-gen site (Astro + Tailwind v4, static site on GitHub Pages, no backend): one conversion funnel on `/` plus an SEO Ratgeber that feeds into it. Target audience: ambulante Pflegedienste, stationäre Pflege, MVZ, Arztpraxen dealing with Pflegegrad-Prüfungen, §275 SGB V Abrechnungsprüfungen, and Prüfanfragen.

Business context and the full funnel/copy spec live in `MARKETING.md` at the repo root — read it before making content changes.

## Structure

- `src/pages/index.astro` — the whole funnel in one file, ordered pain → solution → proof → offers → objections → Ratgeber → pricing → close. Don't reorder without reading MARKETING.md.
- `src/pages/ratgeber/index.astro` + `src/pages/ratgeber/[...slug].astro` — the SEO surface (hub + article template). See "Ratgeber" below.
- `src/pages/kontakt.astro` — secondary contact form, reached via Stufe 2/3 and pilot CTAs (`?interesse=stufe2|stufe3|pilot|notfallkit`).
- `src/pages/{impressum,datenschutz,agb,rdg-hinweis}.astro` — legal pages, rendering `src/content/legal/*.md`.
- `src/layouts/Site.astro` — shared shell: head/meta/OG/canonical, Organization JSON-LD, GA4 + Meta Pixel, cookie banner, sticky mobile CTA, first-touch UTM attribution. Header is logo + Ratgeber dropdown + two links + the one CTA; legal links live in the footer only.
- `src/components/` — funnel parts (`Hero`, `BlockAForm`, `BlockBFields`, `FallEinreichenForm`, `BestellForm`, `Notfallkit`, `PricingMatrix`, `ComparisonTable`, `SocialProof`, `Kapazitaet`, `FristRechner`, `Faq`, `TrackingFields`) and Ratgeber parts (`RatgeberMenu`, `ArtikelCta`).
- `public/downloads/` — the free Starthilfe deliverables as `.md` sources **and** the `.pdf` the site actually links to. Regenerate the PDFs with `./scripts/build-pdfs.sh` after editing a template. These are first-draft templates flagged "Entwurf — vor Verwendung juristisch prüfen" — don't remove that disclaimer.

## Ratgeber (SEO)

- Articles are markdown in `src/content/ratgeber/*.md`, validated by the `ratgeber` collection in `src/content.config.ts`. The schema is strict on purpose: `category` is an enum driving the nav dropdown, and `faq` renders both as a visible section and as FAQPage structured data.
- **Every article must render its FAQ visibly.** The `faq` frontmatter feeds JSON-LD; FAQ markup without matching visible content is a manual-action risk.
- Target ≥1200 words, dense `##`/`###` subheadings, one table, one checklist, a "Kurz zusammengefasst" block as the first `##`, and a closing `## Was das für Ihren Betrieb heißt`. No `# H1` — the template renders `title` as the H1.
- Articles never write their own CTA. `ArtikelCta.astro` is appended by the template and is the only sales block on the page.
- **Accuracy over confidence.** These pieces cite §203 StGB, § 275 SGB V, DSGVO and the AI Act. Where a Frist or a paragraph is not certain, hedge ("die Frist steht im Anschreiben") rather than inventing a number. Never invent a statistic, study, court decision or customer.
- Every article carries the RDG disclaimer the template appends. Don't remove it.
- `src/lib/ratgeber.ts` owns categories and the related-article resolution; add a category there, not inline.

## Conventions

- **No i18n.** The site is German-only (`lang="de"` hardcoded). Don't reintroduce locale routing.
- **German typography in body copy**: „…“ for quotes, not "…" or "…". ASCII quotes are fine inside YAML frontmatter delimiters.
- **Lead capture is Formspree-only**, no custom backend and no Stripe — paid rungs are ordered through `BestellForm` and invoiced by e-mail. Gating (revealing downloads) is a client-side query-param check after a Formspree redirect; that bypassability is an accepted limitation, not a bug to fix with more client JS.
- **Every form carries `TrackingFields`** with a `tier` value. That hidden field plus `landing_page` is the only way to tell which offer box (or which Ratgeber article) produced a lead — don't hand-roll hidden inputs.
- **Event tracking**: GA4 events per funnel step (`block_a_submit`, `fall_eingereicht`, `notfallkit_bestellt`, `stufe2_bestellt`, `tier_cta_click`, `frist_rechner_used`, `generate_lead`), mirrored to `fbq` on tier CTAs — keep these names stable, they're read out of GA4 manually.
- **Formspree IDs** come from `PUBLIC_FORMSPREE_BLOCK_A_ID` / `PUBLIC_FORMSPREE_FALL_ID` / `PUBLIC_FORMSPREE_BESTELLUNG_ID` / `PUBLIC_FORMSPREE_KONTAKT_ID` (see `.env.example`) — four distinct endpoints, not one shared form.
- **Claims must be true.** `SocialProof.astro` currently holds placeholder testimonials behind a `PLACEHOLDER_PROOF` switch, and `Kapazitaet.astro` states how many slots are left. Both are irreführende Werbung under §5 UWG if published unbacked — read the warning comments before touching either.
- **Legal accuracy matters here.** This business handles §203 StGB-relevant documents; changes to `datenschutz.md`, `agb.md`, `rdg-hinweis.md`, or the retention period are legal content, not marketing copy — flag material changes rather than silently editing.

## Deploy

GitHub Actions → GitHub Pages (`.github/workflows/deploy.yml`, `withastro/action@v6`), triggered on push to `main`.
