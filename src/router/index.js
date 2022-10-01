// import Router from "vue-router";

import { createRouter, createWebHistory } from "vue-router";

// export default new Router({
//   routes: [

// ],
// });

const routes = [
  { path: "/", component: () => import("../components/HomePage.vue") },
  { path: "/patata", component: () => import("../components/HomePage.vue") },
  { path: "/addTask", component: () => import("../components/addTask.vue") },
  { path: "/auth", component: () => import("../components/Auth.vue") },
  { path: "/dashboard", component: () => import("../components/dashboard.vue") },
  { path: "/profile", component: () => import("../components/Profile.vue") },
  { path: "/homePage", component: () => import("../components/HomePage.vue") },
  { path: "/contactus", component: () => import("../components/contactus.vue") },
  { path: "/homePage", component: () => import("../components/HomePage.vue") },
  { path: "/aboutus", component: () => import("../components/aboutus.vue") },
  
];

const router = createRouter({
  history: createWebHistory("/"),
  routes,
  scrollBehavior() {
    document.getElementById("app").scrollIntoView();
  },
});

export default router;