<template>
  <el-carousel :interval="6000" @change="change"
   indicator-position="inside">
    <el-carousel-item>
      <CarouselOne :show="one"/>
    </el-carousel-item>
    <el-carousel-item>
      <CarouselTwo :show="two"/>
    </el-carousel-item>
    <el-carousel-item>
      <CarouselThree :show="three"/>
    </el-carousel-item>
    <el-carousel-item>
      <CarouselFour :show="four"/>
    </el-carousel-item>
  </el-carousel>
</template>
<script>
    import CarouselOne from './carousel-item-one.vue'
    import CarouselTwo from './carousel-item-two.vue'
    import CarouselThree from './carousel-item-three.vue'
    import CarouselFour from './carousel-item-four.vue'
    export default{
        name:"company-carousel",
        components:{
          CarouselOne,
          CarouselTwo,
          CarouselThree,
          CarouselFour
        },
        data(){
            return {
                one:false,
                two:false,
                three:false,
                four:false
            }
        },
        methods:{
          change(now,old){
            now==0 && (this.one=!this.one);
            old==3 && (this.four=!this.four);
            now==1 && (this.two=!this.two);
            old==0 && (this.one=!this.one);
            now==2 && (this.three=!this.three);
            old==1 && (this.two=!this.two);
            now==3 && (this.four=!this.four);
            old==2 && (this.three=!this.three);
          },
        }
    }
</script>
<style>
    .company .el-carousel__indicators{
      display: none;
    }
    .company-carousel-main{
      width:100%;
      height:100%;
      position: relative;
    }
    .company-carousel-main>img{
      width:inherit;
      height:inherit;
      filter: brightness(120%) opacity(95%) saturate(200%);
    }
    .company>.el-carousel{
      margin-bottom:20px;
    }
    .el-carousel__container{
        height:550px;
    }
    .company>div:first-child .el-carousel__arrow{
      width:50px;
      height:100px;
      border-radius:10px;
      font-size:50px;
    }
    .el-carousel__arrow{
      background:rgba(0,0,0,0.3) !important;
    } 
    .el-carousel__arrow:hover{
      background:rgba(0,0,0,0.7) !important;
    }    
</style>
