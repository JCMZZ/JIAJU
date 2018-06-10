<template>
  <div>
    <img src="/static/img/company/performance/performance-bg.jpg" alt="">
    <transition>
      <div v-show="show" class="company-performance">
        <div>
          <img src="/static/img/company/performance/title1.png" alt="">
          <img src="/static/img/company/performance/title2.png" alt="">
        </div>
        <div>
          <div>
            <h1>{{show?change('one',90,'oneN'):change('one',0,'oneN')}}<strong>%</strong></h1>
          </div>
          <div>
            <h1>{{show?change('two',88,'twoN'):change('two',0,'twoN')}}<strong>%</strong></h1>
          </div>
          <div>
            <h1>{{show?change('three',73,'threeN'):change('three',0,'threeN')}}<strong>%</strong></h1>
          </div>
        </div>
        <div>
          <img src="/static/img/company/performance/$.png" alt="">
          <img src="/static/img/company/performance/$.png" alt="">
          <img src="/static/img/company/performance/$.png" alt="">
        </div>
        <div>
          <img src="/static/img/company/performance/logo.png" alt="">
        </div>
        <div v-show="show" id="highchartBar"></div>
        <div v-show="show" id="highchartPie"></div>
        <div v-show="show" id="highchartLine"></div>
      </div>
    </transition>
  </div>
</template>
<script>
  import * as TWEEN from 'tween.js'
  import bar from '../../assets/js/chart-bar'
  import pie from '../../assets/js/chart-pie'
  import line from '../../assets/js/chart-line'
  import Highcharts from 'highcharts'
  export default {
    name:'performance',
    props:['show'],
    data(){
      return{
        one:0,
        oneN:0,
        two:0,
        twoN:0,
        three:0,
        threeN:0,
        line:null,
        pie:null,
        bar:null,
        timer:null
      }
    },
    methods:{
      change(o,num,n){
        this[o] = num;
        return this[n];
      },
      tween(newValue, oldValue ,n) {
        var vm = this
        function animate () {
          if (TWEEN.update()) {
            requestAnimationFrame(animate)
          } 
        }
        new TWEEN.Tween({ tweeningNumber: oldValue })
          .easing(TWEEN.Easing.Quadratic.Out)
          .to({ tweeningNumber: newValue },2200)
          .onUpdate(function () {
            vm[n] = this.tweeningNumber.toFixed(0)
          })
          .start()
        animate()
      },
      load(){
        console.log(this)
        var series = this.series[0]
        this.timer = setInterval(function () {
          var x = (new Date()).getTime()
          var y = Math.random()
          series.addPoint([x, y], true, true)
        }, 1000)
      }
    },
    watch:{
      one:function(newValue, oldValue) {
        this.tween(newValue, oldValue ,'oneN');
      },
      two: function(newValue, oldValue) {
        this.tween(newValue, oldValue ,'twoN');
      },
      three:function(newValue, oldValue) {
        this.tween(newValue, oldValue ,'threeN');
      },
      show:function(newValue,oldValue){
        let json = line.json(Highcharts,this.show)
        if(!newValue) { return }
        if(!this.bar && !this.pie && !this.line) { return }
        Highcharts.chart(this.bar, bar.json)
        Highcharts.chart(this.pie, pie.json)
        Highcharts.chart(this.pie, pie.json)
        Highcharts.chart(this.line, json)
      }
    },
    mounted(){
      this.bar = document.getElementById('highchartBar');
      this.pie = document.getElementById('highchartPie');
      this.line = document.getElementById('highchartLine');
    }
  }
</script>
<style>
  .company-performance{
    background:rgba(255, 254, 254, 0.2);
  }
  .company-performance>div:nth-child(3)>img,
  .company-performance>div:nth-child(2)>div>h1,
  .company-performance>img,
  .company-performance>div{
    position: absolute;
  }
  .company-performance>div:nth-child(1){
    width:350px;
    left:0;
    right:0;
    margin:auto;
  }
  .company-performance>div:nth-child(1)>img{
    position: absolute;
    top:-100px;
  }
  .company-performance>div:nth-child(1)>img:nth-child(1){
    left:0;
    animation: performanceTitle1 .8s ease-in-out .6s forwards;
  }
  .company-performance>div:nth-child(1)>img:nth-child(2){
    right:0;
    animation: performanceTitle2 1s ease-in-out .4s forwards;
  }
  @keyframes performanceTitle1 {
    0%{top:-100px;left:0;}
    50%{top:60px;left:40px;}
    100%{top:8px;left:0;}
  }
  @keyframes performanceTitle2 {
    0%{top:-100px;}
    30%{top:90px;}
    70%{top:90px;}
    100%{top:8px;}
  }
  .company-performance>div:nth-child(2){
    left:-800px;
    bottom:10px;
    animation: performanceCircles .8s ease-in-out .2s forwards;
  }
  @keyframes performanceCircles {
    0%{left:-800px;}
    50%{left:120px;}
    100%{left:10px;}
  }
  .company-performance>div:nth-child(2)>div{
    position: relative;
    width:150px;
    height:150px;
    border-radius:50%;
    border:20px solid greenyellow;
    display: inline-block;
    transform:rotate(-440deg);
    animation: performanceCircle .8s ease-in-out .5s forwards;
  }
  @keyframes performanceCircle {
    from{transform:rotate(-440deg);}
    to{transform:rotate(0)}
  }
  .company-performance>div:nth-child(2)>div>h1{
    width:150px;
    height:55px;
    line-height:55px;
    color:rgb(0, 255, 200);
    font-size:50px;
    left:0;
    right:0;
    top:0;
    bottom:0;
    margin:auto;
  }
  .company-performance>div:nth-child(2)>div>h1>strong{
    font-size:55px;
  }  
  .company-performance>div:nth-child(2)>div:nth-child(1){
    background:url('/static/img/company/performance/p2l.png') 0 0 no-repeat;
  }
  .company-performance>div:nth-child(2)>div:nth-child(2){
    background:url('/static/img/company/performance/zengzhi.png') 0 0 no-repeat;
  }
  .company-performance>div:nth-child(2)>div:nth-child(3){
    background:url('/static/img/company/performance/jiaoyi.png') 0 0 no-repeat;
  }
  .company-performance>div:nth-child(3)>img:nth-child(1),
  .company-performance>div:nth-child(3)>img:nth-child(2),
  .company-performance>div:nth-child(3)>img:nth-child(3){
    top:-200px;
  }
  .company-performance>div:nth-child(3)>img:nth-child(1){
    left:15px;
    animation: performanceMoney1 .8s ease-in-out .4s forwards;
  } 
  @keyframes performanceMoney1 {
    0%{top:-200px;}
    50%{top:150px;}
    100%{top:120px;}
  }
  .company-performance>div:nth-child(3)>img:nth-child(2){
    left:98px;
    animation: performanceMoney2 .8s ease-in-out .5s forwards;
  } 
  @keyframes performanceMoney2 {
    0%{top:-200px;}
    50%{top:120px;}
    100%{top:80px;}
  }
  .company-performance>div:nth-child(3)>img:nth-child(3){
    left:181px;
    animation: performanceMoney3 .8s ease-in-out .6s forwards;
  }  
  @keyframes performanceMoney3 {
    0%{top:-200px;}
    50%{top:70px;}
    100%{top:40px;}
  }
  .company-performance>div:nth-child(4){
    height:0;
    overflow: hidden;
    left:0;
    top:10px;
    transform-origin:50% 0;
    transform:rotate(-30deg);
    animation: performanceLogo 1.8s ease-in-out .3s forwards;
  }
  @keyframes performanceLogo {
    0%{height:0;}
    100%{height:105px;}
  }
  .company-performance>div:nth-child(5){
    opacity:0;
    bottom:-200px;
    right:0;
    animation: performanceBar .6s ease-in-out .4s forwards;
  }
  @keyframes performanceBar {
    0%{bottom:-200px;opacity:0;}
    50%{bottom:20px;opacity:1;}
    100%{bottom:0;opacity:1;}
  }
  .company-performance>div:nth-child(6){
    opacity:0;
    top:22%;
    left:25%;
    transform:scale(1,1);
    box-shadow:0 0 40px 20px rgba(15, 11, 238, 0.5),0 0 500px 100px rgba(15, 11, 238, 0.5) inset;
    animation: performancePie .6s ease-in-out .5s forwards;
  }
  @keyframes performancePie {
    0%{opacity:0;transform: scale(1,1);}
    50%{opacity:1;transform: scale(1.2,1.2);}
    100%{opacity:1;transform: scale(1,1);}
  }
  .company-performance>div:nth-child(7){
    opacity:0;
    top:5px;
    right:-200px;
    box-shadow:0 0 40px 20px rgba(15, 11, 238, 0.5),0 0 500px 100px rgba(15, 11, 238, 0.5) inset;
    animation: performanceLine .8s ease-in-out .5s forwards;
  }
  @keyframes performanceLine {
    0%{right:-200px;opacity:0;}
    50%{right:50px;opacity:1;}
    100%{right:5px;opacity:1;}
  }
</style>
