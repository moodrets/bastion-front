<template>
    <div class="app-clock">
        <div class="app-clock__time">{{ state.time }}</div>
        <div class="app-clock__separator" v-if="showTimezone"></div>
        <div class="app-clock__timezone" v-if="showTimezone">{{ state.zone }}</div>
    </div>
</template>

<script lang="ts" setup>
import { reactive, onBeforeMount } from 'vue';

const { showSeconds = false, showTimezone = true } = defineProps<{
    showSeconds?: boolean;
    showTimezone?: boolean;
}>();

const intervalSeconds = showSeconds ? 1000 : 1000 * 60;

const state = reactive<{
    time: string;
    zone: string;
}>({
    time: '',
    zone: '',
});

const updateTime = () => {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    let formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
    let offsetMinutes = date.getTimezoneOffset();
    let offsetHours = -offsetMinutes / 60;

    state.zone = `UTC${offsetHours >= 0 ? '+' : ''}${offsetHours}`;

    if (showSeconds) {
        state.time = `${hours}:${formattedMinutes}:${formattedSeconds}`;
    } else {
        state.time = `${hours}:${formattedMinutes}`;
    }
};

onBeforeMount(() => {
    updateTime();

    setInterval(() => {
        updateTime();
    }, intervalSeconds);
});
</script>
