// styles
import '@/styles/main.scss';
import 'swiper/css';

// vue imports
import { createApp } from 'vue';
import { router } from '@/router';

// vue directives
import AngleBox from '@/directives/AngleBox';

// vue components
import App from '@/App.vue';

function bootstrap() {
    createApp(App).use(router).directive('angle-box', AngleBox).mount('#app');
}

bootstrap();

document.addEventListener('DOMContentLoaded', () => {});

document.fonts.ready.then(() => {
    document.querySelector('.app-wrapper')?.classList.add('is-fonts-loaded');
});
