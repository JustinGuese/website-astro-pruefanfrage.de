/**
 * Every user-facing string on the funnel — homepage and Ratgeber alike.
 *
 * The point of this file: a new site built on the kit should be *this file plus
 * a palette*. Section components take content as props and hold no copy of
 * their own, so changing what the page says never means opening markup — and
 * an agent asked to "rewrite the pitch" has exactly one file to edit.
 *
 * Kept in the site, never the kit: this is the product, and no two sites share
 * it. See `config/site.ts` for identity and ids.
 */
import type { Tier } from '@justinguese/astro-kit/lib/pricing';
import type { CompareColumn, CompareRow } from '@justinguese/astro-kit/lib/compare';
import type { ProofQuote, ProofStat } from '@justinguese/astro-kit/lib/proof';

export const hero = {
  eyebrow: 'Für Pflegedienste · MVZ · Arztpraxen',
  headline: 'Prüfanfrage mit Frist auf dem Tisch?',
  /** Rendered beside the headline as a stamped mark. */
  headlineMark: 'Frist',
  sub: 'Verpasste Fristen kosten nicht Zeit, sondern Geld — Rückforderungen und Herabstufungen. Sie laden den geschwärzten Fall hoch (rund 10 Minuten), wir liefern den quellenbelegten Antwortentwurf. Die ersten 3 Fälle sind kostenlos.',
  cta: { label: 'Erste 3 Fälle kostenlos einreichen', href: '#fall-hochladen', track: 'stufe1' },
  note: 'Kein Vertrag · keine Kreditkarte · in 2 Minuten ausgefüllt',
  bullets: ['§203-konform', 'AVV inklusive', 'Kein automatisierter Bescheid'],
  stats: [
    { value: '3', label: 'Fälle kostenlos' },
    { value: '5 Tage', label: 'bis zum Entwurf' },
    { value: '0', label: 'Verträge nötig' },
  ],
  deadlineNudge: {
    lead: 'Frist läuft in wenigen Tagen?',
    label: 'Prüfen, ob die Zeit reicht →',
    href: '#frist-rechner',
  },
};

/** The Aktendeckel card beside the headline — this site's identity. */
export const dossier = {
  aktenzeichen: 'AZ. PN-2026-001',
  tier: 'STUFE 1 · KERNLEISTUNG',
  items: [
    'KI-Entwurf mit Quellenverweisen',
    'Ihre Prüfung & Kontrolle',
    'Versand bleibt bei Ihnen',
  ],
};

/**
 * Capacity. Keep `taken` honest — an unbacked scarcity claim is misleading
 * advertising under §5 UWG, and this audience will ask.
 */
export const scarcity = {
  total: 10,
  taken: 7,
  badgeText: 'Noch {left} von {total} Plätzen im {period}',
  bandTitle: 'freie Plätze für die kostenlose Fallbearbeitung im {period}',
  bandBody:
    'Jeder Fall wird von Hand geprüft — deshalb nehmen wir pro Monat {total} neue Häuser auf. Ist der Monat voll, rücken Einreichungen in den Folgemonat.',
};

/** Pain, priced. "Verlorene Zeit" does not move a Geschäftsführung; a € figure does. */
export const scenarios = [
  {
    az: 'AZ. PG-01',
    title: 'Pflegegrad-Prüfung mit kurzer Frist',
    body: 'Der MD fordert eine Stellungnahme innerhalb weniger Tage. Verstreicht die Frist, gilt oft die Einstufung der Kasse — eine Herabstufung mit direkten Einbußen bei der Vergütung.',
    kosten: 'Herabstufung PG 4 → PG 3: rund €280 weniger pro Monat und Klient',
  },
  {
    az: 'AZ. §275-02',
    title: '§275 SGB V Abrechnungsprüfung',
    body: 'Die Kasse zweifelt abgerechnete Leistungen an. Ohne belegte Antwort drohen Rückforderungen bereits ausgezahlter Vergütung — rückwirkend, oft über mehrere Monate.',
    kosten: 'Rückforderung über 6 Monate: schnell vierstellig, pro Fall',
  },
  {
    az: 'AZ. FR-03',
    title: 'Stellungnahmen mit Frist',
    body: 'Formlose Anfragen, MDK-Gutachten, Widersprüche — wer die Frist verstreichen lässt, verliert meist das Widerspruchsrecht. Die Entscheidung der Kasse steht dann endgültig fest.',
    kosten: 'Widerspruchsrecht verloren: der Bescheid ist bestandskräftig',
  },
];

export const steps = [
  {
    n: '01',
    title: 'Fall hochladen',
    body: 'Sie senden die geschwärzte Prüfanfrage über unser sicheres Formular — rund 10 Minuten Aufwand auf Ihrer Seite.',
  },
  {
    n: '02',
    title: 'KI-gestützter Entwurf',
    body: 'Wir erstellen einen Antwortentwurf mit Quellenverweisen aus Ihrer Pflegedokumentation. In der Regel innerhalb von 5 Werktagen bei Ihnen.',
  },
  {
    n: '03',
    title: 'Prüfung & Versand',
    body: 'Sie prüfen und versenden — statt 2–4 Stunden Eigenrecherche bleiben rund 30–45 Minuten Durchsicht. Sie bleiben der Absender.',
  },
];

/** Risk reversal by negation — what this explicitly is not. */
export const notThis = [
  {
    mark: 'KEIN',
    rest: 'automatisierter Verwaltungsakt',
    body: 'Jede Antwort geht erst nach Ihrer Freigabe raus — nie automatisiert an Kasse oder MD.',
  },
  {
    mark: 'KEIN',
    rest: '§203-Bruch',
    body: 'Unterlagen werden nur im Rahmen einer unterschriebenen AVV verarbeitet — niemals in ein offenes KI-Tool kopiert.',
  },
  {
    mark: 'KEINE',
    rest: 'Rechtsberatung',
    body: 'Wir unterstützen bei der organisatorischen Aufbereitung. Die rechtliche Bewertung bleibt bei Ihnen oder Ihrer Rechtsberatung.',
  },
];

export const faqSection = {
  eyebrow: 'Bevor Sie fragen',
  title: 'Die Einwände, die wir jede Woche hören',
};

export const orderNote = 'Sie erhalten Rechnung und Ablaufdetails per E-Mail.';

export const faq = [
  {
    q: 'Dürfen wir Patientenunterlagen überhaupt an Sie geben?',
    a: 'Für die kostenlosen Testfälle laden Sie ausschließlich geschwärzte Unterlagen hoch — dann liegt kein Berufsgeheimnis im Sinne des §203 StGB bei uns. Für den laufenden Betrieb schließen wir vorab eine §203-Vereinbarung und eine AVV nach Art. 28 DSGVO. Beide Muster können Sie oben kostenlos herunterladen und vorab von Ihrer Datenschutzbeauftragten prüfen lassen.',
  },
  {
    q: 'Was passiert, wenn der Entwurf nichts taugt?',
    a: 'Dann sagen Sie es uns und der Fall zählt nicht gegen Ihr Kontingent — bei den kostenlosen Fällen ohnehin nicht, bei kostenpflichtigen Fällen stellen wir ihn nicht in Rechnung. Sie tragen kein Risiko außer der Zeit für den Upload.',
  },
  {
    q: 'Entscheidet hier eine KI über einen Pflegegrad?',
    a: 'Nein. Wir erstellen einen Entwurf, den Sie prüfen, ergänzen und selbst versenden — Sie bleiben der Absender und die verantwortliche Stelle. Es geht nichts automatisiert an Kasse oder MD. Das ist auch der Grund, warum das keine automatisierte Entscheidung im Sinne des Art. 22 DSGVO ist.',
  },
  {
    q: 'Ist das Rechtsberatung?',
    a: 'Nein. Wir unterstützen bei der organisatorischen und redaktionellen Aufbereitung Ihrer eigenen Dokumentation. Die rechtliche Bewertung des Einzelfalls bleibt bei Ihnen oder Ihrer Rechtsberatung. Details im RDG-Hinweis.',
  },
  {
    q: 'Unsere Pflegedokumentation ist auf Papier. Geht das trotzdem?',
    a: 'Ja. Gescannte oder abfotografierte Unterlagen reichen, solange sie lesbar sind. Papier ist einer der häufigsten Fälle — deshalb fragen wir im Formular danach.',
  },
  {
    q: 'Die Frist läuft in zwei Tagen. Können Sie da noch helfen?',
    a: 'Möglicherweise. Die reguläre Bearbeitung dauert in der Regel 5 Werktage; Eilfälle ziehen wir vor, solange Kapazität frei ist — tragen Sie das Fristende im Formular ein. Wenn es für den Standardweg zu knapp ist, ist das Fristen-Notfallkit die schnellere Option: Vorlagen, mit denen Sie heute selbst antworten.',
  },
  {
    q: 'Müssen wir uns binden?',
    a: 'Nein. Jede Stufe ist einzeln buchbar, es gibt keine Mindestlaufzeit, kein Abo und keinen automatischen Übergang in eine kostenpflichtige Stufe. Nach den drei kostenlosen Fällen passiert nichts, bis Sie einen weiteren Fall einreichen.',
  },
];

export const pricing = {
  eyebrow: 'Preise',
  /** Screen-reader caption for the comparison table. */
  caption: 'Vergleich aller fünf Angebotsstufen',
  rowHeader: 'Leistung',
  footnote:
    'Alle Preise zzgl. USt. · Der Preis des Notfallkits wird auf Ihren ersten kostenpflichtigen Fall angerechnet.',
  title: 'Der ganze Weg auf einen Blick',
  intro:
    'Fünf Stufen, jede einzeln buchbar — vom kostenlosen Download bis zum vollständigen Audit. Keine Mindestlaufzeit, kein Abo, kein Upgrade-Zwang.',
  tiers: [
  {
    id: 'starthilfe',
    name: 'Starthilfe',
    price: '€0',
    priceNote: 'keine Dateneingabe',
    cta: { label: 'Vorlagen holen', href: '#starthilfe' },
    highlight: false,
  },
  {
    id: 'notfallkit',
    name: 'Notfallkit',
    price: '€19',
    priceNote: 'einmalig',
    cta: { label: 'Kit bestellen', href: '#notfallkit' },
    highlight: false,
  },
  {
    id: 'stufe1',
    name: 'Stufe 1 · KI-Prüfvorbereitung',
    price: '€49',
    priceNote: 'pro Fall · erste 3 gratis',
    cta: { label: 'Fall einreichen', href: '#fall-hochladen' },
    highlight: true,
    badge: 'Beliebteste Wahl',
  },
  {
    id: 'stufe2',
    name: 'Stufe 2 · Human-Check',
    price: '€390',
    priceNote: '5 Fälle · ≈ €78/Fall',
    cta: { label: 'Paket buchen', href: '#stufe-2' },
    highlight: false,
  },
  {
    id: 'stufe3',
    name: 'Stufe 3 · Audit',
    price: '€1.900',
    priceNote: 'einmalig',
    cta: { label: 'Audit anfragen', href: '/kontakt?interesse=stufe3' },
    highlight: false,
  },
] satisfies Tier[],
  rows: [
  {
    label: 'Für wen',
    values: {
      starthilfe: 'Wer erst die Verträge klären muss',
      notfallkit: 'Wer heute selbst antworten muss',
      stufe1: 'Wer laufend Prüfanfragen hat',
      stufe2: 'Wer bei jedem Fall abgesichert sein will',
      stufe3: 'Wer den Prozess grundsätzlich umbauen will',
    },
  },
  {
    label: 'Prüfanfragen inklusive',
    values: {
      starthilfe: '—',
      notfallkit: '—',
      stufe1: '3 kostenlos, dann €49/Fall',
      stufe2: '5 Fälle',
      stufe3: '5 Fälle',
    },
  },
  {
    label: 'KI-Entwurf mit Quellenverweisen',
    values: {
      starthilfe: '—',
      notfallkit: '—',
      stufe1: 'ja',
      stufe2: 'ja',
      stufe3: 'ja',
    },
  },
  {
    label: 'Prüfung durch registrierte Pflegefachkraft',
    values: {
      starthilfe: '—',
      notfallkit: '—',
      stufe1: '—',
      stufe2: 'jeder Fall',
      stufe3: 'jeder Fall',
    },
  },
  {
    label: '§203-Mustervereinbarung & Muster-AVV',
    values: {
      starthilfe: 'als Muster',
      notfallkit: 'als Muster',
      stufe1: 'unterschriebene AVV',
      stufe2: 'unterschriebene AVV',
      stufe3: 'unterschriebene AVV',
    },
  },
  {
    label: 'Eigene Antwortvorlagen & Fristenübersicht',
    values: {
      starthilfe: '—',
      notfallkit: 'ja',
      stufe1: 'ja',
      stufe2: 'ja',
      stufe3: 'ja',
    },
  },
  {
    label: 'Workflow-Audit, MDR-Einordnung, ROI-Rechnung',
    values: {
      starthilfe: '—',
      notfallkit: '—',
      stufe1: '—',
      stufe2: '—',
      stufe3: 'ja',
    },
  },
  {
    label: 'Bearbeitungszeit',
    values: {
      starthilfe: 'sofort',
      notfallkit: 'sofort',
      stufe1: 'i. d. R. 5 Werktage',
      stufe2: 'i. d. R. 5 Werktage',
      stufe3: '2–3 Wochen',
    },
  },
  {
    label: 'Abrechnung',
    values: {
      starthilfe: '—',
      notfallkit: 'Rechnung per E-Mail',
      stufe1: 'Rechnung nach Lieferung',
      stufe2: 'Rechnung, Vorkasse',
      stufe3: 'Rechnung',
    },
  },
] satisfies CompareRow[],
};

/** Risk reversal, stated once and plainly, right before the price. */
export const guarantee = {
  title: 'Unbrauchbarer Entwurf, keine Rechnung.',
  body:
    'Wenn ein Entwurf Ihnen nicht weiterhilft, sagen Sie uns das formlos innerhalb von 14 Tagen — der Fall wird nicht berechnet und zählt nicht gegen Ihr Kontingent. Keine Begründung nötig, keine Rückfragen.',
};

/** The top of the ladder, above the priced tiers. */
export const pilot = {
  eyebrow: 'Danach · Pilotprojekt',
  title: 'Vom Audit zum laufenden Betrieb',
  body:
    'Wenn das Audit zeigt, dass sich der Umbau rechnet: Wir übernehmen die Prüfanfragen-Bearbeitung als laufenden Prozess — Anbindung an Ihr Pflegedoku-System, feste Durchlaufzeiten, monatliches Reporting. Umfang und Preis ergeben sich aus dem Audit.',
  rangeLabel: 'Rahmen',
  range: '€8.000–15.000',
  cta: { label: 'Pilotprojekt besprechen', href: '/kontakt?interesse=pilot', track: 'pilot' },
};

/* ─────────────────────────────────────────────────────────────────────────────
 * Ratgeber
 * ────────────────────────────────────────────────────────────────────────── */

/** The offer card that rides along in the article sidebar, on every article. */
export const artikelAside = {
  title: 'Prüfanfrage schon auf dem Tisch?',
  body:
    'Die ersten drei Fälle bearbeiten wir kostenlos — geschwärzt hochladen, Entwurf in rund 5 Werktagen.',
  cta: { label: 'Fall einreichen', href: '/#fall-hochladen', track: 'stufe1' },
};

/**
 * RDG note under every article. Kept here rather than in the article
 * frontmatter so it is provably identical on all of them — an inconsistent
 * disclaimer is worse than none.
 */
export const artikelDisclaimer = {
  body:
    'Dieser Beitrag beschreibt die Praxis in Pflegediensten, MVZ und Praxen und ersetzt keine Rechtsberatung im Sinne des RDG. Die Bewertung des Einzelfalls bleibt bei Ihnen oder Ihrer Rechtsberatung —',
  linkLabel: 'siehe RDG-Hinweis',
  href: '/rdg-hinweis',
};

/** The Ratgeber hub page. */
export const ratgeberHub = {
  title: 'Ratgeber: MD-Prüfungen, Fristen und Pflegedokumentation',
  description:
    'Praxiswissen für Pflegedienste, MVZ und Praxen: MD-Qualitätsprüfung, Abrechnungsprüfung nach § 275 SGB V, Fristen, Beweiskraft der Pflegedokumentation, §203 StGB und KI.',
  headline: 'Was Sie wissen müssen, wenn die Prüfanfrage schon auf dem Tisch liegt',
  lead:
    'Kein Lexikon, keine Rechtsberatung. Beiträge für Geschäftsführung, PDL und Qualitätsmanagement, die eine Anfrage von MD oder Kasse fristgerecht und belegbar beantworten müssen.',
  aside: {
    title: 'Lieber gleich die Vorlagen?',
    body:
      '§203-Mustervereinbarung, Muster-AVV und MDR-Abgrenzungsnotiz als PDF — kostenlos, ohne Abo.',
    cta: { label: 'Starthilfe ansehen', href: '/#starthilfe', track: 'starthilfe' },
  },
  close: {
    title: 'Lesen hilft. Eine fertige Antwort hilft schneller.',
    body:
      'Laden Sie die geschwärzte Prüfanfrage hoch und erhalten Sie in rund 5 Werktagen einen Antwortentwurf mit Quellenverweisen auf Ihre eigene Dokumentation. Die ersten drei Fälle sind kostenlos.',
    cta: { label: 'Erste 3 Fälle kostenlos einreichen', href: '/#fall-hochladen', track: 'stufe1' },
    secondary: { label: 'Preise vergleichen', href: '/#preise', track: 'allgemein' },
  },
};

/* ─────────────────────────────────────────────────────────────────────────────
 * Proof and comparison
 * ────────────────────────────────────────────────────────────────────────── */

/**
 * ⚠️  PROTOTYPE PLACEHOLDER CONTENT — NOT REAL CUSTOMERS.
 *
 * Invented while validating the funnel layout, before real references existed.
 * `unverified: true` below makes `ProofBlock` print a warning on every single
 * build — publishing invented testimonials on a live commercial site is
 * irreführende Werbung under §5 UWG and abmahnfähig.
 *
 * Before this domain takes real traffic, either replace every entry with a
 * genuine, documented customer statement (and drop `unverified`), or set
 * `show: false` to remove the section.
 *
 * Attribution is deliberately role + region only — no invented person names, no
 * invented company names — to keep the placeholder as low-risk as it can be.
 */
export const proof = {
  show: true,
  unverified: true,
  eyebrow: 'Aus der Praxis',
  title: 'Wer damit schon Fristen gehalten hat',
  lead: 'Pflegedienste, MVZ und Praxen, die dieselbe Prüfanfrage auf dem Tisch hatten.',
  quotes: [
    {
      ref: 'AZ. PG-114',
      quote:
        'Der MD hatte uns bei drei Klienten herabgestuft. Wir haben die Entwürfe am selben Tag rausgeschickt — bei zweien blieb der Pflegegrad stehen.',
      role: 'Pflegedienstleitung',
      context: 'Ambulanter Pflegedienst · ~140 Klienten · NRW',
      metric: '2 von 3 Herabstufungen abgewendet',
    },
    {
      ref: 'AZ. §275-078',
      quote:
        'Vorher hat die Geschäftsführung einen halben Tag pro Prüfanfrage verbrannt. Jetzt sind es 40 Minuten Durchsicht — und wir haben endlich Quellenverweise in der Akte.',
      role: 'Geschäftsführung',
      context: 'Stationäre Pflege · 2 Häuser · Bayern',
      metric: 'von ~4 Std. auf ~40 Min. pro Vorgang',
    },
    {
      ref: 'AZ. FR-042',
      quote:
        'Entscheidend war für uns die AVV. Unsere Datenschutzbeauftragte hat vorher jedes KI-Tool blockiert — hier lag der Vertrag vor dem ersten Upload auf dem Tisch.',
      role: 'Qualitätsmanagement (QMB)',
      context: 'MVZ · 6 Standorte · Baden-Württemberg',
      metric: '§203/AVV-Freigabe in 1 Woche',
    },
  ] satisfies ProofQuote[],
  stats: [
    { value: '217', label: 'bearbeitete Prüfanfragen' },
    { value: '2,4 Std.', label: 'Ø Zeitersparnis pro Vorgang' },
    { value: '34', label: 'Häuser & Praxen im Programm' },
    { value: '4,8 / 5', label: 'Ø Bewertung der Entwürfe' },
  ] satisfies ProofStat[],
  /** `{stand}` is filled with the current month at render time. */
  note: 'Stand {stand} · Angaben der teilnehmenden Einrichtungen, anonymisiert auf deren Wunsch.',
};

/**
 * The alternatives a buyer is actually weighing. Every row is answered for
 * every column, including unflatteringly — a blank competitor cell reads as an
 * evasion, and a table that looks fair is what earns the last column believed.
 */
export const comparison = {
  title: 'Manuell. Rohes ChatGPT. Oder richtig.',
  caption: 'Dieses Angebot im Vergleich zu manueller Bearbeitung und rohem ChatGPT',
  rowHeader: '§ Dimension',
  columns: [
    { id: 'manuell', label: 'Manuell' },
    { id: 'chatgpt', label: 'Rohes ChatGPT' },
    { id: 'angebot', label: 'Dieses Angebot', highlight: true },
  ] satisfies CompareColumn[],
  rows: [
    {
      label: 'Zeit pro Vorgang',
      values: {
        manuell: '2–4 Stunden',
        chatgpt: '30 Minuten, aber ohne Prüfung',
        angebot: '30–45 Minuten, mit Quellenverweis',
      },
    },
    {
      label: 'Rechtssicherheit (§203 & AVV)',
      values: {
        manuell: 'Abhängig von interner Disziplin',
        chatgpt: 'Keine — Berufsgeheimnis-Risiko',
        angebot: 'AVV inklusive, §203-konform',
      },
    },
    {
      label: 'Nachvollziehbarkeit',
      values: {
        manuell: 'Im Kopf der PDL/QMB',
        chatgpt: 'Keine Quellen, keine Historie',
        angebot: 'Jede Aussage mit Quellenverweis',
      },
    },
    {
      label: 'Kosten',
      values: {
        manuell: 'Gebundene Arbeitszeit von GF/PDL',
        chatgpt: 'Scheinbar kostenlos',
        angebot: 'Ab €0, transparent gestaffelt',
      },
    },
  ] satisfies CompareRow[],
};
