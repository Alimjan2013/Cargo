<template>
  <div class="flex flex-col bg-Background-1 h-full px-2 py-2">
    <MenuItem
      v-for="name of MenuItemList"
      :key="name.id"
      v-bind:menuName="name.content"
      v-bind:active="name.active"
      @click="handleClick(name.id)"
    />
  </div>
</template>
<script>
import MenuItem from "./MenuItem.vue";
export default {
  data() {
    return {
      MenuItemList: [
        {
          id: 1,
          content: "车主生活",
          active: false,
        },
        {
          id: 2,
          content: "智能场景",
          active: true,
        },
        {
          id: 3,
          content: "个人中心",
          active: false,
        },
      ],
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
  components: {
    MenuItem,
  },
};
</script>
