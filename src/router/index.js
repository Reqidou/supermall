import Vue from 'vue'
import VueRouter from 'vue-router'

// 懒加载导入
const Home = () => import('../views/home/Home')
const Category = () => import('../views/category/Category')
const Cart = () => import('../views/cart/Cart')
const Profile = () => import('../views/profile/Profile')
const Detail = () => import('../views/detail/Detail')

// 1:安装插件
Vue.use(VueRouter)

// 2：创建router
//meta用来控制底部页面切换是否显示
const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    component: Home,
    // meta: {
    //   showMainTab: true
    // }
  },
  {
    path: '/category',
    component: Category,
    // meta: {
    //   showMainTab: true
    // }
  },
  {
    path: '/cart',
    component: Cart,
    // meta: {
    //   showMainTab: true
    // }
  },
  {
    path: '/profile',
    component: Profile,
    // meta: {
    //   showMainTab: true
    // }
  },
  {
    path: '/detail/:iid',
    component: Detail,
  }
]
const router = new VueRouter({
  routes,
  mode: 'history',
})


// 3:导出
export default router