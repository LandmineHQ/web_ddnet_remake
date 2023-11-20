<template>
    <div class="ddnet-siderbar" v-show="!useSideBarStore().hidden">
        <SiderBarLogo />
        <NewsItem />
        <UserProfileItem class="user-profile" />
    </div>
</template>

<script setup lang="ts">
import SiderBarLogo from "@/components/icons/SiderBarLogo.vue"
import UserProfileItem from "@/components/SiderBarComponent/NavigatorItem/UserProfileItem.vue"
import NewsItem from "@/components/SiderBarComponent/NavigatorItem/NewsItem.vue"
import useSideBarStore from "@/stores/sidebar";
</script>
<style scoped lang="scss">
@import url("@/assets/responsive/SiderBarComponent.scss");

.ddnet-siderbar {
    width: 240px;
    height: 1024px;

    position: relative;
    border-radius: 5px;
    background: var(--BG-color-1, #E4E4E4);
    box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
}

.ddnet-siderbar>.user-profile {
    position: absolute;
    bottom: 0;

    width: 240px;
    height: 82px;
    flex-shrink: 0;
    background: var(--BG-color-4, rgba(255, 255, 255, 0.20));
}
</style>