import Vue from 'vue'
import App from './App.vue'
import store from './store'
import  http  from "@/utils/http";

import '@/static/font/iconfont.scss'

Vue.config.productionTip = false
Vue.prototype.$http = http

new App({store}).$mount()