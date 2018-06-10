<template>
  <div class="quickmark" @click="quick">
    <img class="qrUserImg" :src="user.avter" alt="" hidden>
    <div class="qrUser"></div>
    <h1><span>{{title}}</span></h1>
  </div>
</template>
<script>
  import bus from '../../assets/js/bus.js'
  import qr from '../../assets/js/qr.js'
  export default {
    name:'quickmark',
    data(){
      return{
        title:'',
        user:{}
      }
    },
    methods:{
      quick(){
        this.$alert('<img src="/static/img/award.jpg" alt="">','扫码关注微信公众号', {
          dangerouslyUseHTMLString: true
        });
      }
    },
    updated(){
      qr.default('.qrUserImg').ready(()=>{
        qr.default('.qrUser').erweima({
          text:'http://weixin.qq.com/r/5z_CmpzEYcEerdj592r1?'+this.user.uname,
          fill:'black',
          mode: 4,
          mSize:20,
          image: $(".qrUserImg")[0]
        })
      })
    },
    mounted(){
      this.user = JSON.parse(sessionStorage.getItem('user'))[0];
      bus.$on('quickEvent',(msg)=>{
        this.title = msg;
      })
    }
  }
</script>
<style>
  .quickmark{
    width:100%;
    position: relative;
    margin-top:20px;
    cursor:pointer;
  }
  .quickmark h1{
    position: absolute;
    bottom:0;
    left:0;
    width:inherit;
    height:0;
    opacity:0;
    overflow: hidden;
    color:rgb(113, 14, 226);
    transition:all .5s linear;
    background:linear-gradient(rgba(0,0,0,0.1),black)
  }
  .quickmark h1 span{
    background: rgb(216, 231, 6);
  }
  .quickmark:hover h1{
    height: 20%;
    opacity: 1;
  }
  .qrUser>canvas{
    width:258px;
    height:258px;
  }
</style>
