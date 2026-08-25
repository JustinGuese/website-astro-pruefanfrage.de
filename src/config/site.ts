import { defineSiteConfig } from '@justinguese/astro-kit/lib/site';

/**
 * Everything that identifies this site.
 *
 * Nothing here may be typed into a component again. The domain used to appear
 * in 29 places across 9 files and the tracking/Formspree ids in 6 more — which
 * is how the header logo ended up reading `nachweis.de`, and why swapping the
 * Meta pixel meant a hand sweep.
 *
 * All of it is PUBLIC: it compiles into static HTML. Analytics ids and the
 * Formspree *form* id are public by design; nothing secret belongs here.
 */
export const site = defineSiteConfig({
  name: 'pruefanfrage.de',
  legalName: 'DataFortress.cloud GmbH',
  url: 'https://pruefanfrage.de',
  description:
    'Unterstützung für Pflegedienste, MVZ und Arztpraxen bei der Beantwortung von Prüfanfragen des Medizinischen Dienstes und der Kranken- und Pflegekassen.',
  locale: 'de_DE',
  lang: 'de',
  address: {
    streetAddress: 'Gewerbestraße 13',
    postalCode: '82064',
    addressLocality: 'Straßlach-Dingharting',
    addressCountry: 'DE',
  },
  areaServed: 'Deutschland',

  ga4Id: 'G-XGG1GZH4F3',
  metaPixelId: '910611952102152',
  formspreeId: 'maewgpzk',

  privacyHref: '/datenschutz',
});

/**
 * The offer ladder. Used as the `variant` on every form and as the analytics
 * label on every CTA, so a submission is separable per rung without parsing the
 * URL. Site vocabulary — deliberately not in the kit.
 */
export type Tier =
  | 'starthilfe'
  | 'notfallkit'
  | 'stufe1'
  | 'stufe2'
  | 'stufe3'
  | 'pilot'
  | 'allgemein';
