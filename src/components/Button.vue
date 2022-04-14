<template>
  <button class="text-Sub2 p-1 text-OpacityWhite-1">{{ name }}</button>
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
