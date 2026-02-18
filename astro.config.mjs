// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

const site = process.env.SITE_URL;

// https://astro.build/config
export default defineConfig({
  ...(site ? { site } : {}),
  vite: {
    plugins: [tailwindcss()],
  },
});
