import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import ProductDetails from "./productDetails/ProductDetails.vue";
import AppBar from "./components/AppBar.vue";
import Store from "./store/Store.vue";

/**
 * 定义路由
 */
const routes: Array<RouteRecordRaw> = [
  {
    path: "/product/:productID/:secondCatalogue",
    component: ProductDetails,
    props: true,
  },
  { path: "/", component: Store },
  { path: "/app", component: AppBar },
];

/**
 * 创建路由器
 */

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
