<template>
  <div class="flex-1 flex flex-col space-y-5">
    <div class="text-Sub1 text-OpacityWhite-2">系列一</div>
    <div class="flex space-x-4 overflow-x-auto">
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  </div>
</template>

<script>
import ProductCard from "./ProductCard.vue";

export default {
  components: {
    ProductCard,
  },
};
</script>

<style scoped></style>
