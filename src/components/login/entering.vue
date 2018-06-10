<template>
    <ul class="input-group">
        <li class="tag-label">
            <label :for="indicator">{{tagname}}</label>
        </li>
        <li class="tagInput">
            <el-tooltip class="item" :disabled="isdisable" 
            effect="dark" :content="miss" 
            placement="right-end" transition="el-fade-in-linear"
            popper-class="tooltipColor">
                <i :class="inputicon" :style="{color:icRed}"  class="feedback" @click.stop="showText(inputicon)"></i>
            </el-tooltip>
            <input v-model.trim="inputmsg" :type="intype" :placeholder="place" :id="indicator" @blur="verify"/>
            <div class="c-btn c-btn--border-line"></div>
            <p v-if="errShow" class="err" :style="{color:wes}">
                <i v-if="1==elIcon" class="el-icon-warning errIconMargin"></i>
                <i v-if="2==elIcon" class="el-icon-error errIconMargin"></i>
                <i v-if="3==elIcon" class="el-icon-success errIconMargin"></i>
                {{msg}}
            </p>
        </li>
    </ul>
</template>
<script>
    export default{
        name:"entering",
        props:['tagname','inputtype',
        'place','inputicon','isValidate',
        'indicator','isdisable','user','optional',
        'succmsg','errmsgdata','reg','errmsgreg','judge'],
        data(){
            return{
                isChange:false,
                intype:this.inputtype,
                icRed:'#eee',
                miss:'查看',
                msg:'',
                wes:'',
                errShow:false,
                inputmsg:'',
                elIcon:''
            }
        },
        methods:{
            clear(bool,msg){
                this.errShow = bool;
                msg!=undefined &&(this.inputmsg = '');
            },
            showText(computed){
                if(this.inputicon!=='el-icon-view') return;
                this.isChange=!this.isChange;
                this.isChange
                    ?(this.intype="text",this.icRed="red",this.miss="隐藏")
                    :(this.intype="password",this.icRed="#eee",this.miss="显示");
            },
            errWarning(color,text,num,obj){
                this.wes=color;
                this.msg=text
                this.elIcon=num;
                this.$emit("getdata",obj);
            },
            verify(){
                this.errShow=true;
                if(this.optional && this.inputmsg===''){
                    this.errWarning("yellow","不能为空！",1,false);
                    return;
                }
                if(this.isValidate && this.inputmsg.search(this.reg)==-1){
                    this.errWarning("red",this.errmsgreg,2,false);
                    return;
                }
                if(this.judge){
                    var data = new Object();
                    if(this.indicator === 'pwd1' || this.indicator === 'uname1'){
                        this.indicator === 'pwd1' && (data['pwd'] = this.inputmsg)
                        this.indicator === 'uname1' && (data['uname'] = this.inputmsg)
                    }else{
                        data[this.indicator] = this.inputmsg;
                    }
                    this.$http.post('http://127.0.0.1:8181/check',data,
                    {emulateJSON:true})
                    .then(response=>{
                        if(response.data==this.user){
                            this.errWarning("green",this.succmsg,3,this.inputmsg);
                        }else{
                            this.errWarning("red",this.errmsgdata,2,false);
                        }
                    },err=>{
                        this.errWarning("red",this.errmsgdata,2,false);
                        return;
                    })
                }else{
                    this.errWarning("green",this.succmsg,3,this.inputmsg);
                }
            },
        },
        mounted(){
            this.$emit("clear",this.clear);
        }
    }
</script>
<style>
    @import '../../assets/border-move.css';
    .input-group{
        width:100%;
        display:flex;
        justify-content:center;
        margin-bottom:35px;
    }
    .tag-label{
        margin-right:20px;
        font-size: 25px;
        color:#0ff;
        text-shadow:0 0 rgba(255, 255, 255, 0.7), 0 0 40px rgba(255, 255, 255, 0.7);
    }
    .tagInput{
        width:45%;
        position:relative;
    }
    .feedback{
        position: absolute;
        font-size:25px;
        top:5px;
        right:8px;
        z-index:2000;
    }
    i.el-icon-view:hover{
        color:red !important;
        cursor:pointer;
    }
    .tagInput input{
        width:99%;
        height:99%;
        box-sizing: border-box;
        padding:8px 30px 8px 10px;
        outline: none;
        border:none;
        border-bottom:2px solid red;
        background:rgba(0,255,255,0.7);
        color:#eee;
        position: absolute;
        top:2px;
        left:2px;
        z-index:900;
    }
    .tooltipColor{
        color:rgba(217, 218, 206, 0.507) !important;
    }
    .err{
        position: absolute;
        top:40px;
        left:40px;
    }
    .errIconMargin{
        margin-right:10px;
    }
</style>
