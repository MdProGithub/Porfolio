import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from "vue-router";
import './assets/style.css'

import homePage from "./homePage.vue";
import page404 from "./pageIntrouvable.vue";

const app = createApp(App);

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: homePage,
    },
    {
      path: "/:catchAll(.*)",
      component: page404,
    },
  ],
});



app.use(router);
app.mount("#app");




