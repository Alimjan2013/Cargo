<template>
  <div class="flex-1 space-y-7 px-4 pt-4 pb-7 overflow-auto bg-Background-1">
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
      catalogue.child.map((item) =>
        barList.push({
          _id: item.id,
          name: item.name,
        })
      );
      this.barList = barList;
    },
  },
  data() {
    return { barList: [] };
  },
  created() {
    console.log(this.$route.params.name);
    this.findCatalogue(this.$route.params.name);
  },
  components: {
    ProductBar,
  },
};
</script>
