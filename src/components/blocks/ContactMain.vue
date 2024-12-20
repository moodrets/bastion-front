<template>
    <section class="contact-main">
        <div class="centered">
            <div class="contact-main__header">
                <h1 class="contact-main__title">Свяжитесь с нами</h1>
                <div class="contact-main__subtitle">Bastion © 24</div>
            </div>
            <div class="p-3" v-angle-box>
                <ContactsCallbackForm></ContactsCallbackForm>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import ContactsCallbackForm from '@/components/forms/ContactsCallbackForm.vue';
</script>
