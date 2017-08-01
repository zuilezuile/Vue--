<template>
  <div id="app">
    <ul>
      <li><router-link to="/er">主页</router-link></li>
      <li><router-link to="/fabiao">发表</router-link></li>
      <li><router-link to="/xiaoxi">消息</router-link></li>
      <li><router-link to="/wode">我的</router-link></li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app{
  width: 100%;
}
#app>ul{
    position: fixed;
    bottom: 0;
    z-index: 9;
  background: #fff;
    line-height: 4rem;
    width: 100%;
    list-style-type: none;
    display: flex;
    height: 4rem;
    font-size: 1.4rem;
    text-align: center;
    justify-content: space-around;
    border-top: 1px solid #696969;
  }
#app>ul>li{
    flex-grow: 1;
  }
a{
    text-decoration: none;
    color: #000;
  }
#app>ul>li>.router-link-active{
  color:green;
}
</style>
