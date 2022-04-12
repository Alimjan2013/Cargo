<script setup>
import AppBar from "./components/AppBar.vue";
import ProductBar from "./components/productBar/ProductBar.vue";
import MenuBar from "./components/MenuBar/MenuBar.vue";
</script>

<template>
  <div class="h-screen flex flex-col bg-Background-2">
    <div class="flex flex-1 px-[80px] space-x-2 overflow-auto">
      <div>
        <MenuBar />
      </div>
      <div class="flex-1 space-y-7 px-3 pt-3 pb-7 overflow-auto">
        <ProductBar class="flex-1" />
        <ProductBar class="flex-1" />
        <ProductBar class="flex-1" />
      </div>
    </div>

    <AppBar />
  </div>
</template>

<style>
@import "index.css";
</style>
