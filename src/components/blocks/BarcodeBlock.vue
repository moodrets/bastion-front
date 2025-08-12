<template>
    <section class="barcode-block">
        <div class="centered">
            <div v-angle-box class="p-3">
                <div class="barcode-block__inner">
                    <div class="barcode-block__header">
                        <h2 class="barcode-block__text barcode-block__header-first">Запустим классный проект</h2>
                        <div class="barcode-block__text barcode-block__header-second">вместе?</div>
                    </div>
                    <div class="barcode-block__middle">
                        <Barcode></Barcode>
                    </div>
                    <div class="barcode-block__bottom">
                        <div class="barcode-block__text">Ждем вас!</div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import Barcode from '@/components/common/Barcode.vue';
</script>
