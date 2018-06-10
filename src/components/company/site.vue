<template>
  <div>
    <img style="filter:opacity(90%);" src="/static/img/company/site/site-bg.jpg" alt="">
    <transition>
      <div v-if="show" class="company-site">
        <div>
          <img src="/static/img/company/site/compass1.png" alt="">
          <img src="/static/img/company/site/compass2.png" alt="">
        </div>
        <Position title='朝阳体验馆' phone='010-XXXX555' 
        email='CY@jiaju.com' container='chaoyang'
        describe='再黑的黑夜也会迎来黎明，再长的坎坷也会出现平路，怀抱着一棵永不放弃的希望之心，明天就会有温暖的阳光雨露，坚持吧朋友，胜利就在你的下一步路！'
        :long='116.485547' :lat='39.916152' :hierarchy='15' 
        :event="slide" :index="1"/>
        <Position title='石家庄体验馆' phone='0311-XXXX555' 
        email='SJZ@jiaju.com' container='shijiazhuang'
        describe='在你不害怕的时间去斗牛，这不算什么；在你害怕时不去斗牛，也没有什么了不起；只有在你害怕时还去斗牛才是真正了不起。'
        :long='114.471514' :lat='37.9761' :hierarchy='14' 
        :event="slide" :index="2"/>
        <Position title='邢台体验馆' phone='0319-XXXX555' 
        email='XT@jiaju.com' container='xingtai'
        describe='心态决定看世界的眼光，行动决定生存的状态。要想活出尊严，展现不凡，只有改变观念，敢于和命运抗争！'
        :long='114.506719' :lat='37.054455' :hierarchy='15' 
        :event="slide" :index="3"/>
        <SiteCarousel city="chaoyang"
        :style="{animation:trigger===1?'siteExperience .6s ease-in-out forwards':'none'}" />
        <SiteCarousel city="shijiazhuang"
        :style="{animation:trigger===2?'siteExperience .6s ease-in-out forwards':'none'}" />
        <SiteCarousel city="xingtai"
        :style="{animation:trigger===3?'siteExperience .6s ease-in-out forwards':'none'}" />
        <img src="/static/img/company/site/title.png" alt="">
      </div>
    </transition>
  </div>
</template>
<script>
  import Position from './position.vue' 
  import SiteCarousel from './site-carousel.vue'
  export default {
    name:'site',
    data(){
      return{
        trigger:1,
        ok:false,
        timer:null
      }
    },
    props:['show'],
    components:{
      Position,
      SiteCarousel
    },
    methods:{
      slide(index){
        if(!this.ok) { return }
        index === 1 && (this.trigger = 1);
        index === 2 && (this.trigger = 2);
        index === 3 && (this.trigger = 3);
      }
    },
    watch:{
      show(){
        if(this.show){
          this.timer = setTimeout(()=>{
            this.show && (this.ok = true);
            !this.show && (this.ok = false);
          },1500);
        }else{
          this.ok = false;
          clearTimeout(this.timer);
          this.timer = null;
        }
      }
    }
  }
</script>
<style>
  .company-site>div:nth-child(1)>img,
  .company-site>div{
    position: absolute;
  }
  .company-site>div:nth-child(1){
    top:20px;
    left:20px;
    width:100px;
    height:100px;
    opacity:0;
    animation: siteCompassBg 1.5s ease-in-out .6s forwards;
  }
  @keyframes siteCompassBg {
    from{opacity:0;}
    to{opacity:1;}
  }
  .company-site>div:nth-child(1)>img{
    top:0;
    right:0;
    left:0;
    bottom:0;
    margin: auto;
  }
  .company-site>div:nth-child(1)>img:nth-child(2){
    animation:siteCompass 5s linear infinite forwards;
  }  
  @keyframes siteCompass {
    from{transform:rotate(0)}
    to{transform:rotate(360deg)}
  }
  .company-site>div:nth-child(2){
    opacity:0;
    bottom:5px;
    animation: sitePositionLeft .8s ease-in-out .7s forwards;
  }
  @keyframes sitePositionLeft {
    0%{left:-45px;opacity:0;}
    50%{left:25px;opacity:1;}
    100%{left:5px;opacity:1;}
  }
  .company-site>div:nth-child(3){
    opacity:0;
    bottom:5px;
    animation: sitePositionRight .8s ease-in-out  .4s forwards;
  }
  .company-site>div:nth-child(4){
    top:5px;
    opacity:0;
    animation: sitePositionRight .8s ease-in-out 1s forwards;
  }
  @keyframes sitePositionRight {
    0%{right:-45px;opacity:0;}
    50%{right:25px;opacity:1;}
    100%{right:5px;opacity:1;}
  }
  @keyframes siteExperience {
    0%{top:-350px;opacity:0;}
    50%{top:25px;opacity:1;}
    100%{top:15px;opacity:1;}
  }
  .company-site>img:last-child{
    width:139px;
    height:128px;
    position: absolute;
    top:0;
    left:0;
    right:0;
    bottom:0;
    margin:auto;
    z-index:1000;
    opacity:0;
    animation:siteTitle 2s ease-in-out .2s forwards;
  }
  @keyframes siteTitle {
    0%{opacity:0;}
    10%{opacity:1;}
    50%{opacity:1;right:0;bottom:0;}
    100%{opacity:1;right:1175px;bottom:200px;}
  }
</style>
