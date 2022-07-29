<template>
  <div class="cart-button-bar">
    <div class="check-content">
      <check-button class="check-button" :is-checked="isSelectAll" @click.native="checkClick" />
      <span>全选</span>
    </div>

    <div class="price">
      合计:{{totalPrice}}
    </div>

    <div class="calculate" @click="calcClick">
      立即购买({{checkLength}})
    </div>
  </div>
</template>

<script>
import CheckButton from '@/components/content/checkButton/CheckButton'
import { mapGetters } from 'vuex'
export default {
  components: { 
    CheckButton,
  },
  methods: {
    checkClick() {
      // if(this.isSelectAll){
      //   this.cartList.forEach(item => item.checked = false)
      // } else {
      //   this.cartList.forEach(item => item.checked = true)
      // }  
      // this.isSelectAll ? this.cartList.map(item => item.checked = false) : this.cartList.map(item => item.checked = true)
      this.$store.commit("checkClickAll", this.isSelectAll)
    },
    calcClick() {
      if(!this.isSelectAll)
        this.$toast.show('请选择购买的商品')
    }
  },
  computed: {
    ...mapGetters(['cartList']),
    totalPrice() {
      return "￥" + this.cartList.filter(item => {
        return item.checked
      }).reduce((preValue, item) => {
        return (preValue + item.price * item.count)
      }, 0).toFixed(2)
    },
    checkLength() {
      // return this.cartList.filter(item => item.checked).reduce((preValue, item) => {
      //   return preValue + item.count
      // }, 0)
      return this.cartList.filter(item => item.checked).length
    },
    isSelectAll() {
      // 全选的几种方式
      if(this.cartList.length)
      // return this.cartList.length === this.checkLength ? true : false

      // return !(this.cartList.filter(item => !item.checked).length)
      // return !this.cartList.find(item => !item.checked)
        return this.cartList.every(item => item.checked)
    }
  }

}
</script>

<style scoped>
  .cart-button-bar {
    position: relative;
    display: flex;
    justify-content: space-between;
    height: 40px;
    line-height: 40px;

    background-color: #eee;
  }
  .check-content {
    display: flex;
    align-items: center;

    /* width: 70px; */
  }
  .check-button {
    width: 20px;
    height: 20px;
    line-height: 20px;
    margin: 0 5px 0 10px;
    
  }
  .price {
    margin-left: 20px;
    /* flex: 1; */
  }
  .calculate {
    background-color: var(--color-tint);
    text-align: center;
    width: 90px;
  }
</style>