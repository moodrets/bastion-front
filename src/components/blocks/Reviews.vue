<template>
    <section class="py-10 xl:py-20">
        <div class="centered">
            <div class="p-3" v-angle-box>
                <h2 class="block-label text-center mb-0">
                    <div class="bracket-text">отзывы</div>
                </h2>
                <!-- [+] sliders -->
                <div class="py-10 xl:py-[200px]">
                    <div class="swiper js-reviews-slider-titles mb-16">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide" v-for="i in 5" :key="i">
                                <div class="block-subtitle text-center mb-0 text-balance max-w-[600px] mx-auto">
                                    Название компании {{ i }}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="swiper reviews-images-slider js-reviews-slider-images">
                        <div class="swiper-wrapper">
                            <div
                                v-for="i in 5"
                                :key="i"
                                class="swiper-slide w-[140px] h-[90px] transition-all duration-300 cursor-pointer bg-ash-400"
                            ></div>
                        </div>
                    </div>
                    <div class="swiper js-reviews-slider-desc mt-16">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide" v-for="i in 5" :key="i">
                                <div class="block-note text-balance max-w-[600px] mx-auto text-center pb-2">
                                    <p>
                                        Текст отзыва. Редизайн многостраничного сайта для продажи осветительных
                                        приборов, с функцией онлайн-оплаты, выбора способа доставки, личным кабинетом,
                                        корзиной и избранным.
                                    </p>
                                    <a href="#" class="decor-link uppercase mt-8">
                                        <span class="bracket-text">Читать</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- [-] sliders -->
                <div class="p-3 overflow-hidden">
                    <a href="#" class="w-full button button--responsive">
                        <span class="bracket-text">Связаться</span>
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
import { useSwiper } from '@/composables/useSwiper';
import { initReviewsSlider } from '@/scripts/Sliders';

useSwiper(initReviewsSlider);
</script>
