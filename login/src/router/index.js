import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Principal.vue'
import About from '../views/About.vue'
import Menu from '../views/Menu.vue'
import Event from '../views/Event.vue'
import Gallery from '../views/Gallery.vue'
import Team from '../views/Team.vue'
import Ingresar from '../views/Ingresar.vue'
import Registrar from '../views/Registrar.vue'
import Admin from '../views/Admin.vue'
import Usuarios from '../views/Usuarios.vue'
import Articulos from '../views/Articulos.vue'
import Inicio from '../views/Inicio.vue'
import Categorias from '../views/Categorias.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: About,
  },
  {
    path: '/menu',
    name: 'Menu',
    component: Menu,
  },
  {
    path: '/event',
    name: 'Event',
    component: Event,
  },
  {
    path: '/gallery',
    name: 'Gallery',
    component: Gallery
  } ,
  {
    path: '/team',
    name: 'Team',
    component: Team
  },
  {
    path: '/Ingresar',
    name:'Ingresar',
    component:Ingresar,
  },
  {
    path: '/Registrar',
    name:'Registrar',
    component:Registrar,
  },
  {
    path: '/Admin',
    name:'Admin',
    component:Admin,
    meta:{requiresAuth:false},
    children:[
      {
        path:'Inicio',
        name:'Inicio',
        component: Inicio,
      },
      {
        path:'Usuarios',
        name:'Usuarios',
        component: Usuarios,
      },
      {
        path:'Articulos',
        name:'Articulos',
        component: Articulos,
      },
      {
        path:'Categorias',
        name:'Categorias',
        component: Categorias,
      }
    ]   
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    let token = localStorage.getItem('token');
    if (!token()) {
      next({
        name: 'Ingresar'
      })
    } else {
      next({
        name:'Admin'
      })
    }
  } else {
    next() 
  }
})

export default router
