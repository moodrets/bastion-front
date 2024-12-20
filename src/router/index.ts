import { createWebHistory, createRouter, RouteRecordRaw } from 'vue-router';
import { BASE_PATH } from '@/router/basePath';

// scripts
import { initScrollToOnLoad } from '@/scripts/ScrollTo';

// views
import Main from '@/components/views/Main.vue';
import Cases from '@/components/views/Cases.vue';
import About from '@/components/views/About.vue';
import Services from '@/components/views/Services.vue';
import Contacts from '@/components/views/Contacts.vue';

const routes: RouteRecordRaw[] = [
    { path: `${BASE_PATH}`, name: 'main', component: Main },
    { path: `${BASE_PATH}cases`, name: 'cases', component: Cases },
    { path: `${BASE_PATH}about`, name: 'about', component: About },
    { path: `${BASE_PATH}services`, name: 'services', component: Services },
    { path: `${BASE_PATH}contacts`, name: 'contacts', component: Contacts },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.afterEach(() => {
    setTimeout(() => {
        initScrollToOnLoad();
    }, 150);
});

export { router };
