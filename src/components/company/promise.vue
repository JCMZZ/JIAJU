<template>
  <div class="service-promise">
    <h3>承诺<strong>{{num}}</strong></h3>
    <p>{{text}}</p>
  </div>
</template>
<script>
  export default{
    name:'promise',
    props:['text','num']
  }
</script>
<style>
  .service-promise{
    position: absolute;
  }
  .service-promise>h3{
    position: absolute;
    top:0;
    left: 0;
    color:#f8999f;
    letter-spacing:3px;
    white-space: nowrap;
  }  
  .service-promise>h3>strong{
    font-size:50px;
    color:black;
    position: relative;
    top:5px;
    left:3px;
  }
  .service-promise>p{
    position: absolute;
    width:auto;
    top:55px;
    left:0;
    bottom:0;
    padding-top:8px;
    border-top:.5px solid rgba(31, 27, 27, 0.623);
    color:#bdacac;
    font-size:10px;
    white-space: nowrap;
  }    
</style>
