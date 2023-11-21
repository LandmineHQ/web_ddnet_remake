import moment from "moment";
import { defineStore } from "pinia";
import { ref } from "vue";

const state: UserInfo = {
    date: ref(moment(new Date()).format("YYYY-MM-DD")),
    name: ref<String>("system"),
    country: ref<Countries>("default"),
    skinName: ref<String>("log.svg"),
    skinSrcPath: ref<String>("./src/assets/svg/logo.svg"),
    playerInfo: ref<PlayerInfo>({} as PlayerInfo),
    mappersInfo: ref<MappersData>({} as MappersData),
    teedataAuthorInfo: ref<TeeData_Author>({} as TeeData_Author),
    stamp: ref<Date>(new Date()),
    isFirstComeIn: ref<Boolean>(true),
}

const getters = {
};

const actions = {};

const useUserInfoStore = defineStore('userInfo', () => {
    return { ...state, ...getters, ...actions }
})

export default useUserInfoStore;