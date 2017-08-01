<template>

      <mt-button @click.native="openToast" size="large">点击弹出 Toast</mt-button>

</template>

<style lang="scss">
.mint-toast-text{
  display: inline-block;
  width: 100px;
  height: 100px;
  background: #fff;
}
</style>

<script type="text/babel">
import { Toast } from 'mint-ui';
  export default {
    data(){
      return{
        Toast:''
      }
    },
    methods: {
      openToast() {
        Toast('提示信息');
      }
    }
  };
</script>
