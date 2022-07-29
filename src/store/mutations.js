export default {
    // mutations用于用于修改state的状态
    // mutations的每个方法尽可能用于单一的事件
    // addCart(state, payload) {
    //   // let oldProduct = null //
    //   // for(let item of state.cartList) {
    //   //   if(item.iid === payload.iid) {
    //   //     oldProduct = item
    //   //   }
    //   // }
    //   let oldProduct = state.cartList.find(item => item.iid === payload.iid)
    //   // 2.oldProduct数量
    //   if(oldProduct) {
    //     oldProduct.count += 1
    //   } else {
    //     payload.count = 1
    //     state.cartList.push(payload)
    //   }
    // }
  addCounter(state, payload) {
    payload.count += 1
  },
  addToCart(state, payload) {
    payload.checked = true
    state.cartList.push(payload)
  },
  checkClick(state, payload) {
    payload.checked = !payload.checked
  },
  checkClickAll(state, payload) {
    payload ? state.cartList.map(item => item.checked = false) : state.cartList.map(item => item.checked = true)
  }
}