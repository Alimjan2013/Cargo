<template>
  <div class="Wide:flex justify-between text-OpacityWhite-2">
    <p>订单编号：{{ id }}</p>
    <p>下单时间：{{ creatDate }}</p>
  </div>
  <div class="grid gap-4 grid-cols-8">
    <img class="w-fit Wide:col-span-2 col-span-3" :src="cover" alt="" />
    <div
      class="Wide:col-span-5 col-span-3 mt-1 flex flex-col content-around text-xs font-normal leading-4 text-gray-500"
    >
      <p class="Wide:text-Sub1 text-Sub2 font-medium pb-3">
        {{ name }}
      </p>
      <p class="text-OpacityWhite-2 flex-1">
        {{ introduction }}
      </p>
      <p class="">¥ {{ price }}</p>
    </div>
    <p class="Wide:col-span-1 col-span-2 text-right">已完成</p>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      default: "",
    },
    catalogue: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      product: {},
      price: 0,
      cover: "",
      introduction: "介绍",
      name: "产品名称",
      creatDate: "2022-05-02",
      //   id: "12122343455",
    };
  },
  created() {
    // console.log(this.$props);
    this.getProductById(this.$props.id, this.$props.catalogue);
  },
  methods: {
    getProductById(ID, catalogue) {
      const productList = this.$store.state.productList.filter(
        (item) => item.catalogue === catalogue
      );
      if (productList.length !== 0) {
        const product = productList[0].product.filter(
          (item) => item._id === ID
        );
        if (product.length !== 0) {
          this.price = product[0].price;
          this.cover = product[0].cover;
          this.introduction = product[0].introduction;
          this.name = product[0].name;
          this.creatDate = product[0].creatDate;
          //   console.log(product);
        }
      } else {
        this.findProductByID(ID);
      }
    },
    //前置条件：当本地没有储存对于ID下的商品信息
    // 通过ID单条查询
    findProductByID(ID) {
      fetch(
        "https://d40d2143-72af-4a3b-b428-2874934cbc4f.bspapp.com/findItemByID",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ID: ID }),
        }
      )
        .then((res) => res.json())
        .then((json) => {
          if (json._id === "noData") {
            console.log("数据库没有返回相应数据");
          } else {
            this.price = json.price;
            this.cover = json.cover;
            this.introduction = json.introduction;
            this.name = json.name;
            this.creatDate = json.creatDate;
          }
        });
    },
  },
};
</script>
