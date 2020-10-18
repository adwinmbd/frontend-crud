import { createRouter, createWebHistory } from "vue-router";
import About from "../pages/About.vue";
import Home from "../pages/Home.vue";

const history = createWebHistory();

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
];

const router = createRouter({
  history,
  routes,
});

export default router;
