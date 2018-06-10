<template>
  <div class="logout">
    <el-button class="logout-btn" @click="confirm" icon="el-icon-circle-close-outline" type="warning" round>退出登录</el-button>
  </div>
</template>
<script>
  export default{
    name:'logout',
    methods:{
      logout(){
        let user = JSON.parse(sessionStorage.getItem('user'));
        if(user){ 
            this.$http.post('http://127.0.0.1:8181/logout',{uname:user[0].uname},{emulateJSON:true})
            .then((response)=>{ })
            .catch(()=>{alert('失败')})
        }
        sessionStorage.clear();
      },
      confirm(){
        this.$confirm('此操作将影响您正常体验, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.logout();
          this.$router.push('/index')
          this.$message({
            type: 'success',
            message: '退出成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'warning',
            message: '已取消退出'
          });          
        });
      }
    }
  }
</script>
<style>
  .logout{
    position: absolute;
    right:50px;
    bottom:0px;
  }
  .logout-btn{
    opacity:0.2;
    transition:all .5s linear;
  }
  .logout-btn:hover{
    opacity:1;
  }
</style>
