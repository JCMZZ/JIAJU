<template>
  <div>
    <img style="opacity:.8" src="/static/img/company/culture/culture.jpg" alt="">
    <transition>
      <div class="company-culture" v-if="show">
        <img src="/static/img/company/culture/title.png" alt="">
        <div>
          <p>{{"“最佳服务精神”,把为顾客提供世界上第一流的服务作为最高的价值信念"}}</p>
          <h3>价值观</h3>
        </div>
        <div>
          <p>{{"在未来5到年，在国际家具产业转移的大背景下，中国家具行业将进入第二个高速发展时期。现代技术进步促进家具生产日益规模化，成本及价格的剧烈变化将迅速打破原有竞争格局；自动流水生产线的引进必然加大固定资产投入，必然会降低人工成本和生产效率；规模化生产和规范化生产成为可能。"}}</p>
          <h3>目标</h3>
        </div>
        <div>
          <p>{{"打造优良的企业文化!树立企业社会观的旗帜!为客户提供完善的服务体系,为员工创建家一般的工作环境!互惠互利,共同成长!"}}</p>
          <h3>发展观</h3>
        </div>
        <div>
          <p>{{"不做别人意见的牺牲品，只做自己心中的自由人。任何一种真诚而博大的爱都会在现实中得到应有的回报。善待别人，即是善待自己。你可以因表现不好而失败，但不能因孬种而失败。志当存高远，姿态要低矮。为了使自己快乐，请先包容别人。"}}</p>
          <h3>处世观</h3>
        </div>
        <div>
          <p>{{"秉承“因人成事”的理念，万为治力形成了核心产品之一“战略解码工作坊”。同时，因应客户的不同需求，提供理念普及型产品“业务领先的密码”以及为企业进行全面诊断及能力提升的“战略落地一体化解决方案”。为企业战略的宣贯、研讨做好知识和理念上的准备。"}}</p>
          <h3>战略</h3>
        </div>
        <div>
          <p>{{"一直以来坚持“质量第一，顾客第一，信誉第一”的经营指导思想，以团结务实，高效为企业精。用文化拉动，用制度推动，用机制驱动，用顶尖的人才带动。"}}</p>
          <h3 @click="isH=!isH"><span>经营思想</span></h3>
        </div>
        <div class="cultureImgs">
          <img src="/static/img/company/culture/culture1.jpg" alt="">
          <img src="/static/img/company/culture/culture2.jpg" alt="">
          <img src="/static/img/company/culture/culture3.jpg" alt="">
          <img src="/static/img/company/culture/culture4.jpg" alt="">
        </div>
        <img src="/static/img/company/culture/title-english.png" alt="">
        <img src="/static/img/company/culture/title-bak.png" alt="">
        <div class="cultureImgs">
          <img src="/static/img/company/culture/culture5.png" alt="">
          <img src="/static/img/company/culture/culture6.png" alt="">
          <img src="/static/img/company/culture/culture7.png" alt="">
          <img src="/static/img/company/culture/culture8.png" alt="">
          <img src="/static/img/company/culture/culture8.png" alt="">
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
  export default {
    name:'culture',
    props:['show'],
  }
</script>
<style>
  .company-culture>div:last-child>img,
  .company-culture>.cultureImgs,
  .company-culture>img,
  .company-culture>div{
    position: absolute;;
  }
  .company-culture>img:nth-child(1){
    left:30px;
    top:0;
    opacity:0;
    z-index:500;
    animation: cultureTitle 1s ease-in-out .3s forwards;
  }
  @keyframes cultureTitle {
    form{left:30px;opacity:0;}
    to{left:0;opacity:1;}
  }
  .company-culture>div:not(.cultureImgs){
    background:rgba(0,0,0,0.15);
    width:80px;
    height:0;
    top:-80px;
  }
  .company-culture>div>p{
    box-sizing: border-box;
    text-align:justify;
    width:100%;
    height:100%;
    padding:10px;
    color:#eee;
    font-size:5px;
    overflow: hidden;
  }
  .company-culture>div>h3{
    position: absolute;
    bottom:-100%;
    left:-50%;
    right:-50%;
    top:0;
    margin:auto;
    width:75px;
    height:75px;
    border-radius:50%;
    border:15px solid #e3dbe0;
    color:#eee;
    line-height:75px;
    background: #1a356e;
    cursor: pointer;
  }
  .company-culture>div:nth-child(3)>h3,
  .company-culture>div:nth-child(5)>h3,
  .company-culture>div:nth-child(6)>h3{
    background:#9cc2e7;
  }
  .company-culture>div:nth-child(2){
    left:350px;
    animation: cultureItem1 .7s ease-in-out .5s forwards;
  }
  @keyframes cultureItem1 {
    0%{top:-80px;height:0;}
    100%{top:0;height:190px;}
  }
  .company-culture>div:nth-child(3){
    left:500px;
    animation: cultureItem2 1s ease-in-out .5s forwards;
  }
  @keyframes cultureItem2 {
    0%{top:-80px;height:0;}
    100%{top:0;height:510px;}
  }
  .company-culture>div:nth-child(4){
    left:650px;
    animation: cultureItem3 1s ease-in-out .5s forwards;
  }
  @keyframes cultureItem3 {
    0%{top:-80px;height:0;}
    100%{top:0;height:270px;}
  }
  .company-culture>div:nth-child(5){
    left:800px;
    animation: cultureItem4 1s ease-in-out .5s forwards;
  }
  @keyframes cultureItem4 {
    0%{top:-80px;height:0;}
    100%{top:0;height:430px;}
  }
  .company-culture>div:nth-child(6){
    left:950px;
    animation: cultureItem5 1s ease-in-out .5s forwards;
  }
  @keyframes cultureItem5 {
    0%{top:-80px;height:0;}
    100%{top:0;height:490px;}
  }
  .company-culture>div:nth-child(7)>h3>span{
    position: absolute;
    left:0;
    right:0;
    bottom:0;
    top:0;
    line-height:25px;
    display:table;
    width:50px;
    margin:auto;
  }
  .company-culture>div:nth-child(7){
    left:1100px;
    animation: cultureItem6 1s ease-in-out .5s forwards;
  }
  @keyframes cultureItem6 {
    0%{top:-80px;height:0;}
    100%{top:0;height:315px;}
  }
  .company-culture>div:nth-child(8){
    width:440px;
    height:300px;
    bottom:15px;
    left:20px;
    z-index:-100;
  }
  .company-culture>div:nth-child(8)>img{
    position: absolute;
    border-radius:55% 0;
    box-shadow:0 0 20px 10px rgba(245, 241, 241, .518);
    opacity:0;
    filter:sepia(.3);
    cursor:pointer;
  }
  .company-culture>div:nth-child(8)>img:hover{
    box-shadow:0 0 20px 10px rgba(17, 16, 16, 0.518);
    filter:sepia(0);
    z-index:1000 !important;
  }
  .company-culture>div:nth-child(8)>img:nth-child(1){
    width:220px;
    height:150px;
    animation: cultureActivityOne .8s ease-in-out .8s forwards;
  }
  @keyframes cultureActivityOne {
    from{left:-20px;bottom:-20px;}
    to{left:0px;bottom:0px;opacity:.8;}
  }
  .company-culture>div:nth-child(8)>img:nth-child(2){
    transform:rotate(-90deg);
    width:220px;
    height:150px;
    animation: cultureActivityTwo .8s ease-in-out .8s forwards;
  }
  @keyframes cultureActivityTwo {
    from{left:15px;bottom:210px;}
    to{left:35px;bottom:190px;opacity:.8;}
  }
  .company-culture>div:nth-child(8)>img:nth-child(3){
    border-radius:0 55%;
    width:100px;
    height:150px;
    animation: cultureActivityThree .8s ease-in-out .8s forwards;
  }
  @keyframes cultureActivityThree {
    from{left:245px;bottom:-20px;}
    to{left:225px;bottom:0;opacity:.8;}
  }
  .company-culture>div:nth-child(8)>img:nth-child(4){
    border-radius:55% 0;
    width:300px;
    height:225px;
    animation: cultureActivityFour 1s ease-in-out .8s forwards;
  }
  @keyframes cultureActivityFour {
    from{left:245px;bottom:175px;}
    to{left:225px;bottom:155px;opacity:.8;}
  }
  .company-culture>img:nth-child(9){
    top:20px;
    left:100px;
  }
  .company-culture>img:nth-child(10){
    top:80px;
    left:100px;
  }
  .company-culture>div:last-child{
    z-index:-100;
    right:0;
    bottom:0;
  }
  .company-culture>div:last-child>img{
    opacity:0;
    filter:sepia(.3);
  }  
  .company-culture>div:last-child>img:nth-child(1){
    right:20px;
    bottom:330px;
    animation: cultureImgOne .4s linear 1.2s forwards;
  }
  @keyframes cultureImgOne {
    from{bottom:350px;right:0;opacity:0;}
    to{bottom:330px;right:20px;opacity:.7;}
  }
  .company-culture>div:last-child>img:nth-child(2){
    right:230px;
    bottom:233px;
    animation: cultureImgTwo .4s linear 1.2s forwards;
  }
  @keyframes cultureImgTwo {
    from{bottom:255px;right:250px;opacity:0;}
    to{bottom:233px;right:230px;opacity:.7;}
  }
  .company-culture>div:last-child>img:nth-child(3){
    right:235px;
    bottom:-5px;
    animation: cultureImgThree .4s linear 1.2s forwards;
  }
  @keyframes cultureImgThree {
    from{bottom:-25px;opacity:0;}
    to{bottom:-5px;opacity:.7;}
  }
  .company-culture>div:last-child>img:nth-child(4){
    right:15px;
    bottom:120px;
    animation: cultureImgFour .4s linear 1.2s forwards;
  }
  @keyframes cultureImgFour {
    from{right:-5px;bottom:100px;opacity:0;}
    to{right:15px;bottom:120px;opacity:.7;}
  }
  .company-culture>div:last-child>img:nth-child(5){
    right:440px;
    bottom:120px;
    animation: cultureImgFive .4s linear 1.2s forwards;
  }
  @keyframes cultureImgFive {
    from{right:460px;opacity:0;}
    to{right:440px;opacity:.7;}
  }
</style>
