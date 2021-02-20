<template>
  <div class="manager">
    <div class="head">
            <span style="margin-left:3%;font-size:25px;">XUPT-YUN</span>
      <span style="margin-left:25%;font-size:35px;font-family:'华文行楷';"><img src="@/assets/xupt.png" style="width:45px;height:45px;vertical-align:middle">大数据与人工智能自助服务平台</span>
      <div class="user" @click="login()">
        <div v-if="flag" style="font-family:'arial'">你好,管理员{{name}}  退出</div>
        <div v-else>请登录</div>
      </div>
    </div>
     <ul class="nav">
        <router-link :to="{name:'user'}" tag="li"><i class="el-icon-s-custom" style="font-size:30px;"></i>用户管理</router-link>
        <router-link :to="{name:'gonggao'}" tag="li"><i class="el-icon-message-solid" style="font-size:30px;"></i>公告管理</router-link>
        <router-link :to="{name:'resmanager'}" tag="li"><i class="el-icon-s-order" style="font-size:30px;"></i>资源类型管理</router-link>
        <router-link :to="{name:'zhuji'}" tag="li"><i class="el-icon-s-platform" style="font-size:30px;"></i>主机信息管理</router-link>
        <router-link :to="{name:'resuser'}" tag="li"><i class="el-icon-circle-plus" style="font-size:30px;"></i>资源账户开通</router-link>
        <router-link :to="{name:'jiqun'}" tag="li"><i class="el-icon-question" style="font-size:30px;"></i>集群运行信息</router-link>
        <router-link :to="{name:'zhujipaidui'}" tag="li"><i class="el-icon-s-operation" style="font-size:30px;"></i>主机排队管理</router-link>
        <router-link :to="{name:'search'}" tag="li"><i class="el-icon-s-data" style="font-size:30px;"></i>查询与统计</router-link>
        <router-link :to="{name:'department'}" tag="li"><i class="el-icon-s-cooperation" style="font-size:30px;"></i>部门管理</router-link>
        <router-link :to="{name:'changepassmanager'}" tag="li"><i class="el-icon-s-opportunity" style="font-size:30px;"></i>修改密码</router-link>    
    </ul>
      <div class="content">
           <router-view></router-view>
      </div>


  </div>
  
</template>

<script>

export default {
  
    methods: {
       login(){
      this.flag = false;
      localStorage.setItem("login",false);
      localStorage.clear("manager");
      this.$router.push("/login");
      },
    },
    created() {
        this.flag = true;
        this.name = localStorage.getItem("manager");
    },
}
</script>
  
<style scoped>
    *{
        margin:0;
        padding:0;
    }
     .active{
    background-color:  #000;
    color:#fff;
    border-top: 2px solid #fff;
    }
    ul{
        list-style: none;
        width: 15%;
        
    }
    i{
      float: left;
      line-height: 60px;
      padding-left: 40px;
    }
    li{
        height: 60px;
        width: 100%;
        text-align: center;
        line-height: 60px;
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

  width: 400px;
  height: 74px;
  float: right;
  text-align: center;
  line-height: 74px;
  cursor: pointer;
}

</style>