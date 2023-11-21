<template>
    <div class="ddnet-view-profile">
        <ViewInstructionComponent>{{ $t("sidebar.userProfileItem.title") }}</ViewInstructionComponent>
        <ProfileCardComponent ref="profileCard" />
        <FooterComponentVue />
    </div>
</template>

<script setup lang="ts">
import ViewInstructionComponent from "@/components/ViewInstructionComponent.vue";
import ProfileCardComponent from "@/components/ProfileCardComponent.vue";
import FooterComponentVue from "@/components/FooterComponent.vue";

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