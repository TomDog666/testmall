import Vue from "vue";
import VueRouter from "vue-router";

const Home = () => import('../views/home/Home.vue') 
const Cart = () => import('../views/cart/Cart.vue') 
const Category = () => import('../views/category/Category.vue') 
const Profile = () => import('../views/profile/Profile.vue') 


//1.安装插件
Vue.use(VueRouter)

const routes = [
  {
    path:"/",
    redirect:"/home"
  },
  {
    path:"/home",
    component:Home
  },
  {
    path:"/cart",
    component:Cart
  },
  {
    path:"/category",
    component:Category
  },
  {
    path:"/profile",
    component:Profile
  }
]

//2.创建router
const router = new VueRouter({
  routes,
  mode: 'history'
})


export default router