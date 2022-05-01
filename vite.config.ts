import path from 'path';
import {defineConfig} from 'vite';
import vue from '@vitejs/plugin-vue';
import svgLoader from 'vite-svg-loader';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/interactive-rating-component/',
  plugins: [vue(), svgLoader()],
  resolve: {
    alias: {
      '@images': path.resolve(__dirname, 'src/assets/images'),
      '@icons': path.resolve(__dirname, 'src/assets/icons'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@styles': path.resolve(__dirname, 'src/styles'),
    },
  },
});
