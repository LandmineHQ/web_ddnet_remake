<template>
    <div class="ddnet-profile">
        <ViewInstructionComponent>{{ $t("sidebar.userProfileItem.title") }}</ViewInstructionComponent>
        <ProfileCardComponent ref="profileCard" />
        <DebugComponent :component="profileCard" />
        <FooterComponentVue />
    </div>
</template>

<script setup lang="ts">
import ViewInstructionComponent from "@/components/ViewInstructionComponent.vue";
import ProfileCardComponent from "@/components/ProfileCardComponent.vue";
import DebugComponent from "@/components/__debugC__/DebugComponent.vue";
import { ref } from "vue";
import FooterComponentVue from "@/components/FooterComponent.vue";

const profileCard = ref<InstanceType<typeof ProfileCardComponent>>()
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