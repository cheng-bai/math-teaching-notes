import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://cheng-bai.github.io',
  base: '/math-teaching-notes',
  output: 'static',
  trailingSlash: 'always',
  devToolbar: { enabled: false },
});
