<template>
  <p class="data-only">
    <strong>{{attribute}}</strong>
    <el-tooltip class="item" :disabled="isdisable" 
      effect="dark" content="点击编辑" 
      placement="right-end" transition="el-fade-in-linear">
      <span :class="{canedit:isEdit}">{{val}}</span>
    </el-tooltip>
  </p>
</template>
<script>
  export default{
    name:'only',
    props:['attribute','val','isdisable','isEdit']
  }
</script>
<style>
  .data-only{
    display:table;
    width:auto;
    margin-bottom:20px;
  }
  .data-only strong{
    margin-right:20px;
  }
  .canedit:hover{
    cursor:pointer;
    color:red;
  }
  .item:focus{
    outline:none;
  }
</style>

