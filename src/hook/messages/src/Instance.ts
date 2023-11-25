import { createApp } from 'vue'
import Message from './GlobalMessage.vue'
import gsap from 'gsap'
import { generateDebounce } from '@/utils/Debounce&Throttle'

type MessageOpionts = {
    type: 'text' | 'success' | 'error' // the type of message
    content: string // the content of the message
    icon: string // presentate icon
    duration: number // how long to show the message
    showClose: boolean // should close button show
}
let height: number; // height of every message element

/**
 * GlobalMessage instance oparation
 * @param cfg{MessageOptions} - the global message options 
 */
const createInstance = (cfg: MessageOpionts) => {
    const config = cfg || {}
    // first: create a new instance and configure
    // which contains the outside class and counter
    const messageNode = document.createElement('div')
    messageNode.classList.add("message")
    const messageList = document.getElementsByClassName('message')
    // second: create vue app and mount this app to body
    const app = createApp(Message, {
        config,
        remove() {
            handleRemove() // remove this message from the DOM & app
        }
    })
    app.mount(messageNode)
    document.body.appendChild(messageNode)
    // @ts-ignore
    resetMsgPos(messageList)
    return app

    // =================================================================
    // last: implements the unmount method
    function handleRemove() {
        app.unmount()
        document.body.removeChild(messageNode)
        // @ts-ignore
        resetMsgPos(messageList)
    }
}

const resetMsgPos = generateDebounce((collectionOf: HTMLCollectionOf<Element>[]) => {
    if (!height) height = collectionOf[0][0].getBoundingClientRect().height
    for (let i = 0; i < collectionOf[0].length; i++) {
        gsap.to(collectionOf[0][i], {
            y: i * height,
            duration: 0.5,
            ease: "power4.out",
        })
    }
}, 1000)

/**
 * 读取配置并渲染 Message
 * @param {Object} typeCfg 类型配置
 * @param {Object|String} cfg 自定义配置
 */
function renderMsg(typeCfg = {}, cfg: any = '') {
    // 允许直接传入消息内容，因此要判断传入的 cfg 类型
    const isContent = typeof cfg === 'string'

    // 整合自定义配置
    cfg = isContent ? {
        content: cfg
    } : cfg

    const config = Object.assign({}, typeCfg, cfg) as MessageOpionts // 合并配置

    const {
        type = 'text', // 消息类型
        content = 'here is a message', // 消息内容
        icon = '', // 消息图标
        duration = 3000, // 自动关闭延迟时间
        showClose = false // 是否显示关闭按钮
    } = config

    // 创建实例
    return createInstance({
        type,
        content,
        duration,
        icon,
        showClose
    })
}

// =================================================================
type CFG = string | { [T in keyof MessageOpionts]?: MessageOpionts[T] }

// 纯文本消息
function text(cfg: CFG) {
    const textCfg = {
        type: "text",
        icon: ''
    }

    return renderMsg(textCfg, cfg);
}
// 成功提示
function success(cfg: CFG) {
    const successCfg = {
        type: "success",
        icon: 'ri-checkbox-circle-fill'
    }

    return renderMsg(successCfg, cfg);
}
// 错误提示
function error(cfg: CFG) {
    const errorCfg = {
        type: "error",
        icon: 'ri-close-circle-fill'
    }

    return renderMsg(errorCfg, cfg);
}

export default {
    text,
    success,
    error
}

export type { MessageOpionts }