<template>
    <div class="ddnet-view-about">
        <AboutComponent />
        <FooterComponent />
    </div>
</template>
<script setup lang="ts">
import AboutComponent from '@/components/BaseAboutComponent.vue';
import FooterComponent from '@/components/BaseFooterComponent.vue';
</script>
<style scoped lang="scss">
.ddnet-view-about {
    width: 100%;
    padding: 20px;
    gap: 20px;
    display: flex;
    flex-direction: column;
}
</style>