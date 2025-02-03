<template>
    <form @submit.prevent="onSubmit">
        <div class="form-field" :class="placementBlockFieldClass">
            <input type="text" class="form-control" placeholder="имя" />
        </div>
        <div class="form-field" :class="placementBlockFieldClass">
            <input type="tel" class="form-control" placeholder="телефон" />
        </div>
        <div class="form-field" :class="placementBlockFieldClass">
            <input type="text" class="form-control" placeholder="интересующая задача" />
        </div>
        <div class="form-field">
            <button type="submit" class="button button--responsive w-full">
                <span class="bracket-text">отправить</span>
            </button>
        </div>
    </form>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
    placement: 'block' | 'modal';
}>();

const placementBlockFieldClass = computed<string>(() => {
    return props.placement === 'block' ? 'lg:w-1/2 lg:ml-auto lg:pl-2.5' : '';
});

async function onSubmit() {}
</script>
