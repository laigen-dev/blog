import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://laigen.me',
  trailingSlash: 'ignore',
  build: {
    format: 'directory'
  }
});
