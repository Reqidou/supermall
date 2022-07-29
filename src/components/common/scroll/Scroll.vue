<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  data() {
    return {
      scroll: null,
    }
  },
  props: {
    // 事件类型 滚动显示
    probeType: {
      type: Number,
      default: 0
    },
    // 上拉加载状态
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    // 1. 创建BScroll对象
    this.scroll = new BScroll(this.$refs.wrapper, {
    observeDOM: true,//框内滚动
    click: true,//支持点击，button因为自带点击事件，所以不会受影响
    probeType: this.probeType,
    pullUpLoad: this.pullUpLoad
    })
    // 2. 监听滚动
    if(this.probeType === 2 || this.probeType === 3) {
      this.scroll.on('scroll', position => {
        this.$emit('scroll', position)
    })
    }
    
    // 3. 监听滚动到dibu
    if(this.pullUpLoad) {
      this.scroll.on('pullingUp', () => {
      this.$emit('pullingUp')
    })
    }
    
    
  },
  methods: {
    /*
    *传递到home页面
    */
    // 返回顶端
    scrollTo(x, y, time) {
      this.scroll && this.scroll.scrollTo && this.scroll.scrollTo(x, y, time)
    },
    // 上拉加载更多
    finishPullUp() {
      setTimeout(() => {
        this.scroll.finishPullUp()
      }, 1000);
    },
    refresh() {
      setTimeout(() => {
        this.scroll && this.scroll.refresh()//先判断scroll对象是否加载，因为scroll在mouted中， 图像加载在created中，所以造成这个问题
      }, 1000);
    },
    getScrollY() {
      return this.scroll ? this.scroll.y : 0
    }
  }
}
</script>

<style>

</style>