<script setup lang="ts">
import { RouterView } from 'vue-router';

import SiderBarComponent from './components/SiderBarComponent/SideBarComponent.vue';
</script>

<template>
  <div class="app-container">
    <SiderBarComponent />
    <RouterView />
  </div>

  <!-- <header>
    <div class="wrapper">
      <HelloWorld msg="You did it!" />
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>
  <RouterView /> -->
</template>

<style scoped lang="scss">
.app-container {
  width: 100%;
  height: 100vh;
  display: inline-flex;
  justify-content: flex-start;
  align-items: flex-start;

  background: var(--BG-color-1, #E4E4E4);
}
</style>
