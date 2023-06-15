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
const menuOptions: MenuOption[] = [
  {
    label: '第一级',
    key: 'dance-dance-dance',
    // icon: renderIcon(BookIcon),
    children: [
      {
        label: '第二级',
        key: 'narrator',
        // icon: renderIcon(PersonIcon)
        children: [
          {
            label: '第三极',
            key: 'sheep-man',
            // icon: renderIcon(PersonIcon)
          }
        ]
      }
    ]
  },
  {
    label: '菜单二',
    key: 'dance-dance-dance1',
    children: [
      {
        label: '第四极',
        key: 'sheep-man',
        // icon: renderIcon(PersonIcon)
      }
    ]
  },
  {
    label: '菜单三',
      key: 'sheep-man1',
    // icon: renderIcon(PersonIcon)
  }
]
const handleUpdateValue = (val) => {
  console.log(val, 'val')
}
</script>
