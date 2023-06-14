<template>
  <div class="w-full">
    <router-link to="/" class="flex-center w-full nowrap-hidden">
      <n-avatar
        round
        :size="48"
        src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
      />
      <span>admin</span>
    </router-link>
  </div>
</template>

<script setup lang="ts">
import { NAvatar} from 'naive-ui'
</script>

<style scoped></style>
