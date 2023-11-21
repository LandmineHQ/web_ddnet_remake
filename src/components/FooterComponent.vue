<template>
    <div class="ddnet-footer">
        <div class="text" v-for="(item, index) in footer" :key="index">
            <span class="content">{{ item.content }}</span>
        </div>
    </div>
</template>

<script setup lang="ts">
const footer = [{ content: "@2023" },
{ content: "Landmine地雷&shenyang" },
{ content: "备案号备案号备案号备案号" },
{ content: "关于" },
]

</script>

<style scoped lang="scss">
@import url("@/assets/responsive/components/FooterComponents.scss");

.ddnet-footer {
    display: flex;
    width: 1440px;
    height: 64px;
    padding: 10px;
    justify-content: center;
    align-items: flex-end;
    gap: 10px;

    background: var(--BG-color-1, #E4E4E4);
}

.ddnet-footer>.text {
    >.content {
        color: var(--Text-1, #000);
        font-family: Arial;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        opacity: 0.5;
    }
}
</style>