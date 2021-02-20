<template>
<div class="home">
     <div class="head">
      <span style="margin-left:3%;font-size:25px;">XUPT-YUN</span>
      <span style="margin-left:25%;font-size:35px;font-family:'华文行楷';"><img src="@/assets/xupt.png" style="width:45px;height:45px;vertical-align:middle">大数据与人工智能自助服务平台</span>
      <div class="user" @click="login()">
        <div v-if="flag" style="font-family:'arial'">你好，{{name}}    退出</div>
        <div v-else>请登录</div>
      </div>
    
    </div>
    
    <ul class="nav">
        <router-link :to="{name:'announce'}" tag="li"><i class="el-icon-message-solid" style="font-size:30px;margin-right:25px;"></i>查看公告</router-link>
        <router-link :to="{name:'resource'}" tag="li"><i class="el-icon-menu" style="font-size:30px;margin-right:25px;"></i>资源申请</router-link>
        <router-link :to="{name:'record'}" tag="li"><i class="el-icon-s-order" style="font-size:30px;margin-right:25px;"></i>申请记录</router-link>
        <router-link :to="{name:'myres'}" tag="li"><i class="el-icon-user-solid" style="font-size:30px;margin-right:25px;"></i>我的资源</router-link>
        <router-link :to="{name:'use'}" tag="li"><i class="el-icon-s-tools" style="font-size:30px;margin-right:25px;"></i>使用说明</router-link>
        <router-link :to="{name:'changepass'}" tag="li"><i class="el-icon-s-opportunity" style="font-size:30px;margin-right:25px;"></i>修改密码</router-link>
      
    </ul>
      <div class="content">
           <router-view></router-view>
      </div>
     
    
</div>

</template>

<script>
export default {
    data() {
        return {
            flag: false,
            name: ''
        }
    },
    methods: {
        login() {
            this.flag = false;
            localStorage.clear("name");
            localStorage.setItem("login",false);
            this.$router.push("/login");
        },
    },
    created() {
        this.flag = true;
        this.name = localStorage.getItem("name");
    },

}
</script>

<style scoped>
    .active{
    background-color:  #000;
    color:#fff;
    border-top: 2px solid #fff;
    }
     *{
        margin:0;
        padding:0;
    }
    ul{
        list-style: none;
        width: 18%;
        
    }
    li{
        height: 70px;
        width: 100%;
        text-align: center;
        line-height: 70px;
        background-color: #eee;
        color: #000;
        border-bottom: 1px solid #fff;
        cursor: pointer;
    }
     .content{
        height: 70%;
        width: 70%;
        /* border:1px solid black; */
        float: right;
        position: absolute;
        top:74px;
        left: calc(20% - 20px);
        
    }
.head{
  width: 100%;
  height: 74px;
  background-color: #000;
  color: #fff;
  line-height: 74px;
  font-size: 20px;
  font-family: '宋体';
  /* padding-left: 40px; */
}
.user{
  /* float:right; */
  /* color:aqua; */
  /* border:1px solid red; */
  width: 300px;
  height: 74px;
  float: right;
  text-align: center;
  line-height: 74px;
  cursor: pointer;
}
</style>