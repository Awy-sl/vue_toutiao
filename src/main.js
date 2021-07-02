import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 导入全局样式
import '@/style/index.less'

// 导入 vant 组件
import {
  Button,
  NavBar,
  CountDown,
  Toast,
  Form,
  CellGroup,
  Field,
  Icon
} from 'vant'

// 动态加载设置 REM 基准值
import 'amfe-flexible'

// 注册 vant 组件
Vue.use(Button)
  .use(NavBar)
  .use(Form)
  .use(CellGroup)
  .use(Field)
  .use(Icon)
  .use(Toast)
  .use(CountDown)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
