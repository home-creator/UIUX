// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import siteConfig from './site.config.ts';

export default defineConfig({
  // Production URL — set it in site.config.ts.
  site: siteConfig.url,
  vite: {
    plugins: [tailwindcss()],
  },
});
