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

function initReviewsSlider(): Swiper[] {
    const titlesSwiper = new Swiper('.js-reviews-slider-titles', {
        allowTouchMove: false,
        speed: 900,
    });

    const descSwiper = new Swiper('.js-reviews-slider-desc', {
        allowTouchMove: false,
        speed: 1200,
    });

    const imageSwiper = new Swiper('.js-reviews-slider-images', {
        slidesPerView: 'auto',
        centeredSlides: true,
        slideToClickedSlide: true,
        speed: 500,
        spaceBetween: 40,
        breakpoints: {
            768: {
                spaceBetween: 60,
            },
        },
        on: {
            slideChange(swiper) {
                titlesSwiper.slideTo(swiper.activeIndex);
                descSwiper.slideTo(swiper.activeIndex);
            },
        },
    });

    return [titlesSwiper, imageSwiper, descSwiper];
}

export { initCasesSlider, initMainLinksSlider, initReviewsSlider };
