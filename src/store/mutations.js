/*
 * vuex mutation
 */
import * as CONST from './const'
import { setItem } from '../utils/storage'

const mutation = {
  setUser (state, data) {
    state.user = data
    //  保存 token 值
    setItem(CONST.TOKEN_KEY, JSON.stringify(state.user))
  }
}

export default mutation
