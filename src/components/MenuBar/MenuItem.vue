<template>
  <router-link
    v-if="menuName === '车主生活'"
    class="text-Body3 px-2 py-1 text-OpacityWhite-3"
    to="/store/index"
  >
    {{ menuName }}
  </router-link>
  <router-link
    v-else-if="menuName === '个人中心'"
    class="text-Body3 px-2 py-1 text-OpacityWhite-3"
    to="/store/aboutme"
  >
    {{ menuName }}
  </router-link>
  <router-link
    :key="menuName"
    v-else
    class="text-Body3 px-2 py-1 text-OpacityWhite-3"
    :to="`/store/productLibrary/${menuName}`"
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
