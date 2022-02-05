import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'

Vue.config.productionTip = false
Vue.config.silent = true //取消vue的所有日志与警告
Vue.config.devtools = true //是否允许vue-tools检查代码，默认为true

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
