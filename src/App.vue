<template>
  <n-config-provider
    :locale="zhCN"
    :date-locale="dateZhCN"
    class="h-full"
    name="provider"
  >
  <naive-provider>
    <router-view />
  </naive-provider>
  </n-config-provider>
</template>
<script setup lang="ts">
import { dateZhCN, zhCN, NConfigProvider } from 'naive-ui';
import NaiveProvider from '@/components/common/naive-provider.vue'
</script>
