<template>
  <global-layout>
    <template #sider>
      <global-sider></global-sider>
    </template>
    <template #header>
      <global-header></global-header>
    </template>
    <template #content>
      <global-content></global-content>
    </template>
<!--    <template #footer>-->
<!--      <global-footer></global-footer>-->
<!--    </template>-->
  </global-layout>

</template>
<script lang="ts" setup>
import GlobalLayout from '@/components/global-layout/index.vue'
import GlobalSider from '@/layouts/common/global-sider/index.vue'
import GlobalHeader from '@/layouts/common/global-header/index.vue'
import GlobalContent from '@/layouts/common/global-content/index.vue'
import GlobalFooter from '@/layouts/common/global-footer/index.vue'
</script>
