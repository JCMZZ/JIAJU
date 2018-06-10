<template>
    <div class="demo-input-suffix ">
        <el-input
            @blur="pattern"
            placeholder="请输入购买数量"
            suffix-icon="el-icon-edit"
            v-model="count"
            class="clientServe-item">
            <template slot="prepend">购买数量</template>
        </el-input>
        <el-input
            placeholder="请输入配送地址"
            suffix-icon="el-icon-edit"
            v-model="address"
            class="clientServe-item">
            <template slot="prepend">配送地址</template>
        </el-input>
        <el-input
            placeholder="请输入备注信息"
            suffix-icon="el-icon-edit"
            v-model="remark"
            class="clientServe-item">
            <template slot="prepend">备　　注</template>
        </el-input>
        <el-button-group>
            <el-button @click="submit" class="button-icon" type="success" icon="el-icon-goods">添加</el-button>
            <el-button @click="remove" class="button-icon" type="danger" icon="el-icon-remove">重置</el-button>
        </el-button-group>
    </div>
</template>
<script>
    export default{
        name:"clientServe",
        data(){
            return{
                address:'',
                count:1,
                remark:''
            }
        },
        props:['commodity'],
        methods:{
            remove(){
                 this.$confirm('此操作将清空填写内容', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.clear();
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消重置'
                    });          
                });
            },
            clear(){
                this.address = '';
                this.count = 1;
                this.remark = '';
            },
            submit(){
                let user = JSON.parse(sessionStorage.getItem('user'));
                if(!user){
                    this.$confirm('对不起您还未登录！点击确定去登陆吧~~~', '提示', {
                        confirmButtonText: '确定',
                        cancelButtonText: '取消',
                        type: 'warning'
                    }).then(() => {
                       this.$router.push('/login');
                    }).catch(() => {
                        this.$message({
                            type: 'info',
                            message: '请先登录体验更多功能！'
                        });          
                    });
                    return;
                }
                this.address||(this.address=user[0].address);
                this.$prompt('确认地址信息添加购物车', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    inputValue:this.address,
                    inputPattern:/[\dA-Za-z\\u4E00-\\u9FA5]+/,
                    inputErrorMessage: '您的地址信息不够完善'
                    }).then(({ value }) => {
                        let data = {};
                        let cdata = this.commodity; 
                        data['cname']= cdata.cname;
                        data['discount']= cdata.discount;
                        data['price']= cdata.price;
                        data['spic']= cdata.path;
                        data['commitment']= cdata.commitment
                        data['count']= this.count;
                        data['address']= value;
                        data['uid']= user[0].uid;
                        data['cid']= cdata.cid;
                        data['remark'] = this.remark;
                        this.post(data,value);
                    }).catch(() => {
                        this.$message({
                            type: 'info',
                            message: '请重新确认地址信息！！！'
                        });       
                    });
            },
            pattern(){
                new RegExp(/^[0-9]*$/).test(this.count)||(this.count = 1);
                (this.count>5 || this.count == false) && (this.count=1);
            },
            post(data,value){
                this.$http.post('http://127.0.0.1:8181/shop',data,{
                    emulateJSON:true
                })
                .then(response=>{
                    if(response.data.code){
                        this.$message({
                            type: 'success',
                            message: '商品已经添加到购物车，您的地址是: ' + value
                        });
                        this.clear();
                    }else{
                        this.$message({
                            type: 'warning',
                            message: '网络错误，添加失败！'
                        });
                    }
                })
                .catch(err=>{
                    this.$message({
                        type: 'warning',
                        message:err
                    });
                })
            }
        }
    }
</script>
<style>
    .clientServe-item{
        margin-bottom:15px;
    }
    .demo-input-suffix{
        padding:10px;
    }
    .button-icon{
        width:140px;
    }
</style>

