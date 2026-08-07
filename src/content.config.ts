import { defineCollection } from 'astro:content';
import { z } from 'astro:schema';
import { glob } from 'astro/loaders';

const legal = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/legal' }),
  schema: z.object({
    title: z.string(),
    updated: z.string().optional(),
  }),
});

/**
 * Ratgeber — the SEO surface.
 *
 * Every article is a standalone landing page for one search intent and ends in
 * the same funnel as the homepage. The schema is deliberately strict: `faq` and
 * `category` are not decoration, they drive the FAQPage structured data and the
 * nav dropdown, so a typo in a category slug must fail the build rather than
 * silently drop an article out of the menu.
 */
const ratgeber = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/ratgeber' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    keyword: z.string(),
    category: z.enum(['pruefungen', 'dokumentation', 'datenschutz-ki']),
    updated: z.string(),
    readingTime: z.number(),
    faq: z
      .array(z.object({ q: z.string(), a: z.string() }))
      .default([]),
    related: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { legal, ratgeber };
