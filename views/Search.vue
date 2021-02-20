<template>
    <div class="search">
        <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="资源统计情况" name="first">
      <echarts1></echarts1>
      <echarts2></echarts2>
    </el-tab-pane>
    <el-tab-pane label="个人用户查询" name="second">
      <search></search>
    </el-tab-pane>
    <el-tab-pane label="资源申请记录" name="third">
      <resourcerecord></resourcerecord>
    </el-tab-pane>
  </el-tabs>
    </div>
    

</template>

<script>
import echarts1 from '@/components/echarts1.vue'
import echarts2 from '@/components/echarts2.vue'
import search from '@/components/search.vue'
import resourcerecord from '@/components/resourcerecord.vue'
export default {
    components:{
         echarts1,
       echarts2,
       search,
       resourcerecord
    },
    data() {
      return {
        activeName: 'first',
        flag:false,
        name:''
      }
    },
}
</script>

<style scoped>
.search{
    width: 100%;
    height: 550px;
    margin-top: 30px;
}
</style>