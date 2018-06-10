<template>
  <div class="company-carousel-main">
    <img src="/static/img/company/main2.jpg" alt="">
    <transition>
      <div class="carousel-two" v-if="show">
        <div>
          <img src="/static/img/company/main2-1.jpg" alt="">
          <h4>奢华的办公</h4>
        </div>
        <div>
          <img src="/static/img/company/main2-2.jpg" alt="">
          <h4>安逸的工作</h4>
        </div>
        <div>
          <img src="/static/img/company/main2-3.jpg" alt="">
          <h4>优雅的会议</h4>
        </div>
        <div>
          <img src="/static/img/company/main2-4.jpg" alt="">
          <h4>优质的服务</h4>
        </div>
        <h1>Welcome To JIA JU</h1>
      </div>
    </transition>
  </div>
</template>
<script>
  import jq from '../../assets/js/fade'
  export default {
    name:'item-two',
    props:['show'],
    updated(){
      jq.default('.company-carousel-main .carousel-two>h1').textillate({
        initialDelay:800,
        in: { effect:'flipInX',delay:80},
      });
    }
  }
</script>
<style>
  .carousel-two{
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
  .carousel-two>div{
    cursor: pointer;
    perspective:1000;
    display:flex;
    width:287px;
    height:auto;
    position:absolute;
    z-index:100;
    transition:all .4s ease-in;
    box-shadow:0 0 30px 20px rgba(12, 12, 12, 0.4),0 0 70px 50px rgba(14, 13, 13, 0.4) inset;
  }
  .carousel-two>div>img{
    width:100%;
    filter: grayscale(100%) opacity(50%);
    box-shadow:0 0 70px 50px transparent inset;
  }
  .carousel-two>div:hover{
    transform: scale(1.1,1.1);
  }
  .carousel-two>div:hover>img{
    filter: grayscale(0) opacity(100%);
  }
  .carousel-two>div:hover h4{
    color:transparent !important;
  }
  .carousel-two>h1{
    width:80%;
    height:50px;
    font-size:50px;
    visibility: hidden;
    color:red;
    position: absolute;
    bottom:0;
    top:0;
    left:0;
    right:0;
    margin:auto;
  }
  .carousel-two>div>h4{
    width:80%;
    height:30px;
    color:rgb(14, 13, 13);
    position: absolute;
    bottom:0;
    top:0;
    margin:auto;
    font-size: 25px;
    transform:translateZ(100px);
    transition:all .7s ease-in;
  }
  .carousel-two>div:nth-child(1){
    top:40px;
    left:-320px;
    animation:carouselTwo1 0.6s ease-in-out forwards;
  }
  .carousel-two>div:nth-child(2){
    bottom:40px;
    left:-320px;
    animation:carouselTwo1 0.6s ease-in-out .6s forwards;
  }
  .carousel-two>div:nth-child(1)>h4,
  .carousel-two>div:nth-child(2)>h4{
    left:-500px;
    right:0;
  }
  .carousel-two>div:nth-child(1)>h4{
    animation:carouselTwoLeft  .6s ease-in-out 0.2s forwards;
  }
  .carousel-two>div:nth-child(2)>h4{
    animation:carouselTwoLeft  .6s ease-in-out 1s forwards;
  }
  .carousel-two>div:nth-child(3){
    top:40px;
    right:-320px;
    animation: carouselTwo4 0.6s ease-in-out .6s forwards;
  }
  .carousel-two>div:nth-child(4){
    bottom:40px;
    right:-320px;
    animation: carouselTwo4 0.6s ease-in-out 0.2s forwards;
  }
  .carousel-two>div:nth-child(3)>h4,
  .carousel-two>div:nth-child(4)>h4{
    right:-500px;
    left:0;
  }
  .carousel-two>div:nth-child(3)>h4{
    animation:carouselTwoRight  .6s ease-in-out 1s forwards;
  }
  .carousel-two>div:nth-child(4)>h4{
    animation:carouselTwoRight  .6s ease-in-out .6s forwards;
  }
  @keyframes carouselTwo1{
    0%{left:-320px;}
    50%{left:60px;}
    100%{left:20px}
  }
  @keyframes carouselTwo4{
    0%{right:-320px;}
    50%{right:60px;}
    100%{right:20px;}
  }
  @keyframes carouselTwoLeft {
    0%{left:-500px;opacity:0;}
    50%{left:50px;}
    100%{left:0;opacity:1;}
  }
  @keyframes carouselTwoRight {
    0%{right:-500px;opacity:0;}
    50%{right:50px;}
    100%{right:0;opacity:1;}
  }
</style>
