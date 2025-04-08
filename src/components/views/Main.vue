<template>
    <MainBlock />
    <MainAbout />
    <MainProjects />
    <section class="py-8">
        <div class="centered">
            <Cards :items="mainCasesCardsList" :columns="2"></Cards>
        </div>
    </section>
    <section class="py-8">
        <div class="centered">
            <CasesThumbs theme="lattice" :items="mainCasesThumbs"></CasesThumbs>
        </div>
    </section>
    <section class="py-16">
        <div class="centered">
            <Cards :items="mainCasesCardsList2" :columns="1" :centered="true"></Cards>
        </div>
    </section>
    <MainCMSBlock />
    <BarcodeBlock />
    <Footer />
</template>

<script setup lang="ts">
import MainBlock from '@/components/blocks/MainBlock.vue';
import MainAbout from '@/components/blocks/MainAbout.vue';
import BarcodeBlock from '@/components/blocks/BarcodeBlock.vue';
import MainProjects from '@/components/blocks/MainProjects.vue';
import Cards from '@/components/blocks/Cards.vue';
import CasesThumbs from '@/components/blocks/CasesThumbs.vue';
import MainCMSBlock from '@/components/blocks/MainCMSBlock.vue';
import Footer from '@/components/blocks/Footer.vue';
import { mainCasesCardsList, mainCasesCardsList2, mainCasesThumbs } from '@/mocks';
</script>
