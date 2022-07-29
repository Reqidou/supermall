import { debounce } from "./utils";

export const itemListenerMixin = {
  data() {
    return {
      ItemImgListener: null, //首页监听图片加载函数
      refresh: null, //因为每次执行刷新，都是不同对象的刷新，使用防抖的话，没办法有这个效果，所以需要一个变量，来接收传递过来的数值，保证图片加载传递过来的是固定的
    }
  },
  mounted() {
    this.refresh = debounce(this.$refs.scroll.refresh, 500);
    // 图片加载bug解决方法2
    this.ItemImgListener = () => {
      this.refresh();
    }
    this.$bus.$on("itemImageLoad", this.ItemImgListener);
  }
}
import BackTop from 'components/content/backTop/BackTop.vue';

export const backTopMixin = {
  components: {
    BackTop,
  },
  data() {
    return {
      isShowBackTop: false, //右下角图标显示状态
    }
  },
  methods: {
    backClick() {
      //返回顶部
      this.$refs.scroll.scrollTo(0, 0, 500);
    },
  }
}