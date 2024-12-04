import '@/styles/main.scss';

import { createApp } from 'vue';
import { router } from '@/router';

// components
import App from '@/App.vue';

const app = createApp(App);

app.use(router).mount('#app');

document.addEventListener('DOMContentLoaded', () => {});

window.onload = () => {};
