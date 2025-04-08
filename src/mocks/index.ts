import { BASE_PATH } from '@/router/basePath';

export type MockCaseCardType = {
    image: string;
    title: string;
    number: string;
    link?: string;
    desc?: string;
    video?: string;
    year?: string;
};

const casesSliderList: { img: string; title: string }[] = [
    {
        img: `${BASE_PATH}files/cases-slider-pic-1.png`,
        title: 'retouch',
    },
    {
        img: `${BASE_PATH}files/cases-slider-pic-2.png`,
        title: 'OSVETIM',
    },
    {
        img: `${BASE_PATH}files/cases-slider-pic-3.png`,
        title: 'BRILLIANT',
    },
    {
        img: `${BASE_PATH}files/cases-slider-pic-4.png`,
        title: 'bastion',
    },
    {
        img: `${BASE_PATH}files/cases-slider-pic-5.png`,
        title: 'nevskiy-mill',
    },
    {
        img: `${BASE_PATH}files/cases-slider-pic-1.png`,
        title: 'retouch',
    },
    {
        img: `${BASE_PATH}files/cases-slider-pic-2.png`,
        title: 'OSVETIM',
    },
    {
        img: `${BASE_PATH}files/cases-slider-pic-3.png`,
        title: 'BRILLIANT',
    },
    {
        img: `${BASE_PATH}files/cases-slider-pic-4.png`,
        title: 'bastion',
    },
    {
        img: `${BASE_PATH}files/cases-slider-pic-5.png`,
        title: 'nevskiy-mill',
    },
];

const navigation: { name: string; title: string }[] = [
    { name: 'main', title: 'главная' },
    { name: 'cases', title: 'кейсы' },
    { name: 'about', title: 'о нас' },
    { name: 'services', title: 'услуги' },
    { name: 'contacts', title: 'контакты' },
    { name: 'styles', title: 'стили' },
];

const mainBlockLinks: { name: string; subtitle: string }[] = [
    { name: 'сервисы', subtitle: '12' },
    { name: 'сайты', subtitle: '133' },
    { name: 'поддержка', subtitle: '17' },
    { name: 'брендинг', subtitle: '25' },
    { name: 'Админ&nbsp;Панель', subtitle: '' },
    { name: 'сервисы', subtitle: '12' },
    { name: 'сайты', subtitle: '133' },
    { name: 'поддержка', subtitle: '17' },
    { name: 'брендинг', subtitle: '25' },
    { name: 'Админ&nbsp;Панель', subtitle: '' },
];

const mainAboutValues: { number: number; value: string; link: string; linkText: string }[] = [
    {
        number: 100,
        value: '%',
        link: '#',
        linkText: 'смотреть кейсы',
    },
    {
        number: 2015,
        value: 'год основания компании',
        link: '#',
        linkText: 'узнать больше',
    },
    {
        number: 58,
        value: 'успешных проектов',
        link: '#',
        linkText: 'связаться',
    },
];

const mainCasesCardsList: MockCaseCardType[] = [
    {
        number: '01',
        image: `${BASE_PATH}files/case-card-pic-1.png`,
        video: `${BASE_PATH}files/card-video-1.mp4`,
        title: 'Brilliant Real estate',
        year: '2024',
        desc: 'Разработка сайта для заказа еды — MKITCHEN в кинотеатре Мираж.',
        link: '#',
    },

    {
        number: '02',
        image: `${BASE_PATH}files/case-card-pic-2.png`,
        video: `${BASE_PATH}files/card-video-2.mp4`,
        title: 'IAW arch',
        year: '2024',
        desc: 'Не боимся решать нестандартные задачи, благодаря широкому стеку возможностей — создаем и реализуем самые уникальные проекты',
        link: '#',
    },
];

const mainCasesCardsList2: MockCaseCardType[] = [
    {
        number: '03',
        image: `${BASE_PATH}files/case-card-pic-3.png`,
        video: `${BASE_PATH}files/card-video-4.mp4`,
        title: 'Солнечный',
        year: '2024',
        desc: 'Разработка продающего сайта для санатория Солнечный в Кисловодске с интеграцией платформы бронирования TraveLline',
        link: '#',
    },
];

const mainCasesThumbs: MockCaseCardType[] = [
    {
        number: '01',
        image: `${BASE_PATH}files/case-card-pic-1.png`,
        video: `${BASE_PATH}files/card-video-1.mp4`,
        title: 'Brilliant Real estate',
        year: '2024',
    },
    {
        number: '02',
        image: `${BASE_PATH}files/case-card-pic-2.png`,
        video: `${BASE_PATH}files/card-video-2.mp4`,
        title: 'IAW arch',
        year: '2024',
    },
    {
        number: '03',
        image: `${BASE_PATH}files/case-card-pic-3.png`,
        video: `${BASE_PATH}files/card-video-3.mp4`,
        title: 'IAW arch',
        year: '2024',
    },
    {
        number: '03',
        image: `${BASE_PATH}files/case-card-pic-4.png`,
        video: `${BASE_PATH}files/card-video-4.mp4`,
        title: 'IAW arch',
        year: '2024',
    },
];

export {
    casesSliderList,
    mainBlockLinks,
    navigation,
    mainAboutValues,
    mainCasesThumbs,
    mainCasesCardsList,
    mainCasesCardsList2,
};
