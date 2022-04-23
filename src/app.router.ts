import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import ProductDetails from "./productDetails/ProductDetails.vue";
import storeRouters from "./store/store.routes";
import Store from "./store/store.vue";
/**
 * 定义路由
 */
const routes: Array<RouteRecordRaw> = [
  {
    path: "/product/:productID/:secondCatalogue",
    component: ProductDetails,
  },
  {
    path: "/store",
    component: Store,
  },
  ...storeRouters,
];

/**
 * 创建路由器
 */

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
