import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Announce from './views/Announce.vue'
import store from "@/modules/login.js";
Vue.use(Router)//$router $route

let vueRouter =  new Router({
  mode:'history',
  linkActiveClass:'active',
  linkExactActiveClass:'exact',
  routes: [
    {
      path:'/home',
      name:'home',
      component:Home,
      redirect:'/home/announce',//首先显示出来
      children:[
        {
          path:'announce',
          name:'announce',
          component:Announce
        },
        {
          path: 'resource',
          name: 'resource',
          component: () => import('./views/Resource.vue')
        },
        {
          path: 'record',
          name: 'record',
          component: () => import('./views/Record.vue')
        },
        {
          path: 'myres',
          name: 'myres',
          component: () => import('./views/MyResource.vue')
        },
        {
          path: 'use',
          name: 'use',
          component: () => import('./views/Use.vue')
        },
        {
          path: 'changepass',
          name: 'changepass',
          component: () => import('./views/ChangePass.vue')
        }
      ]
    },
    {
      path:'/announcecontent',
      name:'content',
      component: () => import('./views/AnnounceContent.vue')
    },
    {
      path:'/',
      alias:'/login',
      name:'login',
      component: () => import('./views/inuser/login.vue')
    },
    {
      path:'/register',
      name:'register',
      component: () => import('./views/inuser/register.vue')
    },
    {
      path:'/findpass',
      name:'findpass',
      component: () => import('./views/inuser/findpass.vue')
    },
    {
      path:'/manager',
      name:'manager',
      component: () => import('./views/manager.vue'),
      redirect:'/manager/user',
      children:[
        {
          path:'user',
          name:'user',
          component:()=> import('./views/User.vue')
        },
        {
          path: 'gonggao',
          name: 'gonggao',
          component: () => import('./views/Gonggao.vue')
        },
        {
          path: 'resmanager',
          name: 'resmanager',
          component: () => import('./views/Resmanager.vue')
        },
        {
          path: 'zhuji',
          name: 'zhuji',
          component: () => import('./views/Zhuji.vue')
        },
        {
          path: 'resuser',
          name: 'resuser',
          component: () => import('./views/Resuser.vue')
        },
        {
          path: 'jiqun',
          name: 'jiqun',
          component: () => import('./views/Jiqun.vue')
        },
        {
          path: 'zhujipaidui',
          name: 'zhujipaidui',
          component: () => import('./views/Zhujipaidui.vue')
        },
        {
          path: 'search',
          name: 'search',
          component: () => import('./views/Search.vue')
        },
        {
          path: 'department',
          name: 'department',
          component: () => import('./views/Department.vue')
        },
        {
          path: 'changepassmanager',
          name: 'changepassmanager',
          component: () => import('./views/Changepassmanager.vue')
        }
      ]
    },
  ]
})
//导航守卫

vueRouter.beforeEach(function (to, from, next) {
  const nextroute = ['announce','resource','record','myres','use','changepass','content','manager','user','gonggao','resmanager','zhuji','resuser','jiqun','zhujipaidui','search','department','changepassmanager'];
  let login = localStorage.getItem("login");
  if(nextroute.indexOf(to.name)>=0){
      if(!store.state.islogin&&!login){
        alert("请先登录!");
        next('/');
      }else{
        next();
      }
    }else{
    next();
  }
  
  
});

export default vueRouter;
