import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import VueLazyLoad from 'vue-lazyload'

import toast from 'components/common/toast/index.js'
// 图标
import '@/assets/js/iconfont'

Vue.config.productionTip = false

Vue.prototype.$bus = new Vue()

Vue.use(toast)

Vue.use(VueLazyLoad)
new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
