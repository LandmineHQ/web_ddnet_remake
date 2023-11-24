<template>
    <section class="ddnet-section">
        <header class="title">
            <div class="rectangle"></div>

            <span>{{ props.title }}</span>
        </header>
        <slot name="default"></slot>
    </section>
</template>

<script setup lang="ts">
const props = defineProps({
    title: {
        default: 'title',
        type: String,
    }
})
</script>

<style scoped lang="scss">
@import url('@/assets/responsive/components/BaseSectionPlaneComponent.scss');

.ddnet-section {
    position: relative;

    display: flex;
    height: 493px;
    flex-direction: column;
    align-items: flex-start;

    border-radius: 10px;
    background: var(--BG-color-2, #FFF);
    box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.25);
}

.ddnet-section>.title {
    display: flex;
    height: 32px;
    padding: 11px 991px 5px 16px;
    align-items: center;
    flex-direction: row;
    gap: 8px;

    >* {
        flex: none;
    }

    >.rectangle {
        width: 6px;
        height: 14px;

        border-radius: 2px;
        background: var(--Primary, #409EFF);
    }

    >span {
        display: flex;
        width: 139px;
        height: 16px;
        flex-direction: column;
        justify-content: center;

        color: var(--Black, #000);
        font-family: Arial;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        letter-spacing: 0.14px;
    }
}
</style>