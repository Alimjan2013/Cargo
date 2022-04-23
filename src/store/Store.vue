<script>
import MenuBar from "../components/MenuBar/MenuBar.vue";
import ProductLibrary from "../components/ProductLibrary/ProductLibrary.vue";

export default {
  data() {
    return {
      menuItem: [],
    };
  },
  components: {
    MenuBar,
    ProductLibrary,
  },
  created() {
    console.log("我在这里");
    if (this.$store.state.menuBarList.length === 2) {
      this.findCatalogue();
    } else {
      this.menuItem = this.$store.state.menuBarList;
    }
  },
  methods: {
    findCatalogue() {
      fetch(
        "https://d40d2143-72af-4a3b-b428-2874934cbc4f.bspapp.com/findCatalogue",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ level: 1 }),
        }
      )
        .then((res) => res.json())
        .then((json) => {
          console.log(json);
          this.$store.commit("setMenuBarList", json);
          this.menuItem = json;
        });
    },
  },
};
</script>

<template>
  <div class="flex flex-1 px-[80px] space-x-2 overflow-auto">
    <div>
      <MenuBar v-bind:menuItem="menuItem" />
    </div>
    <ProductLibrary />
  </div>
</template>

<style></style>
