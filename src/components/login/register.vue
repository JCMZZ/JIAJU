<template>
  <div class="login-main">
      <div class="registerOverflow">
        <h1>注　册　表　单</h1>
        <Entering tagname="账　　号" place="请输入账号" 
            inputicon="el-icon-edit" inputtype="text" 
            indicator="uname" :isdisable="true"
            succmsg="此账号可使用！" errmsgdata="该账号已存在！"
            :isValidate="true" :reg="/^[A-Za-z][\w\u4e00-\u9fa5]{2,5}$/" 
            :judge="true" user="0" errmsgreg="账号须以字母开头且长度为3~6个字符"
            @getdata="formdata($event,'uname')" @clear="clear($event,'uname')" :optional="true"/>
        <Entering tagname="密　　码" place="请输入密码" 
            inputicon="el-icon-view" inputtype="password" 
            indicator="pwd" :isdisable="false"
            succmsg="验证成功！" errmsgreg="密码须是纯数字且为6个字符！"
            :isValidate="true" :judge="false"
            :reg="/^\d{6}$/" :optional="true"
            @getdata="formdata($event,'pwd')" @clear="clear($event,'pwd')"/>
        <Entering tagname="确认密码" place="请输入密码" 
            inputicon="el-icon-view" inputtype="password" 
            indicator="qpwd" :isdisable="false"
            :succmsg="checksucc" errmsgreg="密码须是纯数字且为6个字符！"
            :isValidate="true" :judge="false" :reg="/^\d{6}$/"
            :optional="true" ref="checkupwd"
            @getdata="formdata($event,'qpwd')" @clear="clear($event,'qpwd')"/>
        <Entering tagname="邮　　箱" place="***@mail.com" 
            inputicon="el-icon-message" inputtype="text" 
            indicator="email" :isdisable="true"
            succmsg="邮箱验证通过！" errmsgdata="该邮箱已被注册！"
            :isValidate="true" :reg="/[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/" 
            :judge="true" user="0" errmsgreg="请确保符合邮箱格式"
            @getdata="formdata($event,'email')" @clear="clear($event,'email')" :optional="true"/>
        <Entering tagname="电　　话" place="请输入电话" 
            inputicon="el-icon-phone-outline" inputtype="text" 
            indicator="phone" :isdisable="true"
            succmsg="PHONE验证通过！" errmsgdata="该电话已被注册！"
            :isValidate="true" :reg="/^(\+86)?(13|15|17|18)\d{9}$/" 
            :judge="true" user="0" errmsgreg="请确保符合电话格式"
            @getdata="formdata($event,'phone')" @clear="clear($event,'phone')" :optional="true"/>
         <Entering tagname="地　　址" place="添加默认地址" 
            inputicon="el-icon-location-outline" inputtype="text" 
            indicator="address" :isdisable="true"
            succmsg="此项选填！" :optional="false"
            :isValidate="false" :judge="false"
            @getdata="formdata($event,'address')" @clear="clear($event,'address')"/>
        <Valid eid="cregister" :style="{visibility:isHidden}" @getVali="canVali"/>
        <Btn btn1="注　册" btn2="去　登　录" 
        :event1="eventRegister" :event2="jump"/>
      </div>
  </div>
</template>
<script>
    import Entering from './entering.vue'
    import Valid from './canvas-valid.vue'
    import Btn from './button.vue'
    export default{
        name:"register",
        data(){
            return{
                valid:new Object(),
                canEvent:'',
                isHidden:"hidden",
                checksucc:'验证通过！',
                delete:new Object()
            }
        },
        components:{
            Entering,
            Btn,
            Valid
        },
        props:['event'],
        methods:{
            check(num,color,text){
                let check = this.$refs.checkupwd;
                check.elIcon=num;
                check.wes=color;
                check.msg=text;
            },
            formdata(msg,key){
                if(msg === false){
                    this.valid.hasOwnProperty(key) && (delete this.valid[key]);
                    this.valid.hasOwnProperty('qpwd') && key==='pwd' && (this.check(2,"red","确认密码与密码不符"));
                    this.isHidden = "hidden";
                    return;
                }
                this.valid[key]=msg;
                this.drawVali();
                new RegExp(/^(qpwd||pwd)$/).test(key) && (this.contrast());
            },
            contrast(){
                let pwds = this.valid;
                if(pwds.hasOwnProperty('pwd')&&pwds.hasOwnProperty('qpwd')){
                    if(pwds.pwd !== pwds.qpwd){
                        this.check(2,"red","确认密码与密码不符");
                    }else{
                        this.check(3,"green",this.checksucc);
                    }
                }else{
                    this.check(2,"red","确认密码与密码不符");
                }
            },
            drawVali(){
                let length = Object.keys(this.valid).length;
                let check = this.valid.hasOwnProperty('address');
                if((length==5&&!check)||(length==6&&check)){
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
            eventRegister(){
                !this.valid.hasOwnProperty('address') && (this.valid['address']='');
                if(Object.keys(this.valid).length==6 && this.canEvent.bool()){
                    let qpwd = this.valid.qpwd;
                    delete this.valid.qpwd;
                    this.$http.post('http://127.0.0.1:8181/register',this.valid,
                    {emulateJSON:true})
                    .then(response=>{
                        if(response.data.code){
                            this.restore();
                            this.event();
                            this.open("注册成功","success");
                        }else{
                            this.valid['qpwd'] = qpwd;
                            this.open("注册失败","warning");
                        } 
                    },
                    err=>{
                        this.valid['qpwd'] = qpwd;
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
                this.isHidden = "hidden";
                for(let event in this.delete){
                    var clear = this.delete[event];
                    clear(false,'');
                }
                this.valid = new Object();
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
            }
        }
    }
</script>
<style>
    .registerOverflow{
        width:100%;
        height:502px;
        overflow-y:auto;
    }
     /*定义滚动条的高宽*/
	.registerOverflow::-webkit-scrollbar {
	    width: 16px;
	    height: 16px;
	}
	/*CSS的坐标系，左上角为(0,0),往右往下为增加，往上往左为减少*/
	/*显示滚动条上方的渐增按钮*/
	.registerOverflow::-webkit-scrollbar-button:start:decrement,
	/*显示滚动条上方的渐减按钮*/
	.registerOverflow::-webkit-scrollbar-button:end:increment {
	    display: block;
	}
	/*隐藏滚动条上方的渐增按钮*/
	.registerOverflow::-webkit-scrollbar-button:vertical:start:increment,
	.registerOverflow::-webkit-scrollbar-button:vertical:end:decrement {
	    display: none;
	}
	/* 定义滚动条渐增按扭的样式 */
	.registerOverflow::-webkit-scrollbar-button:end:increment {
	    background-image: url('/static/img/scroll/scroll_cntrl_dwn.png');
	}
	/* 定义滚动条渐减按扭的样式 */
	.registerOverflow::-webkit-scrollbar-button:start:decrement {
	    background-image: url('/static/img/scroll/scroll_cntrl_up.png');
	}
	/* 垂直滚动条的第三层轨道的上段 */
	.registerOverflow::-webkit-scrollbar-track-piece:vertical:start {
	    background-image: url('/static/img/scroll/scroll_gutter_top.png'), url('/static/img/scroll/scroll_gutter_mid.png');
	    background-repeat: no-repeat, repeat-y;
	}
	/* 垂直滚动条的第三层轨道的下段 */
	.registerOverflow::-webkit-scrollbar-track-piece:vertical:end {
	    background-image: url('/static/img/scroll/scroll_gutter_btm.png'), url('/static/img/scroll/scroll_gutter_mid.png');
	    background-repeat: no-repeat, repeat-y;
	    background-position: bottom left, 0 0;
	}
	/* 垂直滚动条的滑动块 */
	.registerOverflow::-webkit-scrollbar-thumb:vertical {
	    height: 56px;
	    -webkit-border-image:url('/static/img/scroll/scroll_thumb.png') 8 0 8 0 stretch stretch;
	    border-width: 8080;
	}
</style>

