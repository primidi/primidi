import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import { remarkReadingTime } from './src/remark-reading-time.mjs';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  site: 'https://primidi.github.io',
  output: 'server',
  markdown: {
    remarkPlugins: [remarkReadingTime],
  },
});
