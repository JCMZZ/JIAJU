<template>
    <div id="footer-main">
        <h3>嘉矩友情链接</h3>
        <div id="footer">
            <ul>
                <li v-for="(val,index) in list1" :key="index"><a :href="val.url" target="_blank">{{val.name}}</a></li>
            </ul>
            <ul>
                <li v-for="(val,index) in list2" :key="index"><a :href="val.url" target="_blank">{{val.name}}</a></li>
            </ul>
            <ul>
                <li v-for="(val,index) in list3" :key="index"><a :href="val.url" target="_blank">{{val.name}}</a></li>
            </ul>
        </div>
        <p>京ICP证150335号/京公网安备11010802009977 Copyright © 2003-2018 JIAJU CO.,LTD.</p>
        <p class="to-top" v-if="scrTop>0"><a @click="toTop" href="javascript:;" class="el-icon-d-arrow-right"></a></p>
    </div>
</template>
<script>
    import bus from '../../assets/js/bus'
    import * as TWEEN from 'tween.js'
    export default{
        name:"bottom",
        data(){
            return{
                list1:[
                    {
                        name:"百度搜索",
                        url:"https://www.baidu.com/"
                    },
                    {
                        name:"Google翻译",
                        url:"https://translate.google.cn"
                    },
                      {
                        name:"中国日报",
                        url:"http://cn.chinadaily.com.cn/"
                    },
                    {
                        name:"瓜子二手车",
                        url:"https://www.guazi.com/"
                    },
                    {
                        name:"携程旅行网",
                        url:"http://www.ctrip.com/"
                    }
                ],
                list2:[
                    {
                        name:"亚马逊",
                        url:"https://www.amazon.cn/"
                    },
                    {
                        name:"哔哩哔哩",
                        url:"https://www.bilibili.com/"
                    },
                    {
                        name:"苏宁易购",
                        url:"https://www.suning.com"
                    },
                    {
                        name:"京东商城",
                        url:"https://www.jd.com"
                    },
                    {
                        name:"房天下",
                        url:"http://www.fang.com/"
                    }
                ],
                list3:[
                    {
                        name:"网易云音乐",
                        url:"http://music.163.com/"
                    },
                    {
                        name:"头条新闻",
                        url:"https://tuijian.hao123.com"
                    },
                    {
                        name:"中华军事",
                        url:"http://military.china.com"
                    },
                    {
                        name:"IT之家",
                        url:"https://www.ithome.com/"
                    },
                    {
                        name:"汽车之家",
                        url:"https://www.autohome.com.cn"
                    }
                ],
                scrTop:0,
                number:-1
            }
        },
        methods:{
            change(){
            //   this.scrTop = document.body.scrollTop;
              this.scrTop = document.documentElement.scrollTop;
              setTimeout(this.change,1000);
            },
            toTop(){
                bus.$emit('top',0);
                this.number = 0;
            }
        },
        mounted(){
            this.change();
        },
        watch: {
		    number: function(newValue, oldValue) {
		      var vm = this
		      function animate () {
		        if (TWEEN.update()) {
		          requestAnimationFrame(animate)
		        }
		      }
		    //   oldValue = document.body.scrollTop;
		      oldValue = document.documentElement.scrollTop;
		      new TWEEN.Tween({ tweeningNumber: oldValue })
		        .easing(TWEEN.Easing.Quadratic.Out)
		        .to({ tweeningNumber: newValue },400)
		        .onUpdate(function () {
                //   document.body.scrollTop = this.tweeningNumber.toFixed(0)
                  document.documentElement.scrollTop = this.tweeningNumber.toFixed(0)
		        })
                .start()
                .onComplete(()=>{vm.number=-1})
		      animate()
		    }
		}
    }
</script>
<style>
    #footer-main{
        background:rgba(0,0,0,0.7);
        padding:20px;
    }
    #footer-main h3,
    #footer-main p{
        color:beige;
    }
    #footer{
        display: flex;
        justify-content:space-around;
        color:#fff;
        padding:20px;
    }
    #footer ul li{
        padding:5px;
    }
    #footer ul li a:hover{
        color:red;
    }
    .to-top{
        width:50px;
        height:50px;
        position:fixed;
        bottom:20px;
        right:25px;
        transform: rotate(270deg);
        font-size:45px;
        animation:upDown 0.6s infinite ease-in-out alternate;
        z-index:1000;
    }
    .el-icon-d-arrow-right:before{
        color:rgba(0,0,0,0.7);
    }
    @keyframes upDown {
        from {
            bottom:30px;
        }
        to {
            bottom:10px;
        }
    }
</style>
