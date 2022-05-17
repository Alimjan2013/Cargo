<template>
  <div class="bg-Background-3 p-3 space-y-1">
    <div class="text-Sub2">领券中心</div>
    <div class="grid gap-1 grid-cols-6 Wide:grid-cols-3 gap-y-1">
      <div
        v-for="item in activeList"
        :key="item.name"
        class="flex flex-col items-center"
      >
        <img :src="item.img" class="w-6 h-6" alt="" />
        <p>{{ item.name }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import 订阅奖励 from "../assets/订阅奖励.png";
import 每日分享 from "../assets/每日分享.png";
import 兑换奖励 from "../assets/兑换奖励.png";
import 定时优惠 from "../assets/定时优惠.png";
import 下单奖励 from "../assets/下单奖励.png";
import 今日独享 from "../assets/今日独享.png";
export default {
  data() {
    return {
      activeList: [
        { name: "订阅奖励", img: 订阅奖励 },
        { name: "每日分享", img: 每日分享 },
        { name: "兑换奖励", img: 兑换奖励 },
        { name: "定时优惠", img: 定时优惠 },
        { name: "下单奖励", img: 下单奖励 },
        { name: "今日独享", img: 今日独享 },
      ],
    };
  },
};
</script>
