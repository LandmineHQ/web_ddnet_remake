<template>
    <div class="ddnet-about--container">
        <div>version:{{ ddnetPack.version }}</div>
        <div>language version: {{ languagePack.version }}</div>
    </div>
</template>

<script setup lang="ts">
import ddnetPack from "../../package.json";
import { ref } from "vue";
let language = navigator.language.toLocaleLowerCase();
let languagePack = ref({ version: "1.0.0" });
Promise.all([import(`@/i18n/language/${language}.json`)])
    .then(([p1]) => {
        languagePack.value = p1;
    })
</script>