import Vue from 'vue'
import App from './App.vue'
import ASVue from '../packages/index'

Vue.config.productionTip = false
import './style/reset.css'

Vue.use(ASVue)

new Vue({
  render: h => h(App),
}).$mount('#app')
