import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import ProductDetails from "./productDetails/ProductDetails.vue";
import AppBar from "./components/AppBar.vue";
import list from "./components/ProductLibrary/ProductLibrary.vue";

/**
 * 定义路由
 */
const routes: Array<RouteRecordRaw> = [
  { path: "/ooo", component: ProductDetails },
  { path: "/app", component: AppBar },
  {
    path: "/list",
    component: () => import("./productDetails/ProductDetails.vue"),
  },
];

/**
 * 创建路由器
 */

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
