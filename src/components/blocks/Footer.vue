<template>
    <footer class="app-footer" id="app-footer">
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
            <div class="p-3 pb-0.5" v-angle-box>
                <div class="app-footer__middle">
                    <div class="flex flex-col items-center text-center">
                        <img :src="`${BASE_PATH}img/footer-pic.png`" alt="" />
                        <a href="#" class="mt-4 decor-link"><span class="bracket-text">связаться</span></a>
                    </div>
                </div>
                <div class="app-footer__bottom">
                    <div class="app-footer__number">20</div>
                    <div class="hidden md:block">
                        <nav class="app-footer__nav">
                            <ul>
                                <li v-for="(navItem, navItemIndex) in navigation" :key="navItemIndex">
                                    <router-link class="decor-link" :to="{ name: navItem.name }">
                                        {{ navItem.title }}
                                    </router-link>
                                </li>
                            </ul>
                        </nav>
                        <div class="app-footer__add-links">
                            <a href="#" class="decor-link">защита персональных данных</a>
                            <a href="#" class="decor-link">политика конфиденциальности</a>
                            <span class="lg:mt-4">Bastion Copyright © 2024</span>
                        </div>
                    </div>
                    <div class="app-footer__number">24</div>
                </div>
            </div>
            <div class="app-footer__add-links md:hidden">
                <a href="#" class="decor-link">защита персональных данных</a>
                <a href="#" class="decor-link">политика конфиденциальности</a>
                <span>Bastion Copyright © 2024</span>
            </div>
        </div>
    </footer>
</template>

<script lang="ts" setup>
import { BASE_PATH } from '@/router/basePath';
import { navigation } from '@/mocks';
</script>
