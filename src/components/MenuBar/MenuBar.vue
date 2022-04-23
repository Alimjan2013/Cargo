<template>
  <div class="flex flex-col bg-Background-1 h-full px-2 py-2">
    <MenuItem
      v-for="name of MenuItemList"
      :key="name._id"
      v-bind:menuName="name.name"
      @click="handleClick(name.name)"
    />
  </div>
</template>
<script>
import MenuItem from "./MenuItem.vue";
export default {
  data() {
    return {
      MenuItemList: [],
    };
  },
  methods: {
    handleClick(name) {
      console.log("menu 被点了");
      // if (name === "车主生活") {
      //   this.$router.replace("/store/index");
      // } else if (name === "个人中心") {
      //   this.$router.replace("/store/aboutme");
      // } else {
      //   this.$router.replace(`/store/productLibrary/${name}`);
      // }
    },
  },
  props: {
    menuItem: {
      type: Array,
      default: [],
    },
  },
  created() {
    console.log("我在这里");
    this.MenuItemList = this.$store.state.menuBarList;
  },
  components: {
    MenuItem,
  },
};
</script>
