<template>
  <div class="space-y-3 SuperWide:space-y-6">
    <div class="bg-Background-1 p-3 SuperWide:p-5 col-span-4">
      <Swiper />
    </div>
    <div
      class="bg-Background-1 SuperWide:p-5 p-3 Wide:flex Wide:space-x-3 SuperWide:space-x-5 Wide:space-y-[0] space-y-2"
    >
      <RecommendCard :productList="RecommendProduct" cardName="热门推荐" />
      <RecommendCard :productList="NewstProduct" cardName="最近使用" />
    </div>
  </div>
</template>

<script>
import Swiper from "../components/Swiper.vue";
import RecommendCard from "../components/RecommendCard/RecommendCard.vue";
export default {
  data() {
    return {
      RecommendProduct: [],
      NewstProduct: [],
    };
  },
  components: {
    Swiper,
    RecommendCard,
  },
  created() {
    console.log("我在这里");
    this.findRecommendProduct();
    this.findNewstProduct();
    // this.findCatalogue();
  },
  methods: {
    findRecommendProduct() {
      fetch(
        "https://d40d2143-72af-4a3b-b428-2874934cbc4f.bspapp.com/recommendProduct",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ recommendType: "global", quantity: 4 }),
        }
      )
        .then((res) => res.json())
        .then((json) => {
          console.log(json);
          this.RecommendProduct = json;
        });
    },
    findNewstProduct() {
      fetch(
        "https://d40d2143-72af-4a3b-b428-2874934cbc4f.bspapp.com/recommendProduct",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ recommendType: "newst", quantity: 4 }),
        }
      )
        .then((res) => res.json())
        .then((json) => {
          console.log(json);
          this.NewstProduct = json;
        });
    },
  },
  computed: {},
};
</script>
