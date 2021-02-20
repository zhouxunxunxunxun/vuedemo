<template>

  <div class="user">
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
      <div class="right">{{name}} <button @click="click3">注销</button></div>
    </div>
    <!-- <div class="share" @mouseleave="leave" @click="click4">个人中心</div> -->
    <div class="wrapper">
      <div class="head">用户中心</div>
        <div class="contain">
            <div class="left1">
              <div class="img"></div>
              <div class="msg">
                  Username：{{name}}                
              </div>
              <div class="msg">
                  Email:{{email}}
              </div>
            </div>
            <div class="center">
            </div>
            <div class="tb">
            <h2 style="margin:20px 20px;">用户已购票信息：</h2>
            <table>
              <thead>
                <th>剧目名称</th>
                <th>演出厅</th>
                <th>开始时间</th>
                <th>票价</th>
                <th>座位信息</th>
              </thead>
              <tbody>
                <tr v-for="item in list" :key="item.tic_id">
                  <td>{{item.play_name}}</td>
                  <td>{{item.studio}}号厅</td>
                  <td>{{item.start_time}}</td>
                  <td>{{item.price}}￥</td>
                  <td>{{item.row}}排{{item.col}}座</td>
                </tr>
              </tbody>
            </table>
            </div>
        </div>
    </div>
  </div>

</template>

<script>
// import "bootstrap"
// import "bootstrap/dist/css/bootstrap.css"
import store from '@/modules/login.js'
// import { mapState } from 'vuex'
export default {
  data() {
    return {
      list:[],
      name:'',
      email:''
    }
  },
  // beforeRouteEnter (to, from, next) {
  //   next(vm => {
  //     if(vm.$store.state.userLogin == true){
  //       next({name:'user'});
  //     }else{
  //       next({name:'login'});
  //     }
  //   })
  // },
  computed:{
    // ...mapState(['name','sessionId','email'])
  },
  methods:{
    click3(){
      this.$http.get("http://129.204.185.247:8000/api/app01/logout").then((data)=>{
        localStorage.removeItem("Flag");
        this.$router.push("/login");
      })
    },
  },
  created(){
    // console.log(this.$store.state.userId);
    this.$http.post("http://129.204.185.247:8000/api/app01/getuserticket",{
      user_id:store.state.userId
    }).then((data)=>{
      // console.log(data);
      this.list = data.body;
      // console.log(this.list); 
    })
  },
   mounted() {
     this.$http.post("http://129.204.185.247:8000/api/app01/islogin",{
      session_id:store.state.sessionId
    }).then((data)=>{
      // this.$store.state.isLogin = data.body.data.is_login;
      // console.log(this.$store.state.isLogin);
      this.name = store.state.name;
      this.email = store.state.email;
    })
  }
}
</script>

<style scoped>
@keyframes mohu{
  /* from{}
  to{} */
  from{
    opacity: 0;
    filter:blur(60px)
  }
  to{
    opacity: 0.4;
    filter:blur(15px);
  }
}
  *{
    margin:0;
    padding:0;
  }
  .user{
    min-width: 1000px;
    /* background-color: #ccc; */
  }
  .user .header {
    height: 50px;
    width: calc(100% - 200px);
    display: flex;
    justify-content:space-between;
    background-color: #000;
    color: #fff;
    line-height: 50px;
    padding: 0 100px;
  }
  .user .header .left {
    display: flex;
    width:250px;
  }
  button{
    background-color: #fff;
    cursor: pointer;
    outline: none;
    border:none;
    width: 50px;
  } 
  .right:hover{
    cursor: pointer;
  }
  .wrapper{
            width: 900px;
            height: 600px;
            border: 1px solid black;
            display: flex;
            flex-direction: column;
            margin:10px auto;
    }
  .head{
            flex:0 0 60px;
            background-color: #000;
            box-sizing: border-box;
            border:1px solid #fff;
    }
    .left1{
      /* background-color: #000; */
            box-sizing: border-box;
            border:1px solid #fff;
            /* color: #000; */
            flex:0 0 25%;
            background-image: url('../assets/image/1.jpeg');
         /* animation: mohu 3s forwards ; */
        /* z-index: -1; */
            
    }
    .contain{
            flex:1 1 auto;
            display: flex;
      }
     .center{
            flex:1 1 auto;
            background-image: url('../assets/image/1.jpeg');
            animation: mohu 3s forwards ;
      }
  .head{
    text-align: center;
    color: #fff;
    font-size: 30px;
    font-weight: bold;
    line-height: 60px;
  }
  .left1 .img{
    width: 100px;
    height: 100px;
    border:1px solid #000;
    border-radius: 50%;
    margin:30px auto;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-image: url('../assets/image/1.jpeg');
    /* z-index: 999; */
  }
  .left1 .msg{
    color: #000;
    margin: 15px auto;
    width: 200px;
    text-align: center;
    height: 40px;
    /* z-index: 999; */
  }
  .center{
    background-color:#fff;
    width: 70%;
  }
  table{
    /* color: #fff; */
    min-width: 400px;
    /* margin:40px auto; */
   /* max-width:600px; */
   width:600px; 

    /* background-color: #fff; */
    
}
  td{
    text-align: center;
    height: 40px;
  }
  .tb{
     position: absolute;
    top:15%;
    left: 38%;
    overflow: auto;
    height: 530px;
  }
  .tb::-webkit-scrollbar{
        display: none;
    }
</style>