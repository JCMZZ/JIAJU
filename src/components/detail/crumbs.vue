<template>
  <el-breadcrumb separator-class="el-icon-arrow-right">
  <el-breadcrumb-item class="tcolor" @click.native="home">首页</el-breadcrumb-item>
  <el-breadcrumb-item class="tcolor">详情列表</el-breadcrumb-item>
  <el-breadcrumb-item class="color">{{title}}</el-breadcrumb-item>
  </el-breadcrumb>
</template>
<script>
    export default {
        name:"crumbs",
        props:['title'],
        methods:{
            home(){
                this.$router.push('/index');
            }
        }
    }
</script>
<style>
    .el-breadcrumb{
        font-size:25px !important;
        background:#eee !important;
        padding:15px 15px 15px 45px !important;
    }
    .color>span{
        color:red !important;
    }
    .tcolor>span{
        color:#606266 !important;
    }
</style>
