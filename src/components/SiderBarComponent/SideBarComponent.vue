<template>
    <Transition name="ddnet-sidebar">
        <div class="ddnet-sidebar" v-show="!useSideBarStore().hidden" ref="sidebar" :class="sidebarClass">
            <SiderBarLogo />
            <NewsItem />
            <UserProfileItem class="user-profile" />
        </div>
    </Transition>
</template>

<script setup lang="ts">
import SiderBarLogo from "@/components/icons/SiderBarLogo.vue"
import UserProfileItem from "@/components/SiderBarComponent/NavigatorItem/UserProfileItem.vue"
import NewsItem from "@/components/SiderBarComponent/NavigatorItem/NewsItem.vue"
import useSideBarStore from "@/stores/sidebar";
import { ref, computed, onMounted, watch } from "vue";
const sidebar = ref<HTMLDivElement>()

defineExpose({
    $el: sidebar
})
const sidebarClass = computed(() => {
    return {
        "mobile": useSideBarStore().mobileMode,
    }
})

watch(() => useSideBarStore().mobileMode, () => {
    useSideBarStore().hidden = useSideBarStore().mobileMode
})

onMounted(() => {
    window.addEventListener("resize", () => {
        if (window.innerWidth < 750) {
            useSideBarStore().mobileMode = true
        } else if (useSideBarStore().mobileMode === true) {
            useSideBarStore().mobileMode = false
        }
    })
})
</script>
<style scoped lang="scss">
@import url("@/assets/responsive/components/SiderBarComponent.scss");

.ddnet-sidebar {
    width: 240px;
    height: 1024px;

    position: relative;
    border-radius: 5px;
    background: var(--BG-color-1, #E4E4E4);
    box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
}

.ddnet-sidebar>.user-profile {
    position: absolute;
    bottom: 0;

    width: 240px;
    height: 82px;
    flex-shrink: 0;
    background: var(--BG-color-4, rgba(255, 255, 255, 0.20));
}

.ddnet-sidebar-enter-from,
.ddnet-sidebar-leave-to {
    opacity: 0;
    transform: translateX(-100%);
}

.ddnet-sidebar-enter-active,
.ddnet-sidebar-leave-active {
    transition: all 0.5s ease-in-out;
}
</style>