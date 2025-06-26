<template>
    <section class="about-present relative z-[5] pt-3 pb-5">
        <!-- TODO: three js screne -->
        <div class="centered">
            <div class="p-4 mb-2 select-none" v-angle-box>
                <router-link :to="{ name: 'main' }">
                    <img :src="`${BASE_PATH}img/logo.svg`" alt="" />
                </router-link>
                <div class="text-center pt-5 md:pt-8 lg:pt-10">
                    <div class="block-label bracket-text">О нас</div>
                </div>
            </div>
            <div class="p-4 mb-2" v-angle-box>
                <h1 class="leading-[1.0] text-[32px] md:text-[50px] xl:text-[96px] mb-20 xl:mb-[200px]">
                    Разрабатываем проекты разной сложности по индивидуальным требованиям
                </h1>
                <div class="grid grid-cols-1 gap-5 block-note md:grid-cols-2 xl:w-1/2 xl:ml-auto">
                    <div>
                        Текст-описание. Мы стараемся подходить к тренировкам по боксу комплексно. Занятие включает
                        разминку, технику бокса «школа»; более опытные участники отрабатывают движения и удары в парах
                        по заданию либо участвуют в вольном бое. Новички оттачивают технику постановки ног и механику
                        удара. Также формат мини-группы предусматривает работу на мешках и заминку в конце тренировки.
                    </div>
                    <div>
                        Текст-описание. Мы стараемся подходить к тренировкам по боксу комплексно. Занятие включает
                        разминку, технику бокса «школа»; более опытные участники отрабатывают движения и удары в парах
                        по заданию либо участвуют в вольном бое. Новички оттачивают технику постановки ног и механику
                        удара. Также формат мини-группы предусматривает работу на мешках и заминку в конце тренировки.
                    </div>
                </div>
            </div>
            <div class="p-3 overflow-hidden">
                <a href="#" class="w-full button button--responsive">
                    <span class="bracket-text">Смотреть все кейсы</span>
                </a>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { BASE_PATH } from '@/router/basePath';
import { useSwiper } from '@/composables/useSwiper';
import { initMainLinksSlider } from '@/scripts/Sliders';

useSwiper(initMainLinksSlider);
</script>
