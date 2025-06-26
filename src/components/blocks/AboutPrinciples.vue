<template>
    <section class="about-principles py-10 md:py-[180px]">
        <div class="centered">
            <div class="block-label bracket-text text-center">наши принципы</div>
            <h2
                class="block-subtitle mb-14 md:text-[50px] md:max-w-[90%] xl:max-w-[50%] xl:ml-auto xl:pr-[200px] xl:pl-6"
            >
                Создаем индивидуальные решения для каждого клиента
            </h2>
            <div class="flex flex-col gap-6 xl:flex-row">
                <div class="xl:w-1/2 xl:flex-none mb-6 xl:mb-0">
                    <img class="w-full" :src="`${BASE_PATH}files/case-card-pic-5.png`" alt="" />
                </div>
                <div class="flex flex-col gap-6 md:flex-row">
                    <div class="md:flex-1">
                        <div class="text-[18px] leading-[1.0] mb-6 xl:text-[32px] xl:pr-24">Преимущество номер два</div>
                        <div class="block-note">
                            Текст-описание. Мы стараемся подходить к тренировкам по боксу комплексно. Занятие включает
                            разминку, технику бокса «школа»; более опытные участники отрабатывают движения и удары в
                            парах по заданию либо участвуют в вольном бое. Новички оттачивают технику постановки ног и
                            механику удара. Также формат мини-группы предусматривает работу на мешках и заминку в конце
                            тренировки.
                        </div>
                        <img class="hidden mt-10 md:block" :src="`${BASE_PATH}files/case-card-pic-2.png`" alt="" />
                    </div>
                    <div class="md:flex-1">
                        <div class="text-[18px] leading-[1.0] mb-6 xl:text-[32px] xl:pr-24">Преимущество номер три</div>
                        <div class="block-note">
                            Текст-описание. Мы стараемся подходить к тренировкам по боксу комплексно. Занятие включает
                            разминку, технику бокса «школа»; более опытные участники отрабатывают движения и удары в
                            парах по заданию либо участвуют в вольном бое. Новички оттачивают технику постановки ног и
                            механику удара. Также формат мини-группы предусматривает работу на мешках и заминку в конце
                            тренировки.
                        </div>
                        <img class="hidden mt-10 md:block" :src="`${BASE_PATH}files/case-card-pic-3.png`" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { BASE_PATH } from '@/router/basePath';
</script>
