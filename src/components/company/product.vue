<template>
  <div>
    <img src="/static/img/company/product/product-bg.jpg" alt="">
    <transition>
      <div v-if="show" class="company-product">
        <img src="/static/img/company/product/logo.png" alt="">
        <img src="/static/img/company/product/title.png" alt="">
        <div>
          <img src="/static/img/company/product/product1.png" alt="">
          <h1>长椿木</h1>
          <p>椿木家具的光泽度比较强,简洁明亮,结构粗大，所以家具本身的硬度比较好，比较耐用</p>
        </div>
        <div>
          <img src="/static/img/company/product/product2.png" alt="">
          <h1>原生枣木</h1>
          <p>枣木是上乘的木料,纹理细腻致密,木质质地坚硬如铁,不开裂</p>
        </div>
        <div>
          <img src="/static/img/company/product/product3.png" alt="">
          <h1>胡桃木</h1>
          <p>胡桃木是胡桃科木材中较优质的一种,表面光泽饱和色彩丰富且饱满</p>
        </div>
        <div>
          <img src="/static/img/company/product/product4.png" alt="">
          <h1>血龙木</h1>
          <p>血龙木为印度国家王室专用木材,故被译为“帝王木”,有无香味,密度大,能沉水的特点</p>
        </div>
        <Panel class="company-product-panel company-product-rotate"/>
        <img src="/static/img/company/product/product18.png" alt="">
        <img src="/static/img/company/product/product19.png" alt="">
        <img src="/static/img/company/product/product20.png" alt="">
        <div class="company-product-rotate">
          <figure>
            <img src="/static/img/company/product/product15.jpg">
            <figcaption>樟木</figcaption>
          </figure>
          <figure>
            <img src="/static/img/company/product/product16.jpg">
            <figcaption>碳化木</figcaption>
          </figure>
          <figure>
            <img src="/static/img/company/product/product17.jpg">
            <figcaption>楠木</figcaption>
          </figure>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
  import Panel from './product-panel.vue'
  export default {
    name:'product',
    props:['show'],
    components:{
      Panel
    }
  }
</script>
<style>
  .company-product{
    background:rgba(175, 31, 69, 0.453);
  }
  .company-product>img,
  .company-product>div{
    position: absolute;
  }
  .company-product>img:nth-child(1),
  .company-product>img:nth-child(2){
    z-index:500;
    opacity:0;
    animation: productLogo 1.5s ease-in-out .5s forwards;
  }
  .company-product>img:nth-child(1){
    left:5px;
    top:5px;
  }
  .company-product>img:nth-child(2){
    transform:rotate(45deg);
    left:110px;
    top:-60px;
  }
  @keyframes productLogo {
    from{opacity:0;}
    to{opacity:1;}
  }
  .company-product>div:not(.company-product-rotate){
    cursor: pointer;
    width:303px;
    height:210px;
    transform:rotate(-90deg);
    opacity:0;
    animation: productImgs 1s ease-in-out .8s forwards;
  }
  .company-product>div>img{
    filter: saturate(120%);
  }
  .company-product>div>h1:hover{
    opacity:0;
  }
  .company-product>div>h1:hover+p{
    transition:all .2s ease-in-out;
    opacity:1;
  }
  .company-product>div>p,
  .company-product>div>h1{
    position: absolute;
    top:0;
    left:0;
    bottom:0;
    right:0;
    margin:auto;
    transform:rotate(90deg);
  }
  .company-product>div>p{
    width:130px;
    height:auto;
    bottom:25%;
    top:25%;
    opacity:0;
  }
  .company-product>div>h1{
    width:140px;
    height:120px;
    color:goldenrod;
    z-index:1000;
    line-height:120px;
  }
  .company-product>div:nth-child(3){
    right:70px;
    top:50px;
    z-index:1200;
  }
  .company-product>div:nth-child(4){
    right:-40px;
    top:210px;
  }
  .company-product>div:nth-child(5){
    right:70px;
    bottom:60px;
  }
  .company-product>div:nth-child(6){
    right:170px;
    top:210px;
  }
  @keyframes productImgs {
    from{opacity:0;}
    to{opacity:1;}
  }
  .company-product-panel{
    opacity:0;
    overflow: hidden;
    width:860px;
    height:380px;
    bottom:5px;
    left:0;
    box-shadow:0 0 15px 5px rgba(247, 245, 245, 0.863);
    animation: productPanel 1.2s ease-in-out .6s forwards;
  }
  @keyframes productPanel {
    0%{left:-1200px;opacity:0;}
    50%{left:15px;opacity:1;}
    100%{left:0;opacity:1;}
  }
  .company-product>img:nth-child(8){
    right:0;
    bottom:0;
  }
  .company-product>img:nth-child(9){
    right:0;
    top:0;
  }
  .company-product>img:nth-child(10){
    right:300px;
    bottom:0;
  }
  .company-product>img:nth-child(8),
  .company-product>img:nth-child(9),
  .company-product>img:nth-child(10){
    transform-origin:50% 50%;
    animation: productImgRotate 24s linear infinite;
  }
  @keyframes productImgRotate {
    0%{transform:rotate(0)}
    100%{transform:rotate(360deg)}
  }
  .company-product>div:last-child{
    width:700px;
    left:15%;
    top:10px;
    opacity:0;
    animation:productFigure .8s ease-in-out .4s forwards;
  }
  .company-product>div:last-child>figure{
    position: relative;
    display: inline-block;
    border-radius:50%;
    overflow: hidden;
    margin-left:10px;
    cursor: pointer;
    box-shadow:0 0 15px 5px rgba(247, 245, 245, 0.863);
  }
  .company-product>div:last-child>figure:hover{
    transform:scale(1.05,1.05);
  }
  .company-product>div:last-child>figure>figcaption{
    width:100%;
    height:50px;
    font-size:30px;
    font-weight:600;
    position: absolute;
    bottom:0;
    left:0;
    background: rgba(74, 42, 45, 0.671);
    color:#9e9887;
  }
  @keyframes productFigure {
    0%{top:-800px;opacity:0;}
    50%{top:20px;opacity:1;}
    100%{top:10px;opacity:1;}
  }
</style>
