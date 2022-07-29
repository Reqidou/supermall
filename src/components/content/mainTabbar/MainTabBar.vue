<template>
  <div>
    <tab-bar class="tab">
      <tab-bar-item path="/home" activeColor='#59aaff'>
        <svg class="icon" aria-hidden="true" slot="item-icon">
          <use xlink:href="#icon-shouye"></use>
        </svg>
        <svg class="icon" aria-hidden="true" slot="item-icon-active">
          <use xlink:href="#icon-shouye1"></use>
        </svg>
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category" activeColor='#59aaff'>
        <svg class="icon" aria-hidden="true" slot="item-icon">
          <use xlink:href="#icon-caidan1"></use>
        </svg>
        <svg class="icon" aria-hidden="true" slot="item-icon-active">
          <use xlink:href="#icon-caidan"></use>
        </svg>
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/cart" activeColor='#59aaff'>
        <svg class="icon" aria-hidden="true" slot="item-icon">
          <use xlink:href="#icon-gouwuchekong"></use>
        </svg>
        <svg class="icon" aria-hidden="true" slot="item-icon-active">
          <use xlink:href="#icon-gouwuche"></use>
        </svg>
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile" activeColor='#59aaff'>
        <svg class="icon" aria-hidden="true" slot="item-icon">
          <use xlink:href="#icon-icon-test"></use>
        </svg>
        <svg class="icon" aria-hidden="true" slot="item-icon-active">
          <use xlink:href="#icon-icon-myself-1"></use>
        </svg>
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from 'components/common/tabbar/TabBar.vue'
import TabBarItem from 'components/common/tabbar/TabBarItem.vue'
export default {
  components: {
    TabBar,
    TabBarItem,
  }
  
}
</script>

<style>
  .tab{
    z-index: 10;
  }
</style>