import { BASE_PATH } from '@/router/basePath';
import { CaseCardType } from '@/types/Cases';

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

const mainCasesCardsList: CaseCardType[] = [
    {
        number: '01',
        image: `${BASE_PATH}files/case-card-pic-1.png`,
        video: `${BASE_PATH}files/card-video-1.mp4`,
        title: 'Brilliant Real estate',
        year: '2024',
        desc: 'Разработка сайта для заказа еды — MKITCHEN в кинотеатре Мираж.',
        link: '#',
        theme: 'nature',
    },

    {
        number: '02',
        image: `${BASE_PATH}files/case-card-pic-2.png`,
        video: `${BASE_PATH}files/card-video-2.mp4`,
        title: 'IAW arch',
        year: '2024',
        desc: 'Не боимся решать нестандартные задачи, благодаря широкому стеку возможностей — создаем и реализуем самые уникальные проекты',
        link: '#',
        theme: 'laptop-above',
    },
];

const mainCasesCardsList2: CaseCardType[] = [
    {
        number: '03',
        image: `${BASE_PATH}files/case-card-pic-3.png`,
        video: `${BASE_PATH}files/card-video-4.mp4`,
        title: 'Солнечный',
        year: '2024',
        desc: 'Разработка продающего сайта для санатория Солнечный в Кисловодске с интеграцией платформы бронирования TraveLline',
        link: '#',
        theme: 'laptop-below',
    },
];

const mainCasesThumbs: CaseCardType[] = [
    {
        image: `${BASE_PATH}files/case-card-pic-1.png`,
        video: `${BASE_PATH}files/card-video-1.mp4`,
        number: '01',
        title: 'Brilliant Real estate',
        year: '2024',
        desc: 'Разработка продающего сайта для санатория Солнечный в Кисловодске с интеграцией платформы бронирования TraveLline',
        link: '#',
    },
    {
        image: `${BASE_PATH}files/case-card-pic-2.png`,
        video: `${BASE_PATH}files/card-video-2.mp4`,
        number: '02',
        title: 'IAW arch',
        year: '2024',
        desc: 'Разработка сайта IAW arch',
        link: '#',
    },
    {
        image: `${BASE_PATH}files/case-card-pic-3.png`,
        video: `${BASE_PATH}files/card-video-3.mp4`,
        number: '03',
        title: 'Mkitchen',
        year: '2024',
        desc: 'Разработка сайта Mkitchen',
        link: '#',
    },
    {
        number: '04',
        image: `${BASE_PATH}files/case-card-pic-4.png`,
        video: `${BASE_PATH}files/card-video-4.mp4`,
        title: 'Osvetim',
        year: '2024',
        desc: 'Разработка сайта Osvetim',
        link: '#',
    },
    {
        image: `${BASE_PATH}files/case-card-pic-1.png`,
        video: `${BASE_PATH}files/card-video-1.mp4`,
        number: '01',
        title: 'Brilliant Real estate 1',
        year: '2024',
        desc: 'Разработка продающего сайта для санатория Солнечный в Кисловодске с интеграцией платформы бронирования TraveLline',
        link: '#',
    },
    {
        image: `${BASE_PATH}files/case-card-pic-2.png`,
        video: `${BASE_PATH}files/card-video-2.mp4`,
        number: '02',
        title: 'IAW arch 2',
        year: '2024',
        desc: 'Разработка сайта IAW arch 2',
        link: '#',
    },
    {
        image: `${BASE_PATH}files/case-card-pic-3.png`,
        video: `${BASE_PATH}files/card-video-3.mp4`,
        number: '03',
        title: 'Mkitchen 3',
        year: '2024',
        desc: 'Разработка сайта Mkitchen 3',
        link: '#',
    },
    {
        number: '04',
        image: `${BASE_PATH}files/case-card-pic-4.png`,
        video: `${BASE_PATH}files/card-video-4.mp4`,
        title: 'Osvetim 4',
        year: '2024',
        desc: 'Разработка сайта Osvetim 4',
        link: '#',
    },
];

const allCasesList: {
    image: string;
}[] = [
    { image: `${BASE_PATH}files/case-card-pic-1.png` },
    { image: `${BASE_PATH}files/case-card-pic-2.png` },
    { image: `${BASE_PATH}files/case-card-pic-3.png` },
    { image: `${BASE_PATH}files/case-card-pic-4.png` },
    { image: `${BASE_PATH}files/case-card-pic-5.png` },
    { image: `${BASE_PATH}files/case-card-pic-6.png` },
    { image: `${BASE_PATH}files/case-card-pic-7.png` },
    { image: `${BASE_PATH}files/case-card-pic-8.png` },
    { image: `${BASE_PATH}files/case-card-pic-1.png` },
    { image: `${BASE_PATH}files/case-card-pic-2.png` },
    { image: `${BASE_PATH}files/case-card-pic-3.png` },
    { image: `${BASE_PATH}files/case-card-pic-4.png` },
    { image: `${BASE_PATH}files/case-card-pic-5.png` },
    { image: `${BASE_PATH}files/case-card-pic-6.png` },
    { image: `${BASE_PATH}files/case-card-pic-7.png` },
];

const mainServicesList: {
    image: string;
    title: string;
    link: string;
}[] = [
    {
        image: `${BASE_PATH}files/case-card-pic-1.png`,
        link: '#',
        title: 'сервисы & сайты',
    },
    {
        image: `${BASE_PATH}files/case-card-pic-2.png`,
        link: '#',
        title: 'брендинг & поддержка',
    },
    {
        image: `${BASE_PATH}files/case-card-pic-3.png`,
        link: '#',
        title: 'разработка & решения',
    },
    {
        image: `${BASE_PATH}files/case-card-pic-4.png`,
        link: '#',
        title: 'дизайн',
    },
];

const casesPageHeaderBlockLinks: {
    title: string;
    link: string;
    count?: string;
}[] = [
    {
        title: 'Все',
        link: '#',
    },
    {
        title: 'сервисы',
        link: '#',
        count: '12',
    },
    {
        title: 'сайты',
        link: '#',
        count: '32',
    },
    {
        title: 'брендинг',
        link: '#',
        count: '4',
    },
    {
        title: 'дизайн',
        link: '#',
        count: '18',
    },
    {
        title: 'e-com',
        link: '#',
        count: '9',
    },
    {
        title: 'поддержка',
        link: '#',
        count: '10',
    },
    {
        title: 'сервисы',
        link: '#',
        count: '12',
    },
    {
        title: 'сайты',
        link: '#',
        count: '32',
    },
];

const casesPageCards1: CaseCardType[] = [
    {
        number: '01',
        image: `${BASE_PATH}files/case-card-pic-1.png`,
        video: `${BASE_PATH}files/card-video-1.mp4`,
        title: 'Brilliant Real estate',
        year: '2024',
        desc: 'Редизайн корпоративного сайта Инженерно-Строительного управления',
        link: '#',
    },
];

const casesPageCards2: CaseCardType[] = [
    {
        number: '02',
        image: `${BASE_PATH}files/case-card-pic-9.png`,
        video: `${BASE_PATH}files/card-video-2.mp4`,
        title: 'Brilliant Real estate',
        year: '2024',
        desc: 'Редизайн корпоративного сайта Инженерно-Строительного управления',
        link: '#',
    },
    {
        number: '03',
        image: `${BASE_PATH}files/case-card-pic-10.png`,
        video: `${BASE_PATH}files/card-video-3.mp4`,
        title: 'Brilliant Real estate',
        year: '2024',
        desc: 'Редизайн корпоративного сайта Инженерно-Строительного управления',
        link: '#',
    },
];

const casesPageCards3: CaseCardType[] = [
    {
        number: '04',
        image: `${BASE_PATH}files/temp-nature.png`,
        video: `${BASE_PATH}files/card-video-3.mp4`,
        title: 'Brilliant Real estate',
        year: '2024',
        desc: 'Редизайн корпоративного сайта Инженерно-Строительного управления',
        link: '#',
    },
];

const casesPageCards4: CaseCardType[] = [
    {
        number: '05',
        image: `${BASE_PATH}files/case-card-pic-3.png`,
        video: `${BASE_PATH}files/card-video-4.mp4`,
        title: 'Солнечный',
        year: '2024',
        desc: 'Разработка продающего сайта для санатория Солнечный в Кисловодске с интеграцией платформы бронирования TraveLline',
        link: '#',
        theme: 'laptop-below',
    },
];

const casesPageCards5: CaseCardType[] = [
    {
        number: '06',
        image: `${BASE_PATH}files/temp-tablet.png`,
        video: `${BASE_PATH}files/card-video-2.mp4`,
        title: 'Brilliant Real estate',
        year: '2024',
        desc: 'Редизайн корпоративного сайта Инженерно-Строительного управления',
        link: '#',
    },
];

const casesPageCards6: CaseCardType[] = [
    {
        number: '07',
        image: `${BASE_PATH}files/case-card-pic-5.png`,
        video: `${BASE_PATH}files/card-video-4.mp4`,
        title: 'Brilliant Real estate',
        year: '2024',
        desc: 'Редизайн корпоративного сайта Инженерно-Строительного управления',
        link: '#',
    },
    {
        number: '08',
        image: `${BASE_PATH}files/case-card-pic-4.png`,
        video: `${BASE_PATH}files/card-video-3.mp4`,
        title: 'Brilliant Real estate',
        year: '2024',
        desc: 'Редизайн корпоративного сайта Инженерно-Строительного управления',
        link: '#',
    },
];

const casesPageCards7: CaseCardType[] = [
    {
        number: '09',
        image: `${BASE_PATH}files/temp-smartphones.png`,
        video: `${BASE_PATH}files/card-video-1.mp4`,
        title: 'Brilliant Real estate',
        year: '2024',
        desc: 'Редизайн корпоративного сайта Инженерно-Строительного управления',
        link: '#',
    },
];

const casesPageCards8: CaseCardType[] = [
    {
        number: '10',
        image: `${BASE_PATH}files/case-card-pic-6.png`,
        video: `${BASE_PATH}files/card-video-3.mp4`,
        title: 'Brilliant Real estate',
        year: '2024',
        desc: 'Редизайн корпоративного сайта Инженерно-Строительного управления',
        link: '#',
    },
];

const casesPageCards9: CaseCardType[] = [
    {
        number: '07',
        image: `${BASE_PATH}files/case-card-pic-7.png`,
        video: `${BASE_PATH}files/card-video-1.mp4`,
        title: 'Brilliant Real estate',
        year: '2024',
        desc: 'Редизайн корпоративного сайта Инженерно-Строительного управления',
        link: '#',
    },
    {
        number: '08',
        image: `${BASE_PATH}files/case-card-pic-8.png`,
        video: `${BASE_PATH}files/card-video-2.mp4`,
        title: 'Brilliant Real estate',
        year: '2024',
        desc: 'Редизайн корпоративного сайта Инженерно-Строительного управления',
        link: '#',
    },
];

export {
    navigation,
    allCasesList,
    mainAboutValues,
    mainCasesThumbs,
    mainCasesCardsList,
    mainCasesCardsList2,
    mainBlockLinks,
    mainServicesList,
    casesSliderList,
    casesPageHeaderBlockLinks,
    casesPageCards1,
    casesPageCards2,
    casesPageCards3,
    casesPageCards4,
    casesPageCards5,
    casesPageCards6,
    casesPageCards7,
    casesPageCards8,
    casesPageCards9,
};
