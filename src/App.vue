<script>
import AppBar from "./components/AppBar.vue";
export default {
  components: {
    AppBar,
  },
  created() {
    console.log("我在这里");
    // this.findCatalogue();
  },
  computed: {},
};
</script>

<template>
  <div
    class="h-screen flex flex-col bg-Background-0 max-w-screen-SuperWide w-full"
  >
    <router-view :key="this.$route.params.productID" />
    <AppBar />
  </div>
</template>

<style>
@import "index.css";
</style>
