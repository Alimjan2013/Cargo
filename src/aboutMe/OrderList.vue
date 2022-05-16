<template>
  <div class="w-full h-full px-2 py-16 sm:px-0">
    <TabGroup>
      <div class="h-full flex flex-col">
        <div class="bg-Background-3 p-3 row-span-2 col-span-2">
          <div class="text-Body3 mb-3">订单中心</div>
          <TabList class="flex space-x-2 bg-Background-1 p-2">
            <Tab
              v-for="category in categoriesName"
              as="template"
              :key="category"
              v-slot="{ selected }"
            >
              <button
                :class="[
                  'w-full  py-1 text-Sub3 font-medium leading-5 ',
                  '',
                  selected
                    ? 'shadow bg-Background-3 text-OpacityWhite-1'
                    : ' text-OpacityWhite-3 hover:bg-Background-3 hover:text-OpacityWhite-2',
                ]"
              >
                {{ category }}
              </button>
            </Tab>
          </TabList>
        </div>

        <TabPanels class="mt-2 bg-Background-3 flex-1 overflow-auto">
          <TabPanel
            v-for="(posts, idx) in Object.values(categories)"
            :key="idx"
            :class="[
              'rounded-xl  p-3 overflow-auto  h-full',
              'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
            ]"
          >
            <ul class="space-y-1">
              <p v-if="posts.length === 0">暂无内容</p>
              <li
                v-for="post in posts"
                :key="post._id"
                class="relative bg-Background-4 rounded-md p-3 hover:bg-gray-100 space-y-1"
              >
                <OrderCard :id="post._id" :catalogue="post.catalogue.second" />
              </li>
            </ul>
          </TabPanel>
        </TabPanels>
      </div>
    </TabGroup>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/vue";
import OrderCard from "./OrderCard.vue";
const categoriesName = ["全部商品", "待支付", "待下发", "已完成"];
const categories = ref({
  1: [
    {
      _id: "6262ad7c8cc5730001514312",
      catalogue: { first: "智能场景", second: "实用系列" },
    },
    {
      _id: "6262adcc5e2c5700018cc6e2",
      catalogue: { first: "智能场景", second: "实用系列" },
    },
    {
      _id: "626a3d7777a7c6000104e0d2",
      catalogue: { first: "智能场景", second: "实用系列" },
    },
    {
      _id: "626a3db9eb12470001b00198",
      catalogue: { first: "智能场景", second: "实用系列" },
    },
    {
      _id: "6262aeff8d55d00001328553",
      catalogue: { first: "智能场景", second: "酷炫系列" },
    },
  ],
  2: [],
  3: [],
  4: [
    {
      _id: "6262ad7c8cc5730001514312",
      catalogue: { first: "智能场景", second: "实用系列" },
    },
    {
      _id: "6262adcc5e2c5700018cc6e2",
      catalogue: { first: "智能场景", second: "实用系列" },
    },
    {
      _id: "626a3d7777a7c6000104e0d2",
      catalogue: { first: "智能场景", second: "实用系列" },
    },
    {
      _id: "626a3db9eb12470001b00198",
      catalogue: { first: "智能场景", second: "实用系列" },
    },
    {
      _id: "6262aeff8d55d00001328553",
      catalogue: { first: "智能场景", second: "酷炫系列" },
    },
  ],
});
</script>
