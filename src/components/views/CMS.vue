<template>
    <CMSPresent></CMSPresent>
    <CMSAdvantages></CMSAdvantages>
    <section class="py-10 xl:py-20">
        <div class="centered">
            <div class="p-3" v-angle-box>
                <div class="block-label text-center mb-10 xl:mb-20"><div class="bracket-text">визуал</div></div>
                <div class="flex flex-col items-center gap-4 md:block columns-2" data-gallery>
                    <a
                        class="cursor-[zoom-in] group overflow-hidden md:mb-4 md:inline-block"
                        v-for="(item, itemIndex) in cmsVisualImagesList"
                        :href="item.image"
                        :key="itemIndex"
                    >
                        <img
                            class="transitilation-all duration-300 group-hover:scale-[1.1]"
                            :src="item.image"
                            alt="item.image"
                        />
                    </a>
                </div>
            </div>
        </div>
    </section>
    <CMSValuesBlock></CMSValuesBlock>
    <Reviews></Reviews>
    <section class="py-10 xl:py-20">
        <div class="centered">
            <h2>
                <div class="block-title">Проекты,</div>
                <div class="block-title">реализованные</div>
                <div class="block-title text-right md:text-center mb-10">с Bastion.CMS</div>
            </h2>
            <CaseCards viewType="list" :items="mainCasesCardsList" :columns="2" />
        </div>
    </section>
    <BarcodeBlock></BarcodeBlock>
    <Footer></Footer>
</template>

<script setup lang="ts">
import CMSPresent from '@/components/blocks/cms/CMSPresent.vue';
import CMSAdvantages from '@/components/blocks/cms/CMSAdvantages.vue';
import BarcodeBlock from '@/components/blocks/BarcodeBlock.vue';
import CMSValuesBlock from '@/components/blocks/cms/CMSValuesBlock.vue';
import CaseCards from '@/components/blocks/CaseCards.vue';
import Reviews from '@/components/blocks/Reviews.vue';
import Footer from '@/components/blocks/Footer.vue';
import { cmsVisualImagesList, mainCasesCardsList } from '@/mocks';
</script>
