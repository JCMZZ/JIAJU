<template>
  <el-carousel :interval="5000" indicator-position="inside">
    <el-carousel-item v-for="item in img" :key="item">
      <img class="img" :src="'/static/img/banner/'+item+'.jpg'" alt="">
    </el-carousel-item>
  </el-carousel>
</template>
<script>
    export default{
        name:"carousel",
        data(){
            return {
                img:[1,2,3,4]
            }
        }
    }
</script>
<style>
    .img{
        width:inherit;
        height:inherit;
    }
    .is-active button{
        background:red;
    }
    .body-carousel>div .el-carousel__arrow{
        width:100px;
        height:100px;
        font-size:50px;
    }
    .el-carousel__container{
        height:550px !important;
    }
</style>
