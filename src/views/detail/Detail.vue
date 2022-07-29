<template>
  <div class="detail">
    <detail-nav-bar class="detail-nav" @clickItem="clickItem" ref="nav"/>
    <scroll ref="scroll" class="content" :probe-type="3" :pull-up-load="true"  @scroll="contentScroll">
      <detail-swiper :top-images="topImages" />
      <detail-base-info :goods="goods" />
      <detail-shop-info :shop="shop" />
      <detail-goods-info :detail-info="detailInfo" @imageLoad="imageLoad"/>
      <detail-param-info ref="params" :param-info="ParamsInfo"/>
      <detail-comment-info ref="comment" :comment-info="commentInfo"/>

      <goods-list ref="recommends" :goods="recommends"/>
    </scroll>

    <detail-bottom-bar class="bottom-bar" @addToCart="addCart"/>

    <back-top @click.native="backClick" v-show="isShowBackTop" />
  </div>
</template>

<script>
import DetailNavBar from "./childComps/DetailNavBar";
import DetailSwiper from "./childComps/DetailSwiper";
import DetailBaseInfo from "./childComps/DetailBaseInfo";
import DetailShopInfo from "./childComps/DetailShopInfo";
import DetailGoodsInfo from './childComps/DetailGoodsInfo';
import DetailParamInfo from './childComps/DetailParamInfo';
import DetailCommentInfo from './childComps/DetailCommentInfo';
import DetailBottomBar from './childComps/DetailBottomBar';

import GoodsList from 'components/content/goods/GoodsList.vue';
import Scroll from "components/common/scroll/Scroll";
// import Toast from 'components/common/toast/Toast';

import { itemListenerMixin, backTopMixin } from "common/mixin";

import { getDetail, getRecommend, Goods, Shop, GoodsParam } from "network/detail";
import { debounce } from 'common/utils';
import { mapActions } from 'vuex' 
export default {
  name: "Detail",
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    Scroll,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    getRecommend,
    GoodsList,
    DetailBottomBar,
    // Toast,
  },
  data() {
    return {
      iid: null, //id
      topImages: [], //顶部轮播图图片

      goods: {}, //储存商品信息
      shop: {}, //储存店家信息,
      detailInfo: {}, //存储商品详情信息,
      ParamsInfo: {}, //存储商品属性
      commentInfo: {}, //商品评论信息

      recommends: [], // 商品推荐展示
      themeTopY: [], // 定位滚动
      getThemeTopY: null, // 防抖函数 created
      currentIndex: 0, //存取页面滑动高度的索引

      // message: '',//toast提示信息
      // show: false, //zhuangtai
    };
  },
  mixins: [itemListenerMixin, backTopMixin],
  methods: {
    ...mapActions(['addCarts']),
    addCart() {
      // 1.获取购物车展示的内容
      let shopInfo = {}
      shopInfo.img = this.topImages[0]
      shopInfo.title = this.goods.title
      shopInfo.desc = this.goods.desc
      shopInfo.price = this.goods.realPrice
      shopInfo.iid = this.iid
      // 2. 将数据添加到购物车
      // this.$store.commit('addCarts', shopInfo)
      // this.$store.dispatch('addCarts', shopInfo).then(res => {
      //   console.log(res);
      // })
      // 映射写法
      this.addCarts(shopInfo).then(res => {
        // this.show = true
        // this.message = res
        // setTimeout(() => {
        //   this.show = false
        //   this.message = ''
        // }, 1500);
        this.$toast.show(res, 2000)
        // console.log(this.$toast.show());
      })
    },
    imageLoad() {
      // this.$refs.scroll.refresh()
      this.refresh()
      this.getThemeTopY()
    },
    clickItem(index) {
      this.$refs.scroll.scrollTo(0, -this.themeTopY[index], 100)
    },
    contentScroll(position) {
      // 1.获取y值
      let positionY = -position.y
      for(let i in this.themeTopY) {
        i = parseInt(i)
        if(this.currentIndex !== i && ((i < this.themeTopY.length-1 && positionY >= this.themeTopY[i] && positionY < this.themeTopY[i+1]) || (i === this.themeTopY.length-1 && positionY >= this.themeTopY[i]))) {
          this.currentIndex = i
          this.$refs.nav.currentIndex = this.currentIndex
        }
      }
      this.isShowBackTop = Math.abs(position.y) > 1000;
    },
    
  },
  created() {
    // 1.保存传入的id
    this.iid = this.$route.params.iid;
    // 2.根据iid请求数据
    getDetail(this.iid).then((res) => {
      const data = res.result;
      // console.log(data);
      // 1.获取顶部轮播图图片
      this.topImages = data.itemInfo.topImages;
      // 2.储存商品信息
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );
      // 3.储存店家信息
      this.shop = new Shop(data.shopInfo);
      // 4.获取商品详细信息
      this.detailInfo = data.detailInfo
      // 5. 获取商品属性
      this.ParamsInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule)
      // 6. 获取商品评论信息
      if(data.rate.cRate !== 0) {
        this.commentInfo = data.rate.list[0]
        // console.log(this.commentInfo);
      }
      
    });
    // 3.获取商品推荐数据
    getRecommend().then(res => {
      // console.log(res);
      this.recommends = res.data.list
    })
    // 4. 防抖操作，给函数赋值
    this.getThemeTopY = debounce(() => {
      //延时获取组件高度
      // this.$nextTick(()=> {
      this.themeTopY = []
      this.themeTopY.push(0)
      this.themeTopY.push(this.$refs.params.$el.offsetTop - 44)
      this.themeTopY.push(this.$refs.comment.$el.offsetTop - 44)
      this.themeTopY.push(this.$refs.recommends.$el.offsetTop - 44)
      // console.log(this.themeTopY);
      // })
    }, 500)
  },
  mounted() {
    // 3.监听item中图片加载完成
    // const refresh = debounce(this.$refs.scroll.refresh, 500)
    // this.$bus.$on('itemImageLoad', () => {
    //   refresh()
    // })
    
  },
  destroyed() {
    this.$bus.$off("itemImageLoad", this.ItemImgListener)
  }
};
</script>

<style scoped>
.detail {
  position: relative;
  z-index: 9;
  background-color: #fff;
  height: 100vh;
} 
.content {
  height: calc(100% - 44px - 49px);
  /* background-color: #fff; */
  overflow: hidden;
} 
.detail-nav {
  position: relative;
  z-index: 9;
  background-color: #fff;
  font-weight: 700;
}
/* #detail {
  height: 100vh;
  position: relative;
} 
.content {
  position: absolute;
  overflow: hidden;
  top: 0;
  bottom: 0;
} */
.bottom-bar {
  position: relative;
}
</style>
