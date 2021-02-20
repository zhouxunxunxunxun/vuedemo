<template>
<div class="record">
    <el-table
    :data="tableData"
    style="width: 100%;"
    :default-sort = "{prop: 'date', order: 'descending'}"
    >
    <el-table-column
      prop="apply_time"
      label="申请日期"
      sortable
      width="180">
    </el-table-column>
    <el-table-column
      prop="apply_style"
      label="资源类型"
      sortable
      width="200">
    </el-table-column>

     <el-table-column
      prop="apply_result"
      label="申请结果"
      width="180">
    </el-table-column>
    <el-table-column
      prop="apply_name"
      label="账户名"
      width="180">
    </el-table-column>
        <el-table-column
                prop="apply_remark"
                label="备注/拒绝理由">
        </el-table-column>

  </el-table>
</div>

</template>

<script>
export default {
     data() {
      return {
        tableData: []
      }
    },
    methods: {
      formatter(row, column) {
        return row.apply_name;
      },
      formlatter(row, column) {
        return row.apply_result;
      }
    },
    created() {
        this.$axios.get("http://222.24.63.61:8080/apply/query_apply").then((res)=>{
        // console.log(res.data);
          this.tableData = res.data;
      })
    },
}
</script>

<style scoped>
    .record{
        width: 80%;
        height: 500px;
         /*border:1px solid black;*/
         margin-top: 5%;
       margin-left: 10%;
    
       overflow-y: scroll;
    }
</style>