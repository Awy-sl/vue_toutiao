/*
 * 封装 axios 请求模块
 */
import axios from 'axios'

const request = axios.create({
  // 基础路径
  baseURL: 'http://ttapi.research.itcast.cn/'
})

// 请求拦截器
// axios.interceptors.request.use((config)=>{})
// 响应拦截器
// axios.interceptors.response.use((response)=>{})

export default request
