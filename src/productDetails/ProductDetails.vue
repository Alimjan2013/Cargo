<template>
  <div><p>heheh</p></div>
</template>
<script>
export default {
  data() {
    return {
      product: {},
      productID: "",
    };
  },
  methods: {
    // getProduct(){
    // },
  },
  created() {
    this.productID = this.$route.params.productID;

    console.log(this.$route.params.productID);
  },
};
</script>
