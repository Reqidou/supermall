<template>
  <div class="goods">
    <goods-list-item v-for="item in goods" :goodsItem="item" :key="item.id"/>
  </div>
</template>

<script>
import GoodsListItem from './GoodsListItem.vue'
export default {
  components: { GoodsListItem },
  props: {
    goods: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
   
  },
}
</script>

<style scoped>
  .goods {
    display: flex;
    /* 自动换行 */
    flex-wrap: wrap;
    justify-content: space-around;
    /* justify-content: space-evenly; */
    padding: 2px;
  }


</style>