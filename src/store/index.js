import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    productos: [

    ]

  },
  mutations: {
    AGREGAR_PRODUCTO(state, payload) {
      state.productos.push(payload);
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
