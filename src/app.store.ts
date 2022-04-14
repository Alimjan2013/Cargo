import { createStore } from "vuex";
/**
 * 创建 Store
 */

const store = createStore({
  state: {
    productList: [],
  },
  mutations: {
    setProductList(state, data) {
      state.productList.push(data);
    },
  },
});

export default store;
