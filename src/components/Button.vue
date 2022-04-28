<template>
  <button class="Wide:text-Sub2 text-Sub3 Wide:p-1 p-0 text-OpacityWhite-1">
    {{ name }}
  </button>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: "去使用",
    },
  },
};
</script>
