<template>
    <section class="cms-advantages relative pb-3">
        <div class="centered">
            <div class="p-3 pt-0">
                <div class="bg-ash-900/50 p-3">
                    <div class="p-3 text-center" v-angle-box>
                        <h2 class="block-subtitle my-[100px] max-w-[75%] mx-auto">
                            Информация о CMS: преимущества, статистика, отзывы клиентов и тд - все, что поможет раскрыть
                            продукт с лучших сторон и прогреть потенциальных пользователей
                        </h2>
                        <div class="block-label">{ преимущества CMS }</div>
                        <div class="p-3 text-left block-note grid grid-cols-1 gap-5 md:grid-cols-2 xl:w-1/2 xl:ml-auto">
                            <p>
                                Текст-описание. Мы стараемся подходить к тренировкам по боксу комплексно. Занятие
                                включает разминку, технику бокса «школа»; более опытные участники отрабатывают движения
                            </p>
                            <p>
                                Новички оттачивают технику постановки ног и механику удара. Также формат мини-группы
                                предусматривает работу на мешках и заминку в конце тренировки.
                            </p>
                        </div>
                    </div>
                    <div class="py-8 flex flex-col gap-5 leading-[1.0] text-[40px] md:text-[52px] xl:text-[110px]">
                        <div class="flex items-end gap-5 justify-between border-b-[3px] border-white/20 pb-2">
                            <a href="#" class="decor-link text-left decor-link--hover-x lg:!text-[110px]"
                                >Уникальность</a
                            >
                            <a href="#" class="decor-link text-left text-[18px] uppercase hidden md:inline-flex"
                                ><span class="bracket-text">подробнее</span></a
                            >
                        </div>
                        <div class="flex items-end gap-5 justify-between border-b-[3px] border-white/20 pb-2">
                            <a href="#" class="decor-link text-left decor-link--hover-x lg:!text-[110px]">Удобство</a>
                            <a href="#" class="decor-link text-left text-[18px] uppercase hidden md:inline-flex"
                                ><span class="bracket-text">подробнее</span></a
                            >
                        </div>
                        <div class="flex items-end gap-5 justify-between border-b-[3px] border-white/20 pb-2">
                            <a href="#" class="decor-link text-left decor-link--hover-x lg:!text-[110px]">Простота</a>
                            <a href="#" class="decor-link text-left text-[18px] uppercase hidden md:inline-flex"
                                ><span class="bracket-text">подробнее</span></a
                            >
                        </div>
                    </div>
                    <div class="barcode-block__middle">
                        <Barcode></Barcode>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import Barcode from '@/components/common/Barcode.vue';
</script>
