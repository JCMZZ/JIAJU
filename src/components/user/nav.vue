<template>
<div class="indicator">
  <div class="indicator-btn">
    <div class="indicator-panel">
      <h4 :class="{indicatorAddressRotateY:isDisabled}">{{add?'用户中心':'购物车'}}</h4>
      <span></span>
    </div>
    <button @click="event" :disabled="isDisabled">
      <i class="el-icon-arrow-right"></i>
      <i class="el-icon-arrow-right"></i>
      <i class="el-icon-arrow-right"></i>
      <span>{{!add?'User Center':'Shopping Car'}}</span>
    </button>
  </div>
</div>
</template>
<script>
  export default{
    name:'indicator',
    props:['event','add','isDisabled']
  }
</script>
<style>
  .indicator{
    width:100%;
    height:100px;
    background-image:url('/static/img/indicator.png');
    background-size:cover;
    margin:10px auto;
    position: relative;
  }
  .indicator-btn {
    width:340px;
    height:100px;
    position: absolute;
    right:0;
    top:0;
    text-align:right;
  }
  .indicator-btn button{
    width:250px;
    height:80%;
    cursor:pointer;
    border:none;
    outline: none;
    box-shadow:0 0 30px 15px rgba(12, 1, 1, 0.2),0 0 30px 15px rgba(250, 3, 106, 0.2) inset;
    background:rgba(0,0,0,0.2);
    border-radius:20px;
    margin-right:20px;
  }
  .indicator-btn button i{
    width:10px;
    display: inline-block;
    color:red;
    font-size:500;
    animation: iMove .7s ease-in-out infinite alternate;
  }
  .indicator-btn button span{
    display: inline-block;
    font-size:18px;
    font-weight:600;
    color:rgb(248, 6, 6);
    margin-left:20px;
    animation:spanBtn 1.4s ease-in-out infinite;
  }
  @keyframes spanBtn{
    0%{opacity:1;}
    50%{opacity:0;}
    100%{opacity:1;}
  }
  @keyframes iMove{
    from{transform:translate(0)}
    to{transform:translate(18px)}
  }
  .indicator-panel{
    width:40px;
    height:98%;
    position: absolute;
    top:0;
    left:-20px;
    perspective:500px;
  }
  .indicator-panel h4{
    position: absolute;
    top:0;
    left:-15.5px;
    padding:15px;
    text-align: center;
    width:40px;
    height:100%;
    color:red;
    transition: all 13s ease-in-out;
    transform:rotateY(360deg);
    background:url('/static/img/address.png') 7px 7px no-repeat;
    animation: indicatorAddress 1s ease-in-out infinite alternate;
  }
  .indicatorAddressRotateY{
    animation: indicatorAddressRotateY .3s linear infinite !important;
  }
  .indicator-panel span{
    width:100%;
    height:40%;
    display:inline-block;
    position: absolute;
    bottom:-20px;
    left:0;
    border-radius:50%;
    box-shadow:0 0 30px 15px rgba(251, 6, 6, 0.2),0 0 30px 15px rgba(243, 5, 25, 0.2) inset;
    transform:rotateX(60deg);
  }
  @keyframes indicatorAddress{
    from{top:-10px;}
    to{top:15px;}
  }
  @keyframes indicatorAddressRotateY{
    from{transform:rotateY(0)}
    to{transform:rotateY(360deg)}
  }
</style>
