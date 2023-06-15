import { fileURLToPath, URL } from 'node:url'
// @ts-ignore
import { setupVitePlugins } from './build/plugins';
import { defineConfig } from 'vite'
import { viteMockServe } from "vite-plugin-mock";
export default defineConfig({
  plugins: setupVitePlugins(),
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
