<template>
    <router-view></router-view>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';
import { initCasesSlider } from '@/scripts/Sliders';

onMounted(() => {
    setTimeout(() => {
        initCasesSlider();
    });
});
</script>
