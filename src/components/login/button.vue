<template>
    <div class="login-btn-main">
        <button @click="event1" class="login-btn1">{{btn1}}</button>
        <button @click="event2" class="login-btn2">{{btn2}}</button>
    </div>
</template>
<script>
    export default{
        name:"btn",
        props:['btn1','btn2','event1','event2'],
    }
</script>
<style>
    .login-btn-main{
        display: flex;
        justify-content: center;
        margin-bottom:30px;
    }
    .login-btn-main button{
        width:30%;
        height:40px;
        border:none;
        color:yellow;
        font-size:25px;
        background: rgba(0, 0, 0, 0.7);
        outline:none;
    }
    .login-btn-main button:hover{
        cursor:pointer;
        border:1px solid #0ff;
        box-shadow:0 0 40px rgba(255, 255, 255, 0.7), 0 0 40px rgba(255, 255, 255, 0.5);
        outline-color: rgba(255, 255, 255, 0);
        outline-offset:30px;
        text-shadow: 1px 1px 2px #427388;
    }
    .login-btn1{
        margin-right:30px;
    }
</style>

