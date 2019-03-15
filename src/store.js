import Vue from "vue";
import Vuex from "vuex";
import visioModule from './store/modules/visioModule';
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    visio: visioModule
  },
  state: {},
  mutations: {},
  actions: {}
});
