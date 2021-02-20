<template>
<div class="myres">
    <div class="title">未通过的资源:</div>
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
import myres1 from '@/components/restable1.vue'
import myres2 from '@/components/restable2.vue'
import myres3 from '@/components/restable3.vue'
import myres4 from '@/components/restable4.vue'
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
        width: 100%;
        max-height: 600px;
    }
    .title{
      font-size: 20px;
      margin-bottom: 10px;
    }
</style>