<template>
  <el-container>
    <el-header> 
      <Top :indicator="navActive"/>
    </el-header>
    <el-main>
      <router-view @client="local"></router-view>
    </el-main>
    <el-footer>
      <Bottom/>
    </el-footer>
  </el-container>
</template>
<script>
  import Top from './index-component/header.vue';
  import Bottom from './index-component/bottom.vue';
  export default {
    name:"hello",
    data(){
      return{
        navActive:''
      }
    },
    components:{
      Top,
      Bottom
    },
    methods:{
      local(msg){
        this.navActive = msg;
      }
    }
  }
</script>
<style>
  #main{
    margin-top:2px;
    margin-bottom:2px;
  }
  .el-main{
    overflow:visible !important;
    padding-bottom:0 !important;
  }
</style>

