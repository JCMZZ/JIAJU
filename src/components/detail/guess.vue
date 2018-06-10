<template>
  <ul class="guess-list">
      <li v-for="(value,index) in imgs" :key="index" class="three-main">
          <img :src="value" alt="">
          <div class="three-child" >
            <div class="guess-list-face guess-list-position">
                <h3>系列产品介绍</h3>
                <p>中国家具史是指中国家具的生产与发展历史。中国家具的产生可上溯到新石器时代。现代家具自1902年始,全国各地官方或商人相继办起了许多工艺局、手工业工场。</p>
            </div>
			<div class="guess-list-backface guess-list-position guess-list-size">
				<div class="guess-list-backf guess-list-position guess-list-size">
                    <h3>嘉矩产品系列</h3>
                    <p>www.91jiaju.wang</p>
                </div>
			</div>
          </div>
      </li>
  </ul>
</template>
<script>
    export default {
        name:"guess",
        props:['imgs'],
    }
</script>
<style>
    .guess-list{
        display: flex;
        justify-content:space-around;
        margin-bottom:20px;
        cursor:pointer;
    }
    .three-main{
        width:300px;
        height:300px;
        perspective: 500;
        position:relative;
        overflow: hidden;
    }
    .three-child{
        width:100%;
        height:30%;
        position: absolute;
        bottom:0;
        left: 0;
        transform:rotateY(180deg);
        backface-visibility:hidden;
        transform-style: preserve-3d;
        transition: all 1s ease-in-out;
        background: linear-gradient(rgba(219, 141, 25, 0.3), rgba(218, 189, 26, 0.9));
    }
    .three-main:hover .three-child{
        height:100% !important;
        transform:rotateY(0deg) !important;
    }
    .three-main:hover .guess-list-backf{
        opacity:0;
    }
    .guess-list-size{
        width:100%;
        height:100%;
	}
    .guess-list-position>h3{
        margin-bottom:10px;
    }
    .guess-list-face>p{
        text-indent:17px;
        text-align:left;
    }  
    .guess-list-face{
        box-sizing: border-box;
        padding:10px 40px;
        color:#2e0313;
        top:35px !important;
        transform:translateZ(100px);
        backface-visibility:hidden;
    }
    .guess-list-backface{
        background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.9));
        transform:rotateY(180deg);
        backface-visibility:hidden;
        transform-style: preserve-3d;
    }
    .guess-list-backf{
        transition:all 1s ease-in-out;
        color:#ffa600;
        transform:translateZ(100px);
    }
    .guess-list-position{
        position: absolute;
        bottom: 0;
        left:0;
	}
</style>

