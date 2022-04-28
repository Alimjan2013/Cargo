<template>
  <div class="flex flex-1 flex-col">
    <NavigationBar :title="product.name" />
    <div
      class="flex-1 grid grid-cols-1 gap-1 Wide:grid-cols-10 py-4 Wide:px-8 px-4 Standard:px-6 space-x-2 bg-Background-2"
    >
      <div class="Wide:col-span-8 space-y-3">
        <div class="flex space-x-4 overflow-x-auto snap-x w-full">
          <div
            class="flex-none snap-center"
            v-for="img in product.detailsImages"
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
            {{ product.introduction }}
          </div>
          <div class="text-OpacityWhite-1">
            {{ product.price === 0 ? "限时免费" : `${product.price}元` }}
          </div>
        </div>
      </div>
      <div class="text-OpacityWhite-1 Wide:col-span-2 space-y-2">
        <div>相关推荐</div>
        <div
          class="grid grid-cols-2 gap-1 Wide:grid-cols-1 Wide:space-y-2 space-x-2 Wide:space-x-0"
        >
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
      product: {},
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
      this.product = productList[0].product.filter(
        (item) => item._id === this.productID
      )[0];
      console.log(this.product);
    },
    getRecommendProductList(productID, catalogue) {
      const productList = this.$store.state.productList.filter(
        (item) => item.catalogue === catalogue
      );
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
