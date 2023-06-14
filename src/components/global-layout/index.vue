<template>
  <div class="h-full w-full flex">
    <div class="w-[150px] bg-amber-100 h-full">
      <GlobalLogo></GlobalLogo>
    </div>
    <div class="w-full">
      <div class="h-[80px] w-full">头部</div>
      <div style="height:calc(100vh - 160px) !important;" class="w-full">内容</div>
      <div class="h-[80px] w-full" >底部</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {computed} from "vue";
import { NLayout, NLayoutHeader, NLayoutContent, NLayoutFooter, NAvatar } from 'naive-ui'
import GlobalLogo from "@/layouts/common/global-logo/index.vue"
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
<style scoped>
.n-layout-header,
.n-layout-footer {
    background: rgba(128, 128, 128, 0.2);
    padding: 24px;
}

.n-layout-sider {
    background: rgba(128, 128, 128, 0.3);
}

.n-layout-content {
    background: rgba(128, 128, 128, 0.4);
}
</style>
