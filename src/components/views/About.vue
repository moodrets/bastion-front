<template>
    <AboutPresent></AboutPresent>
    <SmartPhonesParallax></SmartPhonesParallax>
    <ResultsBlock></ResultsBlock>
    <ValuesBlock></ValuesBlock>
    <section class="py-10">
        <div class="centered">
            <CaseCards
                theme="lattice"
                viewType="thumbs"
                :items="mainCasesThumbs.map((item) => item).reverse()"
                :columns="1"
                :hideCardBottomDesc="true"
            />
        </div>
    </section>
    <section class="py-10">
        <div class="centered">
            <CaseCards
                theme="lattice"
                viewType="thumbs"
                :items="mainCasesThumbs"
                :columns="1"
                :hideCardBottomDesc="true"
            />
        </div>
    </section>
    <section class="py-10">
        <div class="centered">
            <CaseCards
                theme="lattice"
                viewType="thumbs"
                :items="mainCasesThumbs.map((item) => item).reverse()"
                :columns="1"
                :hideCardBottomDesc="true"
            />
        </div>
    </section>
    <AboutPrinciples></AboutPrinciples>
    <DescImageBlock></DescImageBlock>
    <Footer></Footer>
</template>

<script setup lang="ts">
import AboutPresent from '@/components/blocks/AboutPresent.vue';
import SmartPhonesParallax from '@/components/blocks/SmartPhonesParallax.vue';
import DescImageBlock from '@/components/blocks/DescImageBlock.vue';
import CaseCards from '@/components/blocks/CaseCards.vue';
import AboutPrinciples from '@/components/blocks/AboutPrinciples.vue';
import ResultsBlock from '@/components/blocks/ResultsBlock.vue';
import ValuesBlock from '@/components/blocks/ValuesBlock.vue';
import Footer from '@/components/blocks/Footer.vue';
import { mainCasesThumbs } from '@/mocks';
</script>
