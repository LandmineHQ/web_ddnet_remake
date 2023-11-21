import { h, onUnmounted, render } from 'vue'
import MessageComponentVue from './MessageComponent.vue';

type MessageType = 'success' | 'error' | 'default'
let messagesBox: HTMLDivElement;
const detectMessagesBox = () => {
    if (messagesBox) return messagesBox
    messagesBox = document.createElement('div')
    document.body.appendChild(messagesBox)
    return messagesBox
}

const useCreateMessageDom = (id: string) => {
    const dom = document.createElement('div')
    dom.id = id
    messagesBox.appendChild(dom)
    onUnmounted(() => {
        messagesBox.removeChild(dom)
    })
    return dom
}

/**
 * create a global message modal
 * @param message{String} - the message to display
 * @param type{MessageType} - the type of this message
 * @param timeOut{Number} - timeout length in milliseconds
 * @retutargetToElement
 */
const createMessage = (message: string, type?: MessageType, timeOut?: number) => {
    detectMessagesBox()
    const node = useCreateMessageDom("ddnet-global-message")
    const messageVnode = h(MessageComponentVue, {
        message,
        type,
        targetToElement: node
    })
    render(messageVnode, node)
    const destroy = () => {
        onUnmounted(() => {
            render(null, node)
            node.remove()
        })
    }
    if (timeOut) {
        setTimeout(() => {
            destroy()
        }, timeOut)
    }
    return {
        destroy
    }
}

export {
    type MessageType,
    createMessage,
    detectMessagesBox,
}