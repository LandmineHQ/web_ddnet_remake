import { get } from "idb-keyval";
import useUserInfoStore from "./user";
import { ref } from "vue";

// get indexedDB object
get("user").then((user) => {
    if (!user) return
    useUserInfoStore().name = ref(user.name)
    useUserInfoStore().country = ref(user.country)
    useUserInfoStore().skin = ref(user.skin)
    useUserInfoStore().details = ref(user.details)
}).catch((error) => {
    console.warn("Error getting", error)
})