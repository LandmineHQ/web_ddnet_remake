<script setup lang="ts">
import { RouterView } from 'vue-router';

import SiderBarComponent from './components/SiderBarComponent/SideBarComponent.vue';
</script>

<template>
  <div class="app-container">
    <SiderBarComponent />
    <RouterView />
  </div>
</template>

<style scoped lang="scss">
.app-container {
  display: inline-flex;
  justify-content: flex-start;
  align-items: flex-start;

  background: var(--BG-color-1, #E4E4E4);
}
</style>
