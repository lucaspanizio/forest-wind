import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  base: '/forest-wind/',
  publicDir: 'public',
  output: 'static',
  outDir: './dist',
  build: {
    assets: 'astro',
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
