<template>
    <div class="login-bg">
        <Merge/>
    </div>
</template>
<script>
    import Merge from './merge.vue'
    export default{
        name:"enter",
        components:{
            Merge
        },
        beforeCreate(){
            this.$emit("client","LOGIN")
        }
    }
</script>
<style>
    .login-bg{
        background: radial-gradient(rgba(119, 13, 36, 0.1), rgba(41, 35, 35,0.3),rgba(41, 35, 35,0.4), rgba(41, 35, 35,0.7));
    }
</style>
