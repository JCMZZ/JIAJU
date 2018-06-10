<template>
  <div class="company-carousel-main">
    <img src="/static/img/company/main3.jpg" alt="">
    <transition>
      <div class="carousel-three" v-if="show">
        <img src="/static/img/company/main3-1.jpg" alt="">
        <img src="/static/img/company/main3-2.jpg" alt="">
        <img src="/static/img/company/main3-3.jpg" alt="">
        <img src="/static/img/company/main3-4.jpg" alt="">
        <img src="/static/img/company/main3-5.jpg" alt="">
        <img src="/static/img/company/main3-6.jpg" alt="">
        <div><p>工艺家具是指纯手工雕刻而成的具有极高艺术性、
          观赏性的一类家具的总称，一般工艺家具是相对于
          实用家具而言的，在注重家具实用性的基础上，更
          注重家具精湛的制作工艺和别具匠心的设计造型。</p></div>
      </div>
    </transition> 
  </div>
</template>
<script>
  import jq from '../../assets/js/fade'
  export default {
    name:'item-three',
    props:['show'],
    updated(){
      jq.default('.carousel-three>div>p').textillate({
        initialDelay:1100,
        in: { effect:'flipInX', delay:9},
      });
    }
  }
</script>
<style>
  .carousel-three{
    width:100%;
    height:100%;
    position: absolute;
    top:0;
    left:0;
    bottom:0;
    top:0;
    margin:auto;
    z-index:100;
  }
  .carousel-three>img{
    position: absolute;
    width:300px;
    height:170px;
    cursor:pointer;
    filter:grayscale(100%) opacity(50%);
    box-shadow:0 0 20px 5px #000;
  }
  .carousel-three>img:hover{
    filter:grayscale(0) opacity(100%);
  }
  .carousel-three>div{
    position: absolute;
    padding:10px;
    top:100px;
    left:-700px;
    width:39.5%;
    font-size:22px;
    height:auto;
    color:rgb(174, 174, 179);
    background: rgba(241, 166, 5, 0.1);
    box-shadow:0 0 50px 30px rgba(245, 201, 4, 0.4),0 0 70px 50px rgba(252, 165, 4, 0.4) inset;
    animation:carouselThreeText .8s ease-in-out .8s forwards;
  }
  .carousel-three>div>p{
    visibility: hidden;
  }
  .carousel-three img:nth-child(1){
    right:-350px;
    bottom:20px;
    animation:carouselThree1 .6s ease-in-out .8s forwards;
  }
  .carousel-three img:nth-child(2){
    right:-350px;
    bottom:20px;
    animation:carouselThree2 .6s ease-in-out .6s forwards;
  }
  .carousel-three img:nth-child(3){
    right:-350px;
    bottom:20px;
    animation:carouselThree3 .6s ease-in-out .4s forwards;
  }
   .carousel-three img:nth-child(4){
    right:-350px;
    bottom:20px;
    animation:carouselThree4 .8s ease-in-out forwards;
  }
  .carousel-three img:nth-child(5){
    right:1450px;
    bottom:200px;
    animation:carouselThree5 .8s ease-in-out .4s forwards;
  }
  .carousel-three img:nth-child(6){
    right:1450px;
    bottom:375px;
    animation:carouselThree5 .8s ease-in-out .6s forwards;
  }
  @keyframes carouselThree1 {
    0%{right:-350px;}
    50%{right:40px;}
    100%{right:20px;}
  }
  @keyframes carouselThree2 {
    0%{right:-350px;}
    50%{right:360px;}
    100%{right:340px;}
  }
  @keyframes carouselThree3 {
    0%{right:-350px;}
    50%{right:680px;}
    100%{right:660px;}
  }
  @keyframes carouselThree4 {
    0%{right:-350px;}
    50%{right:1000px;}
    100%{right:980px;}
  }
  @keyframes carouselThree5 {
    0%{right:1450px;}
    50%{right:0;}
    100%{right:20px;}
  }
  @keyframes carouselThreeText {
    0%{left:-700px;}
    50%{left:280px;}
    100%{left:240px;}
  }
</style>
