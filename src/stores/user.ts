import { defineStore } from "pinia";
import { ref } from "vue";

const state: UserInfo = {
    name: ref<String>("nameless tee"),
    country: ref<Countries>("default"),
    skin: ref<String>("default"),
    details: ref<PlayerInfo>(),
}

const getters = {

};

const actions = {};

const useUserInfoStore = defineStore('userInfo', () => {
    return { ...state, ...getters, ...actions }
})

export default useUserInfoStore;