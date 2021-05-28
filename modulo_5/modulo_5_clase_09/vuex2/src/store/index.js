import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // Ahora productos[] es GLOBAL
    productos: [
      {
        id: 1,
        descripcion: "Chala de playa",
        precio: 1000,
      },
      {
        id: 2,
        descripcion: "Zapatilla de lona",
        precio: 5000,
      },
    ],
  },
  getters: {
    ultimoId(state) {
      // return state.productos.reduce((a,e)=>{
      //   return a<e.id?e.id:a;
      // },0);
      return state.productos.reduce((a, e) => a < e.id ? e.id : a, 0);
    }
  },
  mutations: {
    actualizarProducto(state, payload) {
      let indice = state.productos.findIndex((producto) => producto.id == payload.id);
      if (indice > -1) {
        state.productos[indice].descripcion = payload.descripcion;
        state.productos[indice].precio = payload.precio;
      }
    },
    eliminarProducto(state, payload) {
      let indice = state.productos.findIndex((producto) => producto.id == payload.id);
      if (indice > -1) {
        state.productos.splice(indice, 1);
      }
    },
    agregarProducto(state, payload) {
      state.productos.push({
        id: payload.id,
        descripcion: payload.descripcion,
        precio: payload.precio
      });
    }
  },
  actions: {
    buscarProducto(context, id) {
      return new Promise((resolve) => {
        let indice = context.state.productos.findIndex((producto) => producto.id == id);
        if (indice > -1) {
          resolve(context.state.productos[indice]);
        } else {
          resolve(undefined);
        }
      });
    },
    actualizarProducto(context, payload) {
      return new Promise((resolve) => {
        context.commit('actualizarProducto', payload);
        resolve();
      });
    },
    agregarProducto(context, payload) {
      return new Promise((resolve) => {
        let ultimoId = context.getters.ultimoId;
        context.commit('agregarProducto', {
          id: ultimoId + 1,
          descripcion: payload.descripcion,
          precio: payload.precio
        });
        resolve();
      });
    },
    eliminarProducto(context, payload) {
      return new Promise((resolve) => {
        context.commit('eliminarProducto', payload);
        resolve();
      });
    }

  },
  modules: {
  }
})
