<template lang="html">
<div class="app">
<header>
<h2>发表</h2>
</header>
<div class="con">
<input type="text" placeholder="标题...">
<select>
<option>请选择</option>

</select>
<textarea></textarea>
</div>
</div>
</template>


<script>
  export default{
name:'app',
    data(){
    return{

    }
    }
  }
</script>


<style lang="css">
.app{
  width: 100%;
  height: 100%;
}
  header{
    width: 100%;
    height: 4rem;
    background: #fff;
    border-bottom: 1px solid #696969;
    line-height: 4rem;
    text-align: center;
  }
  input{

  }
</style>
