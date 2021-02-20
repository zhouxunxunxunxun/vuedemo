<template>
    
    <div class="search">
        查询：
        <el-input v-model="input" placeholder="请输入姓名" style="width:400px;margin-right:20px;margin-bottom:30px;"></el-input>
        <el-button icon="el-icon-search" circle @click="search()"></el-button>
        <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      fixed
      prop="apply_style"
      label="申请类型"
      width="150">
    </el-table-column>
    <el-table-column
      prop="apply_time"
      label="申请时间"
      width="120">
    </el-table-column>
    <el-table-column
      prop="applypass_time"
      label="通过时间"
      width="160">
    </el-table-column>
    <el-table-column
      prop="apply_system"
      label="资源账户名"
      width="120">
    </el-table-column>
    <el-table-column
      prop="apply_name"
      label="账户名"
      width="120">
    </el-table-column>
    <el-table-column
      prop="apply_password"
      label="密码"
      width="120">
    </el-table-column>
    <el-table-column
      prop="paidui"
      label="排队"
      width="120">
    </el-table-column>
     <el-table-column
      prop="apply_duankou"
      label="申请端口"
      width="120">
    </el-table-column>
     <el-table-column
      prop="apply_remark"
      label="拒绝理由/备注"
      width="400">
    </el-table-column>
    <el-table-column
      fixed="right"
      label="状态"
      width="100"
      prop="apply_result">
    </el-table-column>
  </el-table>
    </div>

</template>

<script>
export default {
  data() {
    return {
      input: '',
       tableData: []
    }
  },
  methods: {
      search(){
         
         this.$axios.post("http://222.24.63.61:8080/apply/query_userapply",{user_name:this.input}).then((res)=>{
             this.tableData = res.data;
         })
      },
  },

}
</script>

<style scoped>

</style>