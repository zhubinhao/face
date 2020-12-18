import { ActionTree, MutationTree } from 'vuex'
import { ImainState } from '@/Interfaces/Istate'

const state: ImainState = {};
const mutations: MutationTree<any> = {};
const actions: ActionTree<any, any> = {};

export default {
    namespaced: true,
    state,
    mutations,
    actions
};