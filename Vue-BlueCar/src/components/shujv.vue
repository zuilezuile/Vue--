<template>
  <div class="shujv">
   <h1 v-for="item in lists">{{item.h1}}</h1>
  </div>
</template>

<script>
  import axios from 'axios'
export default {
  name:'shujv',
  data(){
    return{
      lists:[]
    }
  },
  created() {
    var self = this;
    axios.get('../static/tsconfig.json')
      .then(function (res) {
        return res.data;
        console.log(res.data)
      })

      .then(function (user) {
        self.lists = user.xingche[0];
        console.log(self.lists)
      })
      .catch(function (err) {
        console.log(err)
      })
  },
  mounted(){
//    var idx=this.$route
//
//   console.log(idx)

  }
}
</script>

<style>

</style>
