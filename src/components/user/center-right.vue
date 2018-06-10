<template>
  <div class="award-main">
    <h1 class="award-title">扫码关注抽大奖</h1>
    <Broadcast/>
    <QuickMark/>
    <Advertising/>
  </div>
</template>
<script>
  import Broadcast from './broadcast.vue'
  import QuickMark from './quickmark.vue'
  import Advertising from './advertising.vue'
  export default{
    name:"center-right",
    components:{
      Broadcast,
      QuickMark,
      Advertising
    }
  }
</script>
<style>
  .award-main{
    box-sizing: border-box;
    padding:15px;
    position: relative;
  }
  .award-title{
    color:red;
    margin-bottom:30px;
  }
</style>
