import { createI18n } from "vue-i18n";

// 导入语言包
import zh_cn from "./language/zh_cn.json";
import en_us from "./language/en_us.json";

const messages = {
    zh_cn,
    en_us
}

const i18n = createI18n({
    allowComposition: true,
    legacy: false,
    locale: "zh_cn",
    fallbackLocale: "en_us",
    messages,
    globalInjection: true,
})

Object.defineProperty(window, "$t", {
    value: i18n.global.t
})

export default i18n