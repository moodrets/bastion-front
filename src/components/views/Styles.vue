<template>
    <div class="centered">
        <div class="flex flex-wrap items-center gap-5 my-10">
            <button type="button" class="button" disabled>button disabled</button>
            <button type="button" class="button">button default</button>
            <button type="button" class="button button--md">button md</button>
            <button type="button" class="button button--lg">button lg</button>
        </div>
        <div class="flex flex-wrap items-center gap-5 my-10">
            <button type="button" class="button button--outlined" disabled>Кнопка неактивная</button>
            <button type="button" class="button button--outlined">Кнопка с обводкой <sup>12</sup></button>
            <button type="button" class="button button--outlined button--md">Кнопка с обводкой md<sup>12</sup></button>
            <button type="button" class="button button--outlined button--lg">Кнопка с обводкой lg<sup>12</sup></button>
        </div>
    </div>
    <Footer />
</template>

<script lang="ts" setup>
import Footer from '@/components/blocks/Footer.vue';
</script>
