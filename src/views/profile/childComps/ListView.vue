<template>
  <div class="list">
    <div class="list-item" v-for="(item, index) in listData">
      <svg class="list-icon" aria-hidden="true">
        <use :xlink:href="item.icon"></use>
      </svg>
      <div class="list-text">{{item.info}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    listData: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style scoped>
  .list {
    margin-bottom: 10px;
  }
  .list-item {
    position: relative;
    height: 44px;
    line-height: 44px;
  }
  .list-item .list-icon {
    width: 18px;
    height: 18px;
    margin-top: 10px;
    position: absolute;
    left: 16px;
    top: 5px;
  }
  .list-item .list-text {
    margin-left: 40px;
    border-bottom: 1px solid rgba(100, 100, 100, .1);
    padding-left: 5px;
  }
</style>