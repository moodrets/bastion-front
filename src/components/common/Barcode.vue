<template>
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
</template>

<script setup lang="ts">
import { BASE_PATH } from '@/router/basePath';
</script>
