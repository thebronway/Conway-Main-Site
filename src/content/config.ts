import { defineCollection, z } from 'astro:content';

const statusEnum = z.enum([
  'Live & Supported',
  'Active Development',
  'Paused & Backlog',
  'Concept',
  'Archived',
  'Hidden'
]);

const projectsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    status: statusEnum,
    projectType: z.array(z.enum(['Hosted Site', 'Open Source', 'Self-Hosted'])).optional(),
    version: z.string().optional(),
    heroImage: z.string().optional(),
    demoUrl: z.string().url().optional(),
    gitUrl: z.string().url().optional(),
    dockerUrl: z.string().url().optional(),
    url: z.string().url().optional(),
    order: z.number().default(0),
  }),
});

export const collections = {
  'projects': projectsCollection
};