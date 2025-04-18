<template>
    <div
        class="case-cards"
        :class="[
            centered ? 'case-cards--centered' : '',
            theme ? `case-cards--theme-${theme}` : '',
            `case-cards--viewtype-${viewType}`,
            `case-cards--columns-${columns}`,
        ]"
    >
        <!-- TODO: animation and THEE JS model for themes -->
        <template v-if="viewType === 'thumbs'">
            <div class="case-cards__scene">
                <img class="block" :src="`${BASE_PATH}files/temp-${theme}.png`" alt="" />
                <video v-if="activeThumb?.video" ref="activeThumbVideoRef" :key="activeThumb.video" loop muted>
                    <source :src="activeThumb.video" type="video/mp4" />
                </video>
                <div v-if="activeThumb" class="case-cards__top">
                    <div v-if="activeThumb.number" class="case-cards__number bracket-text">
                        {{ activeThumb.number }}
                    </div>
                    <div class="case-cards__title">{{ activeThumb.title }}</div>
                    <div v-if="activeThumb.year" class="case-cards__year">{{ activeThumb.year }}</div>
                </div>
            </div>
            <div class="case-cards__thumbs custom-scrollbar">
                <div
                    v-for="(item, itemIndex) in items"
                    :key="itemIndex"
                    @click.prevent="activateThumb(item)"
                    class="case-cards__thumbs-item"
                    :class="{ 'is-active': item.title === activeThumb?.title }"
                >
                    <img :src="item.image" :alt="item.title" />
                </div>
            </div>
            <div class="case-cards__bottom">
                <div v-if="activeThumb?.desc" class="case-cards__desc">{{ activeThumb?.desc }}</div>
                <a
                    v-if="activeThumb?.link"
                    :href="activeThumb?.link"
                    class="case-cards__more-link decor-link uppercase"
                >
                    <span class="bracket-text">Узнать больше</span>
                </a>
            </div>
        </template>

        <template v-if="viewType === 'list'">
            <div
                v-for="(item, itemIndex) in items"
                :key="itemIndex"
                @mouseenter="playItemVideo($event)"
                @mouseleave="pauseItemVideo($event)"
                class="case-cards__item"
                :class="item.theme ? `case-cards__item--theme-${item.theme}` : ''"
            >
                <div class="case-cards__top">
                    <div v-if="item.number" class="case-cards__number bracket-text">
                        {{ item.number }}
                    </div>
                    <div class="case-cards__title">{{ item.title }}</div>
                    <div v-if="item.year" class="case-cards__year">{{ item.year }}</div>
                </div>
                <div class="case-cards__item-media">
                    <template v-if="theme">
                        <a v-if="item.link" :href="item.link" class="case-cards__cover-link"></a>
                        <img class="block" :src="`${BASE_PATH}files/temp-${theme}.png`" alt="" />
                        <video v-if="item.video" :poster="item.image" loop muted>
                            <source :src="item.video" type="video/mp4" />
                        </video>
                    </template>
                    <template v-else>
                        <img :src="item.image" :alt="item.title" />
                        <a v-if="item.link" :href="item.link" class="case-cards__cover-link"></a>
                        <video v-if="item.video" :poster="item.image" loop muted>
                            <source :src="item.video" type="video/mp4" />
                        </video>
                    </template>
                </div>
                <div class="case-cards__bottom">
                    <div v-if="item.desc" class="case-cards__desc">{{ item.desc }}</div>
                    <a v-if="item.link" :href="item.link" class="case-cards__more-link decor-link uppercase">
                        <span class="bracket-text">Узнать больше</span>
                    </a>
                </div>
            </div>
        </template>
    </div>
</template>

<script setup lang="ts">
import { onMounted, onUpdated, ref } from 'vue';
import { BASE_PATH } from '@/router/basePath';
import { CaseCardType, CaseContainerThemeType } from '@/types/Cases';

const {
    columns = 1,
    viewType = 'list',
    centered = false,
    items = [],
} = defineProps<{
    items: CaseCardType[];
    theme?: CaseContainerThemeType;
    viewType?: 'list' | 'thumbs';
    columns?: number;
    centered?: boolean;
}>();

const activeThumb = ref<CaseCardType | null>(null);

const activeThumbVideoRef = ref<HTMLVideoElement | null>(null);

function activateThumb(item: CaseCardType) {
    activeThumb.value = item;
}

function playItemVideo(event: MouseEvent) {
    let video = (event.currentTarget as HTMLElement).querySelector('video');
    video && video.play();
}

function pauseItemVideo(event: MouseEvent) {
    let video = (event.currentTarget as HTMLElement).querySelector('video');
    video && video.pause();
}

onUpdated(() => {
    setTimeout(() => {
        activeThumbVideoRef.value?.play();
    }, 0);
});

onMounted(() => {
    if (viewType === 'thumbs') {
        activateThumb(items[0]);
    }
});
</script>
