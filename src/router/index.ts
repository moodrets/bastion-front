import { createWebHistory, createRouter, RouteRecordRaw } from 'vue-router';

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

export { router };
