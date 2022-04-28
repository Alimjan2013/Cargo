<template>
  <div class="Wide:space-y-3 space-y-1">
    <img v-bind:src="productCover" alt="" class="w-fit" />
    <router-link class="block" v-bind:to="productURL"
      ><Button class="w-full bg-Theme-blue"
    /></router-link>

    <div class="flex items-center">
      <p class="Wide:text-Body3 text-Sub3 flex-1 text-OpacityWhite-1">
        {{ productName }}
      </p>
      <p class="Wide:text-Sub3 text-[12px] text-OpacityWhite-2">
        {{ productPrice === 0 ? "限时免费" : `${productPrice}元` }}
      </p>
    </div>
  </div>
</template>

<script>
import Button from "../../Button.vue";

export default {
  data() {
    return {
      productURL: "",
    };
  },
  components: {
    Button,
  },
  created() {
    console.log(this.product);
    this.productURL = `/product/${this.productobj._id}/${this.productobj.catalogue.second}`;
  },
  props: {
    productName: {
      type: String,
      default: "",
    },
    productPrice: {
      type: Number,
      default: 0,
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
