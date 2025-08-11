import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  base: '/forest-wind/',
  publicDir: 'public',
  vite: {
    plugins: [tailwindcss()],
  },
});
