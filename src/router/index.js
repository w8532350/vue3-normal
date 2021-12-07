import { createRouter, createWebHistory } from "vue-router";
import routeData from "@/utils/routeData.js";

const routes = [];
routeData.forEach((val) => {
  routes.push({
    path: val.path,
    name: val.name,
    component: () => import("../views/" + val.component),
  });
});

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from) => {
  console.log(to, from);
});

export default router;
