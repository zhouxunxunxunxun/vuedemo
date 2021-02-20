<template>
  <el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
    <el-tab-pane label="类型一" name="first">
        <type1></type1>
    </el-tab-pane>
    <el-tab-pane label="类型二" name="second">
      <type2></type2>
    </el-tab-pane>
    <el-tab-pane label="类型三" name="third">
      <type3></type3>
    </el-tab-pane>
    <el-tab-pane label="类型四" name="fourth">
      <type4></type4>
    </el-tab-pane>
  </el-tabs>
</template>
<script>
import type1 from '@/components/type1'
import type2 from '@/components/type2'
import type3 from '@/components/type3'
import type4 from '@/components/type4'
  export default {
    components:{
        type1,
        type2,
        type3,
        type4
    },
    data() {
      return {
        activeName2: 'first'
      };
    },
    methods: {
    },
    
  };
</script>