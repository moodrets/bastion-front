// styles
import '@/styles/base/fonts.scss';
import '@/styles/main.scss';

// scripts
// import { initCasesSlider, initMainLinksSlider } from '@/scripts/Sliders';
// import { initScrollToOnLoad } from '@/scripts/ScrollTo';

// vue imports
import { createApp } from 'vue';
import { router } from '@/router';

// vue directives
import AngleBox from '@/directives/AngleBox';
import ScrollTo from '@/directives/ScrollTo';
import ImageCursorFollower from '@/directives/ImageCursorFollower';

// vue components
import Clock from '@/components/common/Clock.vue';
import Accordion from '@/components/common/Accordion.vue';
import App from '@/App.vue';

function vueBootstrap() {
    createApp(App)
        .use(router)
        .directive('angle-box', AngleBox)
        .directive('image-cursor-follower', ImageCursorFollower)
        .directive('scroll-to', ScrollTo)
        .component('clock', Clock)
        .component('accordion', Accordion)
        .mount('#app');
}

vueBootstrap();

document.addEventListener('DOMContentLoaded', () => {
    // initCasesSlider();
    // initMainLinksSlider();
    // initScrollToOnLoad();
});

document.fonts.ready.then(() => {
    document.querySelector('.app-wrapper')?.classList.add('is-fonts-loaded');
});
