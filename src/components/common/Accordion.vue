<template>
    <div class="app-accordion" :class="{ 'is-open': state.isOpen }">
        <div class="app-accordion__top">
            <slot name="title" :isOpen="state.isOpen" :toggle="onToggle"></slot>
        </div>
        <div class="app-accordion__body">
            <div style="min-height: 0">
                <slot name="body" :isOpen="state.isOpen" :toggle="onToggle"></slot>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { onBeforeMount, reactive } from 'vue';

const props = defineProps<{
    open?: boolean;
}>();

const state = reactive({
    isOpen: false,
});

function onToggle() {
    state.isOpen = !state.isOpen;
}

onBeforeMount(() => {
    state.isOpen = props.open || state.isOpen;
});
</script>
