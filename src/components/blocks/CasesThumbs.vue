<template>
    <section class="cases-thumbs">
        <div class="case-card__top">
            <div class="case-card__number bracket-text">01</div>
            <div class="case-card__number">Project name</div>
            <div class="case-card__year">2024</div>
        </div>
        <div class="cases-thumbs__scene">
            <img class="dummy-image" :src="`${BASE_PATH}files/temp-${theme}.png`" alt="" />
        </div>
        <div class="cases-thumbs__previews custom-scrollbar">
            <div v-for="(item, itemIndex) in items" :key="itemIndex" class="cases-thumbs__previews-item">
                <img :src="item.image" :alt="item.image" />
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import type { MockCaseCardType } from '@/mocks';
import { BASE_PATH } from '@/router/basePath';

const { theme = 'particles' } = defineProps<{
    theme?: 'particles' | 'lattice' | 'smartphones' | 'tablet';
    items: MockCaseCardType[];
}>();
</script>
