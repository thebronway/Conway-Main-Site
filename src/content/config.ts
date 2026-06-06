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
    gitUrl: z.string().url().optional(),
    url: z.string().url().optional(),
    order: z.number().default(0),
  }),
});

export const collections = {
  'projects': projectsCollection,
  'sites': sitesCollection
};