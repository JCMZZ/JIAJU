<template>
  <div class="rubik-main">
    <Rubik @click.native="con" class="rubik-one" :path="imgsUrlOne"/>
    <Rubik class="rubik-two" :path="imgsUrlTwo"/>
  </div>
</template>
<script>
  import Rubik from './rubik.vue'
  export default{
    name:'center-left',
    components:{
      Rubik
    },
    data(){
      return{
        imgsUrlOne:{
          one:'/static/img/user-center/1.jpg',
          two:'/static/img/user-center/2.jpg',
          three:'/static/img/user-center/3.jpg',
          four:'/static/img/user-center/4.jpg',
          five:'/static/img/user-center/5.jpg',
          six:'/static/img/user-center/6.jpg'
        },
        imgsUrlTwo:{
          one:'/static/img/user-center/7.jpg',
          two:'/static/img/user-center/8.jpg',
          three:'/static/img/user-center/9.jpg',
          four:'/static/img/user-center/10.jpg',
          five:'/static/img/user-center/11.jpg',
          six:'/static/img/user-center/12.jpg'
        },

      }
    },
    methods:{
      con(e){
        console.log(e.target)
      }
    }
  }
</script>
<style>
  .rubik-main{
    position: relative;
  }
  .rubik-main>div{
    position: absolute;
    left:40px; 
  }
  .rubik-one{
    top:-40px;
  } 
  .rubik-two{
    top:200px;
  }
</style>


