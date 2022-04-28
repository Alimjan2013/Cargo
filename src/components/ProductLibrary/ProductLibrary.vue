<template>
  <div class="flex-1 Wide:space-y-6 space-y-4 px-4 pt-4 pb-7 bg-Background-1">
    <ProductBar
      v-for="name of barList"
      :key="name._id"
      v-bind:barName="name.name"
      class="flex-1"
    />
  </div>
</template>
<script>
import ProductBar from "./productBar/ProductBar.vue";
export default {
  methods: {
    findCatalogue(catalogueName) {
      const catalogue = this.$store.state.menuBarList.filter(
        (catalogue) => catalogue.name === catalogueName
      )[0];
      const barList = [];
      catalogue.child.map((item) => {
        console.log("我在被push");
        barList.push({
          _id: item.id,
          name: item.name,
        });
      });
      this.barList = barList;
    },
  },
  data() {
    return { barList: [] };
  },
  computed: {
    routerName() {
      return this.$route.params.name;
    },
  },
  created() {
    console.log(this.$route.params.name);
    this.findCatalogue(this.$route.params.name);
  },
  watch: {
    // $route(to, from) {
    //   //todo , 这里会加载三次
    //   this.findCatalogue(this.$route.params.name);
    // },
  },
  components: {
    ProductBar,
  },
};
</script>
