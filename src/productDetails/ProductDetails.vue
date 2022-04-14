<template>
  <div class="text-OpacityWhite-1">
    <p>{{ product.name }}</p>
    <div>{{ product.introduction }}</div>
  </div>
  <img
    v-for="img in product.detailsImages"
    :key="img"
    v-bind:src="img"
    alt=""
  />
</template>
<script>
export default {
  data() {
    return {
      product: {},
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
};
</script>
