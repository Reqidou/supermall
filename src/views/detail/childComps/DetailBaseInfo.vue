<template>
  <div v-if="Object.keys(goods).length !== 0" class="base-info">
    <div class="info-title">{{goods.title}}</div>
    <div class="info-price">
      <span class="n-price">{{goods.newPrice}}</span>
      <span class="o-price">{{goods.oldPrice}}</span>
      <span v-if="goods.discount" class="discount">{{goods.discount}}</span>
    </div>
    <div class="info-other">
      <span>{{goods.columns[0]}}</span>
      <span>{{goods.columns[1]}}</span>
      <span>{{goods.services[goods.services.length-1].name}}</span>
    </div>
    <div class="info-service">
      <span class="info-service-item" v-for="index in goods.services.length-1" :key="index">
        <img :src="goods.services[index-1].icon" alt="">
        <span>{{goods.services[index-1].name}}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    goods: {
      type: Object,
      default() {
        return ({})
      }
    }
  }
}
</script>

<style scoped>
  .base-info {
    margin:0 10px ;
  }
  .info-title {
    margin: 10px 0 10px;
    color: #000;
    font-weight: 50;
    text-indent: 1em;
  }

  .n-price {
    color: var(--color-high-text);;
    font-size: 20px;
    padding-right: 5px;
  }
  .o-price {
    text-decoration: line-through;
    font-size: 14px;
    margin: 4px;
  }
  .discount {
    position: relative;
    top: -5px;
    left: 5px;
    padding:3px 10px;
    border-radius: 8px;
    background-color: var(--color-high-text);
    color: #fff;
    font-size: 12px;
  }
  .info-other {
    padding: 20px 0 10px;
    display: flex;
    font-size: 12px;
    color: #ccc;
    border-bottom: 1px solid rgba(100,100,100,.1);
    justify-content: space-between;
  }
  .info-service {
  display: flex;
  justify-content: space-between;
  line-height: 60px;
  }
  .info-service-item img {
    width: 14px;
    height: 14px;
    position: relative;
    top: 2px;
  }
  .info-service-item span {
    font-size: 13px;
    color: #333;
  }
</style>