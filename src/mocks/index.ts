const BASE_PATH = import.meta.env.MODE === 'development' ? '/' : '/bastion-front/';

const casesSliderList: { img: string; title: string }[] = [
    {
        img: `${BASE_PATH}img/cases-slider-pic-1.png`,
        title: 'retouch',
    },
    {
        img: `${BASE_PATH}img/cases-slider-pic-2.png`,
        title: 'OSVETIM',
    },
    {
        img: `${BASE_PATH}img/cases-slider-pic-3.png`,
        title: 'BRILLIANT',
    },
    {
        img: `${BASE_PATH}img/cases-slider-pic-4.png`,
        title: 'bastion',
    },
    {
        img: `${BASE_PATH}img/cases-slider-pic-5.png`,
        title: 'nevskiy-mill',
    },
    {
        img: `${BASE_PATH}img/cases-slider-pic-1.png`,
        title: 'retouch',
    },
    {
        img: `${BASE_PATH}img/cases-slider-pic-2.png`,
        title: 'OSVETIM',
    },
    {
        img: `${BASE_PATH}img/cases-slider-pic-3.png`,
        title: 'BRILLIANT',
    },
    {
        img: `${BASE_PATH}img/cases-slider-pic-4.png`,
        title: 'bastion',
    },
    {
        img: `${BASE_PATH}img/cases-slider-pic-5.png`,
        title: 'nevskiy-mill',
    },
];

export { BASE_PATH, casesSliderList };
