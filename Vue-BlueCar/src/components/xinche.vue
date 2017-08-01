<template>
  <div class="xinche">
    <nn/>
    <div class="tuwen"  v-for="item in lists.xinche">
      <router-link tag="dl" :to="{path:'/xinche_xiangqing/'+item.id}">
        <dt>
          <img :src='item.img' alt="" width="105px" height="70px" style="margin-bottom: 1rem">
        </dt>
        <dd>
          <p>{{item.p}}</p>
          <span>{{item.span}}</span>
        </dd>
      </router-link>

    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import nn from './nav.vue'
  export default {
    name:'shujv',
    data(){
      return{
        lists:[],
      }
    },
    components:{
      nn
    },
    created() {
      var self = this;
      axios.get('../static/xinche.json')
        .then(function (res) {
          return res.data;
          console.log(res.data)
        })

        .then(function (user) {
          self.lists = user
          console.log(self.lists.xinche);
        })
        .catch(function (err) {
          console.log(err)
        })
    }
  }
</script>

<style>
  .xinche{
    width: 100%;
    margin-top: 8.7rem;
  }
  .tuwen{
    width: 100%;
    padding-left: 1.5rem;
    padding-bottom: 1.5rem;
    padding-right: 1.5rem;
  }
  .tuwen>dl{
    padding-top: 1.5rem;
    position: relative;
    display: flex;
    border-bottom: 2px solid #696969;
  }
  .tuwen>dl>dd>p{
    font-size: 1.3rem;
    font-weight: 600;
    margin-left: 1rem;
  }
  .tuwen>dl>dd>span{
    right: 0;
    top: 6rem;
    font-size: 1rem;
    position: absolute;
  }
</style>
