<template>
  <router-view v-slot="{ Component, route }">
<!--    <transition name="provider" mode="out-in">-->
<!--      <keep-alive :include="tagsViewStore.cachedViews">-->
        <component  :is="Component" :key="route.path"/>
<!--      </keep-alive>-->
<!--    </transition>-->
  </router-view>
</template>
<script setup>
</script>
