<template>
 <div class="card-scroll" v-scroll="con">
    <el-row>
        <el-col>
            <h1 class="title"><i class="el-icon-refresh icon-margin"></i>{{warn}}</h1>
        </el-col>
    </el-row>
    <el-row class="card-margin">
        <el-col :span="8" v-for="(value,index) in commodity" :key="index" :offset="index > 0 ? 0 : 0">
            <el-card  :body-style="{ padding: '0px' }" >
                <div  class="image model">
                    <img :src="value.path" class="image">
                </div>
                <div style="padding: 14px;">
                    <span>{{value.cname}}</span>
                    <div class="bottom clearfix">
                        <strong>时间　</strong>
                        <time class="time strong-margin">{{ new Date().toLocaleDateString() }}</time>
                        <strong>价格　</strong>
                        <span class="strong-margin">￥{{value.price}}</span>
                        <el-button type="text" class="button" @click="jump(value.cid)">查看详情</el-button>
                    </div>
                </div>
            </el-card>
        </el-col>
    </el-row>
 </div>
</template>
<script>
    export default{
        name:"card",
        data(){
            return {
                isModel:false
            }
        },
        props:["warn","commodity"],
        methods:{
            jump(index){
                this.$router.push("/detail/"+index);
            },
            con(ele){
                this.$emit("getElement",[ele,this.warn]);
            },
            over(){
                this.isModel = true;
            },
            leave(){
                this.isModel = false;
            }
        },
        
    }
</script>
<style>
    .time {
        font-size: 13px;
        color: #999;
    }
    
    .bottom {
        margin-top: 13px;
        line-height: 12px;
    }

    .button {
        padding: 0;
        float: right;
    }

    .image {
        width: 100%;
        display: block;
    }

    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }
    
    .clearfix:after {
        clear: both
    }
    .title{
        padding:15px;
        text-align:left;
    }
    .icon-margin{
        margin-right:10px;
        color:red;
    }
    .model{
        border-radius: 4px;
        position: relative;
    }
    .model:hover:after {
        transition: all 3s ease-in-out;
        display:block;
        border-radius: 4px;
        width:100%;
        content:"";
        background:#b66b10;
        opacity:0.2;
        height:100%;
        position:absolute;
        top:0;
        left:0;
        cursor:pointer;
    }
    .clearfix strong{
        color:red;
        font-size:10px;
    }
    .strong-margin{
        margin-right: 15px;
    }
</style>
