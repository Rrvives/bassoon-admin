/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  'extends': [
    'plugin:vue/vue3-essential',
    // 'plugin:vue/vue3-strongly-recommended',
    'eslint:recommended',
    '@vue/eslint-config-typescript'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  //包含了一些配置项。在这段代码中，使用了 'import/core-modules' 配置项，它指定了一些核心模块或模块别名，这些模块不需要进行 import 检查。
  settings: {
    'import/core-modules': ['uno.css', '~icons/*', 'virtual:svg-icons-register']
  },
}
