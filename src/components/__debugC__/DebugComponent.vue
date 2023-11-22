<template>
    <div>
        here is debugger
        <div>
            <button @click="click1">清除indexedDB</button>
        </div>
    </div>
</template>

<script setup lang="ts">
import UserIndexedDB from '@/stores/UserIndexedDB';
import { useRouter } from 'vue-router';
const router = useRouter()

function click1() {
    UserIndexedDB.cleanIndexedDB()
    router.push({ name: "start" })
}
</script>