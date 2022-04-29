<template>
  <div class="bg-Background-3 flex-1 text-OpacityWhite-2 p-3 space-y-2">
    <div class="Wide:text-Body3 text-Sub2">{{ cardName }}</div>
    <div v-if="productList.length === 0">加载中</div>
    <div v-else class="flex">
      <div
        v-for="item in productList"
        :key="item"
        class="flex flex-1 flex-col items-center space-y-1"
      >
        <img
          class="ExtraWide:w-8 ExtraWide:h-8 Wide:w-7 Wide:h-7 w-6 h-6 rounded-2xl"
          :src="item.cover"
          alt=""
        />
        <p class="ExtraWide:text-Sub1 text-Sub3 truncate">
          {{ item.name }}
        </p>
        <button
          class="ExtraWide:px-3 ExtraWide:py-1 px-1 py-0 bg-OpacityWhite-1 text-Background-2"
        >
          预览
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cardName: {
      type: String,
      default: "热门推荐",
    },
    productList: {
      type: Array,
      default: [],
    },
  },
  components: {},
  created() {},

  computed: {},
};
</script>
