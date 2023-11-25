<template>
    <div>
        here is debugger
        <div>
            <button @click="click1">清除indexedDB</button>
            <button @click="sendMessage">发送消息</button>
        </div>
    </div>
</template>

<script setup lang="ts">
import UserIndexedDB from '@/stores/UserIndexedDB';
import { useRouter } from 'vue-router';
import Message from '@/hook/messages/index'
const router = useRouter()

function click1() {
    UserIndexedDB.cleanIndexedDB()
    router.push({ name: "start" })
}
function sendMessage() {
    Message.text({
        showClose: true,
        duration: 0
    })
}
</script>