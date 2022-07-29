<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <tab-control
      :titles="['流行', '新款', '精选']"
      @tabClick="tabClick"
      ref="tabControl1"
      class="tabControl"
      v-show="isTabFixed"
    />
    <scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      @scroll="contentScroll"
      :pull-up-load="true"
      @pullingUp="loadMore"
    >
      <HomeSwiper :banners="banners" @swiperImgLoad="swiperImgLoad" />
      <recommend-view :recommends="recommends" />
      <feature-view />
      <tab-control
        :titles="['流行', '新款', '精选']"
        @tabClick="tabClick"
        ref="tabControl2"
      />
      <good-list :goods="showGoods" />
    </scroll>
    <back-top @click.native="backClick" v-show="isShowBackTop" />
  </div>
</template>

<script>
import HomeSwiper from "./childCopms/HomeSwiper.vue";
import RecommendView from "./childCopms/RecommendView.vue";
import FeatureView from "./childCopms/FeatureView.vue";

import NavBar from "components/common/navbar/NavBar";
import TabControl from "components/content/tabControl/TabControl";
import GoodList from "components/content/goods/GoodsList";
import Scroll from "components/common/scroll/Scroll";
import BackTop from "components/content/backTop/BackTop";

import { getHomeMultidata, getHomeData } from "network/home";
import { itemListenerMixin } from "common/mixin";
export default {
  components: {
    HomeSwiper,
    RecommendView,
    FeatureView,
    NavBar,
    TabControl,
    GoodList,
    Scroll,
    BackTop,
  },
  mixins: [itemListenerMixin],//混入
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentType: "pop", //接收的分类类型
      isShowBackTop: false, //右下角图标显示状态
      tabOffsetTop: 0, //顶部距离
      isTabFixed: false, //吸附选项卡的高度判定
      saveY: 0, //离开时保存的液面高度
      // ItemImgListener: null, //首页监听图片加载函数
    };
  },
  created() {
    //1.请求多个数据
    this.getHomeMultidata();
    // 2.请求商品数据
    this.getHomeData("pop");
    this.getHomeData("new");
    this.getHomeData("sell");
  },
  mounted() {
    // // 3.监听item中图片加载完成
    // const refresh = debounce(this.$refs.scroll.refresh, 500);
    // // 图片加载bug解决方法2
    // this.ItemImgListener = () => {
    //   refresh();
    // }
    // this.$bus.$on("itemImageLoad", this.ItemImgListener);
  },
  activated() {
    // this.$refs.scroll.refresh();
    this.refresh()
    this.$refs.scroll.scrollTo(0, this.saveY, 500);
  },
  deactivated() {
    // 1.保存页面高度
    this.saveY = this.$refs.scroll.getScrollY();
    // 2 取消全局事件监听
    this.$bus.$off("itemImageLoad", this.ItemImgListener)
  },
  computed: {
    //因为较长，所以用计算属性接收这个传值
    showGoods() {
      return this.goods[this.currentType].list;
    },
  },
  methods: {
    /*
     *网络请求相关
     */
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    //这里通过封装函数，取它的类型，然后每次请求，将他的页数+1，并且内部的数据都通过push及数组解构添加到原数组
    getHomeData(type) {
      const page = this.goods[type].page + 1;
      getHomeData(type, page).then((res) => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
        //多次实现下拉加载
        this.$refs.scroll.finishPullUp();
      });
    },
    /*
     *事件监听相关
     */
    // 子传夫
    tabClick(index) {
      //切换分类
      this.currentType = Object.keys(this.goods)[index];
      this.$refs.tabControl1.currentIndex = index;
      this.$refs.tabControl2.currentIndex = index;
    },
    backClick() {
      //返回顶部
      this.$refs.scroll.scrollTo(0, 0, 500);
    },
    contentScroll(position) {
      //显示隐藏
      this.isShowBackTop = Math.abs(position.y) > 1000;

      //swiperImgload 吸附的判定高度
      this.isTabFixed = Math.abs(position.y) > this.tabOffsetTop;
    },
    loadMore() {
      //加载更多
      this.getHomeData(this.currentType);
      // this.$refs.scroll.refresh()
    },
    swiperImgLoad() {
      //吸顶栏的制作
      // 4.获取tabControl的offsetTop
      //  $el用于获取组件内的元素
      this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop;
    },
  },
};
</script>

<style scoped>
#home {
  /* padding-top: 44px; */
  height: 100vh;
  position: relative;
}
.home-nav {
  background-color: var(--color-tint);
  color: #fff;

  /* position: fixed;
  left: 0;
  top: 0;
  right: 0;
  z-index: 9; */
}
/* .tab-control { */
/* position: sticky; */
/* top: 44px;
  z-index: 9;
} */
.content {
  position: absolute;
  overflow: hidden;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
/* .content {
  height: calc(100% - 93px);
  overflow: hidden;
  margin-top: 44px;
} */
.tabControl {
  position: relative;
  z-index: 9;
}
</style>
