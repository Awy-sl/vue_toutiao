/*
 *  vuex state 状态管理
 */

import * as CONST from './const'
import { getItem } from '../utils/storage'

// 全局保存用户信息

const state = {
  user: getItem(CONST.TOKEN_KEY)
}
export default state
