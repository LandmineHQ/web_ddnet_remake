<template>
    <div class="ddnet-profile">
        <ViewInstructionComponent>{{ $t("sidebar.userProfileItem.title") }}</ViewInstructionComponent>
        <ProfileCardComponent />
        <DebugComponent />
    </div>
</template>

<script setup lang="ts">
import ViewInstructionComponent from "@/components/ViewInstructionComponent.vue";
import ProfileCardComponent from "@/components/ProfileCardComponent.vue";
import DebugComponent from "@/components/__debugTools__/DebugComponent.vue";
</script>

<style lang="scss" scoped>
.ddnet-profile {
    width: 100%;
    padding: 20px;
    gap: 20px;
    display: flex;
    flex-direction: column;
}
</style>@/stores/user