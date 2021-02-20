import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

  },
    getters:{
      islogin:state=>state.islogin,
    },
  mutations: {
    userstatus(state,flag){
      state.islogin = flag;
    }
  },
  actions: {
    userlogin({commit},flag){
      commit("userstatus",flag);
    }
  },

})
