<template>
  <div class="company-carousel-main">
    <img src="/static/img/company/main1.jpg" alt="">
    <transition>
      <div class="carousel-one" v-if="show">
        <div>
          <p>{{'Exquisite elegance'.toUpperCase()}}</p>
          <p>{{'Durable'.toUpperCase()}}</p>
          <p>{{'Eco-Friendly'.toUpperCase()}}</p>
        </div>
        <div>
          <p>热线电话: 400 - 666 - 8888</p>
          <p>地    址: 北京市朝阳区XXX路XXX号</p>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
  import jq from '../../assets/js/fade'
  export default {
    name:'item-one',
    props:['show'],
    updated(){
      jq.default('.carousel-one>div:nth-child(2)>p:nth-child(1)').textillate({
        initialDelay:1000,
        in: { effect:'flipInX', delay:35},
      });
      jq.default('.carousel-one>div:nth-child(2)>p:nth-child(2)').textillate({
        initialDelay:2400,
        in: { effect:'flipInX', delay:35},
      });
    }
  }
</script>
<style>
  .carousel-one{
    width:100%;
    height:100%;
    position: absolute;
    top:0;
    left:0;
    bottom:0;
    right:0;
    margin:auto;
    z-index:100;
  }
  .carousel-one>div:nth-child(1){
    position: absolute;
    width:35%;
    height:150px;
    top:0;
    left:0;
    right:0;
    bottom:0;
    margin:auto;
    box-shadow:0 0 50px 30px rgba(0,0,0,0.5),0 0 70px 70px rgba(0,0,0,0.5) inset;
    animation: carouselOne 1s ease-in-out forwards
  }
  .carousel-one>div:nth-child(2){
    position: absolute;
    right:50px;
    bottom:40px;
    width:30%;
    height:50px;
  }
  .carousel-one>div:nth-child(2)>p{
    visibility: hidden;
    font-size:20px;
    margin-bottom:10px;
  }
  @keyframes carouselOne{
    from{left:700px;opacity:0}
    to{left:0;opacity:1;}
  }
  .carousel-one>div:nth-child(1)>p{
    position: absolute;
    width:100%;
    height:50px;
    font-size:23px;
    line-height:50px;
    color:rgb(248, 17, 17);
    opacity: 0;
  }
  .carousel-one>div:nth-child(1)>p:nth-child(1){
    top:0;
    animation: carouselOne1 1s ease-in-out .5s forwards;
  }
  .carousel-one>div:nth-child(1)>p:nth-child(2){
    top:50px;
    animation: carouselOne2 1s ease-in-out .5s forwards;
  }
  .carousel-one>div:nth-child(1)>p:nth-child(3){
    top:100px;
    animation: carouselOne3 1s ease-in-out .5s forwards;
  }
  @keyframes carouselOne1 {
    from{top:-250px;left:-250px;opacity:0;}
    to{top:0;left:0;opacity:1;}
  }
  @keyframes carouselOne2 {
    from{left:-450px;opacity:0;}
    to{left:0;opacity:1;}
  }
  @keyframes carouselOne3 {
    from{top:300px;left:200px;opacity:0;}
    to{top:100px;left:0;opacity:1;}
  }
</style>
