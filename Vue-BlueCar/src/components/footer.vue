<template>
  <div class="footer">
    <footer>
      <p><input type="text" placeholder="说出您的独家见解"></p>
      <a href="#aaa" class="pinglun"></a>
      <a href="javaScript:;" class="shoucang"></a>
      <a href="javaScript:;" class="fenxiang"  @click="dian"></a>
    </footer>
      <transition name="bottom">
         <div id="ying" v-if="a">
            <p @click="dian1" style="margin-left:1.5rem;">X</p>
            <ul class="tubiao">
              <li><img src="../images/fenxiang_03.png"><P>微信</P></li>
              <li><img src="../images/fenxiang_05.png"><P>微博</P></li>
              <li><img src="../images/fenxiang_07.png"><p>朋友圈</p></li>
              <li><img src="../images/fenxiang_09.png"><p>QQ</p></li>
            </ul>
         </div>
     </transition>
  </div>
</template>

<script>
export default {
  name: 'footer',
  data(){
      return{
          a:false
       }
  },
  methods: {
			dian: function() {
        // alert(22222)
				this.a=true
			},
      dian1:function(){
        this.a=false
      }
		}
}
</script>

<style lang="scss">
  footer{
    position: fixed;
    z-index: 99;
    bottom: 0;
    width: 100%;
    height: 5rem;
    background: #e5e5e5;
  }
  footer>p{
    margin-top: 1.2rem;
    margin-left: 1.5rem;
    width: 17rem;
    height: 3rem;
    border: 1px solid #DBDBDC;
    border-radius: 50px;
  }
  footer>p>input{
    border-radius: 50px;
    outline: none;
    border: 1px solid #DBDBDC;
    width: 100%;
    height: 100%;
    padding-left: 1rem;
    font-size: 1.4rem;
  }
  .pinglun{
    position: absolute;
    width: 3rem;
    height: 2.5rem;
    right: 9rem;
    top: 1.5rem;
    background: url("../images/Screenshot_2017-07-10-14-54-23-177_07.png");
    background-size:100% 100%;
  }
  .fenxiang{
    position: absolute;
    width: 2.6rem;
    height: 2.5rem;
    right: 1.5rem;
    top: 1.5rem;
    background: url("../images/Screenshot_2017-07-10-14-54-23-177_09.png");
    background-size:100% 100%;
  }
  .shoucang{
     position: absolute;
    width: 2.6rem;
    height: 2.5rem;
    right: 5.5rem;
    top: 1.5rem;
    background: url("../images/shoucang2.png");
    background-size:100% 100%;
  }
  .bottom-enter-active,
	.bottom-leave-active {
		transition: 0.5s;
	}
	
	.bottom-enter {
		transform: translateY(100%);
	}
	
	.bottom-leave-active {
		transform: translateY(100%);
  }
  #ying{
    width: 100%;
    height:8rem;
    background-color:#fff;
    position: fixed;
    z-index: 999;
    bottom:0;
  }
  .tubiao{
    width: 100%;
    list-style-type: none;
    display: flex;
    justify-content: space-around;
    text-align: center;
    li{
      img{
        width: 4rem;
        height: 4rem;
      }
    }
  }
</style>
