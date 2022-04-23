<template>
  <div class="flex flex-col bg-Background-1 h-full px-2 py-2">
    <MenuItem
      v-for="name of MenuItemList"
      :key="name._id"
      v-bind:menuName="name.name"
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
    handleClick(id) {
      console.log(id);
      const activeindex = this.MenuItemList.findIndex(
        (item) => item.active === true
      );
      this.MenuItemList[activeindex].active = false;
      this.MenuItemList[id - 1].active = true;
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
