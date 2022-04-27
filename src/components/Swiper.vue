<template>
  <div class="block h-full">
    <el-carousel height="300px" class="Wide:hidden">
      <el-carousel-item
        v-for="item in items"
        :key="item"
        class="bg-cover bg-center"
        :style="`background-image: url(${item.url})`"
      >
        <div class="text-OpacityWhite-1">hhh</div>
        <!-- <img
          class="w-fit"
          src="http://io.iooslo.tech/CarStore/%E6%88%AA%E5%B1%8F2022-04-12%2010.18.21.png"
          alt=""
        /> -->
      </el-carousel-item>
    </el-carousel>
    <el-carousel
      type="card"
      height="300px"
      indicator-position="none"
      class="Wide:block hidden"
    >
      <el-carousel-item
        v-for="item in items"
        :key="item"
        class="bg-cover bg-center"
        :style="`background-image: url(${item.url})`"
      >
        <!-- <img
          class="h-[250]"
          src="http://io.iooslo.tech/CarStore/%E6%88%AA%E5%B1%8F2022-04-12%2010.18.21.png"
          alt=""
        /> -->
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<style scoped>
/* .el-carousel__item h3 {
  color: #124282;
  font-size: 14px;
  opacity: 0.75;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
} */
</style>
<script>
export default {
  data() {
    return {
      items: [
        {
          url: "http://io.iooslo.tech/CarStore/%E6%88%AA%E5%B1%8F2022-04-12%2010.18.21.png",
        },
        {
          url: "http://io.iooslo.tech/CarStore/%E6%88%AA%E5%B1%8F2022-03-21%2022.07.05.png",
        },
        {
          url: "http://io.iooslo.tech/CarStore/%E6%88%AA%E5%B1%8F2022-04-12%2010.18.21.png",
        },
        {
          url: "http://io.iooslo.tech/CarStore/%E6%88%AA%E5%B1%8F2022-03-21%2022.07.05.png",
        },
      ],
    };
  },
};
</script>
