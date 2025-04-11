<template>
    <section class="main-services">
        <div class="centered">
            <h2 class="block-label bracket-text">Услуги</h2>
            <div class="main-services__desc">
                Дизайн и технологии — лишь инструменты для решения бизнес-задач. Результат нашей работы — это продукт,
                сделанный вовремя и в рамках ожиданий заказчика.
            </div>
            <div class="main-services__links">
                <div
                    v-for="(link, linkIndex) in mainServicesList"
                    :key="linkIndex"
                    v-image-cursor-follower="{ image: link.image, followerClass: 'main-services__cursor-follower' }"
                    class="main-services__link"
                >
                    <a class="decor-link" :href="link.link">
                        <span>{{ link.title }}</span>
                    </a>
                </div>
            </div>
            <div class="main-services__button px-4 py-3 overflow-hidden">
                <a href="#" class="w-full button button--responsive">
                    <span class="bracket-text">Подробнее</span>
                </a>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { mainServicesList } from '@/mocks';
</script>
