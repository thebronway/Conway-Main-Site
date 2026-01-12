import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://conway.im',
  build: {
    format: 'directory'
  },
  trailingSlash: 'always'
});