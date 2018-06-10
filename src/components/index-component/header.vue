<template>
    <ul id="head-list">
        <li class="logo"></li>
        <li v-for="(value,key) in nav" :key="value" @click="active(value)"  :class="{activeNav:indicator==key}"><a>{{key}}</a></li>
    </ul>
</template>
<script>
    import sonline from '../../assets/js/sonline.js'
    export default {
        name:"top",
        data(){
            return {
                nav:{
                    HOME:"/index",
                    DETAIL:"/detail/1",
                    USERCENTER:"/user",
                    COMPANY:"/company",
                    LOGIN:"/login",
                }
            }
        },
        props:['indicator'],
        methods:{
            active(value){
                this.$router.push(value);
            },
        },
        mounted(){
            sonline("body").Sonline({
                Position:"right",//left或right
                Top:420,//顶部距离，默认200px
                Effect:false, //滚动或者固定两种方式，布尔值：true或false
                DefaultsOpen:true, //默认展开：true,默认收缩：false
                Qqlist:"2358819009|客服01,2358819009|客服02,2358819009|客服03" //多个QQ用','隔开，QQ和客服名用'|'隔开
            });
        },
        watch:{
            indicator(){
                if(this.indicator==='HOME'){
                    document.querySelector('#SonlineBox').style.display = 'block';
                }else{
                    document.querySelector('#SonlineBox').style.display = 'none';
                }
            }
        },
        
    }
</script>
<style>
    @import '../../assets/green.css';
    #head-list{
        background:rgba(0,0,0,0.8);
        color:#fff;
        display:flex;
        text-align:center;
        justify-content:space-around;
    }
    #head-list li:not(.logo){
        padding:30px;
    }
    #head-list li:not(.logo):hover{
        cursor:pointer;
        background:rgba(0,0,0,0.4);
    }
    .activeNav{
        border-bottom:red;
        background:rgba(0,0,0,0.9);
        border-bottom:3px solid red;
    }
    .logo{
        background:url('/static/img/logo.png') no-repeat 0px 4px;
        width:133px;
        height: 75px;
        margin-left:90px;
    }
</style>


