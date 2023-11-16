import moment from "moment";
import { defineStore } from "pinia";
import { ref } from "vue";

const state: UserInfo = {
    date: ref(moment(new Date("2023-11-11")).format("YYYY-MM-DD")),
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