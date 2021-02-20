<template>
    <div>
    <div class="manager">
    <div class="header">
      <div class="center">
        <div class="logo">
          Budapest
        </div>
        <ul class="nav">
          <!-- 自定义标签 tag = xxx -->
          <router-link tag="li" :to="{name:'opera'}">剧目管理</router-link> 
          <router-link tag="li" :to="{name:'perform'}">安排演出计划</router-link>
          <router-link tag="li" :to="{name:'scheme'}">管理演出厅</router-link>
          <router-link tag="li" :to="{name:'ticket'}">查询演出票</router-link> 
          <router-link tag="li" :to="{name:'sell'}">分析销售数据</router-link>
        </ul>
      </div>
    </div>
    </div>
    <router-view></router-view>
    </div>

</template>

<script>
import "bootstrap"
import "bootstrap/dist/css/bootstrap.css"
export default {
    
}
</script>

<style scoped>
.logo{
    color:#fff;
    font-size: 20px;
    font-weight: bold;
}
.active{
    border-bottom: 2px solid #fff;
}
.header{
  background-color: #000;
  line-height:70px;
  padding-bottom:2px;
}
.header .center{
  display: flex;
  justify-content: space-between;
  width:1300px;
  margin:0 auto;
}
.header .center img{
  width:80px;
  height:50px;
  vertical-align: middle;
}
.header .center .logo{
  line-height:70px;
}
.header .center ul{
  display: flex;
}
.header .center ul li{
  color: #fff;
  padding:0 30px;
  cursor: pointer;
}
.view{
  width: 1000px;
  margin:0 auto;
  padding: 40px;
  min-height:500px;
}

</style>