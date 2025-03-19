<template>
    <section class="main-about">
        <div class="centered">
            <h1 class="main-about__title bracket-text">о нас</h1>
            <div class="main-about__desc">
                Фокусируемся на разработке сайтов, онлайн-сервисов и поддержке реализованных проектов. А еще создали
                собственную CMS, чтобы упростить вам жизнь
            </div>
            <div class="main-about__grid">
                <div class="main-about__column main-about__column--items">
                    <div v-for="(item, itemIndex) in mainAboutValues" :key="itemIndex" class="main-about__item">
                        <div class="main-about__item-row">
                            <div class="main-about__item-number">{{ item.number }}</div>
                            <div class="main-about__item-value">{{ item.value }}</div>
                        </div>
                        <div class="main-about__item-link">
                            <a class="uppercase decor-link" :href="item.link">
                                <span class="bracket-text">{{ item.linkText }}</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="main-about__column main-about__column--info">
                    <div class="main-about__subtitle max-w-[160px] xl:max-w-[180px]">
                        Считаем, что отзывы говорят за нас
                    </div>
                    <div class="text-[10px] md:text-[18px]">
                        <a v-scroll-to="{ target: '#app-reviews' }" href="#" class="uppercase decor-link">
                            <span class="bracket-text">Смотреть отзывы</span>
                        </a>
                    </div>
                    <div class="main-about__slide-buttons custom-scrollbar">
                        <a href="#" class="button button--md button--outlined">ИСУ</a>
                        <a href="#" class="button button--md button--outlined">Мельница</a>
                        <a href="#" class="button button--md button--outlined">Санаторий</a>
                        <a href="#" class="button button--md button--outlined">LI Market</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { mainAboutValues } from '@/mocks';
</script>
