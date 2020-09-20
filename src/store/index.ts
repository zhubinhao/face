import Vue from 'vue'
import Vuex, { GetterTree, ActionTree, MutationTree }  from 'vuex'
import main from './modules/main'
import {http} from '../utils/http'

Vue.use(Vuex)

const state: any = {
	token:uni.getStorageSync('token')||'',
	barHeight:uni.getStorageSync('barHeight'),
}; 
const getters: GetterTree<any, any> = {
  
}
const mutations: MutationTree<any> = {
	setToken(state:any,token:string){
		uni.setStorageSync('token',token)
		state.token = token
	},
	setBarHeight(state:any,barHeight:number){
		uni.setStorageSync('barHeight',barHeight)
		state.barHeight = barHeight
	}
}; 
const actions: ActionTree<any, any> = {
	// async unifiedOrder({commit},data:any){
	// 	const requery = await http({url:'/pay/unifiedOrder',data,method:'POST'}).then((res:any)=>res)
	// }
	
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
