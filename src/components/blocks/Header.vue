<template>
    <header class="app-header" id="app-header">
        <div class="centered app-header__inner">
            <div class="app-header__logo">
                <router-link :to="{ name: 'main' }">
                    <img :src="`${BASE_PATH}img/logo-icon.svg`" alt="" />
                    <div class="app-header__logo-text">Bastion</div>
                </router-link>
            </div>
            <nav class="app-header__nav hidden xl:block">
                <ul>
                    <li v-for="(navItem, navItemIndex) in navigation" :key="navItemIndex">
                        <router-link class="decor-link" :to="{ name: navItem.name }">
                            {{ navItem.title }}
                        </router-link>
                    </li>
                </ul>
            </nav>
            <div class="app-header__right">
                <app-clock class="mr-10 hidden 2xl:flex"></app-clock>
                <div class="app-header__buttons">
                    <button type="button" class="button--plus button button--sm button--rounded button--secondary">
                        +
                    </button>
                    <button type="button" class="button--callback button button--sm button--rounded button--secondary">
                        связаться
                    </button>
                    <button
                        type="button"
                        class="button button--mobile-menu button--sm button--rounded button--secondary"
                    >
                        <img :src="`${BASE_PATH}img/menu.svg`" alt="" />
                    </button>
                </div>
            </div>
        </div>
    </header>
</template>

<script setup lang="ts">
import { BASE_PATH } from '@/router/basePath';
import { navigation } from '@/mocks';
</script>
