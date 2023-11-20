<template>
    <div class="ddnet-about">
        <AboutComponent />
        <FooterComponent />
    </div>
</template>
<script setup lang="ts">
import AboutComponent from '@/components/AboutComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
</script>
<style scoped lang="scss">
.ddnet-about {
    width: 100%;
    padding: 20px;
    gap: 20px;
    display: flex;
    flex-direction: column;
}
</style>