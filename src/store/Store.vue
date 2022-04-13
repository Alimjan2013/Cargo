<script>
import MenuBar from "../components/MenuBar/MenuBar.vue";
import ProductLibrary from "../components/ProductLibrary/ProductLibrary.vue";

export default {
  components: {
    MenuBar,
    ProductLibrary,
  },
  created() {
    console.log("我在这里");
    // this.findCatalogue();
  },
};
</script>

<template>
  <div class="flex flex-1 px-[80px] space-x-2 overflow-auto">
    <div>
      <MenuBar />
    </div>
    <ProductLibrary />
  </div>
</template>

<style></style>
