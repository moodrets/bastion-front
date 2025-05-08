<template>
    <section class="services-cases py-28">
        <div class="centered">
            <div class="services-cases__header mb-10 text-center xl:flex xl:mb-20">
                <h2 class="block-label mb-6 bracket-text xl:w-1/3 xl:ml-auto xl:mb-0">кейсы</h2>
                <div class="block-note md:w-1/2 md:ml-auto md:text-left xl:ml-0 xl:w-1/3">
                    Новички оттачивают технику постановки ног и механику удара. Также формат мини-группы предусматривает
                    работу на мешках и заминку в конце тренировки.
                </div>
            </div>
            <CaseCards :columns="3" :items="servicesCases"></CaseCards>
        </div>
    </section>
</template>

<script setup lang="ts">
import CaseCards from '@/components/blocks/CaseCards.vue';
import { servicesCases } from '@/mocks';
</script>
