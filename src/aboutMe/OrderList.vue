<template>
  <div class="w-full px-2 py-16 sm:px-0">
    <TabGroup>
      <div class="bg-Background-3 p-3">
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

      <TabPanels class="mt-2 bg-Background-3">
        <TabPanel
          v-for="(posts, idx) in Object.values(categories)"
          :key="idx"
          :class="[
            'rounded-xl  p-3 ',
            'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
          ]"
        >
          <ul class="space-y-1">
            <li
              v-for="post in posts"
              :key="post.id"
              class="relative bg-Background-4 rounded-md p-3 hover:bg-gray-100"
            >
              <h3 class="text-sm font-medium leading-5">
                {{ post.title }}
              </h3>

              <ul
                class="mt-1 flex space-x-1 text-xs font-normal leading-4 text-gray-500"
              >
                <li>{{ post.date }}</li>
                <li>&middot;</li>
                <li>{{ post.commentCount }} comments</li>
                <li>&middot;</li>
                <li>{{ post.shareCount }} shares</li>
              </ul>

              <a
                href="#"
                :class="[
                  'absolute inset-0 rounded-md',
                  'ring-blue-400 focus:z-10 focus:outline-none focus:ring-2',
                ]"
              />
            </li>
          </ul>
        </TabPanel>
      </TabPanels>
    </TabGroup>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/vue";
const categoriesName = ["全部商品", "待支付", "待下发", "已完成"];
const categories = ref({
  全部商品: [
    {
      id: 1,
      title: "Does drinking coffee make you smarter?",
      date: "5h ago",
      commentCount: 5,
      shareCount: 2,
    },
    {
      id: 2,
      title: "So you've bought coffee... now what?",
      date: "2h ago",
      commentCount: 3,
      shareCount: 2,
    },
  ],
  待支付: [
    {
      id: 1,
      title: "Is tech making coffee better or worse?",
      date: "Jan 7",
      commentCount: 29,
      shareCount: 16,
    },
    {
      id: 2,
      title: "The most innovative things happening in coffee",
      date: "Mar 19",
      commentCount: 24,
      shareCount: 12,
    },
  ],
  待下发: [
    {
      id: 1,
      title: "Ask Me Anything: 10 answers to your questions about coffee",
      date: "2d ago",
      commentCount: 9,
      shareCount: 5,
    },
    {
      id: 2,
      title: "The worst advice we've ever heard about coffee",
      date: "4d ago",
      commentCount: 1,
      shareCount: 2,
    },
  ],
  已完成: [
    {
      id: 1,
      title: "Ask Me Anything: 10 answers to your questions about coffee",
      date: "2d ago",
      commentCount: 9,
      shareCount: 5,
    },
    {
      id: 2,
      title: "The worst advice we've ever heard about coffee",
      date: "4d ago",
      commentCount: 1,
      shareCount: 2,
    },
  ],
});
</script>
