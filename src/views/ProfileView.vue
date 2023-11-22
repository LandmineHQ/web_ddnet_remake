<template>
    <div class="ddnet-view-profile">
        <ViewInstructionComponent>{{ $t("sidebar.userProfileItem.title") }}</ViewInstructionComponent>
        <ProfileCardComponent />
        <FooterComponentVue />
        <DebugComponentVue />
    </div>
</template>

<script setup lang="ts">
import ViewInstructionComponent from "@/components/ViewInstructionComponent.vue";
import ProfileCardComponent from "@/components/ProfileCardComponent.vue";
import FooterComponentVue from "@/components/FooterComponent.vue";
import DebugComponentVue from "@/components/__debugC__/DebugComponent.vue";
</script>

<style lang="scss" scoped>
.ddnet-view-profile {
    width: 100%;
    padding: 20px;
    gap: 20px;
    display: flex;
    flex-direction: column;
}
</style>@/stores/user