<template>
    <section
        class="desc-image-block p-5 bg-center bg-cover min-h-[640px] md:p-10 md:min-h-[800px] xl:min-h-[1080px]"
        :style="`background-image: url(${BASE_PATH}files/desc-image-bg.png)`"
    >
        <div class="centered">
            <h2 class="block-subtitle xl:max-w-[65%]">
                Любим свое дело и работаем на результат, поэтому уделяем 100% внимания каждой детали вашего проекта
            </h2>
        </div>
    </section>
</template>

<script setup lang="ts">
import { BASE_PATH } from '@/router/basePath';
</script>
