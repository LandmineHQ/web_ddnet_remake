<template>
    <div class="ddnet-navigator-item">
        <div class="title">
            <slot name="title">title</slot>
        </div>

        <div>
            <slot name="default">none</slot>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.ddnet-navigator-item {
    display: flex;
    width: 240px;
    padding: 8px;
    flex-direction: column;
    align-items: flex-start;

    background: var(--BG-color-4, rgba(255, 255, 255, 0.20));

    .title {
        display: flex;
        width: 110px;
        height: 30px;
        flex-direction: column;
        justify-content: center;

        color: var(--Black, #000);
        font-family: Arial;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        letter-spacing: 0.12px;
    }
}
</style>