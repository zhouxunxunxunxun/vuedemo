<template>
<div class="myres">
    <div class="title">主机排队情况:</div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="Windows排队情况" name="first">
      <myres1></myres1>
    </el-tab-pane>
    <el-tab-pane label="Linux排队情况" name="second">
      <myres2></myres2>
    </el-tab-pane>
  </el-tabs>
    
</div>

</template>

<script>
import myres1 from '@/components/linux.vue'
import myres2 from '@/components/windows.vue'
export default {
   components:{
     myres1,
     myres2,
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