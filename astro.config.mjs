import { defineConfig } from 'astro/config';
import icon from 'astro-icon';

export default defineConfig({
  site: 'https://conway.im',
  build: {
    format: 'directory'
  },
  integrations: [
    icon()
  ],
});