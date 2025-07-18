import { createRouter, createWebHistory } from 'vue-router';
import AdminDashboard from './pages/AdminDashboard.vue';
import MainPage from './pages/MainPage.vue';
import CatalogPage from './pages/CatalogPage.vue';
import ListComponent from './components/ListComponent.vue';
import FloraComponent from './components/FloraComponent.vue';
import FaunaComponent from './components/FaunaComponent.vue'

const routes = [
  {
    path: '/',
    component: AdminDashboard,
    children: [
      { path: '', name: 'MainPage', component: MainPage },
      { path: 'main', component: MainPage },
      {
        path: '/catalog',
        component: CatalogPage,
        children: [
          {path: '/catalog',component: ListComponent},
          {path: '/catalog/flora',component: FloraComponent},
          {path: '/catalog/fauna',component: FaunaComponent}
        ],
      },
    ],
  },
  {
    path: '/admin',
    component: AdminDashboard,
    children: [
      { path: 'main', component: MainPage },
      { path: 'catalog', component: CatalogPage },
    ],
  },
];

const router = createRouter({
  history: createWebHistory('/subnautica-inform/'),
  routes,
});

export default router;