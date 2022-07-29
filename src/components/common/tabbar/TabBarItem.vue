<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
    
    
      <!-- <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-shouye"></use>
      </svg>
      <div>首页</div>
      </div>
    <div class="tab-bar-item">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-caidan1"></use>
      </svg>
      <div>分类</div>
      </div>
    <div class="tab-bar-item">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-gouwuchekong"></use>
      </svg>
      <div>购物车</div>  
    </div>
    <div class="tab-bar-item">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-icon-test"></use>
      </svg>
      <div>我的</div> -->
  </div>
</template>

<script>
export default {
  props: {
    path: String,
    activeColor: {
      type: String,
      default: '#59aaff'
    }
  },
  data() {
      return {
        // isActive: true
      }
  },
  methods: {
    itemClick() {
      this.$router.replace(this.path)
    }
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1
    },
    activeStyle() {
      return this.isActive ? {color: this.activeColor} : {}
    }
  }
}
</script>

<style>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}

.icon {
  width: 24px;
  height: 24px;
  fill: currentColor;
  overflow: hidden;
  margin-top: 3px;
  vertical-align: middle;
  margin-bottom: 2px;
}


</style>