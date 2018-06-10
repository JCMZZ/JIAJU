<template>
    <div v-loading="!commodity.length>0"
    element-loading-text="拼命加载中"
    element-loading-spinner="el-icon-loading"
    element-loading-background="rgba(0, 0, 0, 0.9)"
    customClass="el-loading-spinner">
        <crumbs v-if="commodity.length>0" :title="commodity[0].cname"/>
        <el-row class="detail-padding">
            <el-col :xs="{span: 24}" :sm="{span:12}">
                <Mirror v-if="commodity.length>0" :imgs="mirror" :comm-data="commodity[0]"/>
            </el-col>
            <el-col :xs="{span: 24}" :sm="{span:12}">
                <Service v-if="commodity.length>0" :comm="commodity[0]" />
            </el-col>
        </el-row>
        <el-row>
            <el-col>
                <h1 class="title">
                    <i class="el-icon-refresh icon-margin"></i>人气搭配
                </h1>
            </el-col>
        </el-row>
        <el-row>
            <el-tabs tab-position="left" style="height: 200px;">
                <el-tab-pane :label="'书房('+study.length+')'">
                    <Match :imgs="study"/>
                </el-tab-pane>
                <el-tab-pane :label="'卧室('+bedroom.length+')'">
                    <Match :imgs="bedroom"/>
                </el-tab-pane>
                <el-tab-pane :label="'厨房('+kitchen.length+')'">
                    <Match :imgs="kitchen"/>
                </el-tab-pane>
                <el-tab-pane :label="'客厅('+drawing.length+')'">
                    <Match :imgs="drawing"/>
                </el-tab-pane>
            </el-tabs>
        </el-row>
        <el-row>
            <el-col>
                <h1 class="title">
                    <i class="el-icon-refresh icon-margin"></i>猜你喜欢
                </h1>
            </el-col>
        </el-row>
        <el-row>
           <Guess :imgs="guess1"/>
           <Guess :imgs="guess2"/>
           <Guess :imgs="guess3"/>
        </el-row>
    </div>
</template>
<script>
    import Crumbs from './crumbs.vue'
    import Mirror from './mirror.vue'
    import Service from './service.vue'
    import Match from './match-carousel.vue'
    import Guess from './guess.vue'
    export default{
        name:"detail",
        data(){
            return {
                num:'',
                study:[
                    '/static/img/match/1.jpg',
                    '/static/img/match/2.jpg',
                    '/static/img/match/3.jpg',
                    '/static/img/match/4.jpg',
                    '/static/img/match/5.jpg',
                    '/static/img/match/6.jpg',
                ],
                bedroom:[
                    '/static/img/bedroom/1.jpg',
                    '/static/img/bedroom/2.jpg',
                    '/static/img/bedroom/3.jpg',
                    '/static/img/bedroom/4.jpg',
                    '/static/img/bedroom/5.jpg',
                    '/static/img/bedroom/6.jpg',
                    '/static/img/bedroom/7.jpg',
                    '/static/img/bedroom/8.jpg',
                    '/static/img/bedroom/9.jpg',
                ],
                kitchen:[
                    '/static/img/kitchen/1.jpg',
                    '/static/img/kitchen/2.jpg',
                    '/static/img/kitchen/3.jpg',
                    '/static/img/kitchen/4.jpg',
                    '/static/img/kitchen/5.jpg',
                    '/static/img/kitchen/6.jpg',
                    '/static/img/kitchen/7.jpg',
                    '/static/img/kitchen/8.jpg',
                    '/static/img/kitchen/9.jpg',
                    '/static/img/kitchen/10.jpg',
                ],
                drawing:[
                    '/static/img/drawing/1.jpg',
                    '/static/img/drawing/2.jpg',
                    '/static/img/drawing/3.jpg',
                    '/static/img/drawing/4.jpg',
                    '/static/img/drawing/5.jpg',
                    '/static/img/drawing/6.jpg',
                    '/static/img/drawing/7.jpg',
                    '/static/img/drawing/8.jpg',
                ],
                guess1:[
                    '/static/img/guess/1.jpg',
                    '/static/img/guess/2.jpg',
                    '/static/img/guess/3.jpg',
                    '/static/img/guess/4.jpg',
                ],
                guess2:[
                    '/static/img/guess/5.jpg',
                    '/static/img/guess/6.jpg',
                    '/static/img/guess/7.jpg',
                    '/static/img/guess/8.jpg',
                ],
                guess3:[
                    '/static/img/guess/9.jpg',
                    '/static/img/guess/10.jpg',
                    '/static/img/guess/11.jpg',
                    '/static/img/guess/12.jpg',
                ],
                commodity:'',
                mirror:''
            }
        },
        components:{
            Crumbs,
            Mirror,
            Service,
            Match,
            Guess
        },
        beforeMount(){
            this.num = this.$route.params.id;
            this.$http.post('http://127.0.0.1:8181/detail/mirror',
            {id:this.num},{emulateJSON:true})
            .then(response=>{
                this.mirror = response.data.mirror;
                this.commodity = response.data.commodity;
                this.mirror.unshift({mpath:this.commodity[0].path});
            })
            .catch(err=>{
                console.log(err);
            })
        },
        beforeCreate(){
            this.$emit("client","DETAIL")
        },
        mounted(){
            // document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        }
    }
</script>
<style>
    .detail-padding{
        padding:16px;
    }
    .title{
        text-align:left;
        padding:10px 0 15px 30px;
        color:red;
    }
    .icon-margin{
        margin-right:15px;
    }
    .el-tabs__item.is-active{
        color:red !important;
    }
    .el-tabs__active-bar{
        background:red
    }
    .el-loading-spinner{
        top:20%;
    }
</style>
