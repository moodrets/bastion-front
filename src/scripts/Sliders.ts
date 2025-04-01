import Swiper from 'swiper';
import { Autoplay, EffectFade, Thumbs } from 'swiper/modules';

function initCasesSlider(): Swiper {
    const swiper = new Swiper('.js-cases-slider', {
        slidesPerView: 'auto',
        spaceBetween: 8,
    });

    return swiper;
}

function initMainLinksSlider(): Swiper {
    const swiper = new Swiper('.js-main-links-slider', {
        modules: [Autoplay],
        autoplay: {
            delay: 0,
            pauseOnMouseEnter: true,
        },
        loop: true,
        speed: 4000,
        spaceBetween: 8,
        slidesPerView: 'auto',
        allowTouchMove: false,
    });

    return swiper;
}

function initMainProjectsSlider(): Swiper[] {
    const thumbsSwiper = new Swiper('.js-main-projects-slider-thumbs', {
        slidesPerView: 'auto',
        speed: 400,
        spaceBetween: 8,
    });

    const swiper = new Swiper('.js-main-projects-slider', {
        modules: [Thumbs, EffectFade],
        effect: 'fade',
        fadeEffect: {
            crossFade: true,
        },
        speed: 1200,
        spaceBetween: 0,
        slidesPerView: 1,
        thumbs: {
            swiper: thumbsSwiper,
        },
    });

    return [swiper, thumbsSwiper];
}

export { initCasesSlider, initMainLinksSlider, initMainProjectsSlider };
