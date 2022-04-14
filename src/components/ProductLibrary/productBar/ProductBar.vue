<template>
  <div class="flex-1 flex flex-col space-y-5">
    <div class="text-Sub1 text-OpacityWhite-2">{{ barName }}</div>
    <div class="flex space-x-4 overflow-x-auto">
      <ProductCard
        v-for="product in productList"
        :key="product._id"
        v-bind:productName="product.name"
        v-bind:productPrice="product.prise"
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
      fetch("https://qcucka.api.cloudendpoint.cn/getProduct", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ catalogue: this.barName }),
      })
        .then((res) => res.json())
        .then((json) => {
          console.log(json.result);
          const productList = {
            catalogue: this.barName,
            product: json.result,
          };
          this.$store.commit("setProductList", productList);
          this.productList = json.result;
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
