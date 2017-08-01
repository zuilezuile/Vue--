<template>
  <div class="xinche-xiangqing">
    <div class="fan">
      <a href="" @click="$router.go(-1)"></a>
      <span>{{lists.a}}</span>
    </div>
  <div class="con1">
  <div class="tu">
    <img :src='lists.img1' alt="">
  </div>
    <div class="tuwen1">
     <h1>{{lists.h1}}</h1>
      <div class="time">
        <span>{{lists.span1}}</span>
        <p>{{lists.p1}}</p>
        <div class="h2">
        <h2>{{lists.h2}}</h2>
        <h2>{{lists.h22}}</h2>
        <h2>{{lists.h23}}</h2>
        <h2>{{lists.h24}}</h2>
        </div>
        <div>
          <h2>{{lists.h25}}</h2>
        </div>
      </div>
      <div class="zhengwen">
        <p>{{lists.p2}}</p>
        <img :src='lists.img2' alt="">
      </div>
          <div class="pinglun1">
       <p>评论</p>
       <hr>
    </div>
    </div>
  </div>
    <F/>
  </div>
</template>

<script>
  import axios from "axios"
import F from './footer.vue'
export default {
  name: 'xinche-xiangqing',
  data(){
      return{
       lists:[]
      }
  },
  components:{
    F
  },
  created(){
  var self = this
    axios.get('../static/xinche.json')
      .then(function (res) {
        let xx = res.data.xinche
        for(var i in xx){
            if(xx[i].id==self.$route.params.id){
              self.lists= xx[i];
            }
        }
      })
      .catch(function (err) {
        console.log(err)
      })
    console.log(self.$route)
  }
}
</script>

<style lang="scss">
  .fan{
    width: 100%;
    top: 0;
    height: 4rem;
    background: rgba(0,0,0,0.4);
    position: fixed;
    z-index: 999;
    a{
      background: url("../images/fanhui_03.png");
      width: 1.8rem;
      height: 1.3rem;
      position: absolute;
      left: 1.5rem;
      top: 1.3rem;
      background-size:100% 100% ;

    }
  }
.con1{
  margin-bottom: 4rem;
  width: 100%;
  .tu{
    img{
      width: 100%;
    }
  }
  .tuwen1{
    width: 100%;
    padding: 1.5rem;
    h1{
      color: #034B8E;
    }
    .time{
      margin-top: 2rem;
      span{
        color: #1A93D1;
      }
      p{
        color: #767676;
        margin-top: 1rem;
      }
      .h2{
        width: 100%;
        text-align: center;
        h2{
          margin-top: 1rem;
        }
      }
    }
    .zhengwen{
      margin-top: 2rem;
      width: 100%;
      p{
        font-size: 1.6rem;
        line-height: 2.4rem;
      }
      img{
        margin-top: 1rem;
        width: 100%;
      }
    }
  }
  .pinglun1{
    p{
      color: #1A93D1;
      margin-bottom: .5rem;
    }
  }
}
	.right-enter-active,
	.right-leave-active {
		transition: 1s;
	}
	
	.right-enter {
		transform: translateX(100%);
	}
	
	.right-leave-active {
		transform: translateX(100%);
	}
</style>
