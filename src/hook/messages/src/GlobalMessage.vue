<template>
    <transition name="slide-fade">
        <div class="message-container" v-show="visible" ref="$el">
            <!-- 内容 -->
            <div class="message-content" @click="onClose" @mouseover="mouseOver" @mouseout="mouseOut">

                <div class="message-icon" v-if="config.icon">
                    <i :class="config.icon"></i>
                </div>

                <span v-text="config.content"></span>

                <div class="option" v-if="config.showClose">
                    x
                    <i class="ri-close-fill"></i>
                </div>

            </div>
        </div>
    </transition>
</template>

<script setup lang="ts">
import { type PropType } from "vue";
import { type MessageOpionts } from './Instance.js'
import { ref } from "vue";
import gsap from "gsap";

const props = defineProps({
    config: {
        type: Object as PropType<MessageOpionts>,
        default: () => { }
    }, // 消息配置项
    remove: {
        type: Function,
        default: () => { }
    }, // 取消挂载回调
})
const visible = ref(false)
const $el = ref<HTMLDivElement>()

let timer: NodeJS.Timeout
let tween: GSAPTween

onOpen(props.config)


defineExpose({
    $el
})
// =================================================================
// 打开消息
function onOpen(config: MessageOpionts) {
    setTimeout(() => {
        visible.value = true;
    }, 10)

    // 指定时间后移除消息
    if (config.duration !== 0) {
        timer = setTimeout(() => {
            onClose();
        }, config.duration);
    }
}

// 消息关闭
function onClose() {
    visible.value = false;
    setTimeout(() => {
        props.remove()
    }, 200)
}

// mouse over
function mouseOver() {
    clearTimeout(timer)
}
// mouse out
function mouseOut() {
    onOpen(props.config)
}
</script>

<style lang="scss">
$radius: 4px;
$normalHeight: 34px;

.message {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    box-sizing: border-box;
    text-align: center;
    z-index: 9999;
    transform: translateZ(9999px);
    padding-top: 28px;
}

.message-container {

    .message-content {
        display: inline-block;
        padding: 4px 18px;
        height: $normalHeight;
        text-align: left;
        line-height: $normalHeight;
        font-size: 14px;
        font-weight: 400;
        border-radius: $radius;
        color: #595959;
        box-shadow: 0 4px 12px rgba(0, 0, 0, .15);
        background: #ffffff;
        transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);

        &:hover {
            transform: scale(1.1);
        }

        .message-icon {
            display: inline-block;

            i {
                font-size: 18px;
                font-weight: 400;
                margin-top: -3px;
                margin-right: 6px;
                display: inline-block;
                box-sizing: border-box;
                vertical-align: middle;
            }

            .ri-checkbox-circle-fill {
                color: #58c05b;
            }

            .ri-close-circle-fill {
                color: #fd4f4d;
            }
        }

        .option {
            display: inline-block;
            pointer-events: all;
            margin-left: 18px;

            i {
                font-size: 18px;
                font-weight: 400;
                margin-top: -3px;
                display: inline-block;
                box-sizing: border-box;
                vertical-align: middle;
                cursor: pointer;
                color: #d9d9d9;
                transition: color 0.2s ease;

                &:hover {
                    color: #ff7c75;
                    transition: color 0.2s ease;
                }
            }
        }
    }
}

.slide-fade-enter-active {
    transition: all .2s ease-out;
}

.slide-fade-leave-active {
    transition: all .2s ease;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    transform: translateY(-20px);
    opacity: 0;
}
</style>