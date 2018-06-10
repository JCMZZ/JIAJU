<template>
    <el-collapse accordion class="guess-padding">
        <el-collapse-item title="产品简介">
            <div class="brief">Lorem ipsum dolor sit amet, consectetur adipisicing
                 elit. A laboriosam magni voluptatibus ab sapiente 
                 vel illo nam at reprehenderit suscipit atque et,
                  velit soluta, modi cupiditate ullam, maiores 
                  voluptas repellat.</div>
        </el-collapse-item>
        <el-collapse-item title="产品评论">
           <h4>XXXX:</h4>
           <p class="brief">A laboriosam magni voluptatibus ab sapiente 
                 vel illo nam at reprehenderit suscipit atque et,
                  velit soluta, modi cupiditate ullam, maiores 
                  voluptas repellat.</p>
        </el-collapse-item>
        <el-collapse-item title="客户反馈">
            <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
            <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
        </el-collapse-item>
    </el-collapse>
</template>
<script>
    export default{
        name:"guess"
    }
</script>
<style>
    .el-collapse-item__header{
        color:#0ff;
    }
    .brief{
        text-align:left;
        color:rgb(46, 109, 128);
        background: rgba(0,0,0,0.3);
        padding:10px;
    }
    .guess-padding{
        margin-top:10px;
    }
</style>

