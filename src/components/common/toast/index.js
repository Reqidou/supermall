import Toast from './Toast'
const obj = {}

obj.install = function(Vue) {
  // document.body.appendChild(Toast.$el)

  // 1.创建组件构造器
  const toastConstructor = Vue.extend(Toast)
  // 2.使用new，创建实例对象
  const toast = new toastConstructor()
  // 3.将组件对象手动挂载到某个元素
  toast.$mount(document.createElement('div'))
  // 4.toast.$el对应的div
  document.body.appendChild(toast.$el)
  Vue.prototype.$toast = toast
}

export default obj