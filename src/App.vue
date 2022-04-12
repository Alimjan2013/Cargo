<script setup>
import AppBar from "./components/AppBar.vue";
import ProductBar from "./components/productBar/ProductBar.vue";
</script>

<template>
  <div class="h-screen flex flex-col">
    <div class="flex-1 space-y-7 overflow-auto px-[120px] pb-7 bg-Background-2">
      <ProductBar class="flex-1" />
      <ProductBar class="flex-1" />
      <ProductBar class="flex-1" />
    </div>

    <AppBar />
  </div>
</template>

<style>
@import "index.css";
</style>
