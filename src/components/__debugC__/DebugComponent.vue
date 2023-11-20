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

function click1() {
    UserIndexedDB.cleanIndexedDB()
}
</script>