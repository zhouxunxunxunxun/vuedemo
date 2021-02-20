<template>
<div class="myres">
    <div class="title">已通过的资源类型:</div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="类型一" name="first">
      <myres1></myres1>
    </el-tab-pane>
    <el-tab-pane label="类型二" name="second">
      <myres2></myres2>
    </el-tab-pane>
    <el-tab-pane label="类型三" name="third">
      <myres3></myres3>
    </el-tab-pane>
    <el-tab-pane label="类型四" name="fourth">
      <myres4></myres4>
    </el-tab-pane>
  </el-tabs>
    
</div>

</template>

<script>
import myres1 from '@/components/Myres1.vue'
import myres2 from '@/components/Myres2.vue'
import myres3 from '@/components/Myres3.vue'
import myres4 from '@/components/Myres4.vue'
export default {
   components:{
     myres1,
     myres2,
     myres3,
     myres4
   },
   data() {
      return {
        activeName: 'first'
      };
    },
    methods: {
    }
  }

</script>

<style scoped>
  
  .myres{
        width: 80%;
        height: 500px;
        /* border:1px solid black; */
         margin-top: 5%;
       margin-left: 10%;
       overflow-y: scroll;
    }
    .title{
      font-size: 20px;
      margin-bottom: 10px;
    }
</style>