<template>
  <div class="user-main user-car">
    <table v-if="datas.length>0">
      <tr>
        <th>
          <el-checkbox-button  v-model="check" @change="pitchAll($event)" text-color="#000">全选</el-checkbox-button>
        </th>
        <th>
          产品名称
        </th>
        <th>
          单价
        </th>
        <th>
          折扣
        </th>
        <th>
          数量
        </th>
        <th>
          售后
        </th>
        <th>
          备注
        </th>
        <th>
          地址
        </th>
        <th>
          时间
        </th>
        <th>
          小计
        </th>
      </tr>
      <tr v-for="(item,index) in currentData" :key="index">
        <td>
          <el-checkbox-button @change="pitch($event,item)" v-model="item.bool"><span class="el-icon-check"></span></el-checkbox-button>
        </td>
        <td @click="jump(item.cid)">
          {{item.sname}}
        </td>
        <td>
          {{item.sprice.toFixed(2) | price}}
        </td>
        <td>
          {{item.discount}}
        </td>
        <td>
           <el-input-number @change="count($event,item.sid,index)" size="mini" :min="1" :max="5" v-model="item.count">{{item.count}}</el-input-number>
        </td>
        <td>
          {{item.commitment}}
        </td>
        <el-tooltip effect="dark" content="点击编辑" 
        placement="left" transition="el-fade-in-linear">
          <td @click="changeEdit('remark','编辑备注',item.remark,/()/,item.sid,index)">
            {{item.remark}}
          </td>
        </el-tooltip>
        <el-tooltip effect="dark" content="点击编辑" 
        placement="right-end" transition="el-fade-in-linear">
          <td @click="changeEdit('address','编辑地址',item.address,/[\dA-Za-z\\u4E00-\\u9FA5]+/,item.sid,index)">
            {{item.address}}
          </td>
        </el-tooltip>
        <td>
          {{new Date(item.time).toLocaleString()}}
        </td>
        <td style="color:#eee">
          {{(item.sprice*item.count).toFixed(2) | price}}
        </td>
      </tr>
      <tr>
        <td colspan="10">
         <p class="priceTotal">
           <span>总计:</span>
           <span>{{Math.abs(+totalPrice).toFixed(2) | price}}</span>
           <el-button @click="seas" type="success" class="priceTotal-btn" icon="el-icon-sold-out">结算</el-button>
           <el-button @click="del" type="danger" class="priceTotal-btn" icon="el-icon-delete">删除</el-button>
         </p>
        </td>
      </tr>
    </table>
    <div v-if="!datas.length>0" class="car-not">
      <img src="/static/img/shop-car.gif" alt="">
      <div @click="home" class="car-not-model"><span>Go !</span></div>
    </div>
    <div class="pageIndicator" v-if="datas.length>0">
      <el-pagination
      @current-change="handleCurrentChange"
      :page-size="10"
      background
      layout="total, prev, pager, next, jumper"
      :total="datas.length"
      prev-text="上一页"
      next-text="下一页">
      </el-pagination>
    </div>
  </div>
</template>
<script>
  export default{
    name:'user-car',
    data(){
      return{
        datas:[],
        currentData:[],
        totalPrice:0,
        check:false,
        totalSelect:0
      }
    },
    props:['center'],
    methods:{
      handleCurrentChange(page){
        this.totalSelect=0;
        this.currentData = this.datas.slice((page-1)*10,(page-1)*10+10);
        for(var item of this.currentData){
          this.totalSelect += item.bool?1:0;
        }
        this.check = this.totalSelect>=this.currentData.length;
        this.pricesTotal();
      },
      pricesTotal(){
        this.totalPrice = 0;
        for(var item of this.datas){
          this.totalPrice +=item.bool
            ?(+(item.sprice*item.count*item.discount/10).toFixed(2))
            :0;
        }
      },
      pitchAll(e){
        this.check = e;
        for(var item of this.currentData){
          item['bool'] = this.check;
        }
        this.check
          ?(this.totalSelect = 10)
          :(this.totalSelect = 0);
        this.pricesTotal();
      },
      pitch(bool,item){
        if(bool){
          this.totalSelect++;
          item.bool = true;
        }else{
          this.totalSelect--;
          item.bool = false;
        }
        this.check = this.totalSelect>=this.currentData.length;
        this.pricesTotal();
      },
      jump(cid){
        this.$router.push('/detail/'+cid);
      },
      changeEdit(tag,attr,val,reg,sid,index){
        this.$prompt(attr, '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            inputValue:val,
            inputPattern:reg,
            inputErrorMessage:'确保格式正确！'
        }).then(({ value }) => {
          let data = {};
          data[tag] = value;
          data['sid'] = sid;
          this.$http.post('http://127.0.0.1:8181/shop/update',data,
          {emulateJSON:true})
          .then(response=>{
            if(response.data.code){
              this.$message({
                type:'success',
                message:'已更新'
              })
              this.currentData[index][tag] = value;
            }else{
              this.$message({
                type:'info',
                message:'网络不佳'
              })
            }
          })
          .catch(()=>{
            this.$message({
              type:'info',
              message:'网络不佳'
            })
          })
        }).catch(() => {
            this.$message({
              type:'info',
              message:'您已取消编辑'
            })
        });
      },
      seas(){
        this.$message({
          type:'warning',
          message:'暂不支持此功能！'
        })
      },
      del(){
        let sid = [];
        for(var item of this.datas){
            item.bool && (sid.push(item.sid))
        }
        if(sid.length<=0){
          this.$message({
            type:'warning',
            message:'请选择至少一条记录'
          })
          return;
        }
        this.$confirm('此操作将永久删除所选记录，是否继续？','提示',
        {confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'})
        .then(()=>{
          let data = {};
          data['id'] = sid;
          this.$http.post('http://127.0.0.1:8181/shop/del',data,{emulateJSON:true})
          .then(response=>{
            if(response.data.code){
              this.$message({
                type:'success',
                message:'删除'+response.data.msg+'条记录！'
              })
              this.totalPrice = 0;
              this.totalSelect = 0;
              this.getShop();
            }else{
              this.$message({
                type:'warning',
                message:'网络不佳'
              })
            }
          })
          .catch(()=>{
            this.$message({
              type:'info',
              message:'网络不佳'
            })
          })
        })
        .catch(()=>{
          this.$message({
            type:'info',
            message:'您已取消删除'
          })
        })
      },
      getShop(){
        this.$http.post('http://127.0.0.1:8181/shop/select',{uid:this.center.uid},
          {emulateJSON:true})
        .then(response=>{
          if(response.data.code){
            for(var item of response.data.msg){
              item['bool'] = false;
            }
            this.datas = response.data.msg;
            this.currentData = this.datas.slice(0,10);
          }else{
            this.datas = [];
          }
        })
        .catch(()=>{console.log('失败')})
      },
      count(count,sid,index){
        this.$http.post('http://127.0.0.1:8181/shop/update',{count:count,sid:sid},{emulateJSON:true})
        .then(response=>{
          if(response.data.code){
            this.currentData[index]['count']=count;
            this.pricesTotal();
          }else{
            this.$message({
              type:'info',
              message:'网络不佳'
            })
          }
        })
        .catch(()=>{
          this.$message({
            type:'info',
            message:'网络不佳'
          })
        })
      },
      home(){
        this.$router.push('/index');
      }
    },
    filters:{
      price(num){
        function re(str){
          return str.split("").reverse().join("");
        }
        let string = num+""
        let str=string.substring(0,string.length-3);
        var tmp="";
        for(var i=1;i<=str.length;i++){
          tmp+=re(str)[i-1];
          if(i%3==0&&i!=str.length){
            tmp+=",";
          }
        }
        return re(tmp)+string.substring(string.length-3)+"￥";
      }
    },
    mounted(){
      this.getShop();
    }
  }
</script>
<style>
  .user-car{
    background:slateblue;
    padding:30px;
    box-sizing:border-box;
    position: relative;
  }
  .user-car table{
    width:100%;
    border:1px solid silver;
    border-collapse:collapse;
    margin-bottom:20px;
  }
  .user-car table td{
    font-size:12px;
  }
  .user-car table td:nth-child(2):hover,
  .user-car table td:nth-child(7):hover,
  .user-car table td:nth-child(8):hover{
    color:red;
    cursor: pointer;
  }
  .user-car table th,.user-car table td{
    border:1px solid silver;
  }
  .user-car table tr:last-child,
  .user-car table tr:last-child td{
    border-color:transparent;
  }
  .el-checkbox-button__inner{
    border-radius:0 !important;
    border:none !important;
    width:56px;
  }
  .user-car table th:nth-child(1),
  .user-car table td:nth-child(1){
    width:56px;
  }
  .user-car table th:nth-child(2),
  .user-car table td:nth-child(2){
    width:120px;
  }
  .priceTotal{
    height:40px;
    text-align:right;
    font-size:20px;
    margin-top:10px;
  }
  .priceTotal>span{
    display:inline-block;
    min-width:100px;
  }
  .priceTotal>span:nth-child(2){
    margin-right:50px;
  }
  .el-pagination__total,
  .el-pagination__jump{
    color:aliceblue;
  }
  .btn-next,.btn-prev{
    width:50px;
    background:silver !important;
    margin:0 !important;
    color:#fff !important;
  }
  .btn-next:hover,.btn-prev:hover{
    background:#0ff !important;
  }
  .pageIndicator{
    position: absolute;
    bottom:20px;
    right:0;
    left:0;
    margin: auto;
  }
  .priceTotal-btn{
    opacity:0.5;
    transition:all 1s linear;
  }
  .priceTotal-btn:hover{
    opacity: 1;
  }
  .car-not{
    position: relative;
    width:100%;
    height:100%;
    background: #fff;
  }
  .car-not img,
  .car-not-model{
    width:200px;
    height:200px;
    position: absolute;
    margin: auto;
    top:0;
    left:0;
    right:0;
    bottom:0;
  }
  .car-not-model{
    z-index:100;
    background:rgba(0,0,0,0.1);
    border-radius:50%;
    cursor:pointer;
    color:red;
    line-height:200px;
  }
  .car-not-model span{
    animation:carText 1s ease-in-out infinite alternate;
  }
  @keyframes carText{
    0%{font-size:10px;opacity:1;}
    50%{font-size:55px;opacity:0;}
    100%{font-size:10px;opacity:1;}
  }
</style>
