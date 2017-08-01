<template>
  <div class="shouyeone">
 <header>
 <p>新闻详情</p>
   <a class="fanhui" @click="$router.go(-1)"></a>
 </header>
    <div class="con">
<h2>轮胎价格集体暴涨，不具备环保与价格优势的轮企将倒闭</h2>
      <div class="bianji">
        <span>蓝鲸汽车 李国安 编辑</span>
        <p>最后更新于 2017-03-09 10:36</p>
      </div>

      <div class="text">
        <p>
          轮胎价格集体暴涨，不具备环保与价格优势的轮企将倒闭,轮胎价格集体暴涨，不具备环保与价格优势的轮企将倒闭
          轮胎价格集体暴涨，不具备环保与价格优势的轮企将倒闭轮胎价格集体暴涨，不具备环保与价格优势的轮企将倒闭
        </p>
        <img src="../images/shouye-1.png" alt="" width="100%" style="margin-top: 2rem;margin-bottom: 2rem">
        <p>
          轮胎价格集体暴涨，不具备环保与价格优势的轮企将倒闭,轮胎价格集体暴涨，不具备环保与价格优势的轮企将倒闭
          轮胎价格集体暴涨，不具备环保与价格优势的轮企将倒闭轮胎价格集体暴涨，不具备环保与价格优势的轮企将倒闭
        </p>
      </div>
    </div>
   <F/>
  </div>
</template>

<script>
  import F from './footer.vue'
  export default {
    name: 'xinche-xiangqing',
    components:{
      F
    },
   mounted(){
        console.log(this.$route.params.id)
   }
  }
</script>

<style>
  .shouyeone{
    width: 100%;
    background: #f6f6f6;
    overflow: auto;
  }
  .shouyeone>header{
    position: fixed;
    top: 0;
    z-index: 99;
    width: 100%;
    line-height: 4.6rem;
    font-size: 1.5rem;
    height: 4.6rem;
    background: #1A93D1;
    text-align: center;
    color: #fff;
  }
  .fanhui{
    background: url("../images/fanhui_03.png");
    width: 1.8rem;
    height: 1.3rem;
    position: absolute;
    left: 1.5rem;
    top: 1.8rem;
    background-size:100% 100% ;
  }

  .con{
    margin-bottom: 5rem;
    margin-top: 4.6rem;
    padding: 1.5rem;
  }
  .con>h2{
    color: #01498D;
  }
  .bianji{
    margin-top: 2rem;
    width: 100%;
  }
 .bianji>span{
   color: #01498D;
 }
  .bianji>p{
color: #696969;
  }
  .text{
    margin-top: 2rem;
    font-size: 1.6rem;
  }
  .text>p{
    line-height: 2.5rem;
  }
</style>
