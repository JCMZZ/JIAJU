<template>
  <div>
    <label class="avter-img" for="img">
      <el-tooltip class="item" 
        effect="dark" content="点击更换头像" 
        placement="right" transition="el-fade-in-linear">
          <img :src="imgUrl" alt="">
      </el-tooltip>
    </label>
    <input  v-if="changeFile" id="img" @change="upload($event)" class="upload" type="file"/>
    <input  v-if="!changeFile" id="img" @change="upload($event)" class="upload" type="file"/>
  </div>
</template>
<script>
  import bus from '../../assets/js/bus.js'
  export default{
    name:'avter',
    data(){
      return{
        imgUrl:this.img,
        files:null,
        changeFile:true,
      }
    },
    props:['img'],
    methods:{
      upload(e){
        this.files = e.currentTarget.files[0];
        if(!this.files){
          return;
        }
        if(!this.check(this.files.type,this.files.name)){
          this.files=null;
          this.imgUrl=this.img;
          this.$emit("get",{change:false})
          return;
        } 
        bus.$emit("avter",{change:true,file:this.files,element:e.currentTarget});
        this.imgUrl = window.webkitURL.createObjectURL(this.files);
        this.changeFile = true;
      },
      check(fileType,fileName){
        let suffix = fileName.substr(fileName.lastIndexOf('.'));
        if(!new RegExp(/^image/).test(fileType)
         && (suffix !== '.jpg' || suffix !== '.png')){
           this.$message({
             type:'warning',
             message:'文件格式不支持！'
           })
           return false;
         }
         return true;
      },
    },
    mounted(){
      bus.$on('personal',msg=>{
        bus.$emit("avter",{change:false});
        this.imgUrl = this.img;
        this.changeFile = false;
      })
    }
  }
</script>
<style>
  .upload{
    display:none
  }
  .avter-img img{
    width:150px;
    height: 150px;
    border-radius:50%;
  }
</style>

