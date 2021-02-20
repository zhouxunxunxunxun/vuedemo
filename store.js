import Vue from 'vue'
import Vuex from 'vuex'
import login from '@/modules/login.js'

Vue.use(Vuex)

export default new Vuex.Store({
  // 设置属性
  state: {
    // userLogin:false,             
  },             

  // 获取属性的状态 
  //相当于计算属性
  getters: {
    //获取登录状态
    isLogin: state => state.isLogin,
  },

  // 设置属性状态
  mutations: {
    //保存登录状态
    userStatus(state, flag) {
      state.isLogin = flag
    },
  },

  // 应用mutations
  actions: {//执行异步操作
    //获取登录状态
    userLogin({commit}, flag) {
      commit("userStatus", flag)
    },
  },
  modules:{
    login
  }
})
