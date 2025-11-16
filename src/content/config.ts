import { defineCollection, z } from 'astro:content';

const docsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    section: z.string(),
    order: z.number(),
    draft: z.boolean().default(false),
    lastUpdated: z.date().optional(),
    contributors: z.array(z.string()).optional(),
    tags: z.array(z.string()).optional(),
  }),
});

const changelogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    version: z.string(),
    date: z.date(),
    title: z.string(),
    description: z.string(),
    breaking: z.boolean().default(false),
    highlights: z.array(z.string()).optional(),
  }),
});

export const collections = {
  docs: docsCollection,
  changelog: changelogCollection,
};
