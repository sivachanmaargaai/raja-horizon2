import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// base './' keeps the build portable (works from any sub-folder / static host).
export default defineConfig({
  base: './',
  plugins: [react()],
});
