// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  build: {
    outDir: 'build', // or any other directory name
  },
  server: {
    host:true
  },
});
