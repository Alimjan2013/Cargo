<template>
  <a
    class="text-Body3 px-2 py-1"
    :class="active ? 'text-OpacityWhite-1' : 'text-OpacityWhite-3'"
    href=""
  >
    {{ menuName }}
  </a>
</template>

<script>
export default {
  props: {
    active: {
      type: Boolean,
      default: false,
    },
    menuName: {
      type: String,
      default: "",
    },
  },
};
</script>
