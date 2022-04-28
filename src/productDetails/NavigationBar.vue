<template>
  <div
    class="flex w-full flex-row items-center py-2 p-2 space-x-2 bg-Background-1"
  >
    <a
      class="Wide:text-Body3 text-Sub2 px-2 py-1 text-OpacityWhite-3"
      @click="back"
    >
      <svg
        width="40"
        height="40"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="48" height="48" fill="white" fill-opacity="0.01" />
        <path
          d="M31 36L19 24L31 12"
          stroke="#f1f1f1"
          stroke-width="4"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </a>

    <div class="text-OpacityWhite-2 Wide:text-Body3 text-Sub2 flex-1">
      {{ title }}
    </div>
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
