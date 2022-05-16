<template>
  <div class="flex flex-1 flex-col">
    <NavigationBar :title="name" />
    <div
      class="flex-1 grid grid-cols-1 gap-1 Wide:grid-cols-10 py-4 Wide:px-8 px-4 Standard:px-6 space-x-2 bg-Background-2"
    >
      <div class="Wide:col-span-8 space-y-3">
        <div class="flex space-x-4 overflow-x-auto snap-x w-full">
          <div
            class="flex-none snap-center"
            v-for="img in detailsImages"
            :key="img"
          >
            <img
              class="object-cover Wide:h-[500px] h-[300px]"
              v-if="img.type === type.img"
              v-bind:src="img.url"
              alt=""
            />
            <video
              class="object-cover Wide:h-[500px] h-[300px]"
              autoplay
              v-if="img.type === type.video"
              :src="img.url"
            ></video>
          </div>
        </div>
        <div class="flex">
          <div class="text-OpacityWhite-1 flex-1">
            {{ introduction }}
          </div>
          <div class="text-OpacityWhite-1">
            {{ price === 0 ? "限时免费" : `${price}元` }}
          </div>
        </div>
      </div>
      <div class="text-OpacityWhite-1 Wide:col-span-2 space-y-2">
        <div class="text-OpacityWhite-2 text-Sub3 Wide:text-Body3">
          相关推荐
        </div>
        <div
          class="grid grid-cols-2 gap-1 Wide:grid-cols-1 Wide:space-y-2 space-x-2 Wide:space-x-0"
        >
          <p v-if="productRecommendList.length === 0">推荐商品加载失败</p>
          <ProductCardMini
            class="Wide:last:block last:hidden"
            v-for="product in productRecommendList"
            :key="product._id"
            v-bind:productName="product.name"
            v-bind:productPrice="product.price"
            v-bind:productCover="product.cover"
            v-bind:productobj="product"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import NavigationBar from "./NavigationBar.vue";
import ProductCardMini from "./ProductCardMini.vue";
export default {
  data() {
    return {
      detailsImages: [],
      name: "商品载入中...",
      introduction: "",
      price: 0,
      type: {
        img: "img",
        video: "video",
      },
      productID: "",
      catalogue: "",
      productRecommendList: [],
    };
  },

  methods: {
    getProduct(productID, catalogue) {
      const productList = this.$store.state.productList.filter(
        (item) => item.catalogue === catalogue
      );

      if (productList.length !== 0) {
        let product = productList[0].product.filter(
          (item) => item._id === this.productID
        )[0];
        this.detailsImages = product.detailsImages;
        this.name = product.name;
        this.introduction = product.introduction;
        this.price = product.price;
      } else {
        this.findProductByID(this.productID);
      }
    },
    findProductByID(ID) {
      fetch(
        "https://d40d2143-72af-4a3b-b428-2874934cbc4f.bspapp.com/findItemByID",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ID: ID }),
        }
      )
        .then((res) => res.json())
        .then((json) => {
          if (json._id === "noData") {
            console.log("数据库没有返回相应数据");
          } else {
            this.detailsImages = json.detailsImages;
            this.name = json.name;
            this.introduction = json.introduction;
            this.price = json.price;
          }
        });
    },
    getRecommendProductList(productID, catalogue) {
      const productList = this.$store.state.productList.filter(
        (item) => item.catalogue === catalogue
      );
      if (productList.length !== 0) {
        let productRecommendList = [];
        productList[0].product.map((product, index) => {
          if (index === 4) {
            return;
          }
          if (product._id !== productID) {
            productRecommendList.push(product);
          }
        });
        this.productRecommendList = productRecommendList;

        console.log("找到的商品列表");
        console.log(productRecommendList);
      } else {
        // todo 需要从云端获取推荐列表
      }
    },
  },
  created() {
    this.productID = this.$route.params.productID;
    this.catalogue = this.$route.params.secondCatalogue;
    this.getProduct(1, this.catalogue);
    this.getRecommendProductList(this.productID, this.catalogue);
    console.log(this.$route.params.productID);
    console.log(this.$route.params.secondCatalogue);
  },

  components: {
    NavigationBar,
    ProductCardMini,
  },
};
</script>
