<template>
  <div>
    <Indicator :event="eventMove" :add="isAdd" :is-disabled="isMove"/>
    <div class="index-user">
      <UserCenter :class={slideOne:isMove,slideZindex:isAdd}
      class="slide-center" v-if="user!=null" :center="user"/>
      <UserCar :class={slideTwo:isMove,slideZindex:!isAdd}
       v-if="user!=null" :center="user" />
    </div>
  </div>
</template>
<script>
  import Indicator from './nav.vue'
  import UserCenter from './user-center.vue'
  import UserCar from './user-car.vue'
  export default{
    name:'user',
    data(){
      return{
        user:null,
        isAdd:true,
        isMove:false,
      }
    },
    components:{
      Indicator,
      UserCenter,
      UserCar
    },
    methods:{
        check(){
          let use = JSON.parse(sessionStorage.getItem('user'));
          if(!use){
            this.$confirm('对不起您还未登录！点击确定去登陆吧~~~', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                this.$router.push('/login');
            }).catch(() => {
                this.$router.push('/');         
            });
            return;
          }
          this.user = JSON.parse(sessionStorage.getItem('user'))[0];
        },
        eventMove(){
          setTimeout(()=>{this.isAdd = !this.isAdd;},2500);
          this.isMove = true;
          setTimeout(()=>{this.isMove=false},5500)
        }
    },
    beforeCreate(){
      this.$emit("client","USERCENTER")
    },
    beforeMount(){
      let center = sessionStorage.getItem('center');
      if(center){
        this.isAdd = JSON.parse(center).isAdd;
        this.isMove = JSON.parse(center).isMove; 
      }
    },
    mounted(){
      this.check();
    },
    destroyed(){
      if(!this.isMove){
        sessionStorage.removeItem('center');
        sessionStorage.setItem('center',JSON.stringify({isAdd:this.isAdd,isMove:this.isMove}));
      }
    }
  }
</script>
<style>
  .index-user{
    min-height:500px;
    display:flex;
    position: relative;
    margin-bottom:10px;
    overflow: hidden;
  }
  .slideOne{
    animation:slideOne 5s ease-in-out;
  }
  .slide-center:after{
    content:'';
    display: block;
    clear:both;
  }
  .slideTwo{
    animation:slideTwo 5s ease-in-out;
  }
  .slideZindex{
    z-index:200;
  }
  @keyframes slideOne {
    0% {left:0;}
    50% {left:-50%;}
    100% {left:0;}
  }
  @keyframes slideTwo {
    0% {left:0;}
    50% {left:50%;}
    100% {left:0;}
  }
</style>
