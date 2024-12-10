import { createWebHistory, createRouter, RouteRecordRaw } from 'vue-router';

const BASE_PATH = import.meta.env.VITE_BASE_URL;

// views
import Contacts from '@/components/views/Contacts.vue';
import Main from '@/components/views/Main.vue';

const routes: RouteRecordRaw[] = [
    { path: '/', name: 'main', component: Main },
    { path: '/contacts', name: 'contacts', component: Contacts },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export { router, BASE_PATH };
