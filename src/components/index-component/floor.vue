<template>
  <ul id="fixed" @selectstart="noselect" @dblclick="come" @mousemove="move" v-if="isShow">
      <li v-for="(val,index) in floorName" @click="slide($event,val)" :key="index" :class="{scrollActive:val===isChangeColor}" >{{val}}</li>
  </ul>
</template>
<script>
    import bus from '../../assets/js/bus.js'
    import WinScroll from '../../assets/js/window.js'

    export default{
        name:"floor",
        data(){
            return{
                floorName:["新品上市","热销产品","销量最高"],
                isShow:false,
                gapX:0,
                gapY:0,
                ul:"",
                isBind:true,
                isChangeColor:"",
                timer:null,
                isClick:false
            }
        },
        methods:{
            change(){
                if(document.getElementById("cards")===null) return;
                // let scroll = document.body.scrollTop;
                let scroll = document.documentElement.scrollTop;
                let card = document.getElementById("cards").offsetTop;
                this.isShow = scroll>card?(this.fadIn()):(this.fadOut());
            },
            come(e){
                this.isClick = true;
                this.isBind=!this.isBind;
                !this.isBind
                    ?(e.target.style.cursor="move")
                    :(e.target.style.cursor="pointer");
                setTimeout(()=>{this.isBind && (this.isClick=false)},300);
                this.gapX = e.clientX - e.target.parentNode.offsetLeft;
                this.gapY = e.clientY - e.target.parentNode.offsetTop;
            },
            noselect(e){
                e.preventDefault();
                return false;
            },
            move(e){
                if(this.isBind) return; 
                e.target.parentNode.style.top = e.clientY-this.gapY+"px";
                e.target.parentNode.style.left = e.clientX-this.gapX+"px";
            },
            slide(e,val){
                e.stopPropagation();
                setTimeout(()=>{
                    if(this.isClick) return; 
                    this.isChangeColor = val;
                    bus.$emit("slideTo",val)
                },200);
            },
            mo(){
                bus.$on("sendIndex",index=>{
                    this.isChangeColor = index;
                })
            },
            fadIn(){
                // this.timer = setTimeout(()=>{this.isShow = false},5000);
                return true;
            },
            fadOut(){
                // this.timer!=null && (clearTimeout(this.timer));
                return false;
            }
        },
        mounted(){
            this.mo();
            WinScroll.change = this.change;
            // window.onscroll = this.change;
        }
    }
</script>
<style>
    #fixed{
        position:fixed;
        top:180px;
        left:10px;
    }
    #fixed li{
        border:1px dotted #eee;
        padding:10px;
        background: rgb(252, 103, 103);
        color:#eee;
        z-index:1000;
        width:35px;
    }
    #fixed li:hover{
        cursor:pointer;
    }
    .scrollActive{
        background:red !important;
    }
</style>
