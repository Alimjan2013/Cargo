<template>
  <div>
    <!-- 手机的幻灯片 -->
    <el-carousel height="300px" class="Wide:hidden">
      <el-carousel-item
        v-for="item in items"
        :key="item"
        class="bg-cover bg-center"
        :style="`background-image: url(${item.url})`"
      >
        <!-- <img
          class="w-fit"
          src="http://io.iooslo.tech/CarStore/%E6%88%AA%E5%B1%8F2022-04-12%2010.18.21.png"
          alt=""
        /> -->
      </el-carousel-item>
    </el-carousel>
    <!--  普通中的幻灯片 -->
    <el-carousel
      type="card"
      height="300px"
      indicator-position="none"
      class="Wide:block hidden SuperWide:hidden"
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
    <!--  超大屏幕下的幻灯片 -->
    <el-carousel
      height="750px"
      indicator-position="none"
      class="SuperWide:block hidden"
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
          url: "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-d40d2143-72af-4a3b-b428-2874934cbc4f/d0385c3a-3486-4d33-8749-a2d76d043fe5.webp",
        },
        {
          url: "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-d40d2143-72af-4a3b-b428-2874934cbc4f/7d4d6540-df89-4e67-8cee-616fb9c1cf68.webp",
        },
        {
          url: "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-d40d2143-72af-4a3b-b428-2874934cbc4f/510015b7-a79a-4496-8873-56ffc5100614.webp",
        },

        {
          url: "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-d40d2143-72af-4a3b-b428-2874934cbc4f/c717c2bb-0192-4209-895d-8d319204feba.webp",
        },
      ],
    };
  },
};
</script>
