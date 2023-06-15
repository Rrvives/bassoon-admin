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
import type { MenuOption } from 'naive-ui'
import { routesToMenu } from '@/utils/router'
import { routes } from '@/router/modules/index'
const { menuOptions } = routesToMenu(routes)

const handleUpdateValue = (val) => {
  console.log(val, 'val')
}
</script>
