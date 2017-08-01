<template>
  <div class="nav1">
    <header>
      <img src="../images/lanjing_03.png" alt="" class="logo">
      <router-link to="/denglu"><img src="../images/lanjing_06.png" alt="" class="zhuce"></router-link>
    </header>
    <div class="nav">
      
        <router-link to="/Hello">首页</router-link>
        <router-link to="/zixun">咨询</router-link>
        <router-link to="/xinche">新车</router-link>
        <router-link to="/chuxing">出行</router-link>

    </div>
  </div>
</template>

<script>
export default {
  name: 'nav1'
}
</script>

<style>
  .nav1>header{
    position: fixed;
    top: 0;
    z-index: 99;
    width: 100%;
    height: 4.6rem;
    background: #1A93D1;
  }
  .nav1>header>.logo{
    margin-top: .6rem;
    margin-left: 40%;
    width: 8rem;
    height: 3rem;
  }
  .zhuce{
    right: 1rem;
    top: 1.5rem;
    width: 2.5rem;
    height: 2.5rem;
    position: absolute;
  }
  .nav{
    z-index: 99;
    position: fixed;
    top: 4.5rem;
    background: #F6F6F6;
    width: 100%;
    height: 4rem;
  }
  .nav{
    width: 100%;
    display: flex;
    justify-content: space-around;
    line-height: 4rem;
    font-size: 1.3rem;
    text-align: center;
  }
  .nav>a{
    flex-grow: 1;
  }
  a{
    text-decoration: none;
    color: black;
  }
  .nav>.router-link-active{
    color: #1A93D1;
    border-bottom: 2px solid #1A93D1;
  }
</style>
