import { defineStore } from "pinia";
import { ref } from "vue";


const state = {
    hidden: ref<boolean>(false)
}

const getters = {

}

const actions = {

};

const useSideBarStore = defineStore("sidebar", () => {
    return { ...state, ...getters, ...actions }
})

export default useSideBarStore