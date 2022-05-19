<template>
  <div class="Wide:flex bg-Background-3 SuperWide:py-2 py-0 pl-1 hidden">
    <input
      type="text"
      class="placeholder:px-0 focus:border-Line-2 focus:ring-1 focus:outline-none p-0 SuperWide:py-1 SuperWide:px-2 focus:ring-Line-2"
      placeholder="请输入搜索内容"
      @click="handleClick()"
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
  <Dialog :open="isOpen" @close="setIsOpen" class="relative z-50">
    <div
      class="fixed inset-0 Wide:flex hidden flex-col justify-start items-center p-4 pt-6 SuperWide:pt-8 bg-OpacityBlack-3"
    >
      <DialogPanel
        class="w-full max-w-2xl SuperWide:max-w-6xl rounded space-y-2 SuperWide:space-y-3 bg-Background-2 p-3 SuperWide:p-5 text-OpacityWhite-1"
      >
        <div
          class="w-full flex bg-Background-3 py-0 SuperWide:p-4 SuperWide:space-x-3 pl-1"
        >
          <input
            type="text"
            class="placeholder:px-0 SuperWide:p-3 focus:border-Line-2 w-full focus:ring-1 focus:outline-none p-1 focus:ring-Line-2 SuperWide:text-Body2 text-Background-3"
            placeholder="请输入搜索内容"
            @click="handleClick()"
          />
          <!-- 大尺寸下的搜索icon -->
          <div class="px-1 py-0 my-auto hidden SuperWide:flex">
            <svg
              width="2em"
              height="2em"
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
          <!-- 普通尺寸下的搜索icon -->
          <div class="px-1 py-0 my-auto SuperWide:hidden">
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
        <RecommendCardForSearch
          :productList="RecommendProduct"
          class="w-full"
          cardName="热门推荐"
        />
      </DialogPanel>
    </div>
  </Dialog>
</template>

<script>
import { ref } from "vue";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  DialogDescription,
} from "@headlessui/vue";
import RecommendCardForSearch from "../RecommendCard/RecommendCardForSearch.vue";
export default {
  data() {
    return {
      MenuItemList: [],
      isOpen: false,
      RecommendProduct: [],
      //   setIsOpen: true,
    };
  },
  methods: {
    handleClick() {
      console.log("menu 被点了");
      this.isOpen = true;
      // if (name === "车主生活") {
      //   this.$router.replace("/store/index");
      // } else if (name === "个人中心") {
      //   this.$router.replace("/store/aboutme");
      // } else {
      //   this.$router.replace(`/store/productLibrary/${name}`);
      // }
    },
    findRecommendProduct() {
      fetch(
        "https://d40d2143-72af-4a3b-b428-2874934cbc4f.bspapp.com/recommendProduct",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ recommendType: "global", quantity: 8 }),
        }
      )
        .then((res) => res.json())
        .then((json) => {
          console.log(json);
          this.RecommendProduct = json;
        });
    },
    setIsOpen(status) {
      this.isOpen = status;
    },
  },

  created() {
    console.log("我在这里");
    this.findRecommendProduct();
  },
  components: {
    Dialog,
    DialogPanel,
    DialogTitle,
    DialogDescription,
    RecommendCardForSearch,
  },
};
</script>
