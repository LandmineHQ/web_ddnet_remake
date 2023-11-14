<template>
    <div class="ddnet-profile">
        <ViewInstructionComponent>{{ $t("sidebar.userProfileItem.title") }}</ViewInstructionComponent>
        <span>{{ useUserInfoStore().name }} </span>
    </div>
</template>

<script setup lang="ts">
import ViewInstructionComponent from "@/components/ViewInstructionComponent.vue";
import useUserInfoStore from "@/stores/user";
</script>

<style lang="scss" scoped>
.ddnet-profile {
    padding: 20px;
}
</style>@/stores/user