import { createRouter, createWebHistory } from "vue-router";

import Home from "./components/HelloWorld.vue";


const options = {
  history: createWebHistory(),
  routes: [
    { path: "/", name: "Home", component: Home },
  ],
};

export const router = createRouter(options);
