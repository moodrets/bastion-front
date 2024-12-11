import { createWebHistory, createRouter, RouteRecordRaw } from 'vue-router';

// views
import Contacts from '@/components/views/Contacts.vue';
import Main from '@/components/views/Main.vue';
import { BASE_PATH } from '@/mocks';

const routes: RouteRecordRaw[] = [
    { path: BASE_PATH, name: 'main', component: Main },
    { path: `${BASE_PATH}contacts`, name: 'contacts', component: Contacts },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export { router };
