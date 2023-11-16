<template>
    <div>
        <button @click="click">点我获取数据</button>
        <button @click="click2">点我输出数据</button>
    </div>
</template>

<script setup lang="ts">
import axios from "axios";
import useUserInfoStore from "@/stores/user";
import updateFromIndexedDB from "@/stores/update"
import { set } from "idb-keyval";

async function click() {
    let url = new URL("https://ddnet.org/players/?json2=Landmine地雷");
    url.searchParams.set("json2", useUserInfoStore().name);
    if (await updateFromIndexedDB.getUser() === false) {
        console.log("updating user from ddnet database");
        axios.get(url.toString()).then((res) => {
            if (res.status !== 200) {
                throw new Error("cant get data for res.status:" + res.status);
            }
            const data = res.data
            for (const key in data) {
                useUserInfoStore().details[key] = data[key];
            }
            console.log("updated successfully");
        }).catch((err) => {
            console.log("updated failed\n", err);
        });
    }
    console.log("saving data from user");
    const savedData: UserInfo = {
        name: useUserInfoStore().name,
        skin: useUserInfoStore().skin,
        country: useUserInfoStore().country,
        date: useUserInfoStore().date,
        details: useUserInfoStore().details
    }
    await set("user", JSON.stringify(savedData)).then((res) => {
        console.log("saved successfully", res);
    }).catch((err) => {
        console.log("saved failed\n", err);
    });
}

function click2() {
    console.log(useUserInfoStore());
}
</script>