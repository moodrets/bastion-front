<template>
    <div
        class="case-card-container"
        :class="{ 'case-card-container--centered': centered }"
        :style="{ '--columns': columns }"
    >
        <div
            v-for="(item, itemIndex) in items"
            :key="itemIndex"
            class="case-card"
            v-card-hover="{ action: 'play-video' }"
        >
            <div class="case-card__top">
                <div v-if="item.number" class="case-card__number bracket-text">{{ item.number }}</div>
                <div class="case-card__title">{{ item.title }}</div>
                <div v-if="item.year" class="case-card__year">{{ item.year }}</div>
            </div>
            <div class="case-card__media">
                <a v-if="item.link" :href="item.link" class="case-card__cover-link"></a>
                <img :src="item.image" :alt="item.title" />
                <video v-if="item.video" :poster="item.image" loop muted>
                    <source :src="item.video" type="video/mp4" />
                </video>
            </div>
            <div v-if="item.desc" class="case-card__desc">{{ item.desc }}</div>
            <a v-if="item.link" :href="item.link" class="decor-link uppercase">
                <span class="bracket-text">Узнать больше</span>
            </a>
        </div>
    </div>
</template>

<script setup lang="ts">
import { MockCaseCardType } from '@/mocks';

const { columns = 1, centered = false } = defineProps<{
    items: MockCaseCardType[];
    columns?: number;
    centered?: boolean;
}>();
</script>
