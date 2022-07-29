<template>
  <div class="cart">
    <!-- 导航栏 -->
    <nav-bar class="cart-nav"><div slot="center">购物车({{getCartLength}})</div></nav-bar>
    <!-- 商品列表 -->
    <cart-list />
    <!-- 底部工具栏 -->
    <cart-button-bar />
  </div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar.vue'
import CartList from './childComps/CartList'
import CartButtonBar from './childComps/CartButtonBar'

import {mapGetters} from 'vuex'
export default {
  components: { 
    NavBar,
    CartList,
    CartButtonBar,
  },
  computed: {
    // two methods
    // ...mapGetters(['cartLength', 'cartList'])
    ...mapGetters({
      getCartLength: 'cartLength',
      // getCartList: 'cartList'
    })
  }
}
</script>

<style scoped>
  .cart .cart-nav {
    font-weight: 700;
    color: #fff;
    background-color: var(--color-tint);
  }
</style>