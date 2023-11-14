<script setup lang="ts">
import { RouterView } from 'vue-router';

import SiderBarComponent from './components/SiderBarComponent/index.vue';
</script>

<template>
  <div class="app-container">
    <SiderBarComponent />
    <RouterView />
  </div>

  <!-- <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

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
  display: inline-flex;
  justify-content: center;
  align-items: flex-start;

  background: var(--BG-color-1, #E4E4E4);
}
</style>
