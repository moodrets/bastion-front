<template>
    <section class="services-cases py-28">
        <div class="centered">
            <div class="services-cases__header mb-10 text-center xl:grid xl:grid-cols-3 xl:gap-5 xl:mb-20">
                <h2 class="block-label mb-6 bracket-text xl:mb-0 xl:col-start-2">кейсы</h2>
                <div class="block-note md:ml-auto md:text-left xl:ml-0">
                    Новички оттачивают технику постановки ног и механику удара. Также формат мини-группы предусматривает
                    работу на мешках и заминку в конце тренировки.
                </div>
            </div>
            <CaseCards :columns="3" :items="servicesCases" :hideCardBottomDesc="true"></CaseCards>
        </div>
    </section>
</template>

<script setup lang="ts">
import CaseCards from '@/components/blocks/CaseCards.vue';
import { servicesCases } from '@/mocks';
</script>
