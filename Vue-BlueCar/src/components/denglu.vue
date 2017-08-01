<template>
  <div class="denglu">
    <header>
      <p>新闻详情</p>
      <a class="fanhui" @click="$router.go(-1)"></a>
      <router-link to="/zhuce" class="zhuce1">注册</router-link>
    </header>
    <div class="deng">
      <div class="lanjing">
        <img src="../images/lanjing.png" alt="">
      </div>
      <div class="input">
        <input type="text" placeholder="请输入手机号码">
        <input type="text" placeholder="请输入密码">
        <div class="wangjimima">
          <a href="">忘记密码</a>
        </div>
      </div>
      <div class="button">
        <button>登录</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'denglu'
}
</script>

<style>
  .denglu{
    width: 100%;
    background: #f6f6f6;
    overflow: auto;
  }
  .denglu>header{
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
  .deng{
    margin-top: 7rem;
    width: 100%;
    background: #f6f6f6;
  }
  .lanjing{
    width: 9rem;
    margin: 0 auto;
  }
  .lanjing>img{
    width: 100%;
    margin-bottom: 2rem;
  }
  .input{
    padding:0 1rem ;
    position: relative;
    width: 100%;
  }
  .input>input:first-child{
    width: 100%;
    height: 3rem;
  }
  .input>input:nth-child(2){
    width: 80%;
    height: 3rem;
  }
  .wangjimima{
    position: absolute;
    width: 18.7%;
    margin-bottom: 1rem;
    height: 3rem;
    background: #fff;
    border: 1px solid #696969;
    border-left: none;
    line-height: 3rem;
    display: inline-block;
    text-align: right;
    padding-right: .5rem;
  }
  .wangjimima>a{
    text-decoration: none;
    color: #696969;
  }
  .button{
    width: 100%;
    padding: 1rem;
  }
  .button>button{
    margin-top: 3rem;
    width: 100%;
    height: 3rem;
    background: #1A93D1;
    border-radius: 5px;
    font-size: 1.3rem;
    border: 1px solid #1A93D1;
    color: #fff;
  }
  .zhuce1{
    text-decoration: none;
    color: #fff;
    position: absolute;
    right: 1.5rem;
    top: 0rem;
  }
</style>
