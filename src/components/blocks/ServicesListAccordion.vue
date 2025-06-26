<template>
    <section class="services-list-accordion">
        <div class="centered">
            <div class="block-label pb-3 mb-3 border-b-[3px] border-white/20 xl:flex xl:items-center xl:gap-5">
                <h2 class="mb-0 bracket-text xl:flex-1">список услуг</h2>
                <div class="xl:flex-1">
                    <a href="#" class="hidden decor-link mb-0 uppercase xl:inline-flex">
                        <span class="bracket-text">подробности</span>
                    </a>
                </div>
            </div>
            <accordion
                v-for="(item, itemIndex) in servicesAccordionList"
                :key="itemIndex"
                :open="itemIndex === 0 ? true : false"
            >
                <template #title="{ toggle }">
                    <div class="select-none block-title pb-2 border-b-[3px] border-white/20">
                        <span class="decor-link cursor-pointer" @click.prevent="toggle">{{ item.title }}</span>
                    </div>
                </template>
                <template #body>
                    <div class="bg-ash-900 mb-8 p-5 xl:flex xl:items-center xl:gap-5">
                        <div class="mb-7 xl:min-w-0 xl:flex-1 xl:mb-0">
                            <img
                                class="block mx-auto xl:max-w-[270px] xl:m-0"
                                :src="`${BASE_PATH}files/case-card-pic-3.png`"
                                alt=""
                            />
                        </div>
                        <div class="xl:min-w-0 xl:flex-1">
                            <div class="block-subtitle">Дизайн экспертиза</div>
                            <div class="md:grid md:grid-cols-2 md:gap-x-4">
                                <div
                                    class="text-[12px] py-2 border-b-[3px] border-white/20 md:text-[18px]"
                                    v-for="(item, itemIndex) in servicesAccordionList2"
                                    :key="itemIndex"
                                >
                                    {{ item.title }}
                                </div>
                            </div>
                        </div>
                    </div>
                </template>
            </accordion>
            <div class="p-4 overflow-hidden">
                <a href="#" class="w-full button button--responsive">
                    <span class="bracket-text">Смотреть все кейсы</span>
                </a>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { BASE_PATH } from '@/router/basePath';

const servicesAccordionList = [
    { title: 'Дизайн' },
    { title: 'Сервисы' },
    { title: 'Разработка' },
    { title: 'Приложения' },
    { title: 'Брендинг' },
    { title: 'Поддержка' },
];

const servicesAccordionList2 = [
    { title: 'Дизайн' },
    { title: 'Сервисы' },
    { title: 'Разработка' },
    { title: 'Приложения' },
    { title: 'Брендинг' },
    { title: 'Поддержка' },
    { title: 'Дизайн' },
    { title: 'Сервисы' },
    { title: 'Разработка' },
    { title: 'Приложения' },
    { title: 'Поддержка' },
];
</script>
