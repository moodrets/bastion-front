<template>
    <div
        v-cloak
        class="app-offcanvas"
        :class="{ 'is-open': offcanvasController.isOpen(props.name) }"
        @click="clickHandler"
    >
        <div class="app-offcanvas__body bg-white dark:bg-zinc-900">
            <slot></slot>
        </div>
    </div>
</template>

<script setup lang="ts">
import { offcanvasController } from '@/composables/useOffcanvas';

const props = defineProps<{
    name: string;
}>();

offcanvasController.register(props.name);

function clickHandler(event: Event) {
    const target = event.target as HTMLElement;
    if (target.classList.contains('app-offcanvas')) {
        offcanvasController.toggle(props.name);
    }
}
</script>
