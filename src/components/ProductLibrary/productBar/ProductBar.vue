<template>
  <div class="flex-1 flex flex-col Wide:space-y-3 space-y-1">
    <div class="Wide:text-Sub1 text-Sub3 text-OpacityWhite-2">
      {{ barName }}
    </div>
    <div
      class="text-center text-Display3 text-OpacityWhite-3"
      v-if="productList.length === 0"
    >
      敬请期待商品上线
    </div>
    <div
      v-else
      class="grid ExtraWide:gap-5 gap-3 ExtraWide:grid-cols-4 Standard:grid-cols-3 grid-cols-2"
    >
      <ProductCard
        v-for="product in productList"
        :key="product._id"
        v-bind:productName="product.name"
        v-bind:productPrice="product.price"
        v-bind:productCover="product.cover"
        v-bind:productobj="product"
      />
    </div>
  </div>
</template>

<script>
import ProductCard from "./ProductCard.vue";

export default {
  data() {
    return {
      productList: [],
    };
  },
  props: {
    barName: {
      type: String,
      default: "",
    },
  },
  methods: {
    findProduct() {
      fetch(
        "https://d40d2143-72af-4a3b-b428-2874934cbc4f.bspapp.com/findItems?catalogue=jh",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ catalogue: this.barName }),
        }
      )
        .then((res) => res.json())
        .then((json) => {
          console.log(json);
          const productList = {
            catalogue: this.barName,
            product: json.data,
          };
          this.$store.commit("setProductList", productList);
          this.productList = json.data;
        });
    },
  },
  created() {
    console.log(this.barName);
    const index = this.$store.state.productList.findIndex(
      (item) => item.catalogue === this.barName
    );
    if (index === -1) {
      this.findProduct();
    } else {
      this.productList = this.$store.state.productList[index].product;
    }
  },
  components: {
    ProductCard,
  },
};
</script>

<style scoped></style>
