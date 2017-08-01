<template lang="html">
<div class="san">
 <div class="xinxi" v-for="item in lists.data">
 <div class="tx"><img :src=item.author.avatar_url></div> <span class="name">{{item.author.loginname}}</span>
<div class="time">
<span style="color: #696969"></span>
<span style="color: green"></span>
</div>
<div class="shujv">
<h2>{{item.title}}</h2>
</div>

<hr>
<div class="pinglun">
<ul>
<li>{{item.visit_count}}</li>
<li>评论{{item.reply_count}}</li>
<li>5小时前</li>
</ul>
</div>

</div>
</div>
</template>


<script>
  import axios from 'axios'
  export default{
name:'san',
    data(){
      return{
        lists:[]
      }
    },
    created() {
      var self = this;
      axios.get('https://cnodejs.org/api/v1/topics')
        .then(function (res) {
          return res.data
          console.log(res.data)
        })

        .then(function (user) {
          self.lists = user
        })
        .catch(function (err) {
          console.log(err)
        })
    }
  }
</script>


<style lang="css">
.san{
  margin-top: 4rem;
  margin-bottom: 4rem;
}
.xinxi{
  margin-bottom: 1.5rem;
  background: #fff;
  width: 100%;
  padding: 1rem;
  box-shadow: 0 3px 5px #999;
  position: relative;
}
.tx{
  width: 2.5rem;
  display: inline-block;
  height: 2.5rem;
  border-radius: 50%;

}
.tx>img{
  width: 2.5rem;
  display: inline-block;
  height: 2.5rem;
  border-radius: 50%;
  border: 1px solid #696969;
}
.name{
  display: inline-block;
  position: absolute;
  top: 1rem;
  left: 4rem;
}
.time{
  position: absolute;
  top: 2.5rem;
  left: 3.9rem;
}
.shujv{
  margin-top: 1rem;
  margin-bottom: 1rem;
}
hr{
  border: 0;
  background: #e3e3e3;
  height: 1px ;
}
.pinglun{
  width: 100%;
}
.pinglun>ul{
  margin-top: .6rem;
  list-style-type: none;
  display: flex;
  text-align: center;
  line-height: 2rem;
}
.pinglun>ul>li{
  flex-grow: 1;
  height: 2rem;
  border-right: 1px solid #e3e3e3;
}
.pinglun>ul>li:last-child{
  border: none;
}
</style>
