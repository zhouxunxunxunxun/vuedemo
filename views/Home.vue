<template>
  <div class="home">
    <div class="header">
      <div class="left"><div class="logo">
        <svg version="1.1" id="taobao-movie" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 width="20px" height="20px" viewBox="0 0 20 20" enable-background="new 0 0 20 20" xml:space="preserve" fill="#FFF">
<path fill-rule="evenodd" clip-rule="evenodd"  d="M9.589,0.859c-5.048,0-9.141,4.093-9.141,9.141c0,5.049,4.093,9.141,9.141,9.141S18.73,15.049,18.73,10
		C18.73,4.952,14.638,0.859,9.589,0.859z M5.02,12.492c-1.147,0-2.077-0.93-2.077-2.077c0-1.147,0.93-2.077,2.077-2.077
		s2.077,0.93,2.077,2.077C7.097,11.562,6.167,12.492,5.02,12.492z M9.59,16.646c-1.147,0-2.078-0.93-2.078-2.076
		c0-1.147,0.931-2.078,2.078-2.078c1.146,0,2.078,0.931,2.078,2.078C11.668,15.717,10.736,16.646,9.59,16.646z M8.759,10
		c0-0.459,0.372-0.831,0.831-0.831S10.421,9.541,10.421,10c0,0.458-0.373,0.831-0.831,0.831C9.131,10.831,8.759,10.458,8.759,10z
		 M9.59,7.507c-1.147,0-2.078-0.93-2.078-2.077S8.443,3.353,9.59,3.353c1.146,0,2.078,0.93,2.078,2.077S10.736,7.507,9.59,7.507z
		 M14.16,12.493c-1.146,0-2.078-0.931-2.078-2.077c0-1.148,0.932-2.078,2.078-2.077c1.148,0,2.078,0.93,2.078,2.077
		C16.238,11.562,15.309,12.493,14.16,12.493z">
	<animateTransform attributeName="transform" type="rotate" from="0 9.5 10" to="360 9.5 10" dur="1s" repeatCount="indefinite" begin="0"/>
</path>
<path d="M15.725,4.891c-0.425,0-0.841-0.072-1.236-0.214c-0.338-0.122-0.514-0.494-0.392-0.832
	c0.12-0.338,0.494-0.514,0.831-0.392c0.255,0.092,0.522,0.138,0.797,0.138c1.299,0,2.355-1.057,2.355-2.356
	c0-0.359,0.291-0.65,0.65-0.65s0.65,0.291,0.65,0.65C19.381,3.25,17.74,4.891,15.725,4.891z"/>
</svg>
      </div>
      <div style="font-weight:bold;">布达佩斯大剧院</div>
      </div>
      <div class="right" @mouseenter="enter" >{{name}} <button @click="click3">注销</button></div>
    </div>
    <div class="share" @mouseleave="leave" @click="click4">个人中心</div>
    <div class="swiper">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide slide1">
            
          </div>
          <div class="swiper-slide slide2">
            
          </div>
          <div class="swiper-slide slide3">
            
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="top">
        <span @click="click1" :class="{active:flag}">正在热映</span>
        <span @click="click2" :class="{active:!flag}">即将上映</span>
      </div>
      <div class="center"></div>
      
      <div class="bottom">
        <Movie :movie='movie' />
      </div>
    </div>
  </div>
</template>

<script>
import store from '@/modules/login.js'
  // import { mapState } from '@/modules/login.js'
  import Swiper from 'swiper'; 
  import 'swiper/dist/css/swiper.min.css';
  import Movie from '@/components/movie/Movie.vue';
  // var movieList = require('@/assets/msg.js');
  var movieList,movieList1;
  // var movieList1 = require('@/assets/msg1.js');
  import '@/assets/msg.js';
  import request from '../assets/request.js'
  const url = 'http://129.204.185.247:8000/api/app01/getonplay';
  const url1 = 'http://129.204.185.247:8000/api/app01/getnotplay'
  
  export default {
  // beforeRouteEnter (to, from, next) {
  //   next(vm => {
  //     if(vm.$store.state.userLogin == true){
  //       next({name:'home'});
  //     }else{
  //       next({name:'login'});
  //     }
  //   })
  // },
  components: {
    Movie
  },
  data() {
    return {
      flag:true,
      movieList1,
      movieList,
      movie:movieList,
      name:''
    }
  },
  computed:{
    // ...mapState(['sessionId','name']),
    // name(){
    //   return store.state.name;
    // }
  },
  methods:{

    click1(){
      if(this.flag){
        
      }else{
        this.movie = this.movieList;
        this.flag =  !this.flag;
      }
    },
    click2(){
      if(this.flag){
        this.movie = this.movieList1;
        this.flag = !this.flag;
      }else{
        this.movie = this.movieList1;
      }
    },
    click3(){
      this.$http.get("http://129.204.185.247:8000/api/app01/logout").then((data)=>{
        localStorage.removeItem("Flag");
        this.$router.push("/login");
      })
    },
    click4(){
      this.$router.push('/user');
    },
    enter(){
      document.getElementsByClassName('share')[0].style.display = 'block';
    },
    leave(){
      document.getElementsByClassName('share')[0].style.display = 'none';
    },
    getSwiper(){
      fetch(url).then(response => response.json()).
      then((movie)=>{
              movie.map((item)=>{
                item.image = 'http://129.204.185.247:8000'+item.image;
              })
              this.movieList = movie;
  
      })
     fetch(url1).then(response => response.json()).
      then((movie)=>{
              movie.map((item)=>{
                item.image = 'http://129.204.185.247:8000'+item.image;
              })
              this.movieList1 = movie;
      })
      return 
    }
  },
  
  mounted() {
    var mySwiper = new Swiper('.swiper-container', {
    autoplay:true,
    loop:true
    })
    this.getSwiper();
     this.$http.post("http://129.204.185.247:8000/api/app01/islogin",{
      session_id:store.state.sessionId
    }).then((data)=>{
      // this.$store.state.isLogin = data.body.data.is_login;
      // console.log(this.$store.state.isLogin);
      // console.log(data);
      this.name = store.state.name;
    })
   
  },
  created(){
    // console.log(store);
  }
}
</script>

<style scoped>
  .slide3{
    background: url('http://liangcang-material.alicdn.com/prod/upload/007eb3f6ddb04735b7bcb3bc5d01bcd7.jpg?x-oss-process=image/resize,w_1664/interlace,1/quality,Q_80/sharpen,100') 0% 0%/100% auto no-repeat;
  }
  .slide1{
    background: url('http://liangcang-material.alicdn.com/prod/upload/00271f2751ab41568c6a3a990688dca7.jpg?x-oss-process=image/resize,w_1664/interlace,1/quality,Q_80/sharpen,100') 0% 0%/100% auto no-repeat;
  }
  .slide2{
    background: url('http://liangcang-material.alicdn.com/prod/upload/a61439e30f8f46ec8034689bfa4ef241.jpg?x-oss-process=image/resize,w_1664/interlace,1/quality,Q_80/sharpen,100')0% 0%/100% auto  no-repeat;
  }
  .home{
    min-width: 1000px;
  }
  .home .header {
    height: 50px;
    width: calc(100% - 200px);
    display: flex;
    justify-content:space-between;
    background-color: #000;
    color: #fff;
    line-height: 50px;
    padding: 0 100px;
  }
  .home .header .left {
    display: flex;
    width:250px;
  }
  .home .swiper-slide {
    height: 400px;
  }
  
  .container{
    width: 1020px;
    min-width: 1000px;
    margin: 20px auto 0;
  }
  .center{
    margin-top: 5px;
    border-top: 1px solid rgba(128, 128, 128, .3);
    width: 973px;
  }
  .top span{
    color: rgba(128, 128, 128, .5)
  }
  .top span:first-of-type{
    margin-right: 20px;
  }
  .top span:hover{
    color: black;
  }
  .active{
    color: black !important;
  }
  button{
    background-color: #fff;
    cursor: pointer;
    outline: none;
    border:none;
  }
  .share{
    width: 100px;
    height: 30px;
    border:1px solid black;
    position: absolute;
    right:110px;
    top:50px;
    background-color: #000;
    color: #fff;
    text-align: center;
    line-height: 30px;
    z-index: 2;
    cursor: pointer;
    display: none;
  }
  .right:hover{
    cursor: pointer;
  }
</style>
