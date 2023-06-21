<template>
  <div class="h-full w-full flex global-admin" >
    <div class="w-[200px]  h-full sider " >
      <GlobalLogo></GlobalLogo>
      <div v-if="sider">
        <slot name="sider"></slot>
      </div>
    </div>
    <div class="w-full">
      <div class="h-[80px] w-full  header">
        <div v-if="header">
          <slot name="header"></slot>
        </div>
      </div>
      <div :style=" footer ? 'height:calc(100vh - 160px) !important' : 'height:calc(100vh - 80px) !important'" class="w-full p-[16px] pr-0 global-content" >
        <div v-if="content" class="rounded-md h-full overflow-auto">
          <slot name="content"></slot>
        </div>
      </div>
      <div class="h-[80px] w-full bg-slate-400" v-if="footer">
        <div v-if="footer">
          <slot name="footer"></slot>
        </div>
      </div>
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
const content = computed(() => Boolean(slots.content))
</script>
<style scoped lang='scss'>
.global-admin {
  .header {
    box-shadow: inset 1px 1px 5px #eee;
  }
  .global-content {
    background: #F1F5F9;
  }
}
</style>
