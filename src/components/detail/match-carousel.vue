<template>
    <div class="match-view">
        <ul class="match-list" 
         :style="{transform:'translateX('+move+'px)'}"
         :class="{transitionMatch:isTransition}"
         @mouseenter="clear" @mouseleave="moveOperation">
            <li v-for="(value,index) in imgs" :key="index">
                <img :src="value" alt="">
                <div class="rahmen">
                    <p>百度一下</p>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
    export default{
        name:"match",
        data(){
            return{
                move:'',
                isTransition:true,
                timer:null,
                openTimer:null
            }
        },
        props:['imgs'],
        methods:{
            operation(){
               this.isTransition=true;
               this.move-=400;
               setTimeout(()=>{
                   this.isTransition=false;
                   this.move=0;
                   this.imgs.push(this.imgs.shift());
               },3000);
               this.timer = setTimeout(this.operation,8000);
            },
            clear(){
                clearTimeout(this.timer);
                clearTimeout(this.openTimer);
            },
            moveOperation(){
                this.openTimer = setTimeout(()=>{
                    this.operation();
                },2000);
            },
        },
        mounted(){
            this.operation();
        }
    }
</script>
<style>
    .match-list{
        display:flex;
        justify-content:flex-start;
    }
    .match-list li{
        position: relative;
    }
    .match-view{
        width:1200px;
        overflow:hidden;
    }
    .rahmen{
        width:100%;
        height:100%;
        position:absolute;
        box-sizing: border-box;
        border:2px solid #fff;
        top:0;
        right:0;
    }
    .rahmen p{
        width:100%;
        height:0;
        transition:all 0.5s ease-in-out;
        position:absolute;
        bottom:0;
        left:0;
        background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.9));
    }
    .rahmen:hover{
        cursor:pointer;
    }
    .rahmen:hover p{
        height:20%;
        padding:10px 0;
        color:#eee;
    }
    .transitionMatch{
        transition:all 1s ease-in-out;
    }
</style>

