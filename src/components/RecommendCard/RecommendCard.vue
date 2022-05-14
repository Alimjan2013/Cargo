<template>
  <div class="bg-Background-3 flex-1 text-OpacityWhite-2 p-3 space-y-2">
    <div class="Wide:text-Body3 text-Sub2">{{ cardName }}</div>
    <div v-if="productList.length === 0">加载中</div>
    <div v-else class="grid grid-cols-4 gap-2">
      <router-link
        v-for="item in productList"
        :key="item"
        class="flex flex-col items-center space-y-1"
        v-bind:to="`/product/${item._id}/${item.catalogue.second}`"
      >
        <!-- todo ：fix flex-1 宽度不固定导致名称不出现 ...
       -->

        <picture class="Wide:w-7 Wide:h-7 w-6 h-6 rounded-2xl">
          <source type="image/webp" v-bind:srcset="item.cover" />
          <img
            class="Wide:w-7 Wide:h-7 w-6 h-6 rounded-2xl"
            v-bind:src="item.cover + '?imageMogr2/format/png/ignore-error/1'"
            v-bind:srcset="item.cover + '?imageMogr2/format/png/ignore-error/1'"
            alt="图片"
          />
        </picture>
        <p class="ExtraWide:text-Sub1 text-Sub3 truncate w-full text-center">
          {{ item.name }}
        </p>

        <button
          class="ExtraWide:px-3 ExtraWide:py-1 px-1 py-0 bg-OpacityWhite-1 text-Background-2 text-Sub3 hidden Wide:flex"
        >
          预览
        </button>
      </router-link>
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
