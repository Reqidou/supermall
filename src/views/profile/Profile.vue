<template>
  <div>
    <nav-bar class="home-nav"><div slot="center">我的档案</div></nav-bar>
    <scroll class="content" :probe-type="3">
    <user-info/>
    <account/>
    <list-view :list-data="orderList" />
    <list-view :list-data="serviceList" />
    </scroll>
  </div>
</template>

<script>
import Scroll from 'components/common/scroll/Scroll'
import NavBar from '@/components/common/navbar/NavBar.vue'
import UserInfo from './childComps/UserInfo'
import Account from './childComps/Account'
import ListView from './childComps/ListView'
export default {
  components: {
    Scroll,
    NavBar,
    UserInfo,
    Account,
    ListView,
  },
  data() {
    return {
      orderList: [
        {icon: '#icon-xiaoxi', info: '我的消息'},
        {icon: '#icon-a-pointsmall', info: '积分商城'},
        {icon: '#icon-huiyuan', info: '会员卡'},
      ],
      serviceList: [
        {icon: '#icon-gouwuchekong', info: '我的购物车'},
        {icon: '#icon-phone', info: '下载购物APP'},
      ]
    }
  }
}
</script>

<style scoped>
  .home-nav {
    background-color: var(--color-tint);
    color: #fff;
  };
  .content {
    height: 300px;
    background-color: aqua;
    overflow: hidden;
  };
</style>