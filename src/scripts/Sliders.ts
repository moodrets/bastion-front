import Swiper from 'swiper';

function initCasesSlider(): Swiper {
    const swiper = new Swiper('.js-cases-slider', {
        slidesPerView: 'auto',
        spaceBetween: 8,
    });

    return swiper;
}

export { initCasesSlider };
