<template>
  <div class="bg-Background-3 text-OpacityWhite-2 p-3 space-y-2">
    <div class="Wide:text-Sub2 text-Sub3">{{ cardName }}</div>
    <div v-if="productList.length === 0">加载中</div>
    <div v-else class="grid grid-cols-4 gap-2">
      <div v-for="item in productList" :key="item" class="">
        <!-- todo ：fix flex-1 宽度不固定导致名称不出现 ...
       -->
        <router-link
          class="flex flex-col items-center space-y-1"
          v-bind:to="`/product/${item._id}/${item.catalogue.second}`"
        >
          <img
            class="Wide:w-7 Wide:h-7 w-6 h-6 rounded-2xl"
            :src="item.cover"
            alt=""
          />
          <p class="text-Sub3 truncate w-full text-center">
            {{ item.name }}
          </p>
        </router-link>
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
