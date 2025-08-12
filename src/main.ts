// styles
import 'baguettebox.js/dist/baguetteBox.min.css';
import 'animate.css';
import '@/styles/base/fonts.scss';
import '@/styles/main.scss';

// scripts
// import { initCasesSlider, initMainLinksSlider, initReviewsSlider } from '@/scripts/Sliders';
// import { initScrollToOnLoad } from '@/scripts/ScrollTo';
// import { initGallery } from '@/scripts/Gallery';

// vue imports
import { createApp, defineComponent, h } from 'vue';
import { router } from '@/router';

// vue directives
import AngleBox from '@/directives/AngleBox';
import ScrollTo from '@/directives/ScrollTo';
import ImageCursorFollower from '@/directives/ImageCursorFollower';

// vue global components
import Clock from '@/components/common/Clock.vue';
import Accordion from '@/components/common/Accordion.vue';
import App from '@/App.vue';

function vueBootstrap() {
    const root = defineComponent({
        setup() {
            return () => h(App);
        },
    });

    createApp(root)
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
    // initReviewsSlider();
    // initMainLinksSlider();
    // initScrollToOnLoad();
    // initGallery();
});

document.fonts.ready.then(() => {
    document.querySelector('.app-wrapper')?.classList.add('is-fonts-loaded');
});
