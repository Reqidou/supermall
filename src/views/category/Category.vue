<template>
  <div class="category">
    <nav-bar class="nav-bar">
      <div slot="center">分类</div>
    </nav-bar>

    <div class="content">
      <tab-menu :categories="categories" @selectItem="selectItem"/>
      <scroll class="tab-content">
        <tab-content-category :subcategories="showSubcategories"/>
        <tab-control :titles="['综合', '新品', '销量']"
                       @tabClick="tabClick"></tab-control>
        <tab-content-detail :categoryDetail="showCategoryDetail"/>
      </scroll>
    </div>
    
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue';
import Scroll from 'components/common/scroll/Scroll.vue';

import TabMenu from './childComps/TabMenu';

import { getCategory, getSubCategory, getCategoryDetail} from 'network/category.js'
import TabContentCategory from './childComps/TabContentCategory.vue';
import TabControl from '@/components/content/tabControl/TabControl.vue';
import TabContentDetail from './childComps/TabContentDetail.vue';

export default {
  data() {
    return {
      categories: [],//分类列表
      categoryData: [],//分类子数据
      currentIndex: -1,
      currentType: 'pop',
    }
  },
  components: {
    NavBar,
    TabMenu,
    Scroll,
    TabContentCategory,
    TabControl,
    TabContentDetail,
  },
  created() {
    this._getCategory()
  },
  methods: {
    _getCategory() {
      getCategory().then(res => {
        // console.log(res.data);
        // 1.获取数据
        this.categories = res.data.category.list;
        // 2.初始化每个类别子数据
        for(let i = 0; i < this.categories.length; i++) {
          this.categoryData[i] = {
            subcategories: {},
            categoryDetail: {
              'pop': [],
              'new': [],
              'sell': [],
            }
          }
        }
        // 3.请求第一个分类子数据
        this._getSubCategories(0)
      }) 
    },
    _getSubCategories(index) {
      this.currentIndex = index
      console.log(this.categories[index]);
      const mailKey = this.categories[index].maitKey
      getSubCategory(mailKey).then(res => {
        this.categoryData[index].subcategories = res.data
        this.categoryData = {...this.categoryData};
        this._getCategoryDetail('pop');
        this._getCategoryDetail('new');
        this._getCategoryDetail('sell');
        console.log(this.categoryData);  
      })

    },
    _getCategoryDetail(type) {
      // 1.获取i请求的miniwallkey
      const miniWallKey = this.categories[this.currentIndex].miniWallkey
      // 2.发送请求，传入miniwallkey及type
      getCategoryDetail(miniWallKey, type).then((res) => {
        this.categoryData[this.currentIndex].categoryDetail[type] = res
        this.categoryData = { ...this.categoryData }
      })
    },
    selectItem(index) {
      console.log(index);
      this._getSubCategories(index)
    },
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = 'pop'
          break
        case 1:
          this.currentType = 'new'
          break
        case 2:
          this.currentType = 'sell'
          break
      }
      console.log(this.currentType);
    },
  },
  computed: {
    showSubcategories() {
      if(this.currentIndex === -1) return {}
      return this.categoryData[this.currentIndex].subcategories
    },
    showCategoryDetail() {
      if (this.currentIndex === -1) return [];
      return this.categoryData[this.currentIndex].categoryDetail[
        this.currentType
      ];
    }
  },
  mounted() {
    
  }
}
</script>

<style scoped>
  .nav-bar {
    font-weight: 700;
    color: #fff;
    background-color: var(--color-tint);
  }
  .content {
    overflow: hidden;

    position: absolute;

    display: flex;

    left: 0;
    right: 0;
    top: 44px;
    bottom: 49px;
  }
  .tab-content {
    height: 100%;
    flex: 1;
  }
</style>