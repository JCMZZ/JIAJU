<template>
  <div class="welcome">
    <h1 class="welcome-left welcome-title">嘉</h1>
    <h1 class="welcome-right welcome-title">矩</h1>
    <figure class="welcome-figure">
      <h1 v-for="value in 5" :key="value">Welcome {{user.toUpperCase()}}</h1>
    </figure>
  </div>
</template>
<script>
  export default{
    name:'welcome',
    props:['user']
  }
</script>
<style>
  @import '../../assets/font.css';
  .welcome>.welcome-title{
    width:auto;
    position: absolute;
    top:15px;
    font:900 5em 'Concert One', sans-serif;
    text-shadow:0 0 30px red;
  }
  .welcome-left{
    left:10%;
  }
  .welcome-right{
    right:10%;
  }
  .welcome-figure{
    width:50%;
    display:table;
    position: absolute;
    top:180px;
    right: 40px;
  }
</style>


