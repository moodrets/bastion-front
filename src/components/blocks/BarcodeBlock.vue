<template>
    <section class="barcode-block">
        <div class="centered">
            <div v-angle-box class="p-3">
                <div class="barcode-block__inner">
                    <div class="barcode-block__header">
                        <h2 class="barcode-block__text barcode-block__header-first">Запустим классный проект</h2>
                        <div class="barcode-block__text barcode-block__header-second">вместе?</div>
                    </div>
                    <div class="barcode-block__middle">
                        <div class="barcode-block__item" v-angle-box>
                            <img :src="`${BASE_PATH}img/barcode.svg`" alt="" />
                            <a href="#" class="decor-link">
                                <div class="bracket-text flex items-center">
                                    <span>обсудить</span>
                                    <div class="progress-loader mx-3">
                                        <div class="progress-loader__item"></div>
                                        <div class="progress-loader__item"></div>
                                        <div class="progress-loader__item"></div>
                                        <div class="progress-loader__item"></div>
                                        <div class="progress-loader__item"></div>
                                        <div class="progress-loader__item"></div>
                                    </div>
                                    <span>проект</span>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="barcode-block__bottom">
                        <div class="barcode-block__text">Ждем вас!</div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { BASE_PATH } from '@/router/basePath';
</script>
