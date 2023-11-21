<template>
    <teleport :to="props.targetToElement">
        <transition name="ddnet-global-message">
            <div :class="classObject" v-if="!isHidden">
                <span>{{ message }}</span>
                <button type="button" class="close" aria-label="Close" @click.prevent="close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
        </transition>
    </teleport>
</template>

<script lang="ts" setup>
import { type PropType, ref } from 'vue'
import { type MessageType } from '@/hook/messages/hookMessages'
const props = defineProps({
    message: {
        type: String,
        required: true,
    },
    type: {
        type: String as PropType<MessageType>,
        default: 'default',
        required: false,
    },
    targetToElement: {
        type: HTMLDivElement,
        required: true,
    }
})
console.log(props)
const emit = defineEmits(['close-message'])
const isHidden = ref(false)
const classObject = {
    'alert-success': props.type === 'success',
    'alert-danger': props.type === 'error',
    'alert-primary': props.type === 'default'
}
const close = () => {
    isHidden.value = true
    emit('close-message', true)
}
// detect if the props.targetToElement is existing
</script>
<style scoped lang="scss">
.alter-success {}

.alter-danger {}

.alter-primary {}

.ddnet-global-message-enter-active,
.ddnet-global-message-leave-active {
    transition: all 0.5s ease-in-out;
}

.ddnet-global-message-enter-from,
.ddnet-global-message-leave-to {
    opacity: 0;
}
</style>@/hook/messages/hookMessages