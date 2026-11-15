import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const work = defineCollection({
  loader: glob({ base: './src/content/work', pattern: '**/*.md' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      summary: z.string(),
      order: z.number(),
      client: z.string(),
      years: z.string(),
      platforms: z.array(z.string()),
      role: z.string(),
      links: z.array(z.object({ label: z.string(), href: z.url() })),
      cover: image(),
      coverAlt: z.string(),
      /** 'phone': a raw app screen, drawn inside a phone frame. 'composed': a store image that already has its own framing. */
      coverKind: z.enum(['phone', 'composed']),
      gallery: z.array(
        z.object({
          src: image(),
          alt: z.string(),
          caption: z.string().optional(),
          kind: z.enum(['phone', 'composed']).default('composed'),
        }),
      ),
      brands: z
        .array(
          z.object({
            name: z.string(),
            nameKo: z.string(),
            icon: image(),
            href: z.url(),
          }),
        )
        .optional(),
    }),
});

export const collections = { work };
