<template>
  <div class="grid gap-2 grid-cols-8 text-OpacityWhite-1 h-full">
    <div class="col-span-2 flex flex-col space-y-5">
      <UserInfo />
      <ActiveCenter />
    </div>
    <div class="col-span-6 overflow-auto h-full"><OrderList /></div>
  </div>
</template>

<script>
import OrderList from "./OrderList.vue";
import UserInfo from "./UserInfo.vue";
import ActiveCenter from "./ActiveCenter.vue";
export default {
  components: {
    OrderList,
    UserInfo,
    ActiveCenter,
  },
};
</script>
