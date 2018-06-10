<template>
  <div class="advertising">
    <img :src="'/static/img/advertising/'+index+'.jpg'" alt="">
    <span  @click="jump(index)">友 情 链 接</span>
  </div>
</template>
<script>
  export default{
    name:'advertising',
    data(){
      return{
        sit:['http://www.meilele.com',
        'https://www.ikea.cn',
        'https://www.gome.com.cn',
        'http://www.homekoo.com',
        'http://www.juran.com.cn/',
        'http://www.bjoppein.com',
        'http://www.51jiabo.com',
        'https://kukahome.tmall.com',
        'https://www.tmall.com'],
        index:1
      }
    },
    methods:{
      change(){
        this.index++;
        if(this.index>9){
          this.index=1;
        }
        setTimeout(this.change,5000);
      },
      jump(index){
        window.open(this.sit[index]);
      }
    },
    mounted(){
      setTimeout(this.change,5000);
    }
  }
</script>
<style>
  .advertising{
    width:100%;
    position: absolute;
    top:395px;
    left:0;
  }
  .advertising span{
    position: absolute;
    left:0;
    top:0;
    bottom:0;
    right:0;
    margin:auto;
    opacity:0;
    background:rgba(0,0,0,0.2);
    transition:all 1s linear;
    line-height:100px;
  }
  .advertising img{
    filter:grayscale(1);
  }
  .advertising:hover img{
    filter:grayscale(0);
  }
  .advertising span:hover{
    opacity: 1;
    cursor: pointer;
    color:rgb(255, 0, 13);
  }
</style>
