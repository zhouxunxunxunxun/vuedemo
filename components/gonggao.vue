<template>
     <div class="wrap">
      <div class="announce"><i class="el-icon-s-comment"></i>通知公告</div>

      <ul>
        <li v-for="(item,index) in list" :key="item.announcement_id" @click="goto(index)">
         
          <div class="time">{{item.announcement_time}}</div>
          <div class="name"> <i class="el-icon-position" style="font-size:20px;"></i>  {{item.announcement_name}}</div>
        </li>
      </ul>
    </div>

</template>

<script>
export default {
    data() {
      return {
        list:[],
      }
    },
    created() {
      this.$axios({
        url:'http://222.24.63.61:8080/announcement/query',
        methods:'get'
      }).then((res)=>{
        this.list = res.data;
      })
    },
    methods: {
      goto(id){
        this.$router.push('/announcecontent?index='+id);
      }
    },
}
</script>

<style scoped>
    /*样式的话可以写*/
    *{
      list-style:none;
    }
  .wrap {
        /* overflow-y: scroll; */
        overflow-x:hidden;
        /* color: #005bbe; */
        width: 75%;
        height:400px;
        border:4px solid #000;
        margin-left: 15%;
        margin-top: 5%;
     }
    .wrap .announce{
      font-size: 30px;
      width: 100%;
      height: 60px;
      border-bottom: 2px solid #000;
      line-height: 60px;
      text-align: center;
      
    }
    ul{
      font-size: 20px;
      /* border:1px solid black; */
    }
    ul li{
      margin:20px 0;
      cursor: pointer;
      height: 40px;
      border-bottom: 1px solid #ccc;
      width: 100%;
    }
    ul li .name:hover{
      color: #005bbe;
      border-bottom: 1px solid #ccc;
    }
  li .time{
    float:right;
    color: #005bbe;
    margin-right: 10%;
  }
  .name{
    float:left;
    margin-left: 5%;
  }
 
</style>