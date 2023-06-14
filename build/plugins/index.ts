import type { PluginOption } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
// @ts-ignore
import unplugin from "./unplugin";

/**
 * vite插件
 * @param viteEnv - 环境变量配置
 */
export function setupVitePlugins(){
  const plugins = [
    vue({
      script: {
        defineModel: true
      }
    }),
    vueJsx(),
    ...unplugin()
  ];
  return plugins;
}
