<template>
  <div class="tab-menu">
    <scroll id="tab-menu" class="content">
      <div class="menu-list">
        <div class="menu-list-item"
         v-for="(item, index) in categories"
         :key="index"
         :class="{active: index === currentIndex}"
         @click="itemClick(index)"
         >
          {{item.title}}
        </div>
      </div>
    </scroll>
  </div>
</template>

<script>
import Scroll from 'components/common/scroll/Scroll.vue'
export default {
  components: { Scroll },
  props: {
    categories: {
      type: Array,
      default(){
        return []
      }
    }
  },
  data() {
    return {
      currentIndex: 0,//索引值
    }
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index
      this.$emit('selectItem', index)
    }
  }
}
</script>

<style scoped>
  .tab-menu {
    height: 100vh;
  }
  .content {
    background-color: #f6f6f6;
    height: calc(100% - 44px - 49px);
    width: 100px;
    overflow: hidden;
    box-sizing: border-box;
  }
  .menu-list {
    padding-bottom: 14px;
  }
  .menu-list-item {
    height: 40px;
    line-height: 40px;
    text-align: center;
    font-size: 14px;
  }
  .menu-list-item.active {
    font-weight: 700;
    color: var(--color-high-text);
    background-color: #fff;
    border-left: 3px solid var(--color-high-text);
  }
</style>