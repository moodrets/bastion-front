import { BASE_PATH } from '@/router/basePath';

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

export { casesSliderList, mainBlockLinks, navigation, mainAboutValues };
