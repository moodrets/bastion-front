<template>
    <section class="desc-block">
        <div class="centered">
            <div class="desc-block__top">
                <div class="block-label bracket-text">Наши проекты</div>
            </div>
            <h2 class="desc-block__header block-title">
                <div class="max-w-[70%] md:max-w-[60%]">Воплощаем идеи в жизнь</div>
                <div class="text-right">с 2015 года</div>
            </h2>
            <div class="desc-block__middle">
                <div
                    class="flex gap-2 px-3 py-4 overflow-y-hidden overflow-x-auto xl:flex-wrap xl:overflow-visible custom-scrollbar"
                >
                    <a
                        v-for="(link, linkIndex) in casesPageHeaderBlockLinks"
                        :key="linkIndex"
                        :href="link.link"
                        class="button button--hex px-[78px] button--rounded button--outlined button--responsive whitespace-nowrap"
                    >
                        <span>{{ link.title }}</span>
                        <sup>{{ link.count }}</sup>
                    </a>
                </div>
                <div class="pt-14">
                    <CaseCards theme="ground" :items="casesPageCards1"></CaseCards>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import CaseCards from '@/components/blocks/CaseCards.vue';
import { casesPageHeaderBlockLinks, casesPageCards1 } from '@/mocks';
</script>
