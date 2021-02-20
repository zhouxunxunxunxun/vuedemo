<template>
  <el-table
    :data="tableData2"
    style="width: 100%;height:500px;overflow:scroll;"
    :row-class-name="tableRowClassName">
    <el-table-column
      prop="apply_time"
      label="申请日期"
      width="180">
    </el-table-column>
    <el-table-column
      prop="applypass_time"
      label="申请通过日期"
      width="180">
    </el-table-column>
    <el-table-column
      prop="apply_name"
      label="用户名">
    </el-table-column>
    <el-table-column
      prop="apply_password"
      label="密码">
    </el-table-column>
    <el-table-column
      prop="apply_day"
      label="申请天数">
    </el-table-column>
     <el-table-column
      prop="apply_duankou"
      label="端口">
    </el-table-column>
     <el-table-column
      prop="apply_use"
      label="使用途径">
    </el-table-column>
     <el-table-column
      prop="apply_result"
      label="状态">
    </el-table-column>
     <el-table-column
      prop="apply_remark"
      label="理由/备注">
    </el-table-column>
  </el-table>
</template>

<style>
  .el-table .warning-row {
    background: oldlace;
  }

  .el-table .success-row {
    background: #f0f9eb;
  }
</style>

<script>
  export default {
    methods: {
      tableRowClassName({row, rowIndex}) {
        if (rowIndex === 1) {
          return 'warning-row';
        } else if (rowIndex === 3) {
          return 'success-row';
        }
        return '';
      }
    },
    data() {
      return {
        tableData2: []
      }
    },
    created() {
        this.$axios.get("http://222.24.63.61:8080/apply/query_user_apply4").then((res)=>{
            this.tableData2 = res.data;
        })
    },
  }
</script>