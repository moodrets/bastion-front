<template>
    <section class="smartphones-parallax bg-ash-800">
        <div class="centered">
            <div class="flex gap-5 justify-center md:justify-between">
                <div class="smartphones-parallax__item">
                    <video :poster="`${BASE_PATH}files/case-card-pic-1.png`" autoplay loop muted>
                        <source :src="`${BASE_PATH}files/card-video-1.mp4`" type="video/mp4" />
                    </video>
                </div>
                <div class="smartphones-parallax__item">
                    <video :poster="`${BASE_PATH}files/case-card-pic-2.png`" autoplay loop muted>
                        <source :src="`${BASE_PATH}files/card-video-2.mp4`" type="video/mp4" />
                    </video>
                </div>
                <div class="smartphones-parallax__item hidden md:block">
                    <video :poster="`${BASE_PATH}files/case-card-pic-3.png`" autoplay loop muted>
                        <source :src="`${BASE_PATH}files/card-video-3.mp4`" type="video/mp4" />
                    </video>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
import { BASE_PATH } from '@/router/basePath';
</script>
