<template>
  <div class="bordercast-main">
    <p v-if="!data.length">正在更新~~~</p>
    <div style="overflow:hidden">
      <ul v-if="data.length" class="birdercast-ul" 
      :style="{transform:'translateX('+move+'px)'}"
      :class="{trans:isTransition}">
        <li v-for="(item,index) in data" :key="index">
          {{filter(item)}}
          <strong @click="jump(item.cid)">【{{item.cname}}】</strong>
          一套
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  import bus from '../../assets/js/bus.js'
  import unload from '../../assets/js/unload'
  export default{
    name:'broadcast',
    data(){
      return{
        data:[],
        move:0,
        timer:null,
        li:0,
        isTransition:true,
        ws:'null',
        uname:''
      }
    },
    methods:{
      filter(msg){
        let un = msg.uname;
        let uname = un.substr(1,un.length-2).replace(/[\w]/ig,'*');
        uname = un.substr(0,1)+uname+un.substr(un.length-1,1);
        return `恭喜！客户：${uname}　在${new Date(msg.time).toLocaleString()}抽中`
      },
      jump(id){
        this.$router.push('/detail/'+id);
      },
      carousleData(){
        this.timer=setInterval(()=>{
          this.isTransition=true;
          this.move-=this.li;
          setTimeout(()=>{
            this.isTransition=false;
            this.move=0;
            this.data.push(this.data.shift());
          },3000);
        },5000);
      },
      getAwardData(){
        this.$http.get('http://127.0.0.1:8181/award/select')
        .then((response)=>{
          if(response.data.code){
            this.data=response.data.msg
            if(this.data.length>1){
              this.carousleData();
            }
          }
        })
        .catch(()=>{console.log("网络错误")})
      },
      checkAward(){
        this.$http.post('http://127.0.0.1:8181/check/award',
        {uname:this.uname},{emulateJSON:true})
        .then((response)=>{
          if(response.data.code){
            this.socket()
            bus.$emit('quickEvent','扫　码　领　奖');
          }else{
            bus.$emit('quickEvent','已　参　加　此　活　动');
          }
        })
        .catch(()=>{})
      },
      socket(){
        this.ws = new WebSocket('ws://localhost:8800');
        this.ws.onopen = ()=>{
          this.ws.send(this.uname)
        }
        this.ws.onmessage = (e)=>{
          console.log(e.data);
          e.data !== '已经连接' && (bus.$emit('quickEvent','已　参　加　此　活　动'));
        }
      }
    },
    mounted(){
      this.uname= JSON.parse(sessionStorage.getItem('user'))[0].uname;
      this.li = document.querySelector('.bordercast-main').offsetWidth;
      this.getAwardData();
      this.checkAward();
      unload['broadcast'] = ()=>{
        if(this.ws==='null'){ return }
        this.ws.close();
      }
    },
    beforeDestroy(){
       if(this.ws==='null'){ return }
       this.ws.close();
    }
  }
</script>
<style>
  .bordercast-main{
    width: 100%;
    height:auto;
    position: relative;
    box-sizing:border-box;
    text-align: center;
    font-size:15px;
  }
  .bordercast-main::after{
    width: 100%;
    height:100%;
    padding:5px;
    display:block;
    content:'';
    position: absolute;
    top:-5px;
    left:-5px;
    background: linear-gradient(to right, rgb(119, 8, 8) , red);
  }
  .trans{
    transition:all 1.8s linear;
  }
  .bordercast-main p{
    color:blue;
  }
  .bordercast-main>div{
    overflow: hidden;
    position: relative;
    background:rgba(0,0,0,0.5);
    z-index:100;
  }
  .birdercast-ul{
    display:flex;
    justify-content:flex-start;
  }
  .birdercast-ul li{
    width:100%;
    display:block;
    color:silver;
    flex-shrink:0;
  }
  .birdercast-ul strong{
    color:red;
  }
  .birdercast-ul strong:hover{
    cursor:pointer;
  }
</style>


