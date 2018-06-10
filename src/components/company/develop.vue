<template>
  <div>
    <img class="develop-bg" src="/static/img/company/develop/develop-bg.jpg" alt="">
    <transition>
      <div class="company-develop" v-if="show">
        <img src="/static/img/company/develop/title.png" alt="">
        <img src="/static/img/company/develop/honor.png" alt="">
        <img src="/static/img/company/develop/up.png" alt="">
        <div class="company-broken company-broken1 "></div>
        <div class="company-broken-bak company-broken1">
          <h2>1997年荣获“亚太室内大奖”</h2>
          <h2>2004年荣获“中国红星设计奖”</h2>
          <h2>2006年荣获“德国IF产品设计奖”</h2>
          <h2>2011年荣获“中国木魂—金斧奖”</h2>
          <h2>2014年荣获“居然杯设计大奖”</h2>
          <h2>2016年荣获“中国家具设计金点奖”</h2>
        </div>
        <div v-if="one" class="developOne">
          <img src="/static/img/company/develop/develop1.jpg" alt="">
          <p>APDF以一个新的国际性设计团体组织身份定位自身的发展及终极目标，倡导并逐步建立符合未来社会及行业发展的“设计标准”、“成就认定”“知识产权保护”“可持续发展”“传统工艺与文化”与“高新技术”</p>
        </div>
        <div v-if="two" class="developTwo">
          <img src="/static/img/company/develop/develop2.jpg" alt="">
          <p>RSDA跻身世界著名设计奖项之列，培育一批红星奖产品的忠实消费者。</p>
        </div>
        <div v-if="three" class="developThree">
          <img src="/static/img/company/develop/develop3.jpg" alt="">
          <p>德国IF国际设计论坛每年评选iF设计奖，它以“独立、严谨、可靠”的评奖理念闻名于世，旨在提升大众对于设计的认知，其最具分量的金奖素有“产品设计界的奥斯卡奖”之称。</p>
        </div>
        <div v-if="four" class="developFour">
          <img src="/static/img/company/develop/develop4.jpg" alt="">
          <p>斩获中国实木设计制造大奖“中国木魂—金斧奖”。</p>
        </div>
        <div v-if="five" class="developFive">
          <img src="/static/img/company/develop/develop5.jpg" alt="">
          <p>“居然杯CIDA中国室内设计大奖”以推动设计创新、促进装饰与设计市场繁荣，营造公平竞争环境，引导行业健康发展，表彰经得起实践和时间检验、具有创新精神和时代精神的最优秀设计作品与产品，表彰我国室内设计界成就卓越、贡献突出的设计师和专家学者为宗旨设立。</p>
        </div>
        <div v-if="six" class="developSix">
          <img src="/static/img/company/develop/develop6.jpg" alt="">
          <p>金点设计奖GPDA，是台湾创意设计中心执行，在台湾拥有35年历史，是台湾历史最悠久、最权威且最富知名度的专业设计竞赛。</p>
        </div>
        <div class="developSeven">
          <h4>搏击长空  嘉矩在腾飞</h4>
          <p>&nbsp;&nbsp;&nbsp;伴随着中国经济的高速发展和企业定位的准确，嘉矩如雄鹰般展翅地飞速发展。20017年，嘉矩硕果累累，获得生产、销售全面大丰收。三月份美式家具象牙白“夏洛蒂”系列产品隆重登场，国内各大中城市“夏洛蒂”专卖店如雨后春笋般发展起来，销售订单直追公司拳头产品“圣洛克”。在各地经销商争夺“夏洛蒂”经销权的热潮中，公司新产品欧式“美特世家”光彩夺目亮相八月深圳展会，短短半年时间公司连续设计制造两个系列新产品，加上公司“美特美家”和“圣洛克”两个系列，迅速发展专卖店将近200家，这就是被业界传为神话的“嘉矩速度”！这就是嘉矩品牌的影响力！这就是嘉矩公司董事长陈嘉矩先生的人格魅力的展示！嘉矩的此番成就，在欧美家具生产厂家中开辟了专卖店发展最多、设计生产产品系列最多的厂家之先河！在同行业中被传为佳话。</p>
        </div>
        <div class="developEight">
          <h1>二十年<strong>，</strong></h1>
          <h1>我们的足迹遍布全国</h1>
        </div>
        <div class="developNine">
          <img src="/static/img/company/develop/nationwide.jpg" alt="">
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
  import jq from '../../assets/js/fade'
  import myBroken from '../../assets/js/develop'
  export default {
    name:'develop',
    props:['show'],
    data(){
      return{
        reveal:[],
        one:false,
        two:false,
        three:false,
        four:false,
        five:false,
        six:false
      }
    },
    updated(){
      let echarts =myBroken.broken;
      let option = myBroken.option;
      let dom = document.querySelector('.company-broken')
      let myChart = echarts.init(dom);
      if (option && typeof option === 'object') {
         setTimeout(()=>{
           myChart.setOption(option, true);
           myChart.on('mouseover', (param)=>{
            switch (param.dataIndex) 
              { 
                case 0:console.log(0); 
                break; 
                case 1:this.one=true; 
                break; 
                case 2:this.two=true; 
                break; 
                case 3:this.three=true; 
                break; 
                case 4:this.four=true; 
                break; 
                case 5:this.five=true; 
                break; 
                case 6:this.six=true; 
                break; 
              }
           })
           myChart.on('mouseout',(param)=>{
            switch (param.dataIndex) 
              { 
                case 0:console.log(0); 
                break; 
                case 1:this.one=false; 
                break; 
                case 2:this.two=false; 
                break; 
                case 3:this.three=false; 
                break; 
                case 4:this.four=false; 
                break; 
                case 5:this.five=false; 
                break; 
                case 6:this.six=false; 
                break; 
              }
           })
         },1000);
      }
      jq.default('.developSeven>h4').textillate({
        initialDelay:1300,
        in: { effect:'flipInX', delay:60},
      });
      jq.default('.developSeven>p').textillate({
        initialDelay:1300,
        in: { effect:'flipInX', delay:2},
      });
    }
  }
</script>
<style>
  .develop-bg{
    filter:sepia(100%) saturate(3);
  }
  .company-develop>img,
  .company-develop>div{
    position: absolute;
  }
  .company-develop>img:nth-child(1){
    opacity:0;
    left:-130px;
    top:20px;
    animation: developTitleImg1 .6s ease-in-out .8s forwards;
  }
  @keyframes developTitleImg1 {
    0%{left:-130px;opacity:0;}
    50%{left:60px;opacity:1;}
    100%{left:30px;opacity:1;}
  }
  .company-develop>img:nth-child(2){
    bottom:-50px;
    left:-50px;
    opacity:0;
    filter:sepia(500%);
    animation: developTitleImg2 2s ease-out 1.3s forwards;
  }
  @keyframes developTitleImg2 {
    0%{left:-50px;bottom:-50px;opacity:0;}
    50%{left:0;bottom:0;opacity:.7;}
    100%{left:-15px;bottom:-15px;opacity:.7;}
  }
  .company-develop>img:nth-child(3){
    top:20px;
    right:60px;
    opacity:0;
    animation: developTitleImg3 .8s ease-out 1.6s forwards;
  }
  @keyframes developTitleImg3 {
    0%{top:40px;right:65px;opacity:0;}
    100%{top:20px;right:60px;opacity:.7;}
  }
  .company-broken,
  .company-broken-bak{
    width:125%;
    height:125%;
    left:-280px;
    bottom:0;
  }
  .company-broken{
    z-index:500;
  }
  .company-broken-bak>h2{
    position: absolute;
    color:goldenrod;
    font-size:16px;
  }
  .company-broken-bak>h2:nth-child(1){
    left:340px;
    bottom:290px;
  }
  .company-broken-bak>h2:nth-child(2){
    left:505px;
    bottom:115px;
  }
  .company-broken-bak>h2:nth-child(3){
    left:670px;
    bottom:390px;
  }
  .company-broken-bak>h2:nth-child(4){
    left:840px;
    bottom:215px;
  }
  .company-broken-bak>h2:nth-child(5){
    left:1000px;
    bottom:495px;
  }
  .company-broken-bak>h2:nth-child(6){
    left:1170px;
    bottom:320px;
  }
  .company-develop{
    background:rgba(87, 87, 84, 0.4);
  }
  .company-develop>div:not(.company-broken1){
    opacity:0;
    width:160px;
    min-height:130px;
    box-shadow:0 0 40px 20px rgba(10, 10, 10, 0.5),0 0 230px 100px rgba(19, 18, 18, 0.5) inset;
    z-index:1000;
  }
  .company-develop>div:not(.company-broken1)>img{
    position: relative;
    left:0;
    right:0;
    margin:auto;
    display: inline-block;
    border-radius:50%;
    filter:sepia(100%) blur(0.2px);
  }
  .company-develop>div:not(.company-broken1)>p{
    color:goldenrod;
    font-size:12px;
  }

  .developOne{
    left:70px;
    animation:developAxisOne .5s ease-in-out forwards;
  }  
  @keyframes developAxisOne {
    0%{top:35px;opacity:0;}
    100%{top:75px;opacity:1;}
  }
  .developTwo{
    left:230px;
    animation: developAxisTwo .5s ease-in-out forwards;
  }  
  @keyframes developAxisTwo {
    0%{top:220px;opacity:0;}
    100%{top:260px;opacity:1;}
  }
  .developThree{
    left:385px;
    animation: developAxisThree .5s ease-in-out forwards;
  }  
  @keyframes developAxisThree {
    0%{bottom:65px;opacity:0;}
    100%{bottom:105px;opacity:1;}
  }
  .developFour{
    left:560px;
    animation: developAxisFour .5s ease-in-out forwards;
  }  
  @keyframes developAxisFour {
    0%{top:130px;opacity:0;}
    100%{top:170px;opacity:1;}
  }
  .developFive{
    left:720px;
    animation: developAxisFive .5s ease-in-out forwards;
  }  
  @keyframes developAxisFive {
    0%{bottom:95px;opacity:0;}
    100%{bottom:135px;opacity:1;}
  }
  .developSix{
    left:885px;
    animation: developAxisSix .5s ease-in-out forwards;
  }  
  @keyframes developAxisSix {
    0%{bottom:60px;opacity:0;}
    100%{bottom:100px;opacity:1;}
  }
  .company-develop>div.developSeven{
    width:400px;
    height:220px;
    bottom:-300px;
    right:70px;
    z-index:400;
    animation: developSeven .8s ease-in-out 1s forwards;
  }
  .company-develop>div.developSeven>p{
    visibility: hidden;
    width:400px;
    font-size:13px;
    text-align:left;
  }
  .developSeven>h4{
    visibility:hidden;
    position: relative;
    left:-70px;
    top:-15px;
    font-size:23px;
    color:rgb(18, 124, 218);
  }
  @keyframes developSeven {
    0%{bottom:-300px;opacity:0;}
    50%{bottom:50px;opacity:1;}
    100%{bottom:20px;opacity:1;}
  }
  .company-develop>div.developEight{
    width:100px;
    height:auto;
    left:150px;
    top:90px;
    z-index:400;
    box-shadow:none;
    animation: developEight .6s ease-in-out 1.3s forwards;
  }
  .company-develop>div.developEight>h1>strong{
    display: inline-block;
    position: relative;
    top:-10px;
  }
  .company-develop>div.developEight>h1{
    box-shadow:0 0 25px 4px rgba(255, 251, 3, 0.2),0 0 20px 10px rgba(255, 251, 3, 0.2) inset;
    width:20px;
    font-size:14px;
    color:#fbae5a;
    border-radius:10px
  }
  .company-develop>div.developEight>h1:nth-child(2){
    position: relative;
    left:25px;
    bottom:25px;
  }
  @keyframes developEight {
    0%{left:150px;opacity:0;}
    50%{left:90px;opacity:1;}
    100%{left:95px;opacity:1;}
  }
  .company-develop>div.developNine{
    width:500px;
    height:375px;
    left:-30;
    top:-50;
    z-index:-100;
    box-shadow:none;
    animation:developNine .8s ease-in-out .4s forwards;
  }
  .company-develop>div.developNine>img{
    filter:brightness(100%);
  }  
  @keyframes developNine {
    0%{left:-30px;top:-50px;opacity:0;}
    50%{left:15px;top:20px;opacity:0.5;}
    100%{left:0;top:0;opacity:0.5;}
  }
</style>

