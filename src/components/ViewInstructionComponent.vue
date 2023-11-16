<template>
    <div class="view-instruction">
        <div class="origin">
            <slot name="origin">DDNET</slot>
        </div>
        <div class="path">
            <slot name="default">null</slot>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import url("@/assets/responsive/ViewInstructionComponent.scss");

.view-instruction {
    display: flex;
    width: 1160px;
    padding: 15px 1011px 16px 16px;
    align-items: center;

    border-radius: 10px;
    background: var(--BG-color-2, #FFF);
    box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.25);

    >.origin {
        display: inline;
        color: var(--Black, #000);
        font-family: 'Times New Roman', Times, serif;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        letter-spacing: 0.16px;

        &::after {
            content: "/";
            display: inline-block;
            margin-left: 4px;
            margin-right: 4px;
        }
    }

    >.path {
        display: inline;
        color: var(--Black, #000);
        font-family: Arial, Helvetica, sans-serif;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        letter-spacing: 0.16px;
    }
}
</style>