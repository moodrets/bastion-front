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
                <!-- TODO: particles animation and THEE JS model -->
                <CasesThumbs :items="mainCasesThumbs"></CasesThumbs>
            </div>
            <div class="desc-block__bottom">
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
import CasesThumbs from '@/components/blocks/CasesThumbs.vue';
import { mainCasesThumbs } from '@/mocks';
</script>
