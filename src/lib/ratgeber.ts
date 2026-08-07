import { getCollection, type CollectionEntry } from 'astro:content';

export type Artikel = CollectionEntry<'ratgeber'>;

/**
 * The three pillars. Order here is the order in the nav dropdown and on the hub
 * page — it runs from "a Prüfanfrage is on my desk right now" (highest intent)
 * to "we are evaluating a tool" (research intent).
 */
export const KATEGORIEN = [
  {
    slug: 'pruefungen' as const,
    label: 'Prüfungen & Fristen',
    blurb: 'Was der MD und die Kassen wissen wollen — und bis wann.',
    accent: 'stamp' as const,
  },
  {
    slug: 'dokumentation' as const,
    label: 'Pflegedokumentation',
    blurb: 'Wie Einträge aussehen müssen, damit sie in der Prüfung tragen.',
    accent: 'file' as const,
  },
  {
    slug: 'datenschutz-ki' as const,
    label: 'Datenschutz & KI',
    blurb: '§203 StGB, AVV und was vor dem ersten KI-Upload geklärt sein muss.',
    accent: 'gold' as const,
  },
];

export type KategorieSlug = (typeof KATEGORIEN)[number]['slug'];

export function kategorieOf(slug: string) {
  return KATEGORIEN.find(k => k.slug === slug) ?? KATEGORIEN[0];
}

/** Published articles only, sorted newest-updated first. */
export async function alleArtikel(): Promise<Artikel[]> {
  const entries = await getCollection('ratgeber', ({ data }) => !data.draft);
  return entries.sort((a, b) => b.data.updated.localeCompare(a.data.updated));
}

export async function artikelNachKategorie() {
  const artikel = await alleArtikel();
  return KATEGORIEN.map(kategorie => ({
    kategorie,
    artikel: artikel.filter(a => a.data.category === kategorie.slug),
  }));
}

/**
 * Resolve the frontmatter `related` slugs against what actually exists.
 * A slug that does not resolve is dropped rather than rendered as a dead link —
 * articles get written in parallel and cross-reference each other, so a
 * temporarily missing sibling must not break the page.
 */
export function aufloesenRelated(entry: Artikel, alle: Artikel[]): Artikel[] {
  const gefunden = entry.data.related
    .map(slug => alle.find(a => a.id === slug))
    .filter((a): a is Artikel => Boolean(a) && a!.id !== entry.id);

  if (gefunden.length >= 2) return gefunden.slice(0, 3);

  // Top up from the same category so the block is never half-empty.
  const fuellung = alle.filter(
    a => a.id !== entry.id &&
      a.data.category === entry.data.category &&
      !gefunden.some(g => g.id === a.id)
  );
  return [...gefunden, ...fuellung].slice(0, 3);
}
