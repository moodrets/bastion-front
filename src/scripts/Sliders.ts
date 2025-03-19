import Swiper from 'swiper';
import { Autoplay } from 'swiper/modules';

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

export { initCasesSlider, initMainLinksSlider };
