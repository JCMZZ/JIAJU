<template>
  <div class="user-main">
    <div class="user-left user-float">
      <CenterLeft/>
    </div>
    <div class="user-center user-float">
      <Avter :img="center.avter"/>
      <Personal  :personal="center" />
      <Welcome :user="center.uname"/>
    </div>
    <div class="user-right user-float">
      <CenterRight/>
    </div>
  </div>
</template>
<script>
  import Avter from './avter.vue'
  import Personal from './personal-data.vue'
  import CenterLeft from './center-left.vue'
  import CenterRight from './center-right.vue'
  import Welcome from './welcome.vue'
  export default {
    name:'user-center',
    props:['center'],
    components:{
      Avter,
      Personal,
      CenterLeft,
      Welcome,
      CenterRight
    }
  }
</script>
<style>
  .user-main{
    width:100%;
    flex:1;
    position: absolute;
    top:0;
    left:0;
    background:rgb(73, 57, 57);
  }
  .user-float{
    float:left;
    min-height:500px;
  }
  .user-left,
  .user-right{
    width:25%;
    background:rgb(73, 57, 57);
    float:left
  }
  .user-center{
    width:50%;
    background:rgb(25, 104, 141);
    position:relative;
  }
</style>

