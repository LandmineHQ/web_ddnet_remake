import { get } from "idb-keyval";
import useUserInfoStore from "./user";
import axios from "axios";
import UserIndexedDB from "@/stores/UserIndexedDB"
import { del, set } from "idb-keyval";
import { config as URLCONFIG } from "@/axios/URLConfig"
import { getAuthor, getMappers } from "@/axios/Mappers";

const ddnetDBURL = new URL(URLCONFIG.DDNET_PLAYER_INFO_URL);

/**
 * get user information from indexedDB
 * @returns flag{boolean} - whether successfully
 */
async function getUserFromIndexedDB() {
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

/**
 * automatically get user info from indexDB or ddnet database
 */
async function getUserAll() {
    if (await UserIndexedDB.getUser() === false) {
        console.log("updating user from ddnet database");
        await freshSource();
    }
}

async function freshSource() {
    // step 1: get playerinfo
    ddnetDBURL.searchParams.set("json2", useUserInfoStore().name);
    const updatePlayerInfoPromise = axios.get(ddnetDBURL.toString()).then((res) => {
        if (res.status !== 200) {
            throw new Error("cant get data for res.status:" + res.status);
        }
        const data = res.data
        for (const key in data) {
            useUserInfoStore().playerInfo[key] = data[key];
        }
        if (!data.player) useUserInfoStore().playerInfo = {}
        console.log("fresh source successfully");
    }).catch((err) => {
        console.log("fresh source failed\n", err);
    })
    // step 2: get mappersInfo
    const updateMappersInfoPromise = getMappers().then((data) => {
        useUserInfoStore().mappersInfo = data
    })
    // step 3: get teedataAuthorInfo
    const updateAuthorInfoPromise = getAuthor(useUserInfoStore().name).then((data) => {
        useUserInfoStore().teedataAuthorInfo = data
    })
    // step 4: fresh date stamp
    await updatePlayerInfoPromise
    await updateMappersInfoPromise
    await updateAuthorInfoPromise
    useUserInfoStore().stamp = new Date()
    // now that source is freshed, auto save the source is needed
    saveIntoIndexedDB();
}

async function saveIntoIndexedDB() {
    console.log("saving data from user");
    const savedData: UserInfo = useUserInfoStore()
    await set("user", JSON.stringify(savedData))
        .then((res) => {
            console.log("saved successfully", res);
        }).catch((err) => {
            console.log("saved failed\n", err);
        });
}

async function cleanIndexedDB() {
    console.log("cleaning data from user");
    await del("user")
        .then((res) => {
            console.log("cleaning successfully", res)
        })
        .catch((err) => {
            console.log("cleaning failed\n", err);
        });
}

export default {
    getUser: getUserFromIndexedDB,
    getFromIndexedDB: getUserAll,
    freshSource,
    saveIntoIndexedDB,
    cleanIndexedDB
}
