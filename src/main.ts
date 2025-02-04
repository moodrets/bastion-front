// styles
import '@/styles/base/fonts.css';
import '@/styles/main.css';

// scripts
// import { initCasesSlider } from '@/scripts/Sliders';
// import { initScrollToOnLoad } from '@/scripts/ScrollTo';

// vue imports
import { createApp } from 'vue';
import { router } from '@/router';

// vue directives
import AngleBox from '@/directives/AngleBox';

// vue components
import App from '@/App.vue';

function vueBootstrap() {
    createApp(App).use(router).directive('angle-box', AngleBox).mount('#app');
}

vueBootstrap();

document.addEventListener('DOMContentLoaded', () => {
    // initCasesSlider();
    // initScrollToOnLoad();
});

document.fonts.ready.then(() => {
    document.querySelector('.app-wrapper')?.classList.add('is-fonts-loaded');
});
