<template>
  <div class="home">
    <ol>
      <li><router-link to="/er">全部</router-link></li>
      <li><router-link to="/san">精华</router-link></li>
      <li><router-link to="/si">分享</router-link></li>
      <li><router-link to="/wu">问答</router-link></li>
      <li><router-link to="/liu">招聘</router-link></li>
    </ol>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
    }
  }
}
</script>


<style scoped>
.home{
  width: 100%;
}
  .home>ol {
    background: #fff;
    z-index: 9;
    position: fixed;
    top: 0;
    line-height: 4rem;
    width: 100%;
    list-style-type: none;
    display: flex;
    height: 4rem;
    font-size: 1.4rem;
    text-align: center;
    justify-content: space-around;
    border-bottom: 1px solid #696969;
  }
.home>ol>li{

}
.home>ol>li>.router-link-active{
  padding-bottom: 1rem;
  color:green;
  border-bottom: 2px solid green ;
}
</style>
