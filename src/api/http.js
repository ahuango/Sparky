/**
 * Created by my9074 on 2017/4/5.
 */
import axios from 'axios'
import {DEFAULT_BASE_URL} from '@/config'
import {Notification} from 'element-ui'
import store from '../store'
import { LOG_OUT } from 'store/user/mutations_types'
// axios 配置
axios.defaults.timeout = 10000
axios.defaults.baseURL = DEFAULT_BASE_URL //  可配置

// http request 拦截器
axios.interceptors.request.use(
  config => {
    if (store.getters.token) {
      config.headers.Authorization = store.getters.token
    }
    return config
  },
  err => {
    return Promise.reject(err)
  })

// http response 拦截器
axios.interceptors.response.use(
  response => {
    return response.data
  },
  error => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          // 401 清除token信息并跳转到登录页面
          store.dispatch(LOG_OUT).then(data => {
            location.reload()
          })
          break
        default:
          Notification({
            title: '错误信息',
            message: JSON.stringify(error.response.data.data),
            type: 'error'
          })
      }
    }
    // console.log(JSON.stringify(error));//console : Error: Request failed with status code 402
    return Promise.reject(error.response.data)
  })

export default axios
