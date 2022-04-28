<template>
  <div class="flex-1 bg-Background-1 p-3">
    <Swiper />
  </div>
</template>

<script>
import Swiper from "../components/Swiper.vue";
export default {
  components: {
    Swiper,
  },
  created() {
    console.log("我在这里");
    // this.findCatalogue();
  },
  computed: {},
};
</script>
