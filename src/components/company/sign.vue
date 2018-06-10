<template>
  <div class="service-start">
    <div :style="{width:islong?'200px':'240px'}"></div>
    <div :style="{width:islong?'200px':'240px'}"></div>
    <div :style="{width:text.length>4?'90px':'60px'}">
      {{text}}
    </div>
    <strong>{{num}}</strong>
  </div>
</template>
<script>
  export default{
    name:'service-start',
    props:['text','num','islong']
  }
</script>
<style>
  .service-start{
    width:200px;
    height:100px;
    position: absolute;
    cursor: pointer;
  }
  .service-start>div:not(:nth-child(3)){
    height:50px;
    background:rgba(111,59,94,0.8);
  }  
  .service-start>div:nth-child(1){
    transform:skewX(45deg);
  }  
  .service-start>div:nth-child(2){
    transform:skewX(-45deg);
  } 
  .service-start>div:nth-child(3){
    display: table;
    position: absolute;
    top:0;
    left:0;
    right:0;
    bottom:0;
    margin:auto;
    font-size:25px;
    color:#eee;
    font-weight:700;
  } 
  .service-start strong{
    position: absolute;
    left:auto;
    right:10px;
    bottom:0;
    top:0;
    margin:auto;
    display: inline-block;
    width:30px;
    height:30px;
    border-radius:50%;
    color:rgb(193, 245, 4);
    background:rgb(255, 51, 0);
    line-height:30px;
  } 
</style>
