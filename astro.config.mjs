import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import { remarkReadingTime } from './src/remark-reading-time.mjs';
import vercel from '@astrojs/vercel/serverless';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), sitemap()],
  site: 'https://primidi.vercel.app',
  output: 'server',
  adapter: vercel(),
  markdown: {
    remarkPlugins: [remarkReadingTime],
  },
});