import axios from 'axios'
function request(config) {
  // 1.创建axios的实例
  const instance = axios.create({
    baseURL: 'https://www.fastmock.site/mock/1ad79e508d05583ae0dab0fd86f5144e/profile',
    timeout: 5000
  })

  // 2.axios拦截器
  // 2.1请求拦截的作用
  instance.interceptors.request.use(config => {
    return config
  }, err => {
    console.log(err);
  })

  // 2.2响应拦截
  instance.interceptors.response.use(res => {
    return res.data
  }, err => {
    console.log(err);
  })

  // 3.发送真正的网络请求
  return instance(config)
}

export function getProfileData() {
  return request({
    url: '/test'
  })
}