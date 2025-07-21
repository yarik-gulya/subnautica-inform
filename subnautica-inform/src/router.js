import { createRouter, createWebHistory } from 'vue-router';
import AdminDashboard from './pages/AdminDashboard.vue';
import MainPage from './pages/MainPage.vue';
import CatalogPage from './pages/CatalogPage.vue';
import ListComponent from './components/ListComponent.vue';
import FloraComponent from './components/FloraComponent.vue';
import FaunaComponent from './components/FaunaComponent.vue';
import MaterialComponent from './components/MaterialComponent.vue';
import ContactPage from './pages/ContactPage.vue';
import AboutPage from './pages/AboutPage.vue'

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
          {path: '/catalog/fauna',component: FaunaComponent},
          {path: '/catalog/materials',component: MaterialComponent},
        ],
      },
      { path: 'contact', component: ContactPage },
      { path: 'about', component: AboutPage },
      { path: 'privacy', component: () => import('./pages/PrivacyPage.vue') },
      { path: 'profile', component: () => import('./pages/ProfilePage.vue') }
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