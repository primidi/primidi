import { defineCollection, z } from 'astro:content';

const post = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      publicationDate: z.date(),
      tags: z.array(z.string()),
      keywords: z.array(z.string()).optional(),
      draft: z.boolean().optional(),
      hero: z
        .object({
          credit: z.string(),
          image: image(),
          alt: z.string(),
        })
        .optional(),
    }),
});

export const collections = {
  post,
};
