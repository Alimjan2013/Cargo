import { createStore } from "vuex";
/**
 * 创建 Store
 */

const store = createStore({
  state: {
    productList: [
      {
        catalogue: "酷炫系列",
        product: [
          {
            _id: "6256309f492471024bca026c",
            createdAt: "2022-04-13T02:08:31.212Z",
            updatedAt: "2022-04-13T12:31:13.245Z",
            name: "想变得有钱",
            prise: 0,
            catalogue: {
              first: "智能场景",
              second: "酷炫系列",
            },
            cover:
              "http://io.iooslo.tech/CarStore/%E6%88%AA%E5%B1%8F2022-04-12%2010.18.21.png",
            detailsImages: [
              "http://io.iooslo.tech/CarStore/%E6%88%AA%E5%B1%8F2022-04-12%2010.18.21.png",
            ],
            introduction: "这是第一个商品",
          },
        ],
      },
      {
        catalogue: "实用系列",
        product: [
          {
            _id: "62563367492471024bca0274",
            createdAt: "2022-04-13T02:20:23.250Z",
            updatedAt: "2022-04-13T12:31:04.096Z",
            name: "在线会议",
            prise: 0,
            catalogue: {
              first: "智能场景",
              second: "实用系列",
            },
            cover:
              "http://io.iooslo.tech/CarStore/%E6%88%AA%E5%B1%8F2022-04-12%2010.18.21.png",
            detailsImages: [
              "http://io.iooslo.tech/CarStore/%E6%88%AA%E5%B1%8F2022-04-12%2010.18.21.png",
            ],
            introduction: "这是第二个商品",
          },
          {
            _id: "6256339d698c520251aca209",
            createdAt: "2022-04-13T02:21:17.882Z",
            updatedAt: "2022-04-13T12:30:50.710Z",
            name: "深呼吸",
            prise: 0,
            catalogue: {
              first: "智能场景",
              second: "实用系列",
            },
            cover:
              "http://io.iooslo.tech/CarStore/%E6%88%AA%E5%B1%8F2022-04-12%2010.18.21.png",
            detailsImages: [
              "http://io.iooslo.tech/CarStore/%E6%88%AA%E5%B1%8F2022-04-12%2010.18.21.png",
            ],
            introduction: "这是第三个商品",
          },
        ],
      },
    ],
  },
});

export default store;
