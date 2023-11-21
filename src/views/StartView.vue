<template>
    <div class="ddnet-view-start">
        <div class="content">
            <div class="top">
                <div class="title">初始化</div>
                <div class="describe">请输入您的游戏ID</div>
            </div>
            <input type="text" placeholder="若无请留空" v-model="name">
            <div class="button" @click="next">继续</div>
            <div class="info">这里是备案信息鸭</div>
        </div>
    </div>
</template>

<script setup lang="ts">
import useSideBarStore from '@/stores/sidebar';
import useUserInfoStore from '@/stores/user';
import { ref } from 'vue';
import { onMounted, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';

const name = ref("")
const router = useRouter()

onMounted(() => {
    useSideBarStore().hidden = true;
})

onUnmounted(() => {
    useSideBarStore().hidden = false;
})

// =================================================================
function next() {
    if (name.value === "") useUserInfoStore().name = "nameless tee"
    else useUserInfoStore().name = name.value
    useUserInfoStore().isFirstComeIn = false
    router.push("/")
}
</script>

<style scoped lang="scss">
@import url("@/assets/responsive/view/StartView.scss");

.ddnet-view-start {
    display: flex;
    width: 1440px;
    height: 1024px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 277px;

    background: var(--BG-color-1, #E4E4E4);
}

.ddnet-view-start>.content {
    display: flex;
    width: 427px;
    height: 342px;
    padding: 44px;
    position: relative;

    border-radius: 5px;
    background: var(--BG-color-2, #FFF);
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

    >* {
        position: absolute;
        width: calc(100% - 44px * 2);
    }

    >.top {
        display: inline-flex;
        height: 105px;
        flex-direction: column;
        align-items: flex-start;
        gap: 12px;
        flex-shrink: 0;

        >.title {
            color: var(--Text-1, #000);
            font-family: Arial;
            font-size: 32px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            letter-spacing: 0.32px;
        }

        >.describe {
            color: var(--Text-1, #000);
            font-family: Arial;
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            letter-spacing: 0.16px;
        }
    }

    >input {
        width: 339px;
        height: 44px;
        flex-shrink: 0;
        top: 149px;

        border-radius: 10px;
        border: 1px solid var(--Border-1, #DCDFE6);

        user-select: all;
        outline: none;
        padding-left: 16px;
        padding-right: 16px;

        &::placeholder {
            display: block;
            position: absolute;
            left: 16px;
            top: 50%;
            transform: translateY(-50%);
        }
    }

    >.button {
        width: 110px;
        height: 32px;
        flex-shrink: 0;
        display: flex;
        justify-content: center;
        align-items: center;

        border-radius: 10px;
        background: var(--Primary, #409EFF);

        color: var(--BG-color-2, #FFF);
        font-family: Arial;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        letter-spacing: 4px;
        bottom: 108px;
        right: 44px;
    }

    >.info {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        justify-content: flex-end;
        width: 339px;
        height: 55px;
        flex-shrink: 0;
        color: var(--Text-3, #909399);
        font-family: Arial;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        letter-spacing: 0.16px;

        bottom: 44px;
        right: 44px;
    }
}
</style>