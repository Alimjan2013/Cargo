<template>
  <div class="flex-1 space-y-7 px-4 pt-4 pb-7 overflow-auto bg-Background-1">
    <ProductBar class="flex-1" />
    <ProductBar class="flex-1" />
    <ProductBar class="flex-1" />
  </div>
</template>
<script>
import ProductBar from "./productBar/ProductBar.vue";
export default {
  components: {
    ProductBar,
  },
};
</script>
