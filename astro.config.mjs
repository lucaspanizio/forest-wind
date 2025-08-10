import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  base: '/forest-wind/',
  vite: {
    plugins: [tailwindcss()],
  },
});
