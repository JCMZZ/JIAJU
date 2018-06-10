<template>
  <div>
    <div @mouseover="enter(index)" v-for="(value,index) in panel"
    :key="index" @mouseout="out"
    :style="{left:(index>now?space*(index-1)+450:space*index)+'px'}">
      <img :src="'/static/img/company/product/product'+(index+5)+'.jpg'" alt="">
      <h1>{{value.title}}</h1>
      <p>{{panel[0].text}}</p>
    </div>
  </div>
</template>
<script>
  import * as TWEEN from 'tween.js'
  export default {
    name:'panel',
    data(){
      return{
        space:86,
        now:10,
        panel:[
          {title:'彼岸阳光',text:'The world is what it is; men who are nothing, who allow themselves to become nothing, have no place in it.'},
          {title:'木木原',text:'loresdafdsfdsgdfahdah'},
          {title:'至简尚品',text:'loresdafdsfdsgdfahdah'},
          {title:'自然文纹',text:'loresdafdsfdsgdfahdah'},
          {title:'经典传承',text:'loresdafdsfdsgdfahdah'},
          {title:'莱尔维克',text:'loresdafdsfdsgdfahdah'},
          {title:'奥普兰',text:'loresdafdsfdsgdfahdah'},
          {title:'库佳顿',text:'loresdafdsfdsgdfahdah'},
          {title:'松耶桑德',text:'loresdafdsfdsgdfahdah'},
          {title:'穆斯肯',text:'loresdafdsfdsgdfahdah'},
        ]
      }
    },
    methods:{
      enter(index){
        this.space=45.55;
        this.now = index;
      },
      out(){
        this.now = 10;
        this.space = 86;
      }
    }
  }
</script>
<style>
  .company-product-panel>div{
    cursor: pointer;
    position: absolute;
    width:450px;
    height:100%;
    top:0;
    transition:all .3s ease-in-out;
  } 
  .company-product-panel>div>img{
    width:100%;
    height:100%;
    filter:sepia(80%) brightness(50%);
  } 
  .company-product-panel>div>h1{
    box-sizing:border-box;
    padding-top:30px;
    position: absolute;
    width:45.55px;
    height:100%;
    left:0;
    top:0;
    background:rgba(248, 172, 9, 0.4);
    transform-origin:0 0;
    transform:skewY(15deg);
    box-shadow:-10px 10px 10px 5px rgba(10, 10, 10, 0.4),-10px 10px 10px 5px rgba(10, 10, 10, 0.4) inset;
  }  
  .company-product-panel>div>p{
    box-sizing:border-box;
    width:100%;
    height:70px;
    position: absolute;
    bottom:-90px;
    left:0;
    padding:10px;
    background:rgba(218, 162, 32, 0.534);
    color:antiquewhite;  
    transition:all .4s ease-in-out;
  }  
  .company-product-panel>div:hover>img{
    filter:sepia(0) brightness(100%);
  }
  .company-product-panel>div:hover>p{
    bottom:0;
  }  
</style>

