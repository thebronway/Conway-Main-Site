import { defineCollection, z } from 'astro:content';

const statusEnum = z.enum([
  'Stable',
  'Live',
  'Early Build',
  'Active Roadmap',
  'Backburnered',
  'Maintenance Mode',
  'Concept',
  'Feature Spec',
  'Paused',
  'On Hold',
  'Under Review',
  'Archived',
  'Deprecated',
  'Hidden'
]);

const SAFE_LOCAL_IMAGE_REGEX =
  /^\/images\/(?!.*\.\.)[a-zA-Z0-9/_-]+\.(webp|png|jpe?g|svg|avif)$/i;

const imageSrcSchema = z
  .string()
  .min(1)
  .refine(
    (val) => {
      if (SAFE_LOCAL_IMAGE_REGEX.test(val)) return true;
      try {
        const parsed = new URL(val);
        return parsed.protocol === 'https:';
      } catch {
        return false;
      }
    },
    {
      message:
        'Image path must be a safe local asset under /images/ (webp, png, jpg, jpeg, svg, avif) or a valid https:// URL.',
    }
  )
  .optional();

const projectsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    status: statusEnum,
    projectType: z.array(z.enum(['Hosted Site', 'Open Source', 'Self-Hosted'])).optional(),
    tech: z.array(z.string()).optional(),
    version: z.string().optional(),
    heroImage: imageSrcSchema,
    projectImage: imageSrcSchema,
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