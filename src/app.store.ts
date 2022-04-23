import { createStore } from "vuex";
/**
 * 创建 Store
 */

const store = createStore({
  state: {
    productList: [],
    menuBarList: [
      {
        _id: "home",
        name: "车主生活",
      },
      {
        _id: "aboutMe",
        name: "个人中心",
      },
    ],
  },
  mutations: {
    setProductList(state, data) {
      state.productList.push(data);
    },
    setMenuBarList(state, data) {
      data.map((item) => state.menuBarList.splice(1, 0, item));
    },
  },
});

export default store;
