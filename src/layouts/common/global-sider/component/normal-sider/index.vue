<template>
  <div>
    <n-menu
      :options="menuOptions"
      :accordion="true"
      @update:value="handleUpdateValue"
    >
    </n-menu>
  </div>
</template>
<script setup lang="ts">
import { NMenu } from 'naive-ui'
// import type { MenuOption } from 'naive-ui'
import { getCurrentInstance } from 'vue'
import { routesToMenu } from '@/utils/router'
import { routes } from '@/router/modules'
const { proxy } = getCurrentInstance()
const { menuOptions } = routesToMenu(routes)
const handleUpdateValue = (val) => {
  proxy.$router.push({
    name: val
  })
}
</script>
