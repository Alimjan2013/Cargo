<template>
  <div class="space-y-4 w-[300px] flex-none">
    <img v-bind:src="productCover" alt="" class="w-fit" />
    <Button class="w-full bg-Theme-blue" />
    <div class="flex items-center">
      <p class="text-Body3 flex-1 text-OpacityWhite-1">{{ productName }}</p>
      <p class="text-Sub3 text-OpacityWhite-2">
        {{ productPrice === 0 ? "限时免费" : `${productPrice}元` }}
      </p>
    </div>
  </div>
</template>

<script>
import Button from "../../Button.vue";

export default {
  components: {
    Button,
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
