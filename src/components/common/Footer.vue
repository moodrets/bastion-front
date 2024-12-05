<template>
    <footer class="app-footer">
        <div class="centered">
            <div class="p-3 mb-2 select-none" v-angle-box>
                <router-link :to="{ name: 'main' }">
                    <img :src="`${BASE_PATH}img/logo.svg`" alt="" />
                </router-link>
                <div class="app-footer__info-links">
                    <a class="decor-link uppercase" href="#"><span class="bracket-text">+7 800 757 56 65</span></a>
                    <a class="decor-link uppercase" href="#"><span class="bracket-text">telegram</span></a>
                    <a class="decor-link uppercase" href="#"><span class="bracket-text">e-mail</span></a>
                    <a class="decor-link uppercase" href="#"><span class="bracket-text">whatsapp</span></a>
                </div>
            </div>
            <div class="p-3" v-angle-box>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam blanditiis magnam atque officia
                    repellat doloremque quos quia quaerat reprehenderit ratione perferendis non repudiandae, totam eius
                    quam deserunt ducimus nisi quae?
                </p>
            </div>
        </div>
    </footer>
</template>

<script lang="ts" setup>
import { BASE_PATH } from '@/router';
</script>
