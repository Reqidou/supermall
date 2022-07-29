<template>
  <section class="account">
    <div class="account-item">
      <div class="account-top">
        <span>0.00</span>元
      </div>
      <div class="account-bottom">
        我的余额
      </div>
    </div>
    <div class="account-item">
      <div class="account-top">
        <span>0</span>个
      </div>
      <div class="account-bottom">
        我的优惠
      </div>
    </div>
    <div class="account-item">
      <div class="account-top">
        <span>0</span>分
      </div>
      <div class="account-bottom">
        我的积分
      </div>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style scoped>
  .account {
    display: flex;
    justify-content: space-around;
  }
  .account-item {
    flex: 1;
    width: 100%;
    background-color: #fff;
    margin-right: 1px;
    text-align: center;
    padding: 18px;
  }
  .account-top span {
    font-size: 20px;
    color: red;
  }
  .account-bottom {
    margin-top: 5px;
    font-size: 12px;
  }
</style>