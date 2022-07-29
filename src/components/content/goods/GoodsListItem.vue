<template>
  <div class="goods-item" @click="itemClick">
      <!-- <img :src="showImg" alt="" @load="imgLoad"> -->
      <img v-lazy="showImg" alt="" @load="imgLoad" :key="showImg">
    <div class="goods-info">
      <p>{{goodsItem.title}}</p>
      <span class="price">{{goodsItem.price}}</span>
      <span class="collect">{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    imgLoad() {
      // if(this.$route.path.indexOf('/home') !== -1) {
      //   this.$bus.$emit('homeItemImageLoad') 
      // }
      // else if(this.$route.path.indexOf('/detail') !== -1) {
      //   this.$bus.$emit('detailItemImageLoad')
      // }
      this.$bus.$emit('ItemImageLoad')
    },
    itemClick() {
      if(this.goodsItem.iid)
        this.$router.push('/detail/' + this.goodsItem.iid)
      else
        this.$router.push('/detail/' + this.goodsItem.shop_id)
    }
  },
  computed: {
    showImg() {
      return this.goodsItem.image || this.goodsItem.img || this.goodsItem.show.img
    }
  }
}
</script>

<style scoped>
  .goods-item {
    position: relative;
    padding-bottom: 40px;
    width: 48%;
  }
  .goods-item img {
    width: 100%;
    border-radius: 5px;
  }
  .goods-info {
    font-style: 12px;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 5px;
    overflow: hidden;
    text-align: center;
  }
  .goods-info p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
  }
  .goods-info .price {
    color: var(--color-high-text);
    margin-right: 20px;
  }
  .goods-info .collect {
    position: relative;
  }
  .goods-info .collect::before {
    content: "";
    position: absolute;
    left: -15px;
    top: -1px;
    width: 14px;
    height: 14px;
    background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
  }
</style>