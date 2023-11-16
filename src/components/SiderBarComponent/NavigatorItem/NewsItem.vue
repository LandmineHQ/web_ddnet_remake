<template>
    <ItemComponent class="ddnet-navigator--news">
        <template #title>{{ $t("sidebar.newsItem.title") }}</template>
        <template #default>
            <div class="content">
                {{ $t("sidebar.null") }}
            </div>
        </template>
    </ItemComponent>
</template>

<script setup lang="ts">
import ItemComponent from "./ItemComponent.vue";
</script>

<style lang="scss" scoped>
.ddnet-navigator--news {

    .content {
        width: 224px;
        height: 146px;

        border-radius: 10px;
        background: var(--BG-color-2, #FFF);
    }
}
</style>