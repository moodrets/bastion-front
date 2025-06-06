import { createWebHistory, createRouter, RouteRecordRaw } from 'vue-router';
import { BASE_PATH } from '@/router/basePath';

// scripts
import { initThreeMainScene, mouseMoveScene, resizeScene } from '@/scripts/ThreeMainScene';
import { initScrollToOnLoad } from '@/scripts/ScrollTo';
import { addGlobalHandler } from '@/scripts/GeneralHandlers';

// views
import Main from '@/components/views/Main.vue';
import Cases from '@/components/views/Cases.vue';
import About from '@/components/views/About.vue';
import Services from '@/components/views/Services.vue';
import Contacts from '@/components/views/Contacts.vue';
import Styles from '@/components/views/Styles.vue';

const routes: RouteRecordRaw[] = [
    { path: `${BASE_PATH}`, name: 'main', component: Main },
    { path: `${BASE_PATH}cases`, name: 'cases', component: Cases },
    { path: `${BASE_PATH}about`, name: 'about', component: About },
    { path: `${BASE_PATH}services`, name: 'services', component: Services },
    { path: `${BASE_PATH}contacts`, name: 'contacts', component: Contacts },
    { path: `${BASE_PATH}styles`, name: 'styles', component: Styles },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        return { top: 0, behavior: 'smooth' };
    },
});

router.afterEach(() => {
    setTimeout(() => {
        initScrollToOnLoad();
        addGlobalHandler('resize', window, [() => resizeScene()]);
        addGlobalHandler('mousemove', document, [(e) => mouseMoveScene(e)]);
        initThreeMainScene();
    }, 150);
});

export { router };
