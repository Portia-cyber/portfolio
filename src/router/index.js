import Vue from 'vue'
import VueRouter from 'vue-router'
import NavBar from '../components/navbar'
import Lander from '../components/lander'
import About from '../components/about'
import Brand from '../components/brand'
import Service from '../components/service'
import Project from '../components/Project'
import Footer from '../components/footer'

Vue.use(VueRouter)

const routes = [
  {
    path: '../components/navbar',
    name: 'Navbar',
    component: NavBar
  },
  {
    path: '../components/lander',
    name: 'Lander',
    component: Lander
  },
  {
    path: '../components/about',
    name: 'About',
    component: About
  },
  {
    path: '../components/brand',
    name: 'Brand',
    component: Brand
  },
  {
    path: '../components/service',
    name: 'Service',
    component: Service
  },
  {
    path: '../components/Project',
    name: 'Project',
    component: Project
  },
  {
    path: '../components/footer',
    name: 'Footer',
    component: Footer
  }
]

const router = new VueRouter({
  routes
})

export default router
