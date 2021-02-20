import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import store from '@/modules/login.js'
const User = () => import('./views/User.vue')
const Login = () => import('./views/login.vue') 
const Register = () => import('./views/register.vue')
const Manager = () => import('./views/Manager.vue')
const Opera = () => import('./components/manager/Opera.vue')
const Perform = () => import('./components/manager/Perform.vue')
const Sell = () => import('./components/manager/Sell.vue')
const Ticket = () => import('./components/manager/Ticket.vue')
const Scheme = () => import('./components/manager/Scheme.vue')
const  Addop = () => import('./components/opera/Addop.vue')
const Changeop = () => import('./components/opera/changeop.vue')
const Delop = () => import('./components/opera/Delop.vue')
const Searchop = () => import('./components/opera/Searchop.vue')
const Addper = () => import('./components/perform/Addper.vue')
const Changeper = () => import('./components/perform/Changeper.vue')
const Delper = () => import('./components/perform/Delper.vue')
const Searchper = () => import('./components/perform/Searchper.vue')
const Addsch = () => import('./components/scheme/seat.vue')
const Changesch = () => import('./components/scheme/Changesch.vue')
const Delsch = () => import('./components/scheme/Delsch.vue')
const Searchsch = () => import('./components/scheme/Searchsch.vue')
const ShowMovie = () => import('./views/ShowMovie.vue')
const Tic = () => import('./views/Ticket.vue')
const err = () => import('./components/Err.vue')
Vue.use(Router)

const router =  new Router({
  mode: 'history',
  linkActiveClass:'active',
  linkExactActiveClass:'exact',
  base: process.env.BASE_URL,
  routes: [
    { 
      path:'*',//获取的所有已有路径以外的路径
      redirect(to){
        if(to.path == '/'){
          return '/home'
        }else{
          return {name:'err'}
        }
      }
    },
    {
      path:'/err.html',
      name:'err',
      component:err
    },
    {
      path:'/showmovie',
      name:'showmovie',
      component:ShowMovie,
      meta:{ 
        isLogin:true
      },
    },
    {
      path:'/ticket',
      name:'tic',
      component:Tic,
      meta:{ 
        isLogin:true
      },
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      meta:{ 
        isLogin:true
      },
      // beforeEnter(to,from,next){
      //   const answer = confirm('你还没有登陆，要登录才能浏览信息，要登陆吗？');
      //   if(answer){
      //     next({name:'login'});
      //   }else{
      //     next(false);
      //   }
      // }
    },
    {
      path: '/user',
      name: 'user',
      component:User,
      meta:{ 
        isLogin:true
      },
    },
    {
      path:'/',
      alias:'/login',
      name:'login',
      component:Login,
      meta:{
        isLogin:false//可以直接进入，不需要登陆限制
      }
    },
    {
      path:'/register',
      name:'register',
      component:Register,
      meta:{
        isLogin:false
      }
    },
    {
      path:'/manager',
      name:'manager',
      component:Manager,
      redirect:'/manager/opera',
       meta:{ 
        isLogin:false
      },
      children:[
        {
          path:'opera',
          name:'opera',
          component:Opera,
          redirect:'/manager/opera/addop',
          children:[
            {
              path:'addop',
              name:'addop',
              component:Addop
            },
            {
              path:'changeop',
              name:'changeop',
              component:Changeop
            },
            {
              path:'delop',
              name:'delop',
              component:Delop
            },
            {
              path:'searchop',
              name:'searchop',
              component:Searchop
            },
          ]
        },
        {
          path:'perform',
          name:'perform',
          component:Perform,
          redirect:'/manager/perform/addper',
          children:[
            {
              path:'addper',
              name:'addper',
              component:Addper
            },
            {
              path:'changeper',
              name:'changeper',
              component:Changeper
            },
            {
              path:'delper',
              name:'delper',
              component:Delper
            },
            {
              path:'searchper',
              name:'searchper',
              component:Searchper
            },
          ]
        },
        {
          path:'sell',
          name:'sell',
          component:Sell
        },
        {
          path:'ticket',
          name:'ticket',
          component:Ticket
        },
        {
          path:'scheme',
          name:'scheme',
          component:Scheme,
          redirect:'/manager/scheme/addsch',
          children:[
            {
              path:'addsch',
              name:'addsch',
              component:Addsch
            },
            {
              path:'changesch',
              name:'changesch',
              component:Changesch
            },
            {
              path:'delsch',
              name:'delsch',
              component:Delsch
            },
            {
              path:'searchsch',
              name:'searchsch',
              component:Searchsch
            }
          ]
        }
      ]
    },
  ]
})

router.beforeEach((to, from, next) => {
  // console.log(to);
  //获取用户登录成功后储存的登录标志
  let getFlag = localStorage.getItem("Flag");
  let name = localStorage.getItem("Name");
  let session = localStorage.getItem("Session");
  let id = localStorage.getItem("UserId");
  let email = localStorage.getItem("Email");
  // console.log(getFlag);
  //如果登录标志存在且为isLogin，即用户已登录
  if(getFlag === "isLogin"){
    // console.log(store);
    //设置vuex登录状态为已登录
    store.state.isLogin = true;
    store.state.name = name;
    store.state.sessionId = session;
    store.state.userId = id;
    store.state.email = email;
    next();

    //如果已登录，还想想进入登录注册界面，则定向回首页
    if (!to.meta.isLogin) {
       //iViewUi友好提示
      alert('请先注销')
      next({
        path: '/home'
      })
    }
  
  //如果登录标志不存在，即未登录
  }else{

    //用户想进入需要登录的页面，则定向回登录界面
    if(to.meta.isLogin){
      // console.log(to);
      next({
        path: '/login',
      })
      //iViewUi友好提示
      alert('请先登录')
    //用户进入无需登录的界面，则跳转继续
    }else{
      next()
    }

  }


});

// router.afterEach(route => {
//   window.scroll(0, 0);
// });
export default router;