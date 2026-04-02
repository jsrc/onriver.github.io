import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    excerpt: z.string(),
    publishDate: z.coerce.date(),
    heroImage: z.string(),
    pathSlug: z.string(),
    locale: z.enum(["zh-cn", "en"]),
    translationKey: z.string(),
    tags: z.array(z.string()).default([])
  })
});

export const collections = { blog };
