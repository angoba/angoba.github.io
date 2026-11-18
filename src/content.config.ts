import { defineCollection, z } from 'astro:content';

const datedCollection = z.object({
  title: z.string(),
  date: z.string(),
  summary: z.string().optional(),
  draft: z.boolean().default(false)
});

export const collections = {
  posts: defineCollection({ schema: datedCollection }),
  notes: defineCollection({ schema: datedCollection }),
  papers: defineCollection({ schema: datedCollection })
};
