<template>
  <div class="carousel-view">
    <i class="el-icon-arrow-left chevron indicator-left"
    @click="indicator(true)"></i>
    <ul class="carousel-flex" :style="{ transform:'translateX('+move+'px)'}">
       <li v-for="(value,index) in imgChild" :key="index"
        :class="{carouselActive:isActive==index}"
        @click="pitch(index,value.mpath)">
         <img :src='value.mpath' alt="">
       </li>
    </ul>
    <i class="el-icon-arrow-right chevron indicator-right"
    @click="indicator(false)"></i>
  </div>
</template>
<script>
    export default {
        name:"carousel",
        data(){
            return{
                move:0,
                moveCome:'',
                liLen:'',
                isActive:0,
                changeCount:0,
                imgChild:[]
            }
        },
        props:['child'],
        methods:{
            indicator(strBool){
                if(strBool && this.changeCount<this.liLen-4){
                    this.changeCount+=1;
                    this.move-=this.moveCome;
                }
                if(!strBool && this.changeCount>0){
                    this.changeCount-=1;
                    this.move+=this.moveCome;
                }
            },
            mountedLen(){
                this.liLen = this.imgChild.length;
                this.moveCome=document.querySelector(".carousel-flex").offsetWidth/4;
            },
            pitch(index,value){
                this.isActive = index;
                this.$emit("getUrl",value);
            }
        },
        mounted(){
            setTimeout(()=>{
                this.imgChild=this.child;
                this.mountedLen();
            },10);
        }
    }
</script>
<style>
    .carousel-view{
        width:600px;
        position: relative;
        overflow: hidden;
    }
    .carousel-flex{
        display:flex;
        justify-content:flex-start;
        transition:all 0.5s ease-in-out;
    }
    .carousel-flex li:hover{
        cursor:pointer;
    }
    .carousel-flex li img{
        width:150px;
        height:150px;
    }
    .chevron,
    .chevron:before{
        width:25px;
        height:35px;
        line-height:35px;
    }
    .chevron{
        position:absolute;
        text-align:center;
        font-size:20px;
        font-weight:700;
        top:60px;
        background:black;
        border-radius:6px;
        color:#eee;
        z-index:1000;
        cursor:pointer;
        transition:all .3s ease-in-out;
        opacity:.4;
    }
    .chevron:hover{
        opacity:.8;
    }
    .indicator-left{
        left:7px;
    }
    .indicator-right{
        right:7px;
    }
    .carouselActive img{
        border-bottom:2px solid red;
    }
</style>

