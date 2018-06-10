<template>
  <div class="body-carousel">
     <Carousel/>
     <Bod/>
     <Floor/>
  </div>
</template>
<script>
    import Carousel from "./carousel.vue";
    import Bod from "./body.vue";
    import Floor from '../index-component/floor.vue';

    export default{
        name:"home",
        components:{
            Carousel,
            Bod,
            Floor
        },
        beforeCreate(){
            this.$emit("client","HOME")
        }
    }
</script>
