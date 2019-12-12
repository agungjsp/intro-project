import Vue from 'vue'
import VueRouter from 'vue-router'
import UIView from './../views/UIView.vue'
import Detail from './../views/Detail/Detail.vue'
import PhotoGallery from './../views/PhotoGallery/PhotoGallery.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'uiview',
    component: UIView
  },
  {
    path: '/detail/:id',
    name: 'detail',
    component: Detail
  },
  {
    path: '/detail/:id/photos/:idAlbum',
    name: 'gallery',
    component: PhotoGallery
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
