<template>
    <section class="cases-slider swiper js-cases-slider">
        <div class="swiper-wrapper">
            <div
                v-for="(slide, slideIndex) in casesSliderList"
                :key="slideIndex"
                class="cases-slider__item swiper-slide"
            >
                <div class="cases-slider__card">
                    <div class="cases-slider__card-title">
                        <a href="#" class="decor-link"
                            ><span class="bracket-text">{{ slide.title }}</span></a
                        >
                    </div>
                    <div class="cases-slider__card-image">
                        <a href="#" class="cover-link"></a>
                        <img :src="slide.img" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { casesSliderList } from '@/mocks';
import { initCasesSlider } from '@/scripts/Sliders';
import { useSwiper } from '@/composables/useSwiper';

useSwiper(initCasesSlider);
</script>
