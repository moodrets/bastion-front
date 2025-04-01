// styles
// @ts-ignore
import '@/styles/base/fonts.scss';
import '@/styles/main.scss';

// scripts
// import { initCasesSlider, initMainLinksSlider, initMainProjectsSlider } from '@/scripts/Sliders';
// import { initScrollToOnLoad } from '@/scripts/ScrollTo';

// vue imports
import { createApp } from 'vue';
import { router } from '@/router';

// vue directives
import AngleBox from '@/directives/AngleBox';
import ScrollTo from '@/directives/ScrollTo';

// vue components
import App from '@/App.vue';

function vueBootstrap() {
    createApp(App).use(router).directive('angle-box', AngleBox).directive('scroll-to', ScrollTo).mount('#app');
}

vueBootstrap();

document.addEventListener('DOMContentLoaded', () => {
    // initCasesSlider();
    // initMainLinksSlider();
    // initMainProjectsSlider();
    // initScrollToOnLoad();
});

document.fonts.ready.then(() => {
    document.querySelector('.app-wrapper')?.classList.add('is-fonts-loaded');
});
