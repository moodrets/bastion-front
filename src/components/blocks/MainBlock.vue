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
                    <div class="swiper js-main-links-slider">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide">
                                <a href="#" class="button button--outlined button--responsive uppercase">
                                    сервисы
                                    <sup>12</sup>
                                </a>
                            </div>
                            <div class="swiper-slide">
                                <a href="#" class="button button--outlined button--responsive uppercase">
                                    сайты
                                    <sup>12</sup>
                                </a>
                            </div>
                            <div class="swiper-slide">
                                <a href="#" class="button button--outlined button--responsive uppercase">
                                    поддержка
                                    <sup>12</sup>
                                </a>
                            </div>
                            <div class="swiper-slide">
                                <a href="#" class="button button--outlined button--responsive uppercase">
                                    брендинг
                                    <sup>12</sup>
                                </a>
                            </div>
                            <div class="swiper-slide">
                                <a href="#" class="button button--outlined button--responsive uppercase">
                                    Админ&nbsp;Панель
                                    <sup>12</sup>
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

useSwiper(initMainLinksSlider);
</script>
