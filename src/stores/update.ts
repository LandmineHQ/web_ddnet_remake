import { get } from "idb-keyval";
import useUserInfoStore from "./user";

// get indexedDB object
async function getUser() {
    let flag = false;
    await get("user").then((userString) => {
        if (!userString) return
        console.log("readding indexedDB user");
        const user = JSON.parse(userString) as UserInfo
        // eslint-disable-next-line prefer-const
        for (let key in user) {
            // @ts-ignore
            useUserInfoStore()[key] = user[key]
        }
        console.log("read successfully")
        flag = true
    }).catch((error) => {
        console.warn("Error getting", error)
    })

    return flag
}

export default {
    getUser
}
