// import the styles
// import 'bulma-pro/bulma.sass'
import { ipcRenderer } from 'electron'
// import 'material-design-icons/iconfont/material-icons.css'
import Vue from 'vue'
import App from './App.vue'
import './assets/style/animations.scss'
import './assets/style/main.scss'
import router from './router/index'
import store from './store/index'
import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueLoading from 'vue-loading-template'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

Vue.use(ElementUI)
Vue.use(VueMaterial)
Vue.use(VueLoading)

// Optionally install the BootstrapVue icon components plugin
Vue.http = Vue.prototype.$http = axios
const isDev = process.env.NODE_ENV === 'development'

Vue.config.devtools = isDev
Vue.config.performance = isDev
Vue.config.productionTip = isDev

// tslint:disable-next-line: no-unused-expression
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
})

// handle menu event updates from main script
ipcRenderer.on('change-view', (event, data) => {
  if (data.route) {
    router.push(data.route)
  }
})
