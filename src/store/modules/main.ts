import { Commit } from 'vuex';
import Vuex, { GetterTree, ActionTree, MutationTree } from 'vuex'

const state: any = {
    nihao:"1",
    hah:'12'
}; 
const getters: GetterTree<any, any> = {
    getHello(state:any){
    return 1212
  }
}
const mutations: any = {
    setHello(state:any,hello:any){
        console.log(hello)
    }
}; 
const actions: any = {
};

export default {
    namespaced: true, // namespaced为false的时候，state,mutations,actions全局可以调用，为true，生成作用域，引用时要声明模块名称
    state,
    mutations,
    actions
};