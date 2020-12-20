import Vue from 'vue'
import App from './App.vue'
import store from './store'
import http from "@/utils/http";
import UserInfor from "@/component/UserInfor.vue"
import ALert from "@/component/ALert.vue"
import '@/static/font/iconfont.scss'
import '@/utils/filter'

Vue.component("user-infor", UserInfor)
Vue.component("z-alert", ALert)

Vue.config.productionTip = false
Vue.prototype.$http = http

new App({ store }).$mount()