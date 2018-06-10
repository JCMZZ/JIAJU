<template>
  <div class="personal-data">
    <Only attribute="用户账号:" :val="personal.uname" :isdisable="true"/>
    <Only attribute="用户密码:" val="******" :is-edit="true" 
      @click.native="changeEdit('密码','pwd',personal.pwd,/^\d{6}$/,false)"/>
    <Only attribute="用户邮箱:" :val="personal.email" :is-edit="true"
      @click.native="changeEdit('邮箱','email',personal.email,/[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,true)"/>
    <Only attribute="用户电话:" :val="personal.phone" :is-edit="true"
      @click.native="changeEdit('电话','phone',personal.phone,/^(\+86)?(13|15|17|18)\d{9}$/,true)"/>
    <Only attribute="默认地址:" :val="personal.address" :is-edit="true"
      @click.native="changeEdit('地址','address',personal.address,/[\dA-Za-z\\u4E00-\\u9FA5]+/,false)"/>
    <Only attribute="注册时间:" :val="new Date(personal.time).toLocaleString()" :isdisable="true"/>
    <el-button-group v-if="show">
        <el-button @click="submit" class="button-icon" type="success" icon="el-icon-goods">保存</el-button>
        <el-button @click="cancel" class="button-icon" type="warning" icon="el-icon-remove">取消</el-button>
    </el-button-group>
    <Logout/> 
  </div>
</template>
<script>
  import bus from '../../assets/js/bus.js'
  import Only from './data-only.vue'
  import Logout from './logout.vue'
  export default {
    name:'personal',
    data(){
      return{
        show:false,
        avterShow:'',
        file:null,
        // data:new Object(),
        rest:new Object(),
        initial:new Object()
      }
    },
    props:['personal'],
    components:{
      Only,
      Logout
    },
    methods:{
      submit(){
        let formData = new FormData();
        formData.append('uid',this.personal.uid);
        if(Object.keys(this.rest).length>0){
          for(let value in this.rest){
            formData.append(value,this.rest[value])
          }
        }
        if(this.avterShow && this.file.element.value.length>0){
          formData.append('file',this.file.file);
          formData.append('avter','path');
        }
        this.$http.post('http://127.0.0.1:8181/update',formData,
          {cache:false,contentType:false,processData:false,})
        .then(response=>{
          if(response.data.code){
            if(this.rest.hasOwnProperty('pwd')){
              this.message('success',"保存成功，密码已经被更改，会跳转重新登录！");
              this.$router.push('/login');
            }else{
              let data = JSON.parse(sessionStorage.getItem('user'))[0];
              sessionStorage.clear();
              for(let value in this.rest){
                data[value] = this.rest[value];
              }
              let path = response.data.msg;
              path !== 'success' && (data.avter=path);
              sessionStorage.setItem('user',JSON.stringify([data]));
              this.message('success',"保存成功")
            }
            this.dataClear();
          }else{
            this.dataReset();
            this.message('warning',"保存失败")
          }
        })
        .catch(err=>{
          this.dataReset();
          this.message('warning',"网络错误")
        })
      },
      cancel(){
        this.dataReset();
        this.message("warning","已取消保存！")
      },
      dataReset(){
        for(let key of Object.keys(this.initial)){
          this.personal[key] = this.initial[key];
        }
        this.dataClear();
        bus.$emit('personal',false);
      },
      dataClear(){
        this.show = false;
        this.rest = new Object();
        this.initial = new Object();
      },
      changeEdit(attrText,attribute,val,reg,diff){
        this.$prompt(attrText, '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            inputValue:val,
            inputPattern:reg,
            inputErrorMessage:'确保格式正确！'
        }).then(({ value }) => {
            this.valid(value,attribute,diff)
        }).catch(() => {
            this.judge();
            this.message("info","您已取消编辑")
        });
      },
      valid(val,attribute,diff){
          !this.initial.hasOwnProperty(attribute) && (this.initial[attribute] = this.personal[attribute]);
          if(this.judgeChange(val,attribute)) return;
          if(val===''){
              this.message("warning","失败，不得为空！");
              return;
          }
          if(diff){
              var data = new Object();
              data[attribute] = val;
              this.$http.post('http://127.0.0.1:8181/check',data,
              {emulateJSON:true})
              .then(response=>{
                  if(response.data==='0'){
                      this.show = true;
                      this.rest[attribute] = val;
                      this.personal[attribute] = val;
                      this.message("success","可保存！")
                      return;
                  }else{
                      this.message("warning","失败，已存在，不可重复！");
                      return;
                  }
              },err=>{
                  this.message("warning","失败，已存在，不可重复！");
                  this.rest.hasOwnProperty(attribute)  && (this.personal[attribute] = this.rest[attribute]);
                  return;
              })
          }else{
              this.show = true;
              this.rest[attribute] = val;
              this.personal[attribute] = val;
              this.message("success","可保存！")
          }
          this.judge();
      },
      message(type,text){
        this.$message({
          type:type,
          duration:500,
          message:text
        });  
      },
      judge(){
        let length = Object.keys(this.rest).length;
        length<=0 && !this.avterShow && (this.show = false);
      },
      judgeChange(val,attribute){
        if(val == this.initial[attribute]){
          this.personal[attribute] = val;
          delete this.initial[attribute];
          delete this.rest[attribute];
          this.judge();
          this.message("info","未修改");
          return true;
        }
      }
    },
    mounted(){
      bus.$on('avter',msg=>{
        this.show=msg.change;
        this.avterShow = msg.change;
        this.file=msg;
      })
    }
  }
</script>
<style>
  .personal-data{
    text-align:left;
    padding:25px;
    position: relative;
  }
</style>
