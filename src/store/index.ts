import Vue from 'vue'
import Vuex, { GetterTree, ActionTree, MutationTree } from 'vuex'
import main from './modules/main'
import { Istate } from '@/Interfaces/Istate'
import { Iobj } from "@/Interfaces/Icommon"

Vue.use(Vuex)

const state: Istate = {
	token: uni.getStorageSync('token') || '',
	barHeight: uni.getStorageSync('barHeight'),
	userInfo: uni.getStorageSync('userInfo')||{}
};
const getters: GetterTree<any, any> = {

}
const mutations: MutationTree<any> = {
	setToken(state: Istate, token: string) {
		uni.setStorageSync('token', token)
		state.token = token
	},
	setBarHeight(state: Istate, barHeight: number) {
		uni.setStorageSync('barHeight', barHeight)
		state.barHeight = barHeight
	},
	setUserInfo(state: Istate, userInfo: Iobj) {
		uni.setStorageSync('userInfo', userInfo)
		state.userInfo = userInfo
	}
};
const actions: ActionTree<any, any> = {
};
export default new Vuex.Store({
	state,
	getters,
	mutations,
	actions,
	modules: {
		main
	}
})
