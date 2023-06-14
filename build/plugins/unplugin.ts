
import Components from 'unplugin-vue-components/vite';  // 自动化引入和注册组件
import IconsResolver from 'unplugin-icons/resolver'; // 用于解析和处理图标的导入路径
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers';
export default function unplugin() {
 return [
   Components({
     dts: 'src/type/components.d.ts',
     types: [{ from: 'vue-router', names: ['RouterLink', 'RouterView'] }],
     // resolvers: [
     //   NaiveUiResolver(),
     //   IconsResolver({ customCollections: [collectionName], componentPrefix: VITE_ICON_PREFFIX })
     // ]
   }),
 ]
}
