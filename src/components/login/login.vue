<template>
  <div class="login-main">
    <h1>登　录　表　单</h1>
    <Entering tagname="账　号" place="请输入账号" 
        inputicon="el-icon-edit" inputtype="text" 
        indicator="uname1" :isdisable="true"
        succmsg="验证成功！" errmsgdata="该账户不存在！"
        :isValidate="false" :judge="true"
        @getdata="formdata($event,'uname')" @clear="clear($event,'uname')"
        user="1" :optional="true"/>
    <Entering tagname="密　码" place="请输入密码" 
        inputicon="el-icon-view" inputtype="password" 
        indicator="pwd1" :isdisable="false"
        succmsg="验证成功！" errmsgreg="密码必须是纯数字并且长度为六的格式！"
        :isValidate="true" :judge="false"
        :reg="/^\d{6}$/" :optional="true"
        @getdata="formdata($event,'pwd')" @clear="clear($event,'pwd')"/>
    <Valid eid="clogin" :style="{visibility:isHidden}" @getVali="canVali"/>
    <Btn btn1="登　录" btn2="去　注　册" 
    :event1="eventLogin" :event2="jump"/>
  </div>
</template>
<script>
    import Entering from './entering.vue'
    import Valid from './canvas-valid.vue'
    import Btn from './button.vue'
    export default {
        name:"login",
        data(){
            return{
                canEvent:'',
                isHidden:"hidden",
                delete:new Object(),
                valid:new Object(),
                user:null,
            }
        },
        props:['event'],
        components:{
            Entering,
            Valid,
            Btn
        },
        methods:{
            formdata(msg,key){
                if(msg === false){
                    this.valid.hasOwnProperty(key) && (delete this.valid[key]);
                    return;
                }
                this.valid[key]=msg;
                this.drawVali();
            },
            drawVali(){
                if(Object.keys(this.valid).length==2){
                    this.isHidden = "visible";
                    this.canEvent.draw();
                }else{
                    this.isHidden = "hidden";
                }
            },
            canVali(msg){
                //draw() bool() 
                this.canEvent=msg();
            },
            socket(uname){
                let ws = new WebSocket('ws://localhost:60000');
                ws.onopen = ()=>{
                    ws.send(uname)
                }
                ws.onmessage = (e)=>{
                    console.log(e.data);
                    if(e.data === 'clear'){
                        sessionStorage.clear();
                        this.$confirm('您已被迫下线，是否重新登录?', '提示', {
                            confirmButtonText: '确定',
                            cancelButtonText: '取消',
                            duration:3000,
                            type: 'warning'
                        }).then(() => {
                            this.$router.push('/login');
                        }).catch(() => {
                            this.$router.push('/index');
                        });
                    }
                }
            },
            eventLogin(){
                this.user = JSON.parse(sessionStorage.getItem('user'));
                if(this.user && (this.user[0].uname===this.valid.uname)){
                    this.open("此账户已登录","warning");
                    this.restore();
                    return
                }
                if(Object.keys(this.valid).length==2 && this.canEvent.bool()){
                    this.$http.post('http://127.0.0.1:8181/login',this.valid,{
                        emulateJSON:true
                    })
                    .then(response=>{
                        if(response.data.code===3){
                            this.restore();
                            this.open("此账户已经在异地登录","warning");
                            return
                        }
                        if(response.data.code===1){
                            this.restore();
                            this.open("登录成功","success");
                            this.$router.go(-1);
                            this.logout();
                            this.socket(response.data.msg[0].uname);
                            sessionStorage.setItem('user',JSON.stringify(response.data.msg));
                        }else{
                            this.delete.uname(false);
                            this.delete.pwd(false,'');
                            delete this.valid['pwd'];
                            this.open("密码与账号不匹配","warning");
                        }
                        this.isHidden = "hidden";
                    },
                    err=>{
                        this.open("网络失败","warning");
                    })
                }else{
                    this.canEvent.draw();
                }
            },
            clear(msg,key){
                this.delete[key]=msg;
            },
            open(text,icon) {
               var alert = this.$message({
                    message: text,
                    type: icon,
                    center:true,
                    duration:1500
                });
            },
            restore(){
                this.delete.uname(false,'');
                this.delete.pwd(false,'');
                this.valid=new Object();
                this.isHidden = "hidden";
            },
            jump(){
                if(Object.keys(this.valid).length<=0){
                    this.restore();
                    this.event();
                    return;
                } 
                this.$confirm('此操作将清除表单内容', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.restore();
                    this.event();
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消跳转'
                    });          
                });
            },
            logout(){
                if(this.user){ 
                    this.$http.post('http://127.0.0.1:8181/logout',{
                        uname:this.user[0].uname},
                        {emulateJSON:true})
                    .then((response)=>{ })
                    .catch(()=>{alert('失败')})
                }
                sessionStorage.clear();
            },
        }
    }
</script>
<style>
    .login-main h1{
        font-size:40px;
        color:rgba(0,0,0,0.7);
        padding:20px;
        margin-bottom:30px;
    } 
</style>
