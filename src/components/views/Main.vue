<template>
    <MainPresent />
    <MainAbout />
    <MainProjects />
    <section class="py-10">
        <div class="centered">
            <Cards :items="mainCasesCardsList" :columns="2" />
        </div>
    </section>
    <section class="py-10">
        <div class="centered">
            <CasesThumbs theme="lattice" :items="mainCasesThumbs" />
        </div>
    </section>
    <section class="py-16">
        <div class="centered">
            <Cards :items="mainCasesCardsList2" :columns="1" :centered="true" />
        </div>
    </section>
    <AllCases :items="allCasesList" />
    <MainServices />
    <MainCMSBlock />
    <BarcodeBlock />
    <CasesSlider />
    <Footer />
</template>

<script setup lang="ts">
import MainPresent from '@/components/blocks/MainPresent.vue';
import MainAbout from '@/components/blocks/MainAbout.vue';
import BarcodeBlock from '@/components/blocks/BarcodeBlock.vue';
import MainProjects from '@/components/blocks/MainProjects.vue';
import Cards from '@/components/blocks/Cards.vue';
import CasesThumbs from '@/components/blocks/CasesThumbs.vue';
import MainCMSBlock from '@/components/blocks/MainCMSBlock.vue';
import AllCases from '@/components/blocks/AllCases.vue';
import MainServices from '@/components/blocks/MainServices.vue';
import CasesSlider from '@/components/blocks/CasesSlider.vue';
import Footer from '@/components/blocks/Footer.vue';
import { allCasesList, mainCasesCardsList, mainCasesCardsList2, mainCasesThumbs } from '@/mocks';
</script>
