<template>
    <div class="user">
    <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="审核注册用户" name="first" >
            <enroll></enroll>
        </el-tab-pane>
        <el-tab-pane label="停用用户" name="second">
            <user></user>
        </el-tab-pane>
  </el-tabs>
    </div>

</template>

<script>
import enroll from '@/components/enroll.vue'
import user from '@/components/user.vue'
export default {
     components:{
          enroll,
        user,
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
.user{
    width: 100%;
    height: 550px;
    /* border:1px solid black; */
    line-height: 30px;
    margin-top: 30px;
}
</style>