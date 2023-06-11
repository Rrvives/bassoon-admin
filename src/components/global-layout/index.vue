<template>
  <div class="bg-black h-full w-full">
    <div></div>
  </div>
</template>
<script setup lang="ts">
import {computed} from "vue";

type SlotFn = (props?: Record<string, unknown>) => any;
type Slots = {
  /** 插槽：主体 */
  default?: SlotFn;
  /** 插槽：头部 */
  header?: SlotFn;
  /** 插槽：页签 */
  tab?: SlotFn;
  /** 插槽：侧边栏 */
  sider?: SlotFn;
  /** 插槽：底部 */
  footer?: SlotFn;
};
const slots = defineSlots<Slots>();
const header = computed(() => Boolean(slots.header))
const tab = computed(() => Boolean(slots.tab))
const sider = computed(() => Boolean(slots.sider))
const footer = computed(() => Boolean(slots.footer))
</script>
<style lang="scss">

</style>
