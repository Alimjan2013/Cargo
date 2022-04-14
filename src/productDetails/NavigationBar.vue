<template>
  <div class="flex w-full flex-row items-center p-2 space-x-2">
    <Left @click="back" theme="outline" size="2em" fill="#f1f1f1" />
    <div class="text-OpacityWhite-2 text-Body3 flex-1">{{ title }}</div>
  </div>
</template>

<script>
import { Left } from "@icon-park/vue-next";
export default {
  props: {
    title: {
      type: String,
      default: "加载中",
    },
  },
  components: {
    Left,
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
  },
};
</script>
