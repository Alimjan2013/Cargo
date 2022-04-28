<template>
  <router-link class="block space-y-1" v-bind:to="productURL">
    <img v-bind:src="productCover" alt="" class="w-fit" />
    <p class="text-Sub3 flex-1 text-OpacityWhite-1">
      {{ productName }}
    </p>
  </router-link>
</template>

<script>
export default {
  data() {
    return {
      productURL: "",
    };
  },
  components: {},
  created() {
    console.log(this.product);
    this.productURL = `/product/${this.productobj._id}/${this.productobj.catalogue.second}`;
  },
  props: {
    productName: {
      type: String,
      default: "",
    },

    productCover: {
      type: String,
      default: "",
    },
    productobj: {
      type: Object,
      default: {},
    },
  },
};
</script>
