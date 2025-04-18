<template>
    <MainPresent></MainPresent>
    <MainAbout></MainAbout>
    <MainProjects></MainProjects>
    <section class="py-10">
        <div class="centered">
            <CaseCards viewType="list" :items="mainCasesCardsList" :columns="2" />
        </div>
    </section>
    <section class="py-10">
        <div class="centered">
            <CaseCards theme="lattice" viewType="thumbs" :items="mainCasesThumbs" :columns="1" />
        </div>
    </section>
    <section class="py-16">
        <div class="centered">
            <CaseCards viewType="list" :columns="1" :centered="true" :items="mainCasesCardsList2" />
        </div>
    </section>
    <AllCases :items="allCasesList"></AllCases>
    <MainServices></MainServices>
    <MainCMSBlock></MainCMSBlock>
    <BarcodeBlock></BarcodeBlock>
    <CasesSlider></CasesSlider>
    <Footer></Footer>
</template>

<script setup lang="ts">
import MainPresent from '@/components/blocks/MainPresent.vue';
import MainAbout from '@/components/blocks/MainAbout.vue';
import BarcodeBlock from '@/components/blocks/BarcodeBlock.vue';
import MainProjects from '@/components/blocks/MainProjects.vue';
import CaseCards from '@/components/blocks/CaseCards.vue';
import MainCMSBlock from '@/components/blocks/MainCMSBlock.vue';
import AllCases from '@/components/blocks/AllCases.vue';
import MainServices from '@/components/blocks/MainServices.vue';
import CasesSlider from '@/components/blocks/CasesSlider.vue';
import Footer from '@/components/blocks/Footer.vue';
import { allCasesList, mainCasesCardsList, mainCasesCardsList2, mainCasesThumbs } from '@/mocks';
</script>
