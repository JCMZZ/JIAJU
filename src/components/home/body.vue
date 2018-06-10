<template>
  <div id="cards" v-loading="!newCommodity.length>0"
    element-loading-text="拼命加载中"
    element-loading-spinner="el-icon-loading"
    element-loading-background="rgba(0, 0, 0, 0.9)"
    customClass="el-loading-spinner">
      <Card warn="新品上市" :commodity="newCommodity" @getElement="send"/>
      <Card warn="热销产品" :commodity="hotCommodity" @getElement="send"/>
      <Card warn="销量最高" :commodity="bestCommodity" @getElement="send"/>
  </div>
</template>
<script>
    import keydown from '../../assets/js/keydown.js'
    import wheel from '../../assets/js/mousewheel'
    import bus from '../../assets/js/bus.js'
    import Card from "./card.vue";
    import * as TWEEN from 'tween.js'

    export default {
        name:"bod",
        data(){
            return{
                newCommodity:'',
                hotCommodity:'',
                bestCommodity:'',
                el:[],
                number:0,
            }
        },
        components:{
            Card,
        },
        methods:{
            send(msg){
                this.el.push(msg);
            },
            win(){
                // let scr = document.body.scrollTop;
                let scr = document.documentElement.scrollTop;
                for(let i=0;i<this.el.length;i++){
                    let elTop = this.el[i][0].offsetTop-150;
                    let elH = this.el[i][0].offsetHeight+elTop;
                    if(scr>=elTop&&scr<elH){
                       bus.$emit("sendIndex",this.el[i][1]);
                    }
                }
            },
            mo(){
                bus.$on("slideTo",msg=>{
                    for(let i=0;i<this.el.length;i++){
                        let assign = this.el[i][1];
                        if(assign===msg){
                            this.number == this.el[i][0].offsetTop+3
                                ?(this.number+=1)
                                :(this.number = this.el[i][0].offsetTop+3 );
                        }
                    }
                })
            },
            getData(){
                this.$http.get('http://127.0.0.1:8181/home/card',{
                    emulateJSON:true
                })
                .then(response=>{
                    this.newCommodity=response.data.slice(0,6);
                    this.hotCommodity=response.data.slice(6,12);
                    this.bestCommodity=response.data.slice(12);
                },
                err=>{
                    console.log(err);
                })
            }
        },
        mounted(){
            setTimeout(this.win,800);
            wheel['detail'] = this.win;
            keydown['detail'] = this.win;
            this.mo();
            this.getData();
        },
        watch: {
		    number: function(newValue, oldValue) {
		    //   console.log("新的数据： "+newValue)
		    //   console.log("旧的数据： "+oldValue)
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
		        .to({ tweeningNumber: newValue },800)
		        .onUpdate(function () {
                //   document.body.scrollTop = this.tweeningNumber.toFixed(0)
                  document.documentElement.scrollTop = this.tweeningNumber.toFixed(0)
		        })
		        .start()
		      animate()
		    }
		}
    }
</script>
<style>
    #cards{
        margin-bottom:15px;
    }
</style>

