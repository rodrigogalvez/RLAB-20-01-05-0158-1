import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Productos from '../views/Productos.vue'
import ModificarProducto from '../views/ModificarProducto.vue'
import AgregarProducto from '../views/AgregarProducto.vue'
import EliminarProducto from '../views/EliminarProducto.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/productos',
    name: 'Productos',
    component: Productos
  },
  {
    path: "/modificar/:id",
    name: "Modificar",
    component: ModificarProducto
  },
  {
    path: "/eliminar/:id",
    name: "Eliminar",
    component: EliminarProducto
  },
  {
    path: "/agregar",
    name: "Agregar",
    component: AgregarProducto
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
