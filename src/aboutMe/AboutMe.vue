<template>
  <div
    class="grid gap-2 grid-cols-8 text-OpacityWhite-1 h-full space-y-2 Wide:space-x-0"
  >
    <div
      class="Wide:col-span-2 col-span-8 flex flex-col Wide:space-y-3 space-y-2"
    >
      <UserInfo />
      <ActiveCenter />
    </div>
    <div class="Wide:col-span-6 col-span-8 Wide:overflow-auto h-full">
      <OrderList />
    </div>
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
