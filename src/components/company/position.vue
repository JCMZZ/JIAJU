<template>
  <div class="site-position">
    <div>
      <div @mouseover="stop" @mouseout="move" :id="container"></div>
      <button @click="rest">定位</button>
    </div>
    <div @mouseenter.stop="event(index)">
      <h3>{{title}}</h3>
      <ul>
        <li v-if="!is"><i class="el-icon-service"></i><strong>预约电话</strong></li>
        <li v-if="!is">{{phone}}</li>
        <li v-if="!is"><i class="el-icon-message"></i><strong>预约邮箱</strong></li>
        <li v-if="!is">{{email}}</li>
        <li><i class="el-icon-location-outline"></i><strong>场馆地址</strong></li>
        <li @click="change">{{!is?txt():describe}}</li>
      </ul>
    </div>
  </div>
</template>
<script>
  import wheel from '../../assets/js/mousewheel'
  export default{
    name:'position',
    data(){
      return{
        map:null,
        point:null,
        is:false,
      }
    },
    props:['title','phone','email','describe','container','long','lat','hierarchy','event','index'],
    methods:{
      newMap(container,j,w,hierarchy){
        this.map = new BMap.Map(container);
        this.point = new BMap.Point(j,w);
        this.map.centerAndZoom(this.point, hierarchy);
        this.map.enableScrollWheelZoom(true);
        this.map.addOverlay(new BMap.Marker(this.point));
        let NavigationControl = new BMap.NavigationControl();
        this.map.addControl(NavigationControl);    
        // map.addControl(new BMap.OverviewMapControl());    
        this.map.addControl(new BMap.MapTypeControl()); 
        this.map.addControl(new BMap.ScaleControl());
      },
      stop(){
        wheel['stop'] = function(){}
      },
      move(){
        delete wheel['stop'];
      },
      rest(){
        this.map.setZoom(this.hierarchy);
        this.map.panTo(this.point);
        // this.map.removeControl(NavigationControl);
      },
      change(){
        this.is = !this.is;
      },
      txt(){
        if(this.describe.length>25){
          return this.describe.substring(0,25)+'...';
        } else {
          return this.describe;
        }
      }
    },
    mounted(){
      this.newMap(this.container,this.long,this.lat,this.hierarchy);
    }
  }
</script>
<style>
  .anchorBL>a>img,
  .BMap_cpyCtrl {  
    display: none;  
  }
  .BMap_noprint>div:last-child{
    display:none;
  }
  .anchorTR>div:nth-child(2)>div{
    border:1px solid rgb(139, 164, 220);
    border-radius: 0px 3px 3px 0px;
    box-shadow: rgba(0, 0, 0, 0.35) 2px 2px 3px;
  }
  .site-position{
    width:650px;
    height:300px;
    background: rgba(255, 255, 255, 0.4);
    box-shadow:0 0 20px 8px rgba(243, 238, 238, 0.5);
  }
  .site-position>div:nth-child(1){
    position: relative;
  }
  .site-position>div:nth-child(1),
  .site-position>div:nth-child(1)>div:nth-child(1){
    width:500px;
    height:300px;
  }
  .site-position>div:nth-child(1)>div:nth-child(1){
    opacity:.6;
  }
  .site-position>div:nth-child(1):hover>div:nth-child(1){
    opacity:1;
  }  
  .site-position>div:nth-child(1)>div:nth-child(1)+button{
    position: absolute;
    right:10px;
    bottom:10px;
    outline:none;
    width:35px;
    height:35px;
    border-radius:50%;
    border:.5px solid rgba(255, 255, 255, 0.89);
    font-weight:100;
    font-size:10px;
    cursor: pointer;
  }
  .site-position>div:nth-child(1)>div:nth-child(1)+button:hover{
    box-shadow:0 0 15px 8px rgba(0,0,0,0.5),0 0 15px 8px rgba(0,0,0,0.5) inset;
    color:red;
  }
  .site-position>div:nth-child(2){
    position:absolute;
    right:0;
    top:0;
    width:150px;
    height:300px;
  }
  .site-position>div:nth-child(2)>h3{
    width:100%;
    color:red;
    margin:15px 0 20px 0;
  }  
  .site-position>div:nth-child(2)>ul{
    width:100%;
  }
  .site-position>div:nth-child(2)>ul i{
    color:red;
    margin-right:5px;
  }  
  .site-position>div:nth-child(2)>ul>li{
    margin:10px;
  }  
  .site-position>div:nth-child(2)>ul>li:nth-child(4){
    letter-spacing:1px;
  }  
  .site-position>div:nth-child(2)>ul>li:last-child{
    text-align:left;
    cursor: pointer;
  }    
</style>
