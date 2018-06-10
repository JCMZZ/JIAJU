<template>
  <div>
    <img src="/static/img/company/origin/origin-bg.jpg" alt="">
    <transition>
      <div v-if="show" class="company-origin">
        <img src="/static/img/company/origin/origin-bg1.jpg" alt="">
        <img src="/static/img/company/origin/origin1.jpg" alt="">
        <img src="/static/img/company/origin/origin2.jpg" alt="">
        <img src="/static/img/company/origin/origin3.jpg" alt="">
        <img src="/static/img/company/origin/origin4.jpg" alt="">
        <img src="/static/img/company/origin/origin5.jpg" alt="">
        <img src="/static/img/company/origin/origin6.jpg" alt="">
        <img src="/static/img/company/origin/origin7.jpg" alt="">
        <img src="/static/img/company/origin/bedeck.png" alt="">
        <p>
          <img src="/static/img/company/origin/origin8.jpg" alt="">
          <strong>古典家具起源</strong>
        </p>
        <div>
          <img src="/static/img/company/origin/brush-pen.png" alt="">
          <p>&nbsp;&nbsp;中国是世界上最古老、文化传统最悠久的国家之一，在其漫长的历史过程中，创造出了灿烂辉煌的民族文化。其中家具文化作为这个艺术宝库中的重要组成部分，几千年来，通过祖先们的劳动创造，逐步形成了一段段各具风格特色的独特形式。对历代家具的研究，会使我们从一个侧面了解当时的生产发展、生活习俗、思想感情以及审美情趣等。中国家具的艺术成就，对东西方都产生过不同程度的影响，在世界家具体系中，它占有重要的地位。</p>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
  import jq from '../../assets/js/fade'
  export default {
    name:'origin',
    props:['show'],
    updated(){
      jq.default('.company-origin>p>strong').textillate({
        initialDelay:700,
        in: { effect:'flipInX', delay:70},
      });
      jq.default('.company-origin>div>p').textillate({
        initialDelay:1100,
        in: { effect:'flipInX', delay:2},
      });
    }
  }
</script>
<style>
  .company-origin>img:nth-child(1){
    position: absolute;
    right:-200px;
    bottom:-200px;
    opacity:0;
    width:90%;
    height:90%;
    filter:grayscale(30%);
    box-shadow:0 0 35px 15px rgba(247, 243, 243, 0.3);
    animation: originBg 1s ease-in-out .5s forwards;
  }
  @keyframes originBg {
    0%{right:-150px;bottom:-150px;opacity:0;}
    50%{right:5px;bottom:5px;}
    100%{right:0;bottom:0;opacity:0.6;}
  }
  .company-origin>img:not(:first-child){
    width:200px;
    height:150px;
    position: absolute;
    bottom:10px;
    opacity:0;
    filter:sepia(100%) blur(0.5px);
    box-shadow:0 0 15px 5px rgba(255, 196, 0, 0.959);
  }
  .company-origin>img:not(:first-child):hover{
    cursor: pointer;
    filter:sepia(0) blur(0);
    box-shadow:0 0 15px 5px rgba(15, 15, 15, 0.959);
  }
  .company-origin>img:nth-child(2){
    animation: originImg1 .7s ease-in-out .6s forwards;
  }
  .company-origin>img:nth-child(3){
    animation: originImg2 .7s ease-in-out .8s forwards;
  }
  .company-origin>img:nth-child(4){
    animation: originImg3 .7s ease-in-out 1s forwards;
  }
  .company-origin>img:nth-child(5){
    animation: originImg4 .7s ease-in-out 1.2s forwards;
  }
  .company-origin>img:nth-child(6){
    animation: originImg5 .7s ease-in-out 1.4s forwards;
  }
  .company-origin>img:nth-child(7){
    animation: originImg6 .7s ease-in-out 1.6s forwards;
  }
  .company-origin>img:nth-child(8){
    width:232px;
    height:450px;
    top:20px;
    animation: originImg6 2s ease-out 1s forwards;
  }
  .company-origin>img:nth-child(9){
    width:150px;
    height:227px;
    top:10px;
    bottom:0;
    left:-200px;
    filter:sepia(0) blur(0);
    box-shadow:none;
    animation: originImg7 2s ease-in-out .8s forwards;
  }
  @keyframes originImg1 {
    0%{left:50px;opacity:0;}
    50%{left:-5px;}
    100%{left:10.5px;opacity:1;}
  }
  @keyframes originImg2 {
    0%{left:270px;opacity:0;}
    50%{left:216px;}
    100%{left:231.5px;opacity:1;}
  }
  @keyframes originImg3 {
    0%{left:490px;opacity:0;}
    50%{left:437px;}
    100%{left:452.5px;opacity:1;}
  }
  @keyframes originImg4 {
    0%{left:710px;opacity:0;}
    50%{left:658px;}
    100%{left:673.5px;opacity:1;}
  }
  @keyframes originImg5 {
    0%{left:930px;opacity:0;}
    50%{left:879px;}
    100%{left:894.5px;opacity:1;}
  }
  @keyframes originImg6 {
    0%{left:1150px;opacity:0;}
    50%{left:1100px;}
    100%{left:1115.5px;opacity:1;}
  }
  @keyframes originImg7 {
    0%{left:-200px;opacity:0;}
    50%{left:120px;}
    100%{left:100px;opacity:1;}
  }
  .company-origin>p{
    width:400px;
    height:146px;
    position: absolute;
    top:5px;
    left:0;
    right:0;
    margin:auto;
    transform:rotateY(90deg);
    animation: originTitle .6s ease-in .3s forwards;
  }
  .company-origin>p>img{
    filter:sepia(100%) blur(0.5px);
    box-shadow:0 0 15px 5px rgba(26, 25, 24, 0.959);
  }
  @keyframes originTitle {
    from{transform:rotateY(90deg);}
    to{transform:rotateY(0)}
  }
  .company-origin>p>strong{
    visibility: hidden;
    position: absolute;
    top:0;
    left:0;
    right:0;
    bottom:0;
    margin:auto;
    width:80%;
    height:55%;
    color:rgba(83, 83, 81, 0.931);
    font-size:38px;
    font-weight:600;
    letter-spacing:10px;
    padding-left:10px;
  }
  .company-origin>div{
    width:85%;
    height:40%;
    position: absolute;
    top:0;
    left:-1200px;
    right:0;
    bottom:0;
    margin:auto;
    opacity:0;
    box-shadow:0 0 40px 20px rgba(20, 20, 20, 0.5),0 0 500px 100px rgba(14, 13, 13, 0.5) inset;
    animation: originArticleBody .5s ease-in-out .8s forwards;
  }
  @keyframes originArticleBody {
    0%{left:-1200px;opacity:0;}
    100%{left:-290px;opacity:1;}
  }
  .company-origin>div>img{
    position: absolute;
    bottom:0;
    opacity:0;
    left:200px;
    animation: originArticlePen 3s ease-out 2s forwards;
  }
  @keyframes originArticlePen {
    0%{opacity:0;}
    100%{opacity:1;}
  }
  .company-origin>div>p{
    visibility: hidden;
    position: absolute;
    bottom:0;
    right:30px;
    width:60%;
    height:85%;
    color:goldenrod;
    font-size:20px;
    letter-spacing:3px;
    text-align:left;
  }  
</style>

