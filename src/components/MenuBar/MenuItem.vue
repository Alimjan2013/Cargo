<template>
  <p
    class="text-Body3 px-2 py-1"
    :class="active ? 'text-OpacityWhite-1' : 'text-OpacityWhite-3'"
    href=""
  >
    {{ menuName }}
  </p>
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
