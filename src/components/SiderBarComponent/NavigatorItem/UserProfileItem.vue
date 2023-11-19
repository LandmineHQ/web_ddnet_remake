<template>
    <ItemComponent class="ddnet-navigator--user-profile">
        <template #title>{{ $t("sidebar.userProfileItem.title") }}</template>
        <template #default>
            <div class="content">
                <div class="skin"><canvas ref="skinCanvas"></canvas></div>
                <div>{{ useUserInfoStore().name }}</div>
            </div>
        </template>
    </ItemComponent>
</template>

<script setup lang="ts">
import useUserInfoStore from "@/stores/user";
import ItemComponent from "./ItemComponent.vue";
import { ref } from "vue";
import { watch } from "vue";
import { OnSVGRender, OnTeeSkinRender } from "@/tools/tee";

const skinCanvas = ref<HTMLCanvasElement>()
// reactive skin
const img = new Image();
updateSkin(useUserInfoStore().skinSrcPath)
watch(() => useUserInfoStore().skinSrcPath, updateSkin)

// =================================================

/**
 * render the skin of canvas
 */
function updateSkin(res: string) {
    if (res.includes("logo.svg")) {
        img.onload = () => {
            OnSVGRender(skinCanvas.value as HTMLCanvasElement, img, 106, 101)
        }
    } else {
        img.onload = () => {
            OnTeeSkinRender(skinCanvas.value as HTMLCanvasElement, img, 96, 64)
        }
    }
    img.src = res
}
</script>

<style lang="scss" scoped>
.ddnet-navigator--user-profile {

    .content {
        width: 224px;
        height: 45px;
        position: relative;

        >.skin {
            position: absolute;
            width: 45px;
            height: 45px;
            display: flex;
            left: 0;
            bottom: -4px;
            justify-content: center;
        }

        >div {
            position: absolute;
            left: 61px;
            bottom: 4px;
        }
    }
}
</style>