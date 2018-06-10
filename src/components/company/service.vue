<template>
  <div>
    <img src="/static/img/company/service/service-bg.jpg" alt="">
    <transition>
      <div v-if="show" class="company-service">
        <div>
          <img src="/static/img/company/service/title1.png" alt="">
          <img src="/static/img/company/service/title2.png" alt="">
          <img src="/static/img/company/service/title3.png" alt="">
          <img src="/static/img/company/service/title4.png" alt="">
        </div>
        <div class="signs">
          <div>
            <Sign text="信息化规划" num="1" :islong="true"/>
          </div>
          <Sign text="管理优化" num="2" :islong="true"/>
          <Sign text="管理固化" num="3" :islong="true"/>
          <Sign text="管理咨询" num="4" :islong="true"/>
          <Sign text="IT规划咨询" num="5" :islong="true"/>
          <div>
            <Sign text="软件实施" num="6" :islong="false"/>
          </div>
        </div>
        <div>
          <img src="/static/img/company/service/server.jpg" alt="">
          <p>
            <span>突出一个“快捷”</span>
            <span>确保一个“质量”</span>
            <span>落实一个“满意”</span>
          </p>
          <Promise text="所购产品免费保修三年，核心部件保修六年，保障品质，让您用的更放心。" num="1"/>
          <Promise text="保修期内持有效购买凭证免费上门服务。" num="2"/>
          <Promise text="市区内24小时上门服务，郊区内72小时上门服务。" num="3"/>
        </div>
        <div>
          <div :class="{companyhours:isActive===0}">
            <div>
              <h1>热线电话</h1>
              <h2>400-xxx-xxxx</h2>
            </div>
          </div>
          <div :class="{companyhours:isActive===1}">
            <div>
              <h1>电话留言</h1>
              <h2>076923836666</h2>
            </div>
          </div>
          <div :class="{companyhours:isActive===2}">
            <div>
              <h1>服务邮箱</h1>
              <h2>jiaju@jiaju.com</h2>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
  import Sign from './sign.vue'
  import Promise from './promise.vue'
  import jq from '../../assets/js/fade'
  export default {
    name:'service',
    props:['show'],
    data(){
      return{
        isActive:0
      }
    },
    components:{
      Sign,
      Promise
    },
    methods:{
      change(){
        this.isActive++
        this.isActive>2 && (this.isActive=0);
        setTimeout(this.change,3000);
      }
    },
    updated(){
      jq.default('.company-service>div:nth-child(3)>p').textillate({
        initialDelay:900,
        in: { effect:'flipInX', delay:25},
      });
    },
    mounted(){
      this.change();
    }
  }
</script>
<style>
  .company-service>div>img,
  .company-service>div,
  .company-service>img{
    position: absolute;
  }
  .company-service>div:nth-child(1){
    width: 300px;
    height: 450px;
    left:0;
    top:0;
    bottom:0;
    margin:auto;
  }
  .company-service>div:nth-child(1)>img:nth-child(1){
    opacity:0;
    top:20px;
    right:0;
    animation:serviceTitle1 .8s ease-in-out .6s forwards;
  }
  @keyframes serviceTitle1 {
    from{top:10px;opacity:0}
    to{top:49px;opacity:1}
  }
  .company-service>div:nth-child(1)>img:nth-child(2){
    opacity:0;
    top:74px;
    right:0;
    animation:serviceTitle2 .6s ease-in-out .4s forwards;
  }
  @keyframes serviceTitle2 {
    from{top:34px;opacity:0}
    to{top:74px;opacity:1}
  }
  .company-service>div:nth-child(1)>img:nth-child(3){
    top:102px;
    right:24px;
    opacity:0;
    animation:serviceTitle3 .6s ease-in-out 1s forwards;
  }
  @keyframes serviceTitle3 {
    from{opacity:0}
    to{opacity:1}
  }
  .company-service>div:nth-child(1)>img:nth-child(4){
    top:212px;
    right:72px;
    opacity:0;
    animation:serviceTitle3 .6s ease-in-out 1s forwards;
  }
  .signs{
    position: absolute;
    top:10px;
    left:10px;
  }
  .signs>div{
    opacity: 0;
    position: absolute;
    display: inline-block;
  }
  .signs>div:nth-child(1){
    left:0;
    top:0;
    width:200px;
    height:100px;
    overflow: hidden;
    animation: serviceSign1 .4s ease-in-out .6s forwards;
  }
  @keyframes serviceSign1 {
    from{left:-30px;opacity:0;}  
    to{left:0;opacity:1;}  
  }
  .signs>div:nth-child(1)>div{
    right:25px;
  }
  .signs>div:nth-child(2){
    left:200px;
    animation: serviceSign2 .4s ease-in-out .7s forwards;
  }
  @keyframes serviceSign2 {
    from{left:170px;opacity:0;}  
    to{left:200px;opacity:1;}  
  }
  .signs>div:nth-child(3){
    left:425px;
    animation: serviceSign3 .4s ease-in-out .8s forwards;
  }
  @keyframes serviceSign3 {
    from{left:395px;opacity:0;}  
    to{left:425px;opacity:1;}  
  }
  .signs>div:nth-child(4){
    left:650px;
    animation: serviceSign4 .4s ease-in-out .9s forwards;
  }
  @keyframes serviceSign4 {
    from{left:620px;opacity:0;}  
    to{left:650px;opacity:1;}  
  }
  .signs>div:nth-child(5){
    left:875px;
    animation: serviceSign5 .4s ease-in-out 1s forwards;
  }
  @keyframes serviceSign5 {
    from{left:845px;opacity:0;}  
    to{left:875px;opacity:1;}  
  }
  .signs>div:nth-child(6){
    width:240px;
    height:100px;
    overflow: hidden;
    left:1070px;
    animation: serviceSign6 .4s ease-in-out 1.1s forwards;
  }
  @keyframes serviceSign6 {
    from{left:1100px;opacity:0;}  
    to{left:1070px;opacity:1;}  
  }
  .signs>div:nth-child(6)>div{
    left:30px;
  }
  .company-service>div:nth-child(3){
    opacity:0;
    left:320px;
    top:200px;
    width:726px;
    height:349px;
    box-shadow:0 0 30px 15px rgba(111,59,94,0.8),0 0 30px 15px rgba(111,59,94,0.8) inset;
    animation:serviceTitle3 .8s ease-in-out .7s forwards;
  }
  .company-service>div:nth-child(3)>img{
    position: absolute;
    left: 0;
    top: 0;
    width:inherit;
    height: inherit;
    opacity:.8;
  }
  .company-service>div:nth-child(3)>p{
    visibility: hidden;
    position: absolute;
    top:30px;
    left:auto;
    right:30px;
    margin:auto;
    z-index:500;
    font-size:20px;
    color:aliceblue;
    font-weight:700;
    letter-spacing:2px;
    visibility: hidden;
  }   
  .company-service>div:nth-child(3)>div{
    opacity:0;
  }   
  .company-service>div:nth-child(3)>div:nth-child(3){
    left:300px;
    top:80px;
    animation:servicePromise1 .6s ease-in-out .7s forwards;
  }  
  @keyframes servicePromise1 {
    0%{left:350px;opacity:0;}
    50%{left:270px;opacity:1;}
    100%{left:300px;opacity:1;}
  }
  .company-service>div:nth-child(3)>div:nth-child(4){
    left:250px;
    top:160px;
    animation:servicePromise2 .6s ease-in-out .9s forwards;
  } 
  @keyframes servicePromise2 {
    0%{left:300px;opacity:0;}
    50%{left:220px;opacity:1;}
    100%{left:250px;opacity:1;}
  } 
  .company-service>div:nth-child(3)>div:nth-child(5){
    left:300px;
    top:250px;
    animation:servicePromise1 .6s ease-in-out 1.1s forwards;
  }  
  .company-service>div:last-child{
    opacity: 0;
    right:0;
    bottom:80px;
    animation: serviceHours .8s ease-in-out .6s forwards;
  }
  @keyframes serviceHours {
    0%{right:0;opacity:0;}
    50%{right:45px;opacity:1;}
    100%{right:30px;opacity:1;}
  }
  .company-service>div:last-child>div{
    perspective:1000;
    position: relative;
    width:200px;
    height:129px;
  }
  .company-service>div:last-child>div>div{
    color:rgb(8, 8, 8);
    text-align: center;
    display: table;
    width:80%;
    position: absolute;
    top:0;
    bottom:0;
    right:0;
    left:0;
    margin: auto;
    transform:translateZ(50px);
  }
  .company-service>div:last-child>div>div>h1{
    margin-bottom:10px;
  }
  .companyhours{
    background-image: url('/static/img/company/service/hours.png');
    background-size:cover;
    background-position:0 0;
    background-repeat:no-repeat;
    box-shadow:0 0 30px 15px rgba(250, 249, 246, 0.8),0 0 250px 15px rgba(250, 249, 246, 0.8) inset;
  }
  .companyhours>div{
    color:rgb(250, 2, 2) !important;
  }
</style>
