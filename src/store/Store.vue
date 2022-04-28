<script>
import MenuBar from "../components/MenuBar/MenuBar.vue";

export default {
  data() {
    return {
      menuItem: [],
    };
  },
  components: {
    MenuBar,
  },
  computed: {
    key() {
      return this.$route.meta.activeMenuName;
    },
  },
  created() {
    console.log("我在这里");
    if (this.$store.state.menuBarList.length === 1) {
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
  <div class="flex flex-col flex-1 overflow-y-auto">
    <MenuBar v-bind:menuItem="menuItem" />
    <div class="routerView overflow-auto">
      <router-view :key="key"></router-view>
    </div>
  </div>
</template>

<style>
.routerView {
  padding-left: 16px;
  padding-right: 16px;
}
@media (min-width: 930px) {
  .routerView {
    padding-left: 80px;
    padding-right: 80px;
  }
}
</style>
