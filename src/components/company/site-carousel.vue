<template>
  <div class="site-carousel">
    <el-carousel :interval="5000" >
      <el-carousel-item v-for="item in 4" :key="item">
        <img :src="'/static/img/company/site/'+city+'/'+item+'.jpg'" alt="">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
  export default {
    name:'site-carousel',
    props:['city']
  }
</script>
<style>
  .site-carousel{
    top:-350px;
    opacity:0;
    left:155px;
    width:500px;
    height:300px;
    overflow: hidden;
  }
  .site-carousel .el-carousel__arrow{
    border-radius:5px;
    font-size:25px;
    width:25px;
  }
</style>
