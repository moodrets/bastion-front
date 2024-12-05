// styles
import '@/styles/main.scss';

import { createApp } from 'vue';
import { router } from '@/router';

// directives
import AngleBox from '@/directives/AngleBox';

// components
import App from '@/App.vue';

createApp(App).directive('angle-box', AngleBox).use(router).mount('#app');

document.addEventListener('DOMContentLoaded', () => {});

window.onload = () => {};
