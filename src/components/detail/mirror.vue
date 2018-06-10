<template>
  <div class="mirror-position">
    <div @mousemove="mouseMove($event)" 
     @mouseleave="mouseLeave"
     v-scroll="view"
     class="cook-small">
		<img :src="imgUrl" alt="">
		<div class="move"
         v-show="isShow" 
         v-scroll="mirror"
         :style="{top:moveTop,left:moveLeft}"></div>
	</div>
	<div class="cook-big big-left" v-show="isShow">
	    <img :src="imgUrl" 
        :style="{top:bigTop,left:bigLeft}"
        v-scroll="bigImg">
	</div>
    <ProductList :data="commData"/>
    <Carousel @getUrl="revc" :child="imgs"/>
  </div>
</template>
<script>
    import offset from '../../assets/js/setoff.js'
    import ProductList from './product-list.vue'
    import Carousel from './carousel.vue'
    export default{
        name:"mirror",
        data(){
            return{
                isShow:false,
                move:null,
                viewSmall:null,
                moveTop:'',
                moveLeft:'',
                bigTop:'',
                bigLeft:'',
                big:null,
                sW:'',
                sH:'',
                sl:'',
                st:'',
                mW:'',
                mH:'',
                bW:'',
                bH:'',
                imgUrl:'',
            }
        },
        props:['imgs','commData'],
        components:{
            Carousel,
            ProductList
        },
        methods:{
            mouseMove(e){
                this.getElementData();
                this.isShow = true;
                let el=event.pageX;
                let et=event.pageY;
                let newl=el-this.sl-this.mW/2;
                let newt=et-this.st-this.mH/2;
		        let maxl=this.sW-this.mW;
                let maxt=this.sH-this.mH;
                newl<0 && (newl=0);
	        	newl>maxl && (newl=maxl);
	        	newt<0 && (newt=0);
                newt>maxt && (newt=maxt);
                this.moveTop = newt+"px";
                this.moveLeft = newl+"px";
                this.bigTop=-(this.bH*newt/this.sH)+"px";
                this.bigLeft=-(this.bW*newl/this.sW)+"px";
            },
            mouseLeave(){
                this.isShow = false;
            },
            view(ele){
                this.viewSmall = ele;
            },
            bigImg(ele){
                this.big = ele;
            },
            mirror(ele){
                this.move = ele;
            },
            getElementData(){
                this.mW=this.move.offsetWidth;
                this.mH=this.move.offsetHeight;
                this.bW=this.big.offsetWidth;
                this.bH=this.big.offsetHeight;
                this.sW= this.viewSmall.offsetWidth;
                this.sH= this.viewSmall.offsetHeight;
                this.sl=offset.offsetLeft(this.viewSmall);
                this.st=offset.offsetTop (this.viewSmall);
            },
            revc(img){
                this.imgUrl = img;
            }
        },
        mounted(){
            setTimeout(()=>{
                 this.imgUrl = this.imgs[0].mpath;
            },10)
        }
    }
</script>
<style>
    .mirror-position{
        position:relative;
        width:100%;
        height:100%;
    }
    .cook-small{
	    width:60%;
	    position:relative;
    }
    .cook-small:hover{
        cursor:move;
    }
    .cook-big{
        width:333px;
        height:333px;
        position:absolute;
        overflow:hidden;
        z-index:1000;
        border:1px solid #aaa;
    }
    .big-left{
        left:440px;
        top: 0;
    }
    .cook-big img{
        width:740px;
        height:740px;
        position:absolute;
        top:0;
        left:0;
    }
    .cook-small div.move{
        position:absolute;
        top:0;
        left:0;
        width:45%;
        height:45%;
        background:#e6e0c6;
        opacity:0.8;
    }
    .cook-small img{
        width:100%;
        height:333px;
    }
</style>
