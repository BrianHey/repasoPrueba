import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {
    AGREGAR_PRODUCTO(state, payload) {
      alert(payload.nombre)
    },
  },
  actions: {
    // agregarProducto(context, dataProducto) {
    //   context.commit('AGREGAR_PRODUCTO', dataProducto)

    //   console.log('bien', dataProducto)
    // },

    agregarProducto({ commit }, dataProducto) {
      commit('AGREGAR_PRODUCTO', dataProducto)

      console.log('bien', dataProducto)
    },
  },
})
