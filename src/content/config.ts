import { defineCollection, z } from 'astro:content';

const statusEnum = z.enum([
  'Production', 
  'Live',
  'Active Development', 
  'Prototype',
  'Planning', 
  'Concept Phase',
  'Paused',
  'Archived', 
  'Cancelled'
]);

const projectsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    status: statusEnum,
    heroImage: z.string().optional(),
    demoUrl: z.string().url().optional(),
    gitUrl: z.string().url().optional(),
    dockerUrl: z.string().url().optional(),
    url: z.string().url().optional(),
    order: z.number().default(0),
  }),
});

const sitesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    status: statusEnum,
    heroImage: z.string().optional(),
    url: z.string().url().optional(),
    order: z.number().default(0),
  }),
});

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    description: z.string(),
    author: z.string().default('Brian Conway'),
    image: z.object({
      url: z.string(),
      alt: z.string()
    }).optional(),
    tags: z.array(z.string()).default(["general"])
  })
});

export const collections = {
  'projects': projectsCollection,
  'sites': sitesCollection,
  'blog': blogCollection
};