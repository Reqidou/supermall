<template>
  <div class="bottom-bar">
    <div class="bar-item bar-left">
      <div>
        <i class="icon service"></i>
        <span class="text">客服</span>
      </div>
      <div>
        <i class="icon shop"></i>
        <span class="text">店铺</span>
      </div>
      <div>
        <i class="icon select"></i>
        <span class="text">收藏</span>
      </div>
    </div>
    <div class="bar-item bar-right ">
      <div class="cart" @click="addToCart">加入购物车</div>
      <div class="buy">购买</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBottomBar",
  methods: {
    addToCart() {
      this.$emit('addToCart')
    }
  }
}
</script>

<style scoped>
  .bottom-bar {
    position: relative;
    height: 49px;
    bottom: 0;
    left: 0;
    /* height: 100%; */
    
    background-color: #fff;


    display: flex;
    text-align: center;
    /* position: fixed; */
    
  }
  .bar-item {
    flex: 1;
    display: flex;
  }
  .bar-item div {
    flex: 1;
  }
  .bar-left .text {
    font-size: 13px;
  }
  .bar-left .icon {
    display: block;
    width: 22px;
    height: 22px;
    margin: 8px auto -2px;
    background: url("../../../assets/img/detail/detail_bottom.png") 0 0/100%;
  }
  .bar-left .service {
    background-position: 0 -54px;
  }
  .bar-left .shop {
    background-position: 0 -98px;
  }

  .bar-right {
    font-size: 14px;
    color: #fff;
    line-height: 49px;
  }
  .cart {
    height: 49px;
    background-color: #ffe817;
    color: #333;
  }
  .buy {
    height: 49px;
    background-color: #f69;
  }
</style>