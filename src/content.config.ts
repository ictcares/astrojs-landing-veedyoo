import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";
import { BLOG_SILO_SLUGS } from "./data/blogSilos";

const blog = defineCollection({
  loader: glob({ base: "./src/content/blog", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    category: z.string(),
    silo: z.enum(BLOG_SILO_SLUGS),
    minutesRead: z.number().int().positive(),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    imageCaption: z.string().optional(),
    author: z.string().default("Veedyoo Editorial Team"),
    tags: z.array(z.string()).default([]),
    about: z.array(z.string()).default([]),
    mentions: z.array(z.string()).default([]),
    disclosure: z.string().optional(),
    related: z.array(z.string()).default([]),
    ctaTitle: z.string().optional(),
    ctaDescription: z.string().optional(),
    ctaLabel: z.string().optional()
  }).superRefine((data, context) => {
    // A social/article image needs useful alternative text everywhere it is rendered.
    if (data.image && !data.imageAlt?.trim()) {
      context.addIssue({
        code: "custom",
        path: ["imageAlt"],
        message: "imageAlt is required when image is set."
      });
    }
  })
});

export const collections = { blog };
