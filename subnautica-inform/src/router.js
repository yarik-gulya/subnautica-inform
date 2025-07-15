import {createRouter, createWebHistory} from 'vue-router';
import MainPage from './pages/MainPage.vue';
import AdminDashboard from './pages/AdminDashboard.vue';
import SearchPage from './pages/SearchPage.vue';

const routes = [
    {
        path: '/',
        component: AdminDashboard,
        children: [
            {path: '/', component: MainPage},
            {path: '/search', component: SearchPage},
        ]
    },
]

const router = createRouter({
    history: createWebHistory('/subnautica-inform/'),
    routes,
})

export default router;