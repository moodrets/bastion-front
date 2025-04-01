<template>
    <section class="main-projects">
        <div class="centered">
            <div class="main-projects__top">
                <a href="#" class="decor-link uppercase">
                    <div class="bracket-text">Наши проекты</div>
                </a>
            </div>
            <h2 class="main-projects__header block-title mb-5 xl:mb-12">
                <div class="max-w-[70%] md:max-w-[60%]">Воплощаем идеи в жизнь</div>
                <div class="text-right">с 2015 года</div>
            </h2>
            <div class="main-projects__middle">
                <!-- TODO: partials animation and THEE JS model -->
                <div class="swiper main-projects__slider js-main-projects-slider">
                    <div class="swiper-wrapper">
                        <div v-for="(slide, slideIndex) in mainProjectsSlides" :key="slideIndex" class="swiper-slide">
                            <img class="w-full" :src="slide.mainPic" alt="" />
                        </div>
                    </div>
                </div>
                <div class="swiper main-projects__slider-thumbs js-main-projects-slider-thumbs">
                    <div class="swiper-wrapper">
                        <div v-for="(slide, slideIndex) in mainProjectsSlides" :key="slideIndex" class="swiper-slide">
                            <img :src="slide.thumb" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="main-projects__bottom">
                <p>
                    Редизайн многостраничного сайта для продажи осветительных приборов, с функцией онлайн-оплаты, выбора
                    способа доставки, личным кабинетом, корзиной и избранным.
                </p>
                <a href="#" class="decor-link uppercase"><div class="bracket-text">узнать больше</div></a>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { useSwiper } from '@/composables/useSwiper';
import { initMainProjectsSlider } from '@/scripts/Sliders';
import { mainProjectsSlides } from '@/mocks';

useSwiper(initMainProjectsSlider);
</script>
