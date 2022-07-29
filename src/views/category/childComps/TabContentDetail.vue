<template>
  <grid-view>
    <goods-list-item v-for="(item, index) in categoryDetail" :key="index" :goodsItem="item" />
  </grid-view>
</template>

<script>
import GridView from '@/components/common/gridview/GridView.vue'
import GoodsListItem from '@/components/content/goods/GoodsListItem.vue'
export default {
  components: { GridView, GoodsListItem },
  props: {
    categoryDetail: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style>

</style>