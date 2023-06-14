import { fileURLToPath, URL } from 'node:url'
// @ts-ignore
import { setupVitePlugins } from './build/plugins';
import { defineConfig } from 'vite'
// import vue from '@vitejs/plugin-vue'
// import vueJsx from '@vitejs/plugin-vue-jsx'
import { viteMockServe } from "vite-plugin-mock";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // vue(),
    // vueJsx(),
    // viteMockServe({
    //   mockPath: 'mock',
    //   injectCode: `import { setupMockServer } from './mock'; 	setupMockServer();`
    // }),
    ...setupVitePlugins()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
