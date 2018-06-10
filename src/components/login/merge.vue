<template>
	<div class="merge-main">
		<div class="merge-main-position merge-rotate"
        :style="{transform:'rotateY('+login+'deg)',
        backgroundImage:'url('+bgimg+')'}">
			<div class="merge-main-face merge-main-position merge-main-size">
				<Login :event="toRegister"/>
			</div>
		</div>
        <div class="merge-main-position merge-rotate"
        :style="{transform:'rotateY('+register+'deg)',
        backgroundImage:'url('+bgimg+')'}">
			<div class="merge-main-face merge-main-position merge-main-size">
				<Register :event="toLogin"/>
			</div>
		</div>
	</div>
</template>
<script>
    import Login from './login.vue'
    import Register from './register.vue'
    export default {
        name:"merge",
        data(){
            return{
                register:-180,
                login:0,
                img:['/static/img/login/1.jpg',
                '/static/img/login/2.jpg',
                '/static/img/login/3.jpg',
                '/static/img/login/4.jpg',
                '/static/img/login/5.jpg',
                '/static/img/login/6.jpg'],
                bgimg:'/static/img/login/1.jpg',
                timer:null,
                index:0,
                // register:0,
                // login:180
            }
        },
        components:{
            Login,
            Register
        },
        methods:{
            toRegister(){
                this.register = 0;
                this.login = 180;
            },
            toLogin(){
                this.register = -180;
                this.login = 0;
            },
            changebackimg(){
                this.index+=1;
                this.index>=this.img.length && (this.index=0);
                this.bgimg = this.img[this.index];
            }
        },
        mounted(){
            this.timer = setInterval(this.changebackimg,5000);
        },
        beforeDestroy(){
            clearInterval(this.timer);
        }
    }
</script>
<style>
   .merge-main-position{
        position: absolute;
        bottom: 0;
        top: 0;
        left: 0;
        right: 0;
        margin:auto;
        text-align: center;
    }
    .merge-main{
        width:70%;
        height: 500px;
        margin: 0 auto;
        perspective: 200000;
        position:relative;
        /* border:1px solid #000; */
    }
    .merge-rotate{
        backface-visibility:hidden;
        transform-style: preserve-3d;
        transition: all 4s ease-in-out;
        background-repeat: no-repeat;
        background-position:center; 
    }
    .merge-main-size{
        width:100%;
        min-height:500px;
    }
    .merge-main-face{
        transform:translateZ(100px);
        backface-visibility:hidden;
    }
</style>


