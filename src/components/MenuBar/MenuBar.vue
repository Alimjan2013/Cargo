<template>
  <div class="flex px-3 Wide:px-[80px] items-center bg-Background-1">
    <div class="flex flex-1 py-2 Wide:space-x-6 space-x-2">
      <MenuItem
        v-for="name of MenuItemList"
        :key="name._id"
        v-bind:menuName="name.name"
        @click="handleClick(name.name)"
      />
    </div>
    <div class="Wide:flex bg-Background-3 py-0 pl-1 hidden">
      <input
        type="text"
        class="placeholder:px-0 focus:border-Line-2 focus:ring-1 focus:outline-none p-0 focus:ring-Line-2"
        placeholder="请输入搜索内容"
      />
      <div class="px-1 py-0">
        <svg
          width="24"
          height="24"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="48" height="48" fill="white" fill-opacity="0.01" />
          <path
            d="M21 38C30.3888 38 38 30.3888 38 21C38 11.6112 30.3888 4 21 4C11.6112 4 4 11.6112 4 21C4 30.3888 11.6112 38 21 38Z"
            fill="none"
            stroke="#f1f1f1"
            stroke-width="4"
            stroke-linejoin="round"
          />
          <path
            d="M26.6568 14.3431C25.2091 12.8954 23.2091 12 21 12C18.7909 12 16.7909 12.8954 15.3431 14.3431"
            stroke="#f1f1f1"
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M33.2218 33.2218L41.7071 41.7071"
            stroke="#f1f1f1"
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </div>

    <router-link
      class="Wide:text-Sub1 text-Sub3 px-2 py-1 text-OpacityWhite-3"
      to="/store/aboutme"
    >
      <svg
        width="2em"
        height="2em"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="48" height="48" fill="white" fill-opacity="0.01" />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"
          stroke="#f1f1f1"
          stroke-width="4"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M24 23C26.7614 23 29 20.7614 29 18C29 15.2386 26.7614 13 24 13C21.2386 13 19 15.2386 19 18C19 20.7614 21.2386 23 24 23Z"
          fill="none"
          stroke="#f1f1f1"
          stroke-width="4"
          stroke-linejoin="round"
        />
        <path
          d="M10.022 38.332C10.3657 33.1206 14.7016 29 20 29H28C33.2914 29 37.6229 33.1097 37.9767 38.3113"
          stroke="#f1f1f1"
          stroke-width="4"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </router-link>
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
