<template>
  <div class="canvas-valid-main">
      <canvas @click="draw" :id="eid" class="canvas-valid" width="150px" height="30px"></canvas>
      <input class="canvas-input" placeholder="验证码" type="text" autofocus 
      v-model="valiMsg"/>
  </div>
</template>
<script>
    export default{
        name:"valid",
        data(){
            return{
                letterStr:'a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,0,1,2,3,4,5,6,7,8,9',
                ctx:'',
                letterArr:[],
                sendStr:'',
                valiMsg:''
            }
        },
        props:['eid'],
        methods:{
            trigger(){
                let obj = new Object();
                obj['draw'] = this.draw;
                obj['bool'] = ()=>{return this.valiMsg.toUpperCase()===this.sendStr.toUpperCase()};
                return obj;
            },
            // 生成随机色
            randomColor(min, max) {
                var r = this.randomNum(min, max);
                var g = this.randomNum(min, max);
                var b = this.randomNum(min, max);
                return "rgb(" + r + "," + g + "," + b + ")";
            },
            // 生成随机数
            randomNum(min, max) {
                return Math.floor(Math.random() * (max - min) + min);
            },
            // 生成字母数组
            getAllLetter(){
                return this.letterStr.split(",");
            },
            draw(){
                this.sendStr='';
                this.valiMsg='';
                this.ctx.textBaseline = "middle";
                this.ctx.fillStyle=this.randomColor(180, 240);  
                this.ctx.beginPath();  
                this.ctx.fillRect(0,0,150,30);  
                this.ctx.closePath(); 
                this.ctx.lineWidth = 1;
                for(var i=0;i<4;i++){
                    this.ctx.strokeStyle = this.randomColor(0,255);
                    this.ctx.moveTo(this.randomNum(0,150),this.randomNum(0,30));
                    this.ctx.lineTo(this.randomNum(0,150),this.randomNum(0,30));
                    this.ctx.stroke();
                }
                for(var i=1;i<=4;i++){
                    var txt  = this.letterArr[this.randomNum(0,this.letterArr.length)];
                    this.sendStr+=txt;
                    this.ctx.font = this.randomNum(25, 35) + 'px SimHei'; //随机生成字体大小
                    this.ctx.fillStyle = this.randomColor(50, 160);
                    this.ctx.shadowOffsetX = this.randomNum(-3, 3);
                    this.ctx.shadowOffsetY = this.randomNum(-3, 3);
                    this.ctx.shadowBlur = this.randomNum(-3, 3);
                    this.ctx.shadowColor = "rgba(0, 0, 0, 0.3)";
                    var x = 150 / 5 * i;
                    var y = 30 / 2;
                    var deg = this.randomNum(-30, 30);
                    /**设置旋转角度和坐标原点**/
                    this.ctx.translate(x, y);
                    this.ctx.rotate(deg * Math.PI / 180);
                    this.ctx.fillText(txt, 0, 0);
                    /**恢复旋转角度和坐标原点**/
                    this.ctx.rotate(-deg * Math.PI / 180);
                    this.ctx.translate(-x, -y);
                }
                	/**绘制干扰点**/
                for(var i = 0; i < 150/8; i++) {
                    this.ctx.fillStyle = this.randomColor(0, 255);
                    this.ctx.beginPath();
                    this.ctx.arc(this.randomNum(0, 150), this.randomNum(0, 30), 1, 0, 2 * Math.PI);
                    this.ctx.fill();
                }
            }
        },
        mounted(){
            this.ctx = document.getElementById(this.eid).getContext("2d");
            this.letterArr = this. getAllLetter();
            this.$emit("getVali",this.trigger);
        }
    }
</script>
<style>
    .canvas-valid-main{
        width:100%;
        display:flex;
        justify-content: center;
        margin:25px 0;
    }
    .canvas-valid{
        margin-right:30px;
        border:1px solid red;
        background: #eee;
    }
    .canvas-input{
        box-sizing: border-box;
        border:none;
        background:rgba(238, 238, 238, 0.692);
        padding:10px;
    }
</style>
