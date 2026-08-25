import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { articleSchema, legalSchema } from '@justinguese/astro-kit/lib/collections';

const legal = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/legal' }),
  schema: legalSchema(),
});

/**
 * Ratgeber — the SEO surface.
 *
 * Every article is a standalone landing page for one search intent and ends in
 * the same funnel as the homepage. The category list is passed in rather than
 * living in the kit: it is site vocabulary, and declaring it as a tuple means a
 * typo'd slug fails the build instead of silently dropping the article out of
 * the nav.
 */
const ratgeber = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/ratgeber' }),
  schema: articleSchema(['pruefungen', 'dokumentation', 'datenschutz-ki']),
});

export const collections = { legal, ratgeber };
