<template>
  <div class="grid-view" ref="gridView">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    cols: {//列
      type: Number,
      default: 2,
    },
    hMargin: {//两侧外边距
      type: Number,
      default: 8,
    },
    vMargin: {//顶底的外边距
      type: Number,
      default: 8,
    },
    itemSpace: {//列间距
      type: Number,
      default: 8,
    },
    lineSpace: {//行间距
      type: Number,
      default: 8,
    },
  },
  mounted() {
    setTimeout(this._autoLayout, 20);
  },
  updated() {
    this._autoLayout()
  },
  methods: {
    _autoLayout() {
      // 1获取gridEl元素及子元素
      // 为什呢吗不使用document.querySelector?
      // 因为多处用到gridview。没办法判断目前使用的是哪个
      let gridEl = this.$refs.gridView
      let children = gridEl.children
      // 2 设置GridEl的内边距
      gridEl.style.padding = `${this.vMargin}px ${this.hMargin}px`
      // 3 计算item的宽度
      let itemWidth = (gridEl.clientWidth - 2 * this.hMargin - (this.cols) * this.itemSpace) / this.cols
      for (let i = 0; i < children.length; i++) {
        let item = children[i]
        item.style.width = itemWidth + 'px'
        if((i+1) % this.cols !== 0) {
          item.style.marginRight = this.itemSpace + 'px'
        }
        if(i >= this.cols) {
          item.style.marginTop = this.lineSpace + 'px'
        }
      }

    }
  }
}
</script>

<style scoped>
  .grid-view {
    display: flex;
    flex-wrap: wrap; /*换行*/
  }
</style>