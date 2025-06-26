<template>
    <section class="results-block py-6">
        <div class="centered">
            <div class="p-3 mb-3 pb-[200px]" v-angle-box>
                <div class="block-label bracket-text text-center mb-[140px] xl:mb-[220px]">результаты</div>
                <div class="block-subtitle text-center mb-2.5 md:max-w-[83%] md:mx-auto md:mb-5 xl:max-w-[70%]">
                    «Отвечаем за качество своих проектов. Обеспечиваем техническую и аналитическую поддержку. Гордимся
                    каждым кейсом.»
                </div>
                <div
                    class="block-note text-balance w-1/2 ml-auto sm:pr-[20%] xl:text-center xl:pr-0 xl:mx-auto xl:w-[200px]"
                >
                    Алексей, — основатель агентства Bustion
                </div>
            </div>
            <div class="reviews-list reviews-list--masonry">
                <div v-for="r in 4" :key="r" class="reviews-list__item">
                    <div class="reviews-list__item-logo"></div>
                    <div class="reviews-list__item-title">Bustion</div>
                    <div class="reviews-list__item-text">
                        Текст-отзыва. Мы стараемся подходить к тренировкам по боксу комплексно. Занятие включает
                        разминку, технику бокса «школа»; более опытные участники в парах ...
                    </div>
                    <div class="reviews-list__item-link">
                        <a href="#" class="decor-link uppercase">
                            <span class="bracket-text">смотреть весь</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
