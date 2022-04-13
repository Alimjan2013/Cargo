<script>
import AppBar from "./components/AppBar.vue";
import MenuBar from "./components/MenuBar/MenuBar.vue";
import ProductLibrary from "./components/ProductLibrary/ProductLibrary.vue";

export default {
  components: {
    AppBar,
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
  jjklfg
  <router-view />
  <!-- <div class="h-screen flex flex-col bg-Background-0">
    <div class="flex flex-1 px-[80px] space-x-2 overflow-auto">
      <div>
        <MenuBar />
      </div>
      <ProductLibrary />
    </div>

    <AppBar />
  </div> -->
</template>

<style>
@import "index.css";
</style>
