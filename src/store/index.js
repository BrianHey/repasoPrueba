import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    productos: [],
    pokemones: [],
    nombre: 'Bruce',
    last: 'Lee',
  },
  mutations: {
    AGREGAR_PRODUCTO(state, payload) {
      state.productos.push(payload)
    },
    GET_POKEMONES(state, payload) {
      state.pokemones = payload
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

    getPokemones({ commit }, payload) {
      commit('GET_POKEMONES', payload)
    },
  },

  getters: {
    fullNames: (state) => {
      return `${state.nombre} ${state.last}`
    },
  },
})
