import Vue from 'vue'
import App from './App.vue'
import store from './store'
import http from "@/utils/http";
import UserInfor from "@/component/UserInfor.vue"
import '@/static/font/iconfont.scss'

Vue.component("user-infor", UserInfor)
Vue.config.productionTip = false
Vue.prototype.$http = http

new App({ store }).$mount()