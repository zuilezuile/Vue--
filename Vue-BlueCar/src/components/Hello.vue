<template>
<div class="hello">
  <nn/>
  <div class="swiper-container swiper-fan">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="item in lists.lunbo">
        <img :src=item.img>
        <p>{{item.p}}</p>
      </div>
    </div>
    <div class="swiper-pagination"></div>
  </div>
  <div class="tuwen">
    <dl>
      <dt>
        <img src="../images/lanjing_13.png" alt="" width="105px" height="70px" style="margin-bottom: 1rem">
      </dt>
      <dd>
        <p>轮胎价格集体暴涨,不具备环保价格优势轮骑将倒闭</p>
        <span>03-06 10:26</span>
      </dd>
    </dl>
    <dl>
      <dt>
        <img src="../images/lanjing_16.png" alt="" width="105px" height="70px" style="margin-bottom: 1rem">
      </dt>
      <dd>
        <p>轮胎价格集体暴涨,不具备环保价格优势轮骑将倒闭</p>
        <span>03-06 10:26</span>
      </dd>
    </dl>

    <div class="sanzhang">
      <p>轮胎价格集体暴涨,不具备环保价格优势轮骑将倒闭</p>
      <div class="tupian">
        <img src="../images/lanjing_18.png" alt="" width="105px" height="70px" style="margin-bottom: 1rem">
        <img src="../images/lanjing_20.png" alt="" width="105px" height="70px" style="margin-bottom: 1rem">
        <img src="../images/lanjing_22.png" alt="" width="105px" height="70px" style="margin-bottom: 1rem">
      </div>
      <span>03-06 10:26</span>
    </div>
  </div>
</div>
</template>

<script>
  import axios from 'axios'
  import swiper from 'vue-awesome-swiper'
  import nn from './nav.vue'
export default {
  name: 'hello',
  data () {
    return {
     lists:[]
    }
  },
  components:{
      nn
  },
  mounted(){
    var newSwiper=new Swiper(".swiper-fan",{
      autoplay:3000,
      paginationClickable:true,
      pagination:".swiper-pagination",
      observer: true, //当swiper和swiper的子元素发生改变时，重新初始化
      oberverParents: true, //当swiper的父元素发生改变时，重新初始化
      loop:true
    })
  },
      created() {
      var self = this;
      axios.get('../static/shouye.json')
        .then(function (res) {
          return res.data;
          console.log(res.data)
        })

        .then(function (user) {
          self.lists = user
          console.log(self.lists);
        })
        .catch(function (err) {
          console.log(err)
        })
    }
}
</script>


<style lang="scss">
.hello{
   width: 100%;
  /*overflow: hidden;*/
   margin-top: 8.6rem;
}

.swiper-fan{
  width: 100%;
}
.swiper-fan>.swiper-wrapper{
  width: 100%;
}
.swiper-fan>.swiper-wrapper>.swiper-slide>img{
  height: 140px;
  width: 100%;
}
.swiper-container-horizontal >.swiper-pagination-bullets{
  left: 150px;
}
.swiper-slide{
  position: relative;
  p{
    padding-left:2rem; 
    position: absolute;
    top:9rem;
    width: 100%;
    height:3rem;
    color: #fff;
    line-height: 3rem;
    background: rgba(0,0,0,0.4);
  }
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
.sanzhang{
  padding-top: 1.5rem;
  border-bottom: 2px solid #696969;
p{
  font-size: 1.6rem;
}
  span{
    text-align: right;
  }
}


  .tupian{
    margin-top: .5rem;
    justify-content: space-around;
  }
</style>
