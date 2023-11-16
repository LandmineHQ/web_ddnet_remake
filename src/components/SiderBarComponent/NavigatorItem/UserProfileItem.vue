<template>
    <ItemComponent class="ddnet-navigator--user-profile">
        <template #title>{{ $t("sidebar.userProfileItem.title") }}</template>
        <template #default>
            <div class="content">
                <img src="@/assets/icons/default_skin.svg" alt="default_skin">
                <div>{{ useUserInfoStore().name }}</div>
            </div>
        </template>
    </ItemComponent>
</template>

<script setup lang="ts">
import useUserInfoStore from "@/stores/user";
import ItemComponent from "./ItemComponent.vue";
</script>

<style lang="scss" scoped>
.ddnet-navigator--user-profile {

    .content {
        width: 224px;
        height: 45px;
        position: relative;

        >div {
            position: absolute;
            left: 61px;
            bottom: 4px;
        }
    }
}
</style>@/stores/user