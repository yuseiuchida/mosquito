import Vue from 'vue'
import App from '../app.vue'
import router from '../router'
import 'bootstrap/dist/css/bootstrap.css'

Vue.config.productionTip = false

document.addEventListener('DOMContentLoaded', () => {
  const app = new Vue({
    router,
    render: h => h(App)
  }).$mount()
  document.body.appendChild(app.$el)
})