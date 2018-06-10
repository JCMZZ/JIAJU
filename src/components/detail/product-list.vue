<template>
  <div class="product-list">
    <h3 class="product-title">{{data.cname}}</h3>
    <ul class="natrue">
      <Bill natrue="价格" :bval="'￥'+data.price" />
      <Bill natrue="降价通知" :bval="productList.discounts" />
      <Bill natrue="规格" :bval="data.specification" />
      <Bill natrue="商家承诺" :bval="data.commitment" />
      <Bill natrue="支付说明" :bval="productList.payment" />
      <Bill natrue="商家库存" :bval="data.count" />
    </ul>
  </div>
</template>
<script>
  import Bill from './bill.vue'
  export default{
    name:"productList",
    data(){
      return{
        productList:{
          discounts:"支持",
          payment:'银联/支付宝/刷卡',
        }
      }
    },
    props:['data'],
    components:{
      Bill
    }
  }
</script>
<style>
  .product-list{
    max-width:260px;
    position:absolute;
    right: 0;
    top:0;
  }
  .product-title{
    color:red;
    margin-bottom:30px;
  }
  .natrue{
    text-align:left;
  }
  .natrue li{
    margin:0 10px 15px 20px;
  }
  .natrue li strong{
    color:darkolivegreen;
    margin-right:10px;
  }
</style>
