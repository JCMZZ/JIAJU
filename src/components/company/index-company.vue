<template>
  <div class="company">
    <CompanyCarousel/>
    <Origin :style="{height:bh+'px'}" :show="one"/>
    <Develop :style="{height:bh+'px'}" :show="two"/>
    <Culture :style="{height:bh+'px'}" :show="three"/>
    <Product :style="{height:bh+'px'}" :show="four"/>
    <Performance :style="{height:bh+'px'}" :show="five"/>
    <Service :style="{height:bh+'px'}" :show="six"/>
    <Team :style="{height:bh+'px'}" :show="seven"/>
    <Site :style="{height:bh+'px'}" :show="eight"/>
    <ul v-if="index >= 1" :style="{animation:isShow?'companyIndicatorMain .6s ease-in-out forwards':'none'}">
      <li v-for="(value,key) in items" :key="key"
      :class="{companyindicator:key+1 == index}"
      @click.stop="active(key)">
        <img :src="'/static/img/company/hint/'+(key+1)+'.png'" alt="">
      </li>
    </ul>
  </div>
</template>
<script>
  import keydown from '../../assets/js/keydown.js'
  import bus from '../../assets/js/bus'
  import wheel from '../../assets/js/mousewheel'
  import * as TWEEN from 'tween.js'
  import offset from '../../assets/js/setoff'
  import scroll from '../../assets/js/window'
  import CompanyCarousel from './carousel.vue'
  import Origin from './origin.vue'
  import Develop from './develop.vue'
  import Culture from './culture.vue'
  import Product from './product.vue'
  import Performance from './performance.vue'
  import Service from './service.vue'
  import Team from './team.vue'
  import Site from './site.vue'
  export default{
    name:'company',
    components:{
      CompanyCarousel,
      Origin,
      Develop,
      Culture,
      Product,
      Performance,
      Service,
      Team,
      Site
    },
    data(){
      return {
        length:[],
        hourly:true,
        number:0,
        index:0,
        last:0,
        timer:null,
        bh:0,
        shows:[],
        one:false,
        two:false,
        three:false,
        four:false,
        five:false,
        six:false,
        seven:false,
        eight:false,
        items:['古典家具起源','发展历程','企业文化','产品特色','业绩一览','服务理念','团队核心','嘉矩体验','友情链接'],
        isShow:false
      }
    },
    methods:{
      top(selector){
        return offset.offsetTop(document.querySelector(selector))
      },
      getTop(){
        this.length[0]=0;
        this.length[1]=this.top('.company>div:nth-child(2)');
        this.length[2]=this.top('.company>div:nth-child(3)');
        this.length[3]=this.top('.company>div:nth-child(4)');
        this.length[4]=this.top('.company>div:nth-child(5)');
        this.length[5]=this.top('.company>div:nth-child(6)');
        this.length[6]=this.top('.company>div:nth-child(7)');
        this.length[7]=this.top('.company>div:nth-child(8)');
        this.length[8]=this.top('.company>div:nth-child(9)');
        this.length[9]=document.body.scrollHeight;
      },
      scrollMove(){
        if(!event.wheelDelta 
        && event.keyCode !== 38 
        && event.keyCode !== 40 ){
          return;
        }else{
          event.preventDefault()
        }
        event.keyCode === 38 && (event['wheelDelta']=120);
        event.keyCode === 40 && (event['wheelDelta']=-120);
        if(!this.hourly){return}
        this.hourly = false;
        if(event.wheelDelta<0){
          this.index<=8 && (this.index++);
        }
        if(event.wheelDelta>0){
          this.index>=1 && (this.index--);
        }
        this.number = this.length[this.index];
        if(this.index===9 || this.index ===0){
          this.hourly = true;
        }
        this.changeEvent(this.index,event.wheelDelta)
      },
      changeEvent(index,uod){
        if(index>=9){ return }
        index===8 && (this.shows[index]=false);
        this.shows[index] = !this.shows[index];
        if(uod>0 && index <=7){
          this.shows[index+1] = false;
        }
        if(uod<0 && index !==0){
          this.shows[index-1] = false;
        }
        this.levy();
      },
      levy(){
        this.one = this.shows[1];
        this.two = this.shows[2];
        this.three = this.shows[3];
        this.four = this.shows[4];
        this.five = this.shows[5];
        this.six = this.shows[6];
        this.seven = this.shows[7];
        this.eight = this.shows[8];
      },
      active(index){
        this.shows[this.index] = false;
        index+1 === 9 && this.index === 8 && (this.shows[this.index] = true);
        index+1 === 9 && (this.shows[8] = true);
        this.index === 9 && (this.shows[8] = false);
        this.shows[index+1] = true;
        this.levy();
        this.index = index+1;
        this.number = this.length[index+1];
      },
      mouseShow(event){
        event.pageX<35 && (this.isShow = true)
        event.pageX>60 && (this.isShow = false);
      }
    },
    mounted(){
      document.querySelector('body').onmousemove = this.mouseShow;
      for(let i =0;i<9;i++){
        this.shows.push(false);
      }
      document.documentElement.style.overflowY = 'hidden'
      this.$emit("client","COMPANY");
      this.timer = setInterval(()=>{
        this.last = document.body.scrollHeight;
        setTimeout(()=>{
          if(+(this.last).toFixed(2) === +(document.body.scrollHeight).toFixed(2)){
            this.getTop();
            clearInterval(this.timer);
            this.timer = null;
            wheel['company'] = this.scrollMove;
            keydown['company'] = this.scrollMove;
            // document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
          }
        },500);
      },10);
      bus.$on('top',(msg)=>{
        this.number = msg;
        this.index = 0;
        for(let i =0;i<9;i++){
          this.shows[i] = false;
        }
      });
      // this.bh = window.innerHeight;
      this.bh = 638;
    },
    destroyed(){
      delete wheel['company'];
      delete keydown['company'];
      document.documentElement.style.overflowY = 'auto'
    },
    watch:{
      number: function(newValue, oldValue) {
        var vm = this
        function animate () {
          if (TWEEN.update()) {
            requestAnimationFrame(animate)
          } 
        }
        new TWEEN.Tween({ tweeningNumber: oldValue })
          .easing(TWEEN.Easing.Quadratic.InOut)
          .to({ tweeningNumber: newValue },800)
          .onUpdate(function () {
            // document.body.scrollTop = this.tweeningNumber.toFixed(0)
            document.documentElement.scrollTop = this.tweeningNumber.toFixed(0)
          })
          .start()
          .onComplete(()=>{
            vm.hourly = true;
          })
        animate()
      }
		}
  }
</script>
<style>
  .company{
    width:100%;
  }
  .company>div:not(.el-carousel){
    position: relative;
    overflow: hidden;
  }
  .company>div:not(.el-carousel),
  .company>div:not(.el-carousel)>img,
  .company>div:not(.el-carousel)>div{
    width:100%;
    height:100%;
  }
  .company>div:not(.el-carousel)>div{
    position: absolute;
    left:0;
    top:0;
    right:0;
    bottom:0;
    z-index:100;
  }
  .company>ul:last-child{
    position:fixed;
    top:15%;
    left:-40px;
    z-index:2000;
    opacity:0;
  }
  @keyframes companyIndicatorMain {
    0%{left:-40px;opacity:0;}
    50%{left:30px;opacity:1;}
    100%{left:15px;opacity:1;}
  }
  .company>ul:last-child>li{
    position: relative;
    margin:15px;
    cursor: pointer;
    box-sizing: border-box;
    width:15px;
    height:15px;
    border-radius:50%;
    background: rgb(250, 247, 247);
    box-shadow:0 0 10px 5px rgba(0,0,0,0.8),0 0 5px 5px rgba(0,0,0,0.8) inset;
  }  
  .company>ul:last-child>li:hover, 
  .companyindicator{
    background: rgb(10, 10, 10) !important;
    box-shadow:0 0 10px 5px rgba(255, 254, 254, 0.8),0 0 5px 5px rgba(253, 253, 253, 0.8) inset !important;
    transform:scale(1.5);
  } 
  .company>ul:last-child>li>img{
    position: absolute;
    top:0;
    left:auto;
    bottom:0;
    right:-120px;
    margin: auto;
    visibility: hidden;
    opacity:0;
  } 
  .company>ul:last-child>li:hover>img{
    z-index:1000;
    animation: companyHint .5s ease-in-out forwards;
  }  
  @keyframes companyHint {
    from{right:-120px;visibility:visible;opacity:0;}
    to{right:-105px;visibility:visible;opacity:1;}
  }  
</style>

