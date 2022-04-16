<template>
  <div class="flex-1 space-y-7 px-4 pt-4 pb-7 overflow-auto bg-Background-1">
    <ProductBar
      v-for="name of barList"
      :key="name._id"
      v-bind:barName="name.name"
      class="flex-1"
    />
  </div>
</template>
<script>
import ProductBar from "./productBar/ProductBar.vue";
export default {
  methods: {
    findCatalogue() {
      fetch(
        "https://cargo1.azurewebsites.net/api/GetCatalogue?code=L09Grf3RtTiYr00XDFjSATItDvUMc1YwxM6yJrGZ3I4nLHYiEK8tng==",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          // body: JSON.stringify({ user_id: user_id }),
        }
      )
        .then((res) => res.json())
        .then((json) => {
          console.log(json);
          this.barList = json;
        });
    },
  },
  data() {
    return {
      name: "helo",
      barList: [],
    };
  },
  created() {
    console.log(this.name);
    this.findCatalogue();
  },
  components: {
    ProductBar,
  },
};
</script>
