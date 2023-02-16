//import { RouteRecordRaw } from 'vue-router';

const routes = [ // RouteRecordRaw[]
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    meta: { requiresAuth: true },
    children: [
      { path: '', redirect: '/dashboard' },
      { name: 'dashboard', path: 'dashboard', component: () => import('src/pages/DashboardPage.vue') },
      { path: 'campaigns', component: () => import('pages/CampaignsPage.vue') },
      { path: 'new-campaign', component: () => import('pages/NewcampaignPage.vue') },
      { path: 'contacts', component: () => import('pages/ContactsPage.vue') },
      { path: 'new-contact', component: () => import('pages/NewcontactsPage.vue') },
      { path: 'connect-whatsapp', component: () => import('pages/ConnectWhatsappPage.vue') },
      { path: 'settings', component: () => import('pages/SettingsPage.vue') },

      // {
      //   name: 'subscribe', path: 'subscribe', props: true, component: () => import('pages/PaymentPage.vue'),
      // },
      //{ path: 'withdraw-to-bank', component: () => import('pages/BankWithdrawal.vue') },
    ],
  },
  // auth/login
  // {
  //   path: '/auth',
  //   component: () => import('layouts/AuthLayout.vue'),
  //   children: [
  //     { name: 'register', path: 'register', component: () => import('src/pages/Auth/RegisterPage.vue') },
  //     { name: 'login', path: 'login', component: () => import('src/pages/Auth/LoginPage.vue') },
  //     { name: 'verify', path: 'verify', component: () => import('src/pages/Auth/VerifyPage.vue') },
  //     { name: 'forgot-password', path: 'forgot-password', component: () => import('src/pages/Auth/ForgotPassword.vue') },
  //     { name: 'reset-password', path: 'reset-password', component: () => import('src/pages/Auth/ResetPassword.vue') },
  //   ],
  // },
  // {
  //   path: '/',
  //   component: () => import('pages/HomePage.vue'),
  // },
  // { path: '/about', component: () => import('pages/AboutPage.vue') },
  // { path: '/contact', component: () => import('pages/ContactPage.vue') },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;