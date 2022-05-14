<template>
  <div class="grid gap-2 grid-cols-8 text-OpacityWhite-1">
    <div class="col-span-2">
      <div>个人中心</div>
      <div>领券中心</div>
    </div>
    <div class="col-span-6"><OrderList /></div>
  </div>
</template>

<script>
import OrderList from "./OrderList.vue";
export default {
  components: {
    OrderList,
  },
};
</script>
