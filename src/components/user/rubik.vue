<template>
  <div class="box-rubik">
    <div class="box">
      <div class="side side1">
        <img :src="path.six" alt="">
      </div>
      <div class="side side2">
        <img :src="path.one" alt="">
      </div>
      <div class="side side3">
        <img :src="path.two" alt="">
      </div>
      <div class="side side4">
        <img :src="path.three" alt="">
      </div>
      <div class="side side5">
        <img :src="path.four" alt="">
      </div>
      <div class="side side6">
        <img :src="path.five" alt="">
      </div>
    </div>
  </div>
</template>
<script>
  export default{
    name:'rubik',
    props:['path']
  }
</script>
<style>
  @import '../../assets/rubik.css';
  .box img{
    width:inherit;
    height: inherit;
  }
</style>
