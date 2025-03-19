<template>
    <section class="main-block">
        <ThreeMainScene />
        <div class="centered">
            <div class="main-block__logo" v-angle-box>
                <router-link :to="{ name: 'main' }">
                    <img :src="`${BASE_PATH}img/logo.svg`" alt="" />
                </router-link>
            </div>
            <div class="pt-3" v-angle-box>
                <div class="main-block__desc">
                    Привет, Мы диджитал агентство Bastion. Не боимся решать нестандартные задачи — создаем и реализуем
                    самые уникальные проекты благодаря широкому стеку возможностей
                </div>
                <div class="main-block__links">
                    <div class="swiper links-marquee-slider js-main-links-slider">
                        <div class="swiper-wrapper">
                            <div v-for="(link, linkIndex) in mainBlockLinks" :key="linkIndex" class="swiper-slide">
                                <a href="#" class="button button--outlined button--responsive uppercase">
                                    <span v-html="link.name"></span>
                                    <sup>{{ link.subtitle }}</sup>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import ThreeMainScene from '@/components/blocks/ThreeMainScene.vue';

import { BASE_PATH } from '@/router/basePath';
import { useSwiper } from '@/composables/useSwiper';
import { initMainLinksSlider } from '@/scripts/Sliders';
import { mainBlockLinks } from '@/mocks';

useSwiper(initMainLinksSlider);
</script>
