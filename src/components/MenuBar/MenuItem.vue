<template>
  <router-link
    v-if="menuName === '车主生活'"
    class="SuperWide:text-Body1 Wide:text-Body3 text-Sub2 py-1 text-OpacityWhite-3"
    to="/index"
  >
    {{ menuName }}
  </router-link>

  <router-link
    :key="menuName"
    v-else
    class="SuperWide:text-Body1 Wide:text-Body3 text-Sub2 py-1 text-OpacityWhite-3"
    :to="`/productLibrary/${menuName}`"
  >
    {{ menuName }}
  </router-link>
</template>
<style>
.router-link-active {
  color: aliceblue;
}
</style>

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
