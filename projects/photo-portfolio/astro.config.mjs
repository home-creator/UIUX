// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // Set this to your production URL (used for canonical + Open Graph URLs).
  site: 'https://example.com',
  vite: {
    plugins: [tailwindcss()],
  },
});
