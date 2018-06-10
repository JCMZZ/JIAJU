<template>
  <div class="company-carousel-main">
    <img src="/static/img/company/main4.jpg" alt="">
    <transition>
      <div class="carousel-four" v-if="show">
        <div>
          <img src="/static/img/company/main4-1.jpg" alt="">
          <h1>谦让</h1>
        </div>
        <div>
          <img src="/static/img/company/main4-2.jpg" alt="">
          <h1>协作</h1>
        </div>
        <div>
          <img src="/static/img/company/main4-3.jpg" alt="">
          <h1>团结</h1>
        </div>
        <div>
          <img src="/static/img/company/main4-4.jpg" alt="">
        </div>
        <h1><p>OPERATION TEAM</p></h1>
      </div>
    </transition> 
  </div>
</template>
<script>
  import jq from '../../assets/js/fade'
  export default {
    name:'item-four',
    props:['show'],
    updated(){
      jq.default('.carousel-four>h1>p').textillate({
        initialDelay:1000,
        in: { effect:'flipInX',delay:80},
      });
    }
  }
</script>
<style>
  .carousel-four{
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
  .carousel-four>div{
    position: absolute;
    cursor: pointer;
    width:400px;
    height:200px;
  }
  .carousel-four>div>img{
    width:100%;
    height:100%;
    transition: all .5s ease-in-out;
    box-shadow:0 0 10px 5px rgba(212, 248, 8, 0.4);
    filter:drop-shadow(0 0 30px rgba(202, 247, 2, 0.972)) opacity(80%) grayscale(70%);
  }
  .carousel-four>div:hover>img{
    transform:scale(1.05,1.05);
    filter:drop-shadow(0 0 10px rgba(74, 75, 71, 0.863)) opacity(100%) grayscale(0);
  }
  .carousel-four>div>h1{
    text-align: center;
    position: absolute;
    top:0;
    left:0;
    bottom:0;
    right:0;
    margin:auto;
    width: 80%;
    height:50px;
    padding-left:50px;
    letter-spacing:50px;
    line-height:50px;
    font-size:40px;
  }
  .carousel-four>div:nth-child(1)>h1{
    right:-800px;
  }  
  .carousel-four>div:nth-child(1):hover>h1{
    animation:carouselFourTextRight .5s ease-in-out forwards;
  }  
  .carousel-four>div:nth-child(2)>h1{
    bottom:-800px;
    opacity:0;
  }  
  .carousel-four>div:nth-child(2):hover>h1{
    animation:carouselFourTextBottom .5s ease-in-out forwards;
  }
  .carousel-four>div:nth-child(3)>h1{
    left:-800px;
  }  
  .carousel-four>div:nth-child(3):hover>h1{
    animation:carouselFourTextLeft .5s ease-in-out forwards;
  }  
  .carousel-four>h1{
    position: absolute;
    top:-30px;
    left:0;
    bottom:0;
    right:1000px;
    margin:auto;
    width:570px;
    height:100px;
    opacity:0;
    line-height:100px;
    font-size:60px;
    box-shadow:0 0 10px 5px rgba(0,0,0,0.2),0 0 10px 5px rgba(0,0,0,0.2) inset;
    animation:carouselFourTitle 4s ease-in-out .8s forwards;
  }
  .carousel-four>h1>p{
    visibility: hidden;
  }
  .carousel-four>div:nth-child(1){
    bottom:900px;
    right:20px;
    animation: carouselFour .8s ease-in-out .4s forwards;
  }
  .carousel-four>div:nth-child(2){
    bottom:900px;
    right:440px;
    animation: carouselFour .8s ease-in-out .2s forwards;
  }  
  .carousel-four>div:nth-child(3){
    bottom:900px;
    right:860px;
    animation: carouselFour .8s ease-in-out forwards;
  }  
  .carousel-four>div:nth-child(4){
    height:150px;
    top:-230px;
    right:20px;
    animation: carouselFourRight .6s ease-in-out 1s forwards;
  }
  @keyframes carouselFour {
    0%{bottom:900px;}
    50%{bottom:0;}
    100%{bottom:10px;}
  }  
  @keyframes carouselFourRight {
    0%{top:-230px;}
    50%{top:50px;}
    100%{top:30px;}
  }  
  @keyframes carouselFourTitle{
    0%{right:1000px;opacity: 0;}
    15%{right:-50px;opacity: 1;}
    30%{right:0;}
    70%{right:0;}
    85%{right:-720px;}
    100%{right:-700px;opacity: 1;}
  }
  @keyframes carouselFourTextBottom{
    0%{bottom:-800px;opacity:1;}
    50%{bottom:30px;}
    100%{bottom:0;opacity:1;}
  }
  @keyframes carouselFourTextLeft{
    0%{left:-800px;}
    50%{left:30px}
    100%{left:0}
  }
  @keyframes carouselFourTextRight{
    0%{right:-800px;}
    50%{right:30px}
    100%{right:0}
  }
</style>
