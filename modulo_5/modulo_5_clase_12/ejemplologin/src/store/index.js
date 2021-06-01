import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    usuario: undefined
  },
  mutations: {
    guardarUsuario(state, payload) {
      state.usuario = payload;
    }
  },
  actions: {
    ingresar(context, payload) {
      return new Promise((resolve) => {
        // ... invocar API para ingresar.
        fetch(`/api/login?usuario=${payload.usuario}&clave=${payload.clave}`)
          .then((resultado) => {
            if (resultado.status == 200) {
              resultado.json().then((datos) => {
                if (datos.resultado == "ok") {
                  context.commit('guardarUsuario', datos.usuario)
                }
                resolve(datos);
              })
            } else {
              resolve();
            }
          })
      })
    }
  },
  modules: {
  }
})
