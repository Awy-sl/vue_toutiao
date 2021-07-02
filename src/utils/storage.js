/*
 * 封装本地存储
 */

/*
 * 存储本地数据
 */
export const setItem = (key, value) => {
  if (typeof value === 'object') {
    value = JSON.stringify(value)
  }
  window.localStorage.setItem(key, value)
}

/*
 * 获取本地数据
 */
export const getItem = key => {
  const data = window.localStorage.getItem(key)
  return JSON.parse(data) || {}
}

/*
 * 删除数据
 */
export const detItem = key => {
  return window.localStorage.removeItem(key)
}
