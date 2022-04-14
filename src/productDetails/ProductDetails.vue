<template>
  <div class="flex flex-1 flex-col">
    <NavigationBar :title="product.name" />
    <div
      class="flex-1 grid grid-cols-1 gap-1 Wide:grid-cols-8 py-4 Wide:px-8 px-4 Standard:px-6 space-x-2 bg-Background-2"
    >
      <div class="Wide:col-span-7">
        <div class="flex space-x-4 overflow-x-auto snap-x w-full">
          <div
            class="flex-none snap-center"
            v-for="img in product.detailsImages"
            :key="img"
          >
            <img
              class="object-cover h-[550px]"
              v-if="img.type === type.img"
              v-bind:src="img.url"
              alt=""
            />
            <video
              class="object-cover h-[550px]"
              autoplay
              v-if="img.type === type.video"
              :src="img.url"
            ></video>
          </div>
        </div>

        <div class="text-OpacityWhite-1">{{ product.introduction }}</div>
      </div>
      <div class="text-OpacityWhite-1 Wide:col-span-1">
        <div>相关推荐</div>
        <div class="grid grid-cols-3 gap-1 Wide:grid-cols-1">
          <div>123</div>
          <div>123</div>
          <div>123</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import NavigationBar from "./NavigationBar.vue";
import Huandengpian from "./Huandengpian.vue";
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
  },
  created() {
    this.productID = this.$route.params.productID;
    this.catalogue = this.$route.params.secondCatalogue;
    this.getProduct(1, this.catalogue);
    console.log(this.$route.params.productID);
    console.log(this.$route.params.secondCatalogue);
  },
  components: {
    NavigationBar,
    Huandengpian,
  },
};
</script>
