<template>
    <section class="contact-form">
        <div class="centered">
            <div class="contact-form__header">
                <div>контактная информация</div>
                <div>форма связи</div>
            </div>
            <div class="p-4" v-angle-box>
                <div class="contact-form__container">
                    <div class="contact-form__pic">
                        <img :src="`${BASE_PATH}img/footer-pic.png`" alt="" />
                    </div>
                    <div>
                        <div class="contact-form__title">Заполните форму и мы свяжемся с вами в ближайшее время</div>
                    </div>
                </div>
                <ContactCallbackForm placement="block" />
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { BASE_PATH } from '@/router/basePath';
import ContactCallbackForm from '@/components/forms/ContactCallbackForm.vue';
</script>
