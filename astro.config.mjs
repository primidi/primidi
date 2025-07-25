import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import { remarkReadingTime } from './src/remark-reading-time.mjs';
import vercel from '@astrojs/vercel/serverless';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    sitemap({
      // Generate comprehensive sitemap
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      // Custom sitemap entries
      customPages: [
        'https://primidi.vercel.app/',
        'https://primidi.vercel.app/post',
      ],
      // Exclude certain pages if needed
      filter: (page) => !page.includes('/admin'),
    })
  ],
  site: 'https://primidi.vercel.app',
  output: 'server',
  adapter: vercel(),
  markdown: {
    remarkPlugins: [remarkReadingTime],
    // Enable syntax highlighting for better content presentation
    shikiConfig: {
      theme: 'github-dark',
      wrap: true,
    },
  },
  // Optimize build output
  build: {
    inlineStylesheets: 'auto',
  },
  // Improve performance with compression
  compressHTML: true,
  // Server configuration for better performance
  server: {
    headers: {
      // Security headers for better SEO ranking
      'X-Content-Type-Options': 'nosniff',
      'X-Frame-Options': 'DENY',
      'X-XSS-Protection': '1; mode=block',
    },
  },
});