<template>
    <section class="values-block py-10 xl:py-20">
        <div class="centered">
            <div class="flex flex-col gap-8 text-center mb-8 lg:flex-row lg:text-left xl:gap-20 overflow-hidden">
                <div>
                    <div class="secondary-value-text">100</div>
                    <div class="block-label bracket-text mb-0">наши проекты</div>
                </div>
                <div>
                    <div class="secondary-value-text text-ash-500/50">2015</div>
                    <div class="block-label bracket-text mb-0">наши проекты</div>
                </div>
            </div>
            <div
                class="flex gap-2 px-3 py-4 overflow-y-hidden overflow-x-auto custom-scrollbar xl:flex-wrap xl:overflow-visible xl:justify-center"
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
        </div>
    </section>
</template>

<script setup lang="ts">
import { casesPageHeaderBlockLinks } from '@/mocks';
</script>
