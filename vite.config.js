import { defineConfig } from 'vite';
import legacy from '@vitejs/plugin-legacy';
import ViteRestart from 'vite-plugin-restart';
import viteCompression from 'vite-plugin-compression';
import { visualizer } from 'rollup-plugin-visualizer';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import critical from 'rollup-plugin-critical';
import { ViteFaviconsPlugin } from 'vite-plugin-favicon2';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig(({command}) => ({
  base: command === 'serve' ? '' : '/dist/',
  build: {
    emptyOutDir: true,
    manifest: true,
    outDir: './web/dist',
    rollupOptions: {
      input: {
        app: './src/js/app.js',
      },
      output: {
        sourcemap: true
      },
    }
  },
  plugins: [
    critical({
      criticalUrl: 'https://ossy.alyxia.dev',
      criticalBase: './web/dist/criticalcss/',
      criticalPages: [
        {uri: '/', template: 'index'},
      ],
      criticalConfig: {}
    }),
    legacy({
      targets: ['defaults', 'not IE 11']
    }),
    nodeResolve({
      modulePaths: [
        path.resolve('./node_modules'),
      ],
    }),
    ViteFaviconsPlugin({
      logo: "./src/img/favicon-src.png",
      favicons: {
        // theme_color: '#000000',
      },
      inject: false,
      outputPath: 'favicons',
    }),
    ViteRestart({
      reload: [
        './templates/**/*',
      ],
    }),
    viteCompression({
      filter: /\.(js|mjs|json|css|map)$/i
    }),
    visualizer({
      filename: './web/dist/assets/stats.html',
      template: 'treemap',
      sourcemap: true,
    })
  ],
  publicDir: path.resolve(__dirname, './src/public'),
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    },
    preserveSymlinks: true,
  },
  server: {
    origin: 'https://ossyweb.ddev.site:3000',
    host: '0.0.0.0',
    port: 3000,
    strictPort: true,
  }
}));
