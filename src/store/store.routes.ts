import { RouteRecordRaw } from "vue-router";

import Store from "./Store.vue";
import Index from "../index/Index.vue";
import AboutMe from "../aboutMe/AboutMe.vue";
import ProductLibrary from "../components/ProductLibrary/ProductLibrary.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: Store,
    children: [
      {
        path: "index",
        component: Index,
        meta: {
          activeMenuName: "index",
        },
      },
      {
        path: "",
        component: Index,
        meta: {
          activeMenuName: "index",
        },
      },
      {
        path: "aboutme",
        component: AboutMe,
        meta: {
          activeMenuName: "aboutme",
        },
      },
      {
        path: "productLibrary/:name",
        component: ProductLibrary,
        meta: {
          activeMenuName: "productLibrary",
        },
      },
    ],
  },
];

export default routes;
