<template>
  <div class="toast" v-show="isShow">
    <div>{{message}}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // name: '123123'
      message: '',
      isShow: false,
    }
  },
  props: {
    // message: {
    //   type: String,
    //   default: '',
    // },
    // show: {
    //   type: Boolean,
    //   default: false
    // }
  },
  methods: {
    show(message, duration) {
      duration = duration || 2000
      this.isShow = true
      this.message = message
      
      setTimeout(() => {
        this.isShow = false
        this.message = ''
      }, duration);
    }
  }
}
</script>

<style scoped>
  .toast {
    position: fixed;

    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    padding: 10px 8px;
    
    color: #fff;
    background-color: rgba(0, 0, 0, .5);

    z-index: 9;
  }
</style>