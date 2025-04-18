<template>
    <Header></Header>
    <CasesHeaderBlock></CasesHeaderBlock>
    <section class="pb-10">
        <div class="centered">
            <CaseCards :columns="2" :items="casesPageCards2"></CaseCards>
        </div>
    </section>
    <section class="py-10">
        <div class="centered">
            <CaseCards :items="casesPageCards3"></CaseCards>
        </div>
    </section>
    <section class="py-10">
        <div class="centered">
            <CaseCards :columns="1" :centered="true" :items="casesPageCards4"></CaseCards>
        </div>
    </section>
    <section class="py-10">
        <div class="centered">
            <CaseCards :items="casesPageCards5"></CaseCards>
        </div>
    </section>
    <section class="pb-10">
        <div class="centered">
            <CaseCards :columns="2" :items="casesPageCards6"></CaseCards>
        </div>
    </section>
    <section class="py-10">
        <div class="centered">
            <CaseCards :items="casesPageCards7"></CaseCards>
        </div>
    </section>
    <section class="py-10">
        <div class="centered">
            <CaseCards :columns="1" :centered="true" :items="casesPageCards8"></CaseCards>
        </div>
    </section>
    <section class="pb-10">
        <div class="centered">
            <CaseCards :columns="2" :items="casesPageCards9"></CaseCards>
        </div>
    </section>
    <BarcodeBlock></BarcodeBlock>
    <Footer></Footer>
</template>

<script setup lang="ts">
import Header from '@/components/blocks/Header.vue';
import Footer from '@/components/blocks/Footer.vue';
import CasesHeaderBlock from '@/components/blocks/CasesHeaderBlock.vue';
import CaseCards from '@/components/blocks/CaseCards.vue';
import BarcodeBlock from '@/components/blocks/BarcodeBlock.vue';

import {
    casesPageCards2,
    casesPageCards3,
    casesPageCards4,
    casesPageCards5,
    casesPageCards6,
    casesPageCards7,
    casesPageCards8,
    casesPageCards9,
} from '@/mocks';
</script>
