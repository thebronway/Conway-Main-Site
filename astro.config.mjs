import { defineConfig } from 'astro/config';
import icon from 'astro-icon';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://brian.conway.im',
  build: {
    format: 'directory'
  },
  integrations: [
    icon(),
    mdx(),
    sitemap()
  ],
});