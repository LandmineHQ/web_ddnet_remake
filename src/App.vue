<template>
  <div class="app-container">
    <SiderBarComponent ref="sidebar" />
    <div class="router" :style="routerStyle">
      <RouterView class="sizeResitrict" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';
import SiderBarComponent from './components/SiderBarComponent/SideBarComponent.vue';
import { ref } from 'vue';
import type { StyleValue } from 'vue';
import { computed } from 'vue';
const sidebar = ref<InstanceType<typeof SiderBarComponent>>()
const routerStyle = computed(() => {
  const sytleValue = {
    "width": `calc(100vw - ${sidebar.value?.element?.getBoundingClientRect().width}px)`
  } as StyleValue
  return sytleValue
})
</script>

<style scoped lang="scss">
.app-container {
  height: 100vh;
  width: 100vw;
  overflow-x: hidden;
  display: inline-flex;
  justify-content: flex-start;
  align-items: flex-start;

  background: var(--BG-color-1, #E4E4E4);

  >.router {
    overflow: auto;
    height: 100%;

    >.sizeResitrict {
      min-height: 100%;
    }
  }
}
</style>
